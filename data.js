// ── CONFIGURATION ────────────────────────────────────────────────────────────
const CONFIG = {
  mapsApiKey:  'AIzaSyAgh-3kD60VcglLsSEJ6lWMfUnDkj-BukA',
  mapsListUrl: null,   // noch keine gespeicherte Maps-Liste für diese Reise
};

// ── AUSGABE ───────────────────────────────────────────────────────────────────
const TRIP = {
  title:    'Lenggries & Valdidentro',
  year:     '2026',
  start:    new Date('2026-09-11'),
  end:      new Date('2026-09-26'),
  eyebrow:  'Reisejournal · Tesla & Hund',
  ausgabe:  'Ausgabe Nº 02 — September 2026',
  standfirst: 'Zwei Etappen zwischen bayerischen Voralpen und lombardischem Hochtal — von der Isar über den Reschenpass bis an den Fuß des Stilfser Jochs.',
  dateline: '11.–26. September 2026 · 15 Nächte · 2 Länder',
};

// ── AUSGANGSPUNKT ─────────────────────────────────────────────────────────────
// Nur Routen-Ursprung im Streckenband — keine buchbare Etappe.
const START = {
  name:    'Zuhause',
  region:  'Isernhagen, Niedersachsen',
  adresse: 'Im Barm 1a, 30916 Isernhagen',
  navUrl:  'https://maps.google.com/maps?daddr=Im+Barm+1a,+30916+Isernhagen&directionsmode=driving',
};

const ETAPPEN = [
  {
    id: 1,
    color: 'pine',
    name: 'Lenggries',
    region: 'Isarwinkel, Bayern',
    dates: '11.–19. September',
    datesShort: '11.–19. Sept.',
    // Anfahrt ab Zuhause — Google Maps, schnellste Route (A7 · A3 · A9 · A8 · B13)
    km: '705',
    dauer: '7:33 h',
    naechte: 8,
    start: new Date('2026-09-11'),
    end:   new Date('2026-09-19'),
    teaser: '„Acht Nächte am Fuß des Brauneck — die Wanderwege beginnen an der Haustür, nicht am Parkplatz."',
    illuCaption: 'Illustration · Brauneck / Isarwinkel',
    foto: null,          // Pfad zu einem echten Foto; wenn gesetzt, ersetzt es die Illustration
    fotoCredit: null,
    unterkunft: 'Ferienwohnung Blomberg',
    adresse: 'Günther Eich-Str. 7, 83661 Lenggries',
    checkin: 'Self Check-in per Schlüsselsafe · Code: 7102 (Kellertreppe, Hebel nach vorn öffnen)',
    checkout: '19. Sept.',
    wlan: { ssid: 'MagentaWLAN-KM8G', passwort: '38168445158739311783' },
    buchungNr: null,
    buchungUrl: 'https://www.landhaushansing.de/',
    buchungPlattform: 'Direktbuchung (Landhaus Hansing)',
    info: 'Vermieter Pit Hansing, Tel. 0177 7421163, hansing@gmx.de. Kurtaxe 1,50 €/Erw./Nacht vor Ort (Gemeinde Lenggries).',
    lat: 47.68495784861855, lng: 11.581849325361059,
    navUrl: 'https://maps.google.com/maps?daddr=47.68495784861855,11.581849325361059&directionsmode=driving',
  },
  {
    id: 2,
    color: 'amber',
    name: 'Valdidentro',
    region: 'Lombardei, Italien',
    dates: '19.–26. September',
    datesShort: '19.–26. Sept.',
    // Google Maps, schnellste Route (Seefeld · Inntal · Reschen · Zernez · Livigno)
    km: '256',
    dauer: '4:17 h',
    naechte: 7,
    start: new Date('2026-09-19'),
    end:   new Date('2026-09-26'),
    teaser: '„Sieben Nächte am Fuß des Stilfser Jochs, mit Blick auf die Ortlergruppe."',
    illuCaption: 'Illustration · Ortlergruppe / Valtellina',
    foto: null,
    fotoCredit: null,
    unterkunft: 'Giardino sulle Alpi',
    adresse: 'Via Producena, 4c, 23038 Valdidentro (SO), Italien',
    checkin: '19. Sept. ab 15:00',
    checkout: '26. Sept. bis 09:00',
    wlan: null,
    buchungNr: 'HMCDPHXW2B',
    buchungUrl: 'https://www.airbnb.de/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMCDPHXW2B',
    buchungPlattform: 'Airbnb',
    info: 'Gastgeberin Gigliola, Tel. +39 377 099 7297. 2 Erwachsene + 1 Haustier. Ruhezeiten 00:00–08:00.',
    lat: 46.4822222, lng: 10.2630044,
    navUrl: 'https://maps.google.com/maps?daddr=46.4822222,10.2630044&directionsmode=driving',
  },
];

// ── KALENDER ──────────────────────────────────────────────────────────────────
const KALENDER = [
  { date: new Date('2026-09-11'), datum: 'Fr., 11.09.', label: 'Anreise Lenggries' },
  { date: new Date('2026-09-16'), datum: 'Mi., 16.09.', label: 'Dienstlich Ismaning' },
  { date: new Date('2026-09-17'), datum: 'Do., 17.09.', label: 'Dienstlich Ismaning' },
  { date: new Date('2026-09-19'), datum: 'Sa., 19.09.', label: 'Abreise Lenggries / Anreise Valdidentro' },
  { date: new Date('2026-09-26'), datum: 'Sa., 26.09.', label: 'Abreise Valdidentro / Heimreise' },
];

// ── KURATIERTE EMPFEHLUNGEN ───────────────────────────────────────────────────
// Editorial-Prinzip: Auswahl statt Vollständigkeit. Der Fundus liegt in
// HIGHLIGHTS_EINGANG.md; hier steht nur, was geprüft und belegt ist.
const HIGHLIGHTS = {
  1: {
    wandern: [
      { name: 'Denkalm',    info: 'Keine Anfahrt — Start direkt ab der Unterkunft.' },
      { name: 'Geierstein', info: 'Keine Anfahrt — Start direkt ab der Unterkunft.' },
    ],
  },
  // Etappe 2: bewusst leer — keine geprüfte Quelle vorhanden.
};
