// Adds crop marks and PDF page boxes to the print version of the brochure.
// Input: PDF with 216 x 303 mm pages (A4 + 3 mm bleed), exported from broschyr.html?tryck.
// Output: each page on a 236 x 323 mm sheet with crop marks in the slug,
//         TrimBox = A4 and BleedBox = A4 + 3 mm, as printers expect.
// Usage: node skarmarken.js <in.pdf> <out.pdf>   (needs: npm install pdf-lib@1.17.1)
const fs = require('fs');
const { PDFDocument, StandardFonts, cmyk } = require('pdf-lib');

const mm = v => v * 72 / 25.4;
const BLEED = 3, SLUG = 10;                 // mm
const TRIM_W = 210, TRIM_H = 297;
const OFF = SLUG + BLEED;                   // trim offset from sheet edge
const SHEET_W = TRIM_W + 2 * OFF, SHEET_H = TRIM_H + 2 * OFF;
const REGISTRATION = cmyk(1, 1, 1, 1);      // prints on every separation

(async () => {
  const [inPath, outPath] = process.argv.slice(2);
  const src = await PDFDocument.load(fs.readFileSync(inPath));
  const out = await PDFDocument.create();
  const font = await out.embedFont(StandardFonts.Helvetica);
  const pages = await out.embedPdf(src, src.getPageIndices());

  pages.forEach((embedded, i) => {
    const page = out.addPage([mm(SHEET_W), mm(SHEET_H)]);
    page.drawPage(embedded, { x: mm(SLUG), y: mm(SLUG), width: mm(TRIM_W + 2 * BLEED), height: mm(TRIM_H + 2 * BLEED) });

    page.setBleedBox(mm(SLUG), mm(SLUG), mm(TRIM_W + 2 * BLEED), mm(TRIM_H + 2 * BLEED));
    page.setTrimBox(mm(OFF), mm(OFF), mm(TRIM_W), mm(TRIM_H));

    // Crop marks: start outside the bleed so they never print on the trimmed page.
    const line = (x1, y1, x2, y2) => page.drawLine({
      start: { x: mm(x1), y: mm(y1) }, end: { x: mm(x2), y: mm(y2) }, thickness: 0.25, color: REGISTRATION,
    });
    const L = OFF, R = OFF + TRIM_W, B = OFF, T = OFF + TRIM_H;
    for (const y of [B, T]) { line(0, y, SLUG, y); line(SHEET_W - SLUG, y, SHEET_W, y); }
    for (const x of [L, R]) { line(x, 0, x, SLUG); line(x, SHEET_H - SLUG, x, SHEET_H); }

    page.drawText(`Part Precision – broschyr A4 · sida ${i + 1} av ${pages.length} · 3 mm utfall`, {
      x: mm(L + 4), y: mm(3.5), size: 6, font, color: cmyk(0, 0, 0, 1),
    });
  });

  out.setTitle('Part Precision – broschyr, tryckoriginal A4 med 3 mm utfall');
  out.setProducer('kalla/skarmarken.js (pdf-lib)');
  fs.writeFileSync(outPath, await out.save());
  console.log(`wrote ${outPath}: ${pages.length} pages, sheet ${SHEET_W} x ${SHEET_H} mm, trim ${TRIM_W} x ${TRIM_H} mm`);
})();
