# Källfiler

Förslag till Part Precision: broschyr, landningssida och LinkedIn-material.

## Mappar

- `index.html` – förslagssidan som kunden öppnar.
- `material/` – det som levereras: broschyrens PDF- och Word-filer, landningssidan, texter och anvisningar.
- `bilder/` – foton och logotyper (högsta upplösning från partprecision.se) samt förhandsbilder till förslagssidan.
- `kalla/` – källfiler: `broschyr.html` (källa till båda PDF-filerna), `skarmarken.js` (skärmärken till tryckoriginalet) och `tokens.css` (färger och typsnitt).

Texterna bygger på partprecision.se/sv/ (kontrollerad 19 oktober 2026). Att förslaget publiceras betyder inte att materialet är publicerat på partprecision.se eller LinkedIn.

## Publicering med GitHub Pages

I repots Settings → Pages: välj Deploy from a branch, main och / (root). `.nojekyll` och `robots.txt` ska ligga kvar i roten. Ingen byggprocess krävs.

## Exportera broschyren

Export kräver Google Chrome och internet (Poppins hämtas från Google Fonts). Kör kommandona från projektmappen.

Digital PDF (A4, klickbara länkar):

```
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --no-pdf-header-footer --run-all-compositor-stages-before-draw --virtual-time-budget=20000 --print-to-pdf="D:\work\part-precision\material\broschyr-digital.pdf" "file:///D:/work/part-precision/kalla/broschyr.html"
```

Tryckoriginal (A4 + 3 mm utfall, skärmärken):

1. Exportera sidorna med utfall (`?tryck` ger 216 x 303 mm-sidor):

```
"C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --no-pdf-header-footer --run-all-compositor-stages-before-draw --virtual-time-budget=20000 --print-to-pdf="D:\work\part-precision\kalla\tryck-utfall.pdf" "file:///D:/work/part-precision/kalla/broschyr.html?tryck"
```

2. Lägg till skärmärken och TrimBox/BleedBox (kräver Node.js och `npm install pdf-lib@1.17.1` i `kalla/`):

```
node kalla/skarmarken.js kalla/tryck-utfall.pdf material/broschyr-tryckoriginal.pdf
```

Ta bort `kalla/tryck-utfall.pdf` efteråt. Kontrollera att Poppins är inbäddat (Acrobat: Arkiv → Egenskaper → Teckensnitt) och att utfallet syns i Acrobats utdataförhandsvisning.
