/* ============================================================
   Hari Shringar — product catalog & icon symbols
   All artwork below is original abstract line-art (no photos,
   no third-party assets) representing each deity in a simple,
   stylised way.
   ============================================================ */

const ICONS = {
  ganesha: `<svg viewBox="0 0 100 100" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="34" r="16"/><path d="M42 40 C36 52 34 64 44 70 C40 76 42 84 50 84"/><path d="M58 40 C64 50 64 60 58 66"/><path d="M34 30 L24 24"/><path d="M66 30 L76 24"/><circle cx="44" cy="32" r="1.6" fill="currentColor" stroke="none"/><circle cx="56" cy="32" r="1.6" fill="currentColor" stroke="none"/></svg>`,
  ram: `<svg viewBox="0 0 100 100" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M30 78 C30 40 40 20 40 20"/><path d="M40 20 C40 20 58 30 60 52 C61 64 54 74 44 78"/><path d="M30 78 L60 52"/><path d="M56 34 L70 30 M58 40 L72 38"/></svg>`,
  hanuman: `<svg viewBox="0 0 100 100" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="30" r="13"/><path d="M50 43 L50 70"/><path d="M50 50 L30 34 M50 50 L70 34"/><path d="M50 70 L36 86 M50 70 L64 86"/><path d="M28 60 C18 50 20 34 34 30"/></svg>`,
  balaji: `<svg viewBox="0 0 100 100" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M50 16 L50 30"/><ellipse cx="50" cy="50" rx="22" ry="30"/><path d="M38 40 L62 40 M36 52 L64 52 M38 64 L62 64"/></svg>`,
  buddha: `<svg viewBox="0 0 100 100" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="28" r="12"/><path d="M28 82 C28 58 36 46 50 46 C64 46 72 58 72 82"/><path d="M28 82 L72 82"/><path d="M40 66 Q50 74 60 66"/></svg>`,
  durga: `<svg viewBox="0 0 100 100" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="26" r="10"/><path d="M50 36 L50 60"/><path d="M50 44 L26 30 M50 44 L74 30 M50 50 L22 46 M50 50 L78 46 M50 56 L28 66 M50 56 L72 66"/><path d="M40 60 L38 86 M60 60 L62 86"/></svg>`,
  krishna: `<svg viewBox="0 0 100 100" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="28" r="12"/><path d="M42 20 C44 12 56 12 58 20"/><path d="M50 40 L50 82"/><path d="M34 58 L66 52"/><circle cx="40" cy="58" r="1.4" fill="currentColor" stroke="none"/><circle cx="60" cy="54" r="1.4" fill="currentColor" stroke="none"/></svg>`,
  laxmiji: `<svg viewBox="0 0 100 100" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="50" cy="26" r="11"/><path d="M50 37 L50 64"/><path d="M50 46 L34 36 M50 46 L66 36"/><path d="M50 64 C36 64 26 74 26 74 C26 74 36 84 50 84 C64 84 74 74 74 74 C74 74 64 64 50 64 Z"/></svg>`,
  shiva: `<svg viewBox="0 0 100 100" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M50 14 L50 86"/><path d="M50 14 L38 30 M50 14 L62 30"/><circle cx="50" cy="46" r="14"/><path d="M36 70 L64 70"/></svg>`,
  diya: `<svg viewBox="0 0 100 100" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M24 60 C24 76 36 84 50 84 C64 84 76 76 76 60 C64 66 36 66 24 60 Z"/><path d="M50 52 C46 44 50 36 50 30 C50 36 54 44 50 52 Z"/></svg>`,
  incense: `<svg viewBox="0 0 100 100" fill="none" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M44 86 L48 40"/><path d="M50 30 C46 26 50 22 50 18 M58 34 C54 28 60 24 58 18"/><ellipse cx="46" cy="86" rx="20" ry="4"/></svg>`,
};

