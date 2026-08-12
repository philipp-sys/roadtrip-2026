# Reisedashboard 2026 — Finales Briefing: Alpine-Editorial-Redesign

## Kontext
`philipp-sys/roadtrip-2026` (privates Repo) zeigt aktuell live unter
`https://roadtrip-2026.philipp-51c.workers.dev/` bereits die korrekten
Reisedaten (Lenggries → Valdidentro, 11.–26.09.2026), aber noch im alten
"Aerospace HUD"-Design (Bebas Neue/Space Mono, Cyan/Dark) der vorherigen
Bretagne-Reise. `style.css` enthält zusätzlich ~300 Zeilen totes CSS für
Chat/Notizen-Features, die bereits aus `index.html`/`data.js` entfernt wurden.

Design-Review + Shotgun-Prozess sind durchlaufen. Gewählte Richtung:
**Konzept „Alpine Editorial"** — Referenz-Mockup liegt bei als
`variante-2-alpine-editorial.html` (im Chat geteilt, bitte ins Repo unter
`design-reference/` legen, damit Claude Code den exakten Ausgangspunkt hat).

## Ziel
Vollständiges Re-Skin auf das Alpine-Editorial-Design, responsive für Desktop
UND Mobile, mit allen unten stehenden Datenergänzungen. Ergebnis: eine
Reise-App, die sich wie ein Reisemagazin anfühlt, nicht wie ein Cockpit-HUD.

## Design-System „Alpine Editorial" (aus dem bestätigten Mockup)

**Farben:**
```css
--paper:#EFEDE5; --paper2:#E7E3D8; --ink:#1C1B17; --ink-soft:#5B594F;
--pine:#2E4A3B; --pine-deep:#1C2F26;      /* Etappe 1 / Akzent A */
--amber:#B4842E; --amber-deep:#7A5A1E;    /* Etappe 2 / Akzent B */
--rule: rgba(28,27,23,0.14);
```
Für weitere Etappen (falls später mehr dazukommen): Farbfamilie fortsetzen,
nicht auf Cyan/Neon zurückfallen.

**Typografie:** Fraunces (Display, Editorial-Serife, für Headlines/Zitate) +
Inter (Fließtext) + IBM Plex Mono (Fakten/Labels/Daten, in Großbuchstaben mit
Letter-Spacing). Genau wie im Mockup — keine vierte Schriftfamilie einführen.

**Layout-Signatur:** Magazin-Spread pro Etappe — großformatiges Foto (heute
Platzhalter-Verlauf, siehe Anforderung 6) mit übergroßem Orts-Namen in
Fraunces, der über die Fotokante ragt; Fakten-Grid daneben/darunter. Auf
Desktop zweispaltig (Foto/Info nebeneinander, jede zweite Etappe gespiegelt),
auf Mobile gestapelt (Foto oben, Info darunter) — exakt wie im Mockup
(`@media (max-width:760px)`-Regel übernehmen).

## Anforderungen

1. **Re-Skin komplett:** `style.css` durch das Alpine-Editorial-System
   ersetzen. Totes Chat-/Notizen-CSS (alle Klassen `.chat-*`, `.msg*`,
   `.quick-add*`, `.form-*`, `.notiz*`, `.chip-btn`, `.typing-wrap`,
   `.send-btn`) komplett entfernen, nicht nur ungenutzt lassen.

2. **Responsive:** Mindestens 2 Breakpoints (≤760px Mobile, >760px
   Desktop/Tablet). Desktop nutzt die Spread-Zweispaltigkeit aus dem Mockup,
   `max-width` fürs Gesamt-Layout (siehe `.wrap{max-width:1180px}` im
   Mockup) statt vollflächig zu strecken.

3. **Startpunkt Zuhause ergänzen** (nur weil Repo privat ist):
   - Adresse: `Im Barm 1a, 30916 Isernhagen`
   - Als Etappe 0 / Routen-Ursprung im Route-Strip führen, NICHT als
     eigene buchbare Etappen-Karte (kein Check-in/Buchung dafür)
   - km/Std nach Lenggries **live routen** (z. B. Google Maps Directions),
     nicht schätzen. Grobe Plausibilitätsprüfung: ca. 640–680 km, 6–6,5 Std.
     (Route vermutlich A7/A9 Richtung München, dann A95/B13 nach Lenggries)

4. **Check-in- & WLAN-Daten ergänzen** (`data.js`, Etappe 1):
   ```js
   checkin: 'Self Check-in per Schlüsselsafe · Code: 7102 (Kellertreppe, Hebel nach vorn öffnen)',
   wlan: { ssid: 'MagentaWLAN-KM8G', passwort: '38168445158739311783' },
   ```
   Da die deployte Seite ohne Login öffentlich per URL erreichbar ist
   (Repo-Privatsphäre schützt nur den Quellcode, nicht das Deployment):
   diese Felder nur rendern, aber nicht in Suchmaschinen-Meta/OG-Tags
   auftauchen lassen (kein `<meta description>` mit diesen Werten).

