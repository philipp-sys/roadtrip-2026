// ── CONFIGURATION ────────────────────────────────────────────────────────────
const CONFIG = {
  mapsApiKey:  'AIzaSyAgh-3kD60VcglLsSEJ6lWMfUnDkj-BukA',
  mapsListUrl: null,   // noch keine gespeicherte Maps-Liste für diese Reise
};

// ── TRIP DATA ─────────────────────────────────────────────────────────────────
const TRIP = {
  title:    'Lenggries & Valdidentro',
  year:     '2026',
  start:    new Date('2026-09-11'),
  end:      new Date('2026-09-26'),
  tagline:  'Tesla · 🐾',
};

const ETAPPEN = [
  {
    id: 1,
    color: '#00e5ff',
    name: 'Lenggries',
    region: 'Isarwinkel, Bayern',
    dates: '11.–19. Sept.',
    km: null,          // Anreise ab Zuhause — keine recherchierte Strecke hinterlegt
    dauer: null,
    naechte: 8,
    start: new Date('2026-09-11'),
    end:   new Date('2026-09-19'),
    unterkunft: 'Ferienwohnung Blomberg',
    adresse: 'Günter-Eich-Straße 7, 83661 Lenggries',
    checkin: 'siehe Check-in-PDF',
    checkout: '19. Sept.',
    buchungNr: null,
    buchungUrl: 'https://www.landhaushansing.de/',
    buchungPlattform: 'Direktbuchung (Landhaus Hansing)',
    info: 'Vermieter Pit Hansing, Tel. 0177 7421163, hansing@gmx.de. Kurtaxe 1,50 €/Erw./Nacht vor Ort (Gemeinde Lenggries).',
    lat: 47.6848062, lng: 11.5818386,
    navUrl: 'https://maps.google.com/maps?daddr=47.6848062,11.5818386&directionsmode=driving',
  },
  {
    id: 2,
    color: '#ffe066',
    name: 'Valdidentro',
    region: 'Lombardei, Italien',
    dates: '19.–26. Sept.',
    km: '256',         // Google Maps, schnellste Route (Seefeld · Inntal · Reschen · Zernez · Livigno)
    dauer: '4:17 h',
    naechte: 7,
    start: new Date('2026-09-19'),
    end:   new Date('2026-09-26'),
    unterkunft: 'Giardino sulle Alpi',
    adresse: 'Via Producena, 4c, 23038 Valdidentro (SO), Italien',
    checkin: '19. Sept. ab 15:00',
    checkout: '26. Sept. bis 09:00',
    buchungNr: 'HMCDPHXW2B',
    buchungUrl: 'https://www.airbnb.de/trips/v1/reservation-details/ro/RESERVATION2_CHECKIN/HMCDPHXW2B',
    buchungPlattform: 'Airbnb',
    info: 'Gastgeberin Gigliola, Tel. +39 377 099 7297. 2 Erwachsene + 1 Haustier. Ruhezeiten 00:00–08:00.',
    lat: 46.4822222, lng: 10.2630044,
    navUrl: 'https://maps.google.com/maps?daddr=46.4822222,10.2630044&directionsmode=driving',
  },
];

// ── KALENDER (chronologische Liste, reine Anzeige) ────────────────────────────
const KALENDER = [
  { date: new Date('2026-09-11'), datum: 'Fr., 11.09.', label: 'Anreise Lenggries' },
  { date: new Date('2026-09-16'), datum: 'Mi., 16.09.', label: 'Dienstlich Ismaning' },
  { date: new Date('2026-09-17'), datum: 'Do., 17.09.', label: 'Dienstlich Ismaning' },
  { date: new Date('2026-09-19'), datum: 'Sa., 19.09.', label: 'Abreise Lenggries / Anreise Valdidentro' },
  { date: new Date('2026-09-26'), datum: 'Sa., 26.09.', label: 'Abreise Valdidentro / Heimreise' },
];

// ── REGION HIGHLIGHTS ─────────────────────────────────────────────────────────
// Leer — Inhalte sammeln sich zunächst in HIGHLIGHTS_EINGANG.md und werden
// erst nach Prüfung hier eingetragen. Solange leer, rendern die Etappen-Karten
// keinen Highlights-Block.
const HIGHLIGHTS = {};