/* category metadata used on home + shop pages */
const CATEGORIES = [
  { slug: "ganesha", name: "Ganesha" },
  { slug: "ram",     name: "Shri Ram" },
  { slug: "hanuman", name: "Hanuman" },
  { slug: "balaji",  name: "Balaji" },
  { slug: "buddha",  name: "Buddha" },
  { slug: "durga",   name: "Durga" },
  { slug: "krishna", name: "Krishna" },
  { slug: "laxmiji", name: "Laxmiji" },
  { slug: "shiva",   name: "Shiva" },
];

/* product catalog — original names, copy and pricing */
const PRODUCTS = [
  { id: 1,  name: "Seated Ganesha, brass",           cat: "ganesha", material: "Brass, hand-cast",        price: 2450, old: null, tag: "Bestseller" },
  { id: 2,  name: "Ekdant Ganesha, white marble dust",cat: "ganesha", material: "Marble powder composite", price: 1180, old: 1450, tag: "Sale" },
  { id: 3,  name: "Panchmukhi Hanuman, brass",        cat: "hanuman", material: "Brass, antique finish",   price: 3200, old: null, tag: null },
  { id: 4,  name: "Hanuman in flight, resin",         cat: "hanuman", material: "Resin, gold leafing",     price: 990,  old: 1250, tag: "Sale" },
  { id: 5,  name: "Ram Darbar, four-figure set",      cat: "ram",     material: "Brass, hand-finished",    price: 5600, old: null, tag: "New" },
  { id: 6,  name: "Shri Ram with bow, sandalwood",    cat: "ram",     material: "Sandalwood, hand-carved", price: 4200, old: null, tag: null },
  { id: 7,  name: "Tirupati Balaji, silver-plated",   cat: "balaji",  material: "Silver-plated brass",     price: 3650, old: 4100, tag: "Sale" },
  { id: 8,  name: "Balaji with kavach, brass",        cat: "balaji",  material: "Brass, temple finish",    price: 2890, old: null, tag: null },
  { id: 9,  name: "Seated Buddha, serenity pose",     cat: "buddha",  material: "Poly-resin, stone finish",price: 860,  old: null, tag: "Bestseller" },
  { id: 10, name: "Medicine Buddha, brass",           cat: "buddha",  material: "Brass, matte finish",     price: 2150, old: null, tag: null },
  { id: 11, name: "Durga on lion, brass",             cat: "durga",   material: "Brass, hand-cast",        price: 4650, old: 5200, tag: "Sale" },
  { id: 12, name: "Ashtabhuja Durga, marble dust",    cat: "durga",   material: "Marble powder composite", price: 1980, old: null, tag: null },
  { id: 13, name: "Krishna with flute, brass",        cat: "krishna", material: "Brass, hand-polished",    price: 2350, old: null, tag: "Bestseller" },
  { id: 14, name: "Bal Krishna crawling, resin",      cat: "krishna", material: "Resin, hand-painted",     price: 720,  old: 890,  tag: "Sale" },
  { id: 15, name: "Laxmi on lotus, brass",            cat: "laxmiji", material: "Brass, gold-tone finish", price: 2680, old: null, tag: null },
  { id: 16, name: "Laxmi-Ganesh duo, silver-plated",  cat: "laxmiji", material: "Silver-plated brass",     price: 3980, old: 4400, tag: "Sale" },
  { id: 17, name: "Nataraja, dancing Shiva",          cat: "shiva",   material: "Brass, antique bronze",   price: 4850, old: null, tag: "New" },
  { id: 18, name: "Shiva linga with yoni base",       cat: "shiva",   material: "Black marble",            price: 1650, old: null, tag: null },
  { id: 19, name: "Brass diya pair, engraved",        cat: "ganesha", material: "Brass",                   price: 420,  old: 520,  tag: "Sale" },
  { id: 20, name: "Sandalwood incense, temple blend", cat: "buddha",  material: "Sandalwood, 40 sticks",   price: 180,  old: null, tag: null },
];

function iconFor(cat){ return ICONS[cat] || ICONS.diya; }
function catName(slug){ const c = CATEGORIES.find(c=>c.slug===slug); return c ? c.name : slug; }
function formatINR(n){ return "₹" + n.toLocaleString("en-IN"); }