5. **Adresse/Koordinaten Etappe 1 korrigieren** (bereits in `data.js`
   vorhanden, bitte nicht überschreiben mit alten Werten):
   ```js
   adresse: 'Günther Eich-Str. 7, 83661 Lenggries',
   lat: 47.68495784861855, lng: 11.581849325361059,
   ```

6. **Fotos recherchieren:** Für beide Etappen passende, lizenzlich nutzbare
   Fotos suchen (Lenggries/Isarwinkel/Brauneck für Etappe 1; Valdidentro/
   Ortlergruppe/Bormio-Tal für Etappe 2) und die Verlaufs-Platzhalter im
   Mockup (`.photo.pine` / `.photo.amber`) ersetzen. Foto als Hintergrund
   mit dem bestehenden Dunkel-Gradient-Overlay kombinieren, damit der weiße
   Ortsname darüber lesbar bleibt (Kontrast prüfen, WCAG AA für den Text).

7. **Highlights Etappe 1 aus den PDFs kuratieren** (Restaurant-Tipps.pdf +
   Wander-und-Einkehrtipps.pdf, Inhalte liegen im Chat vor). Auswahlkriterien:
   - Alle Wanderungen mit „keine Anfahrt" (Denkalm, Geierstein) **vollständig**
     übernehmen — das ist der fußläufige Kern, um den es bei dieser Reise
     durchgehend ging
   - Dazu 3–4 weitere Touren aus „bis 6 km" mit Einkehrmöglichkeit
   - Bei Restaurants: die 5–6 nächstgelegenen (≤2 km) plus maximal 2
     "besondere" Empfehlungen aus der Fine-Dining-Liste
   - Rest der PDF-Inhalte bleibt zusätzlich in `HIGHLIGHTS_EINGANG.md`
     als Nachschlage-Fundus (nicht komplett in die UI übernehmen — das
     würde die Spread-Karte überladen, Editorial-Prinzip ist Auswahl statt
     Vollständigkeit)
   - Etappe 2 (Valdidentro): bleibt vorerst leer, keine Quelle vorhanden.
     Kein Web-Research für Etappe-2-Highlights im Rahmen dieses Tickets.

8. **Kalender-Sektion im Editorial-Stil:** Statt Technik-Zeitleiste (Konzept
   3, verworfen) eine schlichte, nummerierte Liste im Look eines
   Magazin-Inhaltsverzeichnisses: Datum in IBM Plex Mono links, Ereignis in
   Inter rechts, dünne Trennlinie (`--rule`) zwischen Einträgen. Gleiche
   5 Einträge wie bisher (Anreise, 2× Ismaning, Etappenwechsel, Heimreise).

9. **Karte-Tab im Editorial-Stil:** Bestehenden Google-Maps-Embed
   beibehalten, aber in einen Rahmen mit Bildunterschrift setzen
   ("Abb. 1 — Streckenverlauf"), passend zur Magazin-Anmutung. Darunter die
   Adressenliste als schlichtes Verzeichnis (kein Icon-Grid).

## Akzeptanzkriterien
- [ ] Keine Cyan-/HUD-Farben, keine Scanline-/Pulse-Animationen mehr im CSS
- [ ] Kein totes Chat-/Notizen-CSS mehr vorhanden
- [ ] Seite funktioniert und sieht bewusst gestaltet aus bei 375px (Mobile) UND 1440px (Desktop) Breite
- [ ] Etappe-1-Karte zeigt Check-in-Code und WLAN-Daten
- [ ] Etappe-1-Adresse/Koordinaten entsprechen Anforderung 5
- [ ] Route-Strip zeigt Zuhause → Lenggries → Valdidentro mit recherchierten (nicht geratenen) km/Std für beide Teilstrecken
- [ ] Etappe-1-Karte zeigt kuratierte Highlights gemäß Auswahlkriterien aus Anforderung 7
- [ ] Etappe-2-Karte zeigt keine erfundenen Highlights
- [ ] Kalender- und Karte-Sektion in Alpine-Editorial-Optik, nicht mehr HUD
- [ ] Fotos vorhanden für beide Etappen, Ortsname darüber weiterhin lesbar (Kontrast)
- [ ] Browser-Konsole fehlerfrei

## Failure Modes
- Foto-Suche liefert nichts Passendes → nicht mit thematisch falschem Bild
  auffüllen, stattdessen den beschrifteten Farbverlauf-Platzhalter aus dem
  Mockup als Fallback behalten
- Live-Routing für Zuhause→Lenggries nicht verfügbar → Feld `null` lassen
  (wie bisher bei fehlenden Werten gehandhabt), nicht die Kontrollspanne
  (640–680 km) als Endwert eintragen
- WLAN/Code-Felder dürfen nicht in `index.html`-Meta-Tags, `title` oder
  irgendwo serverseitig geloggt landen

## Offene Entscheidungen
KEINE
