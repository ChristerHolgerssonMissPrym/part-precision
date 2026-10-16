# Designunderlag för Part Precision

Källa: https://partprecision.se/sv/ • Observerat 16 oktober 2026.
Detta är ett projektunderlag baserat på webbplatsen, inte en officiell grafisk manual.

## Verifierat från webbplatsen

### Färgpalett

Följande åtta värden finns i webbplatsens CSS-palett:

| Färg | Hex | Tillämpning |
| --- | --- | --- |
| Mörkgrön | #004B45 | Identitetsbärande mörka fält och knappkonturer |
| Mintgrön | #76C1A0 | Logotypsymbol och interaktiva accenter |
| Vit | #FFFFFF | Text på mörka fält och ljusa ytor |
| Ljus neutral | #F0F2F1 | Tillgänglig palettfärg för ljusa ytor |
| Ljus grågrön | #CBD6D6 | Tillgänglig kompletterande palettfärg |
| Grå | #707070 | Sekundär text och neutrala element |
| Röd | #E02128 | Förekommer bland annat i introduktionsrubrik och knapp-hover |
| Mörkröd | #70150F | Kompletterande färg i webbplatsens palett |

Palettförekomst betyder inte att alla färger ska användas i varje material. Mörkgrönt, mintgrönt och vitt bär projektets huvudsakliga uttryck.

### Typografi

Poppins är hemsidans primära typsnitt. Reservkedjan i CSS är Arial, Helvetica, sans-serif.
Följande värden har kontrollerats på synliga element i webbläsaren:

| Element | Storlek | Vikt | Radavstånd |
| --- | --- | --- | --- |
| Hero på granskad bred vy | 82 px | 400 | 119,72 px |
| Innehållsrubrik H2 | 36 px | 300 | 43,2 px |
| Affärsområdesrubrik H3 | 24 px | 300 | 28,8 px |
| Ingress i hero | 18 px | 400 | 30,6 px |
| Löptext i affärsområden | 14 px | 400 | 23,8 px |

Storlekarna är observationer i en viss visning, inte fasta mått för alla skärmar eller dokument. Webbplatsens generella tema anger även andra rubrikstorlekar och vikt 200. Använd de faktiskt synliga rubrikvikterna 300–400 som främsta referens.

Poppins-fontfiler är inte inkluderade. Vid tidigare hämtning gick de inte att exportera. Ange inte att typsnittet är inbäddat eller installerat utan kontroll.

### Komposition och bildspråk

Startsidan har ett stort foto-/videofält med grön toning, vit luftig rubrik och mintgrön P-symbol. Innehållet växlar mellan ljusa partier och mörka fotografiska fält. Det finns tunna knappkonturer med sneda sidor, relativt glest satta versaler och hover i mintgrönt eller rött beroende på sektion.

Utgå från autentiska lokaler, produktion och medarbetare. Sparade foton visar produktionsmiljö, arbete vid dator/maskin samt företagets exteriör. Bilderna är fotograferade verksamhetsbilder, inte bilder på specifika implantat; använd dem inte som bevis för en viss produktmodell.

## Föreslagna anpassningar för projektmaterial

Detta är designval för projektet, inte påståenden om en officiell manual:

- A4: cirka 18–22 mm sidmarginal, rubrik 28–36 pt, ingress 13–16 pt och brödtext 10,5–12 pt. Lätta rubriker där typsnittet tillåter det.
- Presentationer: breda bildytor, en tydlig huvudpoäng per bild och stor typografi med tillräcklig kontrast.
- LinkedIn: kort huvudbudskap och tydlig avsändare; testa läsbarhet i mobilstorlek.
- Använd mörkgrön text på ljusa ytor eller vit text på mörkgrönt. Mintgrönt lämpar sig främst för accenter och bakgrund, inte liten text på vitt.
- Lämna fri yta runt logotypen motsvarande minst ungefär en fjärdedel av symbolens höjd. Detta är en arbetsregel tills officiella logotypregler finns.
- Tidigare ljusgrön svarsruta #EAF4EF är en lokal layoutanpassning. Den ingår inte bland de åtta verifierade palettfärgerna; föredra #F0F2F1 vid strikt palettföljsamhet.
- Tidigare Word-filer använder Arial och tyngre rubriker som dokumentanpassning. De ska inte övertrumfa Poppins och lättare rubriker i denna profil.

## Tonalitet

Svenska som grund i detta projekt. Skriv ur Part Precisions perspektiv och gör nästa handling tydlig. Använd företagets engelska signatur “We create quality of life” när den har en tydlig plats. Blanda inte kundernas tillverkningsbehov med en uppmaning att köpa annonsplats om uppdraget gäller kundförsäljning.

## Sparade resurser

- `assets/logo-horizontal-light.png` — original webbversion, 400 × 165 px, mintgrön symbol och vit text.
- `assets/logo-symbol-mint.png` — original P-symbol, 100 × 100 px.
- `assets/photo-production.jpg` — produktion och maskinmiljö.
- `assets/photo-collaboration.jpg` — medarbetare vid dator/maskin.
- `assets/photo-building.jpg` — företagets exteriör.
- `assets/tokens.css` — återanvändbara färger, typsnittskedja och föreslagna digitala komponentvärden.
- `references/website-css-excerpt.txt` — exakt utdrag av relevanta variabeldeklarationer ur webbplatsens CSS.
- `references/sources.json` — källadresser, datum och begränsningar.
