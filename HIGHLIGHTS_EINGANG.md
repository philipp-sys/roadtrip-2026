# Highlights-Eingang — hier reinkippen, später validieren & in data.js übernehmen

Ablage, nicht mit der App verknüpft (kein Parsing, kein Sync). Was geprüft ist,
wandert von hier nach `data.js` in `HIGHLIGHTS`. Editorial-Prinzip der Seite:
Auswahl statt Vollständigkeit — der Rest bleibt hier als Nachschlage-Fundus.

## Etappe 1 – Lenggries

In der App (`HIGHLIGHTS[1].wandern`) stehen bisher nur die beiden Touren
**ohne Anfahrt**: Denkalm und Geierstein.

**Offen — Quellen fehlen:** `Restaurant-Tipps.pdf` und
`Wander-und-Einkehrtipps.pdf` lagen der Umsetzung nicht vor. Sobald die PDFs
da sind, hier reinkippen und nach diesen Kriterien kuratieren:

- alle Wanderungen mit „keine Anfahrt" vollständig
- 3–4 weitere Touren aus „bis 6 km" mit Einkehrmöglichkeit
- die 5–6 nächstgelegenen Restaurants (≤ 2 km) plus max. 2 „besondere"
  aus der Fine-Dining-Liste

Struktur für `data.js` (jede Gruppe rendert nur, wenn sie gefüllt ist):

```js
HIGHLIGHTS[1] = {
  wandern:     [ { name: '…', info: '…' } ],
  restaurants: [ { name: '…', info: '…' } ],
  besonderes:  [ { name: '…', info: '…' } ],
};
```

### Fundus (hier sammeln)
(Restaurants, Wandertipps, Besonderheiten — frei reinschreiben)

## Etappe 2 – Valdidentro

Bewusst leer: keine geprüfte Quelle vorhanden, kein Web-Research beauftragt.
Erfundene Empfehlungen kommen nicht in die App.

### Fundus (hier sammeln)
(Restaurants, Wandertipps, Besonderheiten — frei reinschreiben)
