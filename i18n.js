(function () {
  var KEY = 'peptrade-lang';
  var D = { 'Cena': 'Price', 'Množství': 'Quantity',
    '% · NAČÍTÁNÍ': '% · LOADING', 'Produkty': 'Products', 'Proč Peptrade': 'Why Peptrade', 'Katalog': 'Catalog', 'Kontakt': 'Contact', 'Košík': 'Cart',
    'Peptidy v': 'Peptides of', 'PEPTRADE — RESEARCH GRADE': 'PEPTRADE — RESEARCH GRADE', 'SLOŽENÍ': 'COMPOSITION', 'DORUČENÍ': 'DELIVERY', 'ŘADA': 'RANGE', 'Čisté': 'Clean', 'receptury.': 'formulations.', 'Šest výzkumných': 'Six research', 'sloučenin.': 'compounds.', 'SCROLLUJTE': 'SCROLL', 'POKRAČUJTE DOLŮ NA PRODUKTY': 'CONTINUE DOWN TO PRODUCTS', 'laboratorní': 'laboratory', 'čistotě.': 'purity.',
    'Prohlédnout produkty': 'Browse products', 'Ceník': 'Price list',
    '01 — SLOŽENÍ': '01 — COMPOSITION', 'Čisté receptury.': 'Clean formulations.',
    'Lyofilizované peptidy s certifikátem analýzy ke každé šarži.': 'Lyophilized peptides with a certificate of analysis for every batch.',
    '02 — DOPRAVA': '02 — SHIPPING', '02 — DORUČENÍ': '02 — DELIVERY', 'Rychle po': 'Fast across', 'celé Evropě.': 'all of Europe.', 'Každá zásilka v diskrétním balení.': 'Every parcel in discreet packaging.', 'Do dvou dnů u vás.': 'At your door in two days.',
    'Expedice z Česka, doprava zdarma nad 1 500 Kč.': 'Shipped from Czechia, free shipping over 1,500 CZK.',
    '03 — ŘADA': '03 — RANGE', 'Šest výzkumných sloučenin.': 'Six research compounds.',
    'POKRAČUJTE DOLŮ NA PRODUKTY': 'SCROLL DOWN TO PRODUCTS',
    'VÝZKUMNÉ SLOUČENINY': 'RESEARCH COMPOUNDS', 'Kompletní řada': 'The full range', 'Zobrazit v katalogu →': 'View in catalog →',
    'PROČ PEPTRADE': 'WHY PEPTRADE', 'Malá dílna,': 'A small workshop,', 'velká': 'great', 'pečlivost.': 'care.',
    'Laboratorně testovaná kvalita': 'Lab-tested quality',
    'Research grade sloučeniny s důrazem na čistotu, šarže a přehledný produktový proces.': 'Research grade compounds with a focus on purity, batch tracking and a transparent product process.',
    'Rychlé evropské doručení': 'Fast European delivery',
    'Expedujeme po celé Evropě. Cenu dopravy uvidíte v košíku ještě před odesláním objednávky.': 'We ship across Europe. You will see the shipping price in your cart before placing the order.',
    'Diskrétní balení': 'Discreet packaging', 'Každá zásilka odchází v diskrétním balení.': 'Every parcel ships in discreet packaging.',
    'Diskrétně': 'Discreet', 'Platba převodem': 'Bank transfer', 'Převod': 'Transfer',
    'Platební údaje dostanete hned po odeslání objednávky. Splatnost je 7 dní.': 'You will receive payment details right after placing the order. Payment is due within 7 days.',
    'Ceny, složení a velikosti balení přehledně pohromadě.': 'Prices, composition and pack sizes, all in one place.',
    'Otevřít katalog': 'Open catalog',
    'Pouze pro laboratorní a výzkumné účely. Není určeno k lidské ani veterinární spotřebě.': 'For laboratory and research use only. Not for human or veterinary consumption.',
    'Peptidy v laboratorní čistotě. Rychlé doručení po Česku a Slovensku.': 'Laboratory-grade peptides. Fast delivery across Czechia and Slovakia.',
    'NAVIGACE': 'NAVIGATION', 'DOKUMENTY': 'DOCUMENTS', 'Obchodní podmínky': 'Terms and conditions', 'Ochrana osobních údajů': 'Privacy policy',
    'Reklamace': 'Complaints', 'Reklamace a vrácení': 'Complaints and returns', 'KONTAKT': 'CONTACT',
    'ZAVŘÍT ✕': 'CLOSE ✕', 'V košíku zatím nic není.': 'Your cart is empty.', 'Celkem': 'Total', 'Přejít do košíku': 'Go to cart',
    'Předchozí': 'Previous', 'Další': 'Next', 'KATALOG': 'CATALOG', 'Všechny produkty': 'All products', 'CENY VČETNĚ DPH': 'PRICES INCL. VAT',
    'Do košíku': 'Add to cart', 'Ubrat': 'Decrease', 'Přidat': 'Increase', 'Odebrat': 'Remove', 'Domů': 'Home',
    'PEPTID': 'PEPTIDE', 'PŘÍSLUŠENSTVÍ': 'ACCESSORIES', 'Balení': 'Pack size', 'Forma': 'Form', 'lyofilizát': 'lyophilized powder',
    'Čistota': 'Purity', 'Objem': 'Volume', 'roztok': 'solution', 'Obal': 'Container', 'skleněná lahvička': 'glass vial',
    'Obsah': 'Content', 'Skladování': 'Storage', '2–8 °C, chránit před světlem': '2–8 °C, protect from light',
    'S čím vám poradíme?': 'How can we help?',
    'Nejčastější dotazy k objednávce, platbě a doručení najdete níže. Když tu odpověď nenajdete, napište nám.': 'Find answers to common questions about orders, payment and delivery below. If you can’t find your answer, write to us.',
    'ČASTÉ DOTAZY': 'FAQ', 'Napište nám': 'Write to us', 'Jméno *': 'Name *', 'E-mail *': 'E-mail *', 'Telefon': 'Phone', 'Zpráva *': 'Message *',
    'Údaje použijeme jen k vyřízení vašeho dotazu.': 'We use your details only to handle your enquiry.',
    'Odeslat →': 'Send →', 'ODESLÁNO': 'SENT', 'Děkujeme, ozveme se vám do 24 hodin.': 'Thank you, we will get back to you within 24 hours.',
    'Jak mohu zaplatit?': 'How can I pay?',
    'Platbu přijímáme bankovním převodem. Platební údaje vám pošleme e-mailem hned po odeslání objednávky, splatnost je 7 dní.': 'We accept bank transfer. We email you the payment details right after you place the order; payment is due within 7 days.',
    'Kolik stojí doprava?': 'How much is shipping?',
    'Cenu dopravy pro vaši zemi uvidíte v košíku ještě před odesláním objednávky. Expedujeme po celé Evropě.': 'You will see the shipping price for your country in the cart before placing the order. We ship across Europe.',
    'Jak poznám, že objednávka dorazila?': 'How do I know my order was received?',
    'Přijetí objednávky vám potvrdíme e-mailem. Jakmile zásilku odešleme, dostanete i číslo pro sledování.': 'We confirm every order by email. Once the parcel ships, you will also get a tracking number.',
    'Zásilka přišla poškozená. Co dělat?': 'My parcel arrived damaged. What should I do?',
    'Napište nám do 48 hodin od převzetí a přiložte fotografie. Zjevné poškození obalu je dobré nahlásit rovnou dopravci.': 'Write to us within 48 hours of delivery and attach photos. Visible damage to the packaging should be reported to the carrier right away.',
    'Mohu zboží vrátit?': 'Can I return goods?',
    'Neotevřené zboží můžete vrátit do 14 dnů od převzetí. Peníze vracíme stejnou cestou, jakou přišla platba.': 'Unopened goods can be returned within 14 days of delivery. We refund using the original payment method.',
    'Jak je zásilka zabalená?': 'How is the parcel packed?',
    'Každá zásilka odchází v diskrétním balení bez označení obsahu.': 'Every parcel ships in discreet packaging with no indication of its contents.',
    'PEPTRADE': 'PEPTRADE', 'Pokladna': 'Checkout', 'Potvrzení': 'Confirmation', '1 · KOŠÍK': '1 · CART', '2 · POKLADNA': '2 · CHECKOUT', '3 · POTVRZENÍ': '3 · CONFIRMATION',
    'Košík je prázdný.': 'Your cart is empty.', 'Přejít do katalogu': 'Go to catalog',
    'PRODUKT': 'PRODUCT', 'CENA': 'PRICE', 'MNOŽSTVÍ': 'QUANTITY', 'MEZISOUČET': 'SUBTOTAL',
    'Použít kupón': 'Apply coupon', 'Kód kupónu': 'Coupon code', 'Souhrn košíku': 'Cart summary', 'Mezisoučet': 'Subtotal',
    'Sleva (kupón)': 'Discount (coupon)', 'Sleva': 'Discount', 'Doprava': 'Shipping', 'Cena celkem': 'Total',
    'Výdejní místo Zásilkovna': 'Packeta pick-up point', 'Doručení na adresu': 'Home delivery',
    'Pokračovat k pokladně': 'Proceed to checkout', 'KONTAKTNÍ ÚDAJE': 'CONTACT DETAILS', 'Jméno a příjmení *': 'Full name *',
    'FAKTURAČNÍ ADRESA': 'BILLING ADDRESS', 'DORUČOVACÍ ADRESA': 'DELIVERY ADDRESS',
    'Ulice a číslo *': 'Street and number *', 'Město *': 'City *', 'PSČ *': 'Postcode *', 'Země *': 'Country *',
    'Česká republika': 'Czech Republic', 'Slovensko': 'Slovakia', 'Německo': 'Germany', 'Rakousko': 'Austria', 'Polsko': 'Poland',
    'PLATBA': 'PAYMENT', 'Bankovní převod · splatnost 7 dní': 'Bank transfer · due in 7 days', 'VAŠE OBJEDNÁVKA': 'YOUR ORDER',
    'Odeslat objednávku': 'Place order', '← ZPĚT DO KOŠÍKU': '← BACK TO CART', 'Děkujeme, objednávku jsme přijali.': 'Thank you, we have received your order.',
    'Potvrzení a platební údaje jsme vám poslali e-mailem. Zásilku odešleme po připsání platby.': 'We have emailed you the confirmation and payment details. We will ship once the payment arrives.',
    'ČÁSTKA': 'AMOUNT', 'ÚČET': 'ACCOUNT', '123456789/0100 (ukázka)': '123456789/0100 (demo)', 'VAR. SYMBOL': 'REFERENCE', 'SPLATNOST': 'DUE', '7 dní': '7 days',
    'Zpět na hlavní stránku': 'Back to home page', 'Sleva 10 % uplatněna': '10% discount applied', 'Neplatný kód': 'Invalid code',
    'VÝZKUM': 'RESEARCH', 'SPECIFIKACE': 'SPECIFICATIONS', 'DOKUMENTACE K ŠARŽI': 'BATCH DOCUMENTATION',
    'Dotazy k šarži a certifikátu analýzy:': 'Questions about a batch or certificate of analysis:', 'Další produkty': 'More products',
    'Přidáno do košíku ✓': 'Added to cart ✓',
    'Syntetický pentadekapeptid dodávaný v lyofilizované formě ve skleněné lahvičce.': 'Synthetic pentadecapeptide supplied as a lyophilized powder in a glass vial.',
    'Syntetický peptid dodávaný v lyofilizované formě ve skleněné lahvičce.': 'Synthetic peptide supplied as a lyophilized powder in a glass vial.',
    'Měďnatý tripeptid dodávaný v lyofilizované formě ve skleněné lahvičce.': 'Copper tripeptide supplied as a lyophilized powder in a glass vial.',
    'Syntetický pentapeptid dodávaný v lyofilizované formě ve skleněné lahvičce.': 'Synthetic pentapeptide supplied as a lyophilized powder in a glass vial.',
    'Bakteriostatická voda v 10ml skleněné lahvičce s pryžovou zátkou.': 'Bacteriostatic water in a 10 ml glass vial with a rubber stopper.',
    'Zkoumá se v preklinických modelech regenerace tkání, angiogeneze, zánětlivé signalizace a integrity trávicího traktu.': 'Studied in preclinical models of tissue regeneration, angiogenesis, inflammatory signaling and gastrointestinal integrity.',
    'Zkoumá se v experimentálních modelech opravy a regenerace tkání, angiogeneze, zánětlivé signalizace a migrace buněk.': 'Studied in experimental models of tissue repair and regeneration, angiogenesis, inflammatory signaling and cell migration.',
    'Zkoumá se v experimentálních modelech opravy tkání, modulace extracelulární matrix a neuroregenerační signalizace. Jde o komplex měďnatého peptidu (glycyl-L-histidyl-L-lysin-Cu²⁺).': 'Studied in experimental models of tissue repair, extracellular matrix modulation and neuroregenerative signaling. It is a copper-peptide complex (glycyl-L-histidyl-L-lysine-Cu²⁺).',
    'Zkoumá se v modelech sekrece růstového hormonu, endokrinní signalizace a výzkumu ghrelinové dráhy. Jde o selektivní sekretagog růstového hormonu a agonistu receptoru ghrelinu/GHS-R.': 'Studied in models of growth hormone secretion, endocrine signaling and ghrelin-pathway research. It is a selective growth hormone secretagogue and ghrelin/GHS-R agonist.',
    'Zkoumá se v experimentálních modelech modulace osy GH/IGF-1, viscerální adipozity, stavů podobných lipodystrofii a regulace metabolismu. Jde o syntetický analog lidského hormonu uvolňujícího růstový hormon (GHRH), známý také jako TH9507.': 'Studied in experimental models of GH/IGF-1 axis modulation, visceral adiposity, lipodystrophy-like states and metabolic regulation. It is a synthetic analog of human growth hormone-releasing hormone (GHRH), also known as TH9507.',
    'Slouží k rozpuštění lyofilizovaných peptidů před použitím v laboratoři.': 'Used to reconstitute lyophilized peptides for laboratory use.',
    'POUZE PRO VÝZKUMNÉ ÚČELY · NENÍ URČENO K LIDSKÉ SPOTŘEBĚ · PRODEJ POUZE OSOBÁM 18+': 'FOR RESEARCH USE ONLY · NOT FOR HUMAN CONSUMPTION · ADULTS 18+ ONLY',
    'MNOŽSTEVNÍ SLEVA': 'VOLUME DISCOUNT', '1 lahvička': '1 vial', '3 lahvičky': '3 vials', 'Ušetříte': 'You save', '· místo': '· instead of',
    'Přidat BAC Water 10 ml': 'Add BAC Water 10 ml', 'K rozpuštění lyofilizátu': 'For reconstitution', 'POUZE PRO VÝZKUMNÉ ÚČELY': 'FOR RESEARCH USE ONLY',
    'Produkt je určen výhradně pro laboratorní a výzkumné účely. Není určen k lidské ani veterinární spotřebě, k diagnostice ani léčbě. Prodej pouze osobám starším 18 let.': 'This product is intended for laboratory and research use only. Not for human or veterinary consumption, diagnosis or treatment. Sale to adults 18+ only.',
    'Potvrzuji, že je mi 18 let a produkt použiji výhradně k výzkumu.': 'I confirm I am 18 or older and will use this product for research only.',
    'LABORATORNÍ TESTY': 'LAB TESTS', 'ŠARŽE': 'BATCH', 'DATUM TESTU': 'TEST DATE', 'ČISTOTA (HPLC)': 'PURITY (HPLC)', 'LABORATOŘ': 'LABORATORY', 'PŘIPRAVUJEME': 'COMING SOON',
    'NEZAPOMEŇTE': 'DON’T FORGET', 'Mnohostevní sleva −15 % ✓': 'Volume discount −15 % ✓', 'Množstevní sleva −15 % ✓': 'Volume discount −15 % ✓', 'Od 3 ks sleva −15 %': '−15 % from 3 pcs'
  };
  var P = [
    [/^V košíku \((\d+)\) · přidat$/, 'In cart ($1) · add more'],
    [/^V košíku \((\d+)\)$/, 'In cart ($1)'],
    [/^(\d+)% · NAČÍTÁNÍ$/, '$1% · LOADING'],
    [/^OBJEDNÁVKA (.+)$/, 'ORDER $1'],
    [/^Přidat za (.+)$/, 'Add for $1'],
    [/^K rozpuštění lyofilizátu · (.+)$/, 'For reconstitution · $1'],
    [/^Přidejte (\d+) ks a ušetříte (.+)$/, 'Add $1 more and save $2']
  ];
  var CKEY = 'peptrade-cur', RATE = 25, cur = 'czk';
  try { cur = localStorage.getItem(CKEY) || 'czk'; } catch (e) {}
  var CRE = /(\d[\d\s\u00a0,.]*?)\s?(Kč|CZK)/g;
  function money(s) {
    if (cur !== 'eur' || !/Kč|CZK/.test(s)) return null;
    return s.replace(CRE, function (m, num) {
      var t = num.replace(/[\s\u00a0]/g, '');
      t = /,\d{2}$/.test(t) ? t.replace(/\./g, '').replace(',', '.') : t.replace(/,/g, '');
      var v = parseFloat(t); if (isNaN(v)) return m;
      return (v / RATE).toLocaleString(lang === 'en' ? 'en-GB' : 'cs-CZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + '\u00a0€';
    });
  }
  var lang = 'cs';
  try { lang = localStorage.getItem(KEY) || 'cs'; } catch (e) {}
  function tr0(s) {
    if (lang !== 'en') return null;
    var t = s.trim(); if (!t) return null;
    if (D[t] !== undefined) return s.replace(t, D[t]);
    for (var i = 0; i < P.length; i++) if (P[i][0].test(t)) return s.replace(t, t.replace(P[i][0], P[i][1]));
    return null;
  }
  function tr(s) {
    var a = tr0(s), b = money(a !== null ? a : s);
    return b !== null ? b : a;
  }
  function walk(root) {
    var w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT), n;
    while ((n = w.nextNode())) {
      var p = n.parentNode; if (!p || p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE') continue;
      var r = tr(n.nodeValue); if (r !== null && r !== n.nodeValue) n.nodeValue = r;
    }
    var els = (root.querySelectorAll ? root : document).querySelectorAll('[placeholder],[aria-label]');
    for (var i = 0; i < els.length; i++) ['placeholder', 'aria-label'].forEach(function (a) {
      var v = els[i].getAttribute(a); if (v) { var r = tr(v); if (r !== null && r !== v) els[i].setAttribute(a, r); }
    });
  }
  function toggle() {
    var h = document.querySelector('header'); if (!h || h.querySelector('[data-lang-toggle]')) return;
    var box = document.createElement('div');
    box.setAttribute('data-lang-toggle', '');
    box.style.cssText = "display:flex;align-items:center;gap:2px;padding:3px;border:1px solid #2c3036;border-radius:999px;font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.1em";
    ['cs', 'en'].forEach(function (l) {
      var b = document.createElement('button');
      b.textContent = l.toUpperCase();
      var on = l === lang;
      b.style.cssText = 'border:0;border-radius:999px;padding:6px 10px;cursor:pointer;font:inherit;letter-spacing:inherit;background:' + (on ? '#9fe3c4' : 'transparent') + ';color:' + (on ? '#07080a' : '#8a8d93');
      b.onclick = function () { if (l === lang) return; try { localStorage.setItem(KEY, l); } catch (e) {} location.reload(); };
      box.appendChild(b);
    });
    var cbox = box.cloneNode(false);
    [['czk', 'KČ'], ['eur', '€']].forEach(function (c) {
      var b = document.createElement('button');
      b.textContent = c[1];
      var on = c[0] === cur;
      b.style.cssText = 'border:0;border-radius:999px;padding:6px 10px;cursor:pointer;font:inherit;letter-spacing:inherit;background:' + (on ? '#9fe3c4' : 'transparent') + ';color:' + (on ? '#07080a' : '#8a8d93');
      b.onclick = function () { if (c[0] === cur) return; try { localStorage.setItem(CKEY, c[0]); } catch (e) {} location.reload(); };
      cbox.appendChild(b);
    });
    cbox.setAttribute('data-cur-toggle', '');
    var cart = h.lastElementChild;
    var wrap = document.createElement('div');
    wrap.style.cssText = 'display:flex;align-items:center;gap:12px;margin-right:-12px'; wrap.setAttribute('data-tools', '');
    var nav = h.querySelector('nav'); if (nav) { nav.style.marginLeft = 'auto'; nav.style.marginRight = 'auto'; }
    h.insertBefore(wrap, cart); wrap.appendChild(cbox); wrap.appendChild(box);
    cart.setAttribute('data-cart-btn', '');
    var mb = document.createElement('button');
    mb.setAttribute('data-menu-btn', ''); mb.setAttribute('aria-label', 'Menu');
    mb.style.cssText = 'display:none;flex:none;width:44px;height:44px;border-radius:999px;border:1px solid #2c3036;background:#121417;cursor:pointer;align-items:center;justify-content:center;padding:0';
    mb.innerHTML = '<svg width="18" height="12" viewBox="0 0 18 12" fill="none" stroke="#ece8e1" stroke-width="1.5"><path d="M0 3h18M0 9h18"/></svg>';
    mb.onclick = function () { openMenu(h); };
    h.appendChild(mb);
  }
  function openMenu(h) {
    var en = lang === 'en';
    var ov = document.createElement('div');
    ov.style.cssText = "position:fixed;inset:0;z-index:250;background:#07080a;display:flex;flex-direction:column;padding:34px 20px 28px;font-family:Lexend,sans-serif;overflow-y:auto";
    var top = document.createElement('div');
    top.style.cssText = 'display:flex;align-items:center;justify-content:space-between;padding:12px 0';
    var logo = h.querySelector('[data-m=logo]'); if (logo) { var l = logo.cloneNode(); l.style.height = '22px'; top.appendChild(l); }
    var x = document.createElement('button'); x.setAttribute('aria-label', 'Zavřít');
    x.style.cssText = 'width:44px;height:44px;border-radius:999px;border:1px solid #2c3036;background:#121417;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0';
    x.innerHTML = '<svg width="14" height="14" viewBox="0 0 14 14" stroke="#ece8e1" stroke-width="1.5"><path d="M1 1l12 12M13 1L1 13"/></svg>';
    x.onclick = function () { ov.remove(); document.documentElement.style.overflow = ''; };
    top.appendChild(x); ov.appendChild(top);
    var list = document.createElement('nav'); list.style.cssText = 'display:flex;flex-direction:column;gap:6px;margin-top:40px';
    var here = location.pathname.split('/').pop();
    (h.querySelectorAll('[data-m=nav] a') || []).forEach(function (a) {
      var n = document.createElement('a'); n.href = a.getAttribute('href'); n.textContent = a.textContent;
      var on = here && decodeURIComponent(a.getAttribute('href')).indexOf(decodeURIComponent(here)) === 0 && a.getAttribute('href').indexOf('#') < 0;
      n.style.cssText = 'display:flex;justify-content:space-between;align-items:center;font-size:44px;font-weight:300;line-height:1.25;letter-spacing:-0.02em;color:' + (on ? '#9fe3c4' : '#ece8e1') + ';text-decoration:none';
      n.onclick = function () { ov.remove(); document.documentElement.style.overflow = ''; };
      list.appendChild(n);
    });
    ov.appendChild(list);
    var bottom = document.createElement('div'); bottom.style.cssText = 'margin-top:auto;padding-top:24px;border-top:1px solid #1d2024;display:flex;flex-direction:column;gap:22px';
    var row = document.createElement('div'); row.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:12px';
    function seg(opts, curv, key) {
      var s = document.createElement('div'); s.style.cssText = "display:grid;grid-template-columns:1fr 1fr;padding:5px;border:1px solid #2c3036;border-radius:999px;font:500 13px 'IBM Plex Mono',monospace;letter-spacing:.12em";
      opts.forEach(function (o) { var b = document.createElement('button'); b.textContent = o[1]; var on = o[0] === curv;
        b.style.cssText = 'height:44px;border:0;border-radius:999px;cursor:pointer;font:inherit;letter-spacing:inherit;background:' + (on ? '#1b2a24' : 'transparent') + ';color:' + (on ? '#9fe3c4' : '#6d7076');
        b.onclick = function () { if (on) return; try { localStorage.setItem(key, o[0]); } catch (e) {} location.reload(); }; s.appendChild(b); });
      return s;
    }
    row.appendChild(seg([['cs', 'CS'], ['en', 'EN']], lang, KEY)); row.appendChild(seg([['czk', 'CZK'], ['eur', 'EUR']], cur, CKEY));
    bottom.appendChild(row);
    var mail = document.createElement('a'); mail.href = 'mailto:info@peptrade.cz'; mail.textContent = 'info@peptrade.cz'; mail.style.cssText = 'font-size:17px;color:#a9a6a0;text-decoration:none';
    bottom.appendChild(mail); ov.appendChild(bottom);
    document.body.appendChild(ov); document.documentElement.style.overflow = 'hidden';
  }
  window.peptradeConfirm = function (cb) {
    var ok = false; try { ok = sessionStorage.getItem('peptrade-age') === '1'; } catch (e) {}
    if (ok) return cb();
    var en = lang === 'en';
    var T = en ? ['FOR RESEARCH USE ONLY', 'Before adding to cart', 'This product is intended for laboratory and research use only. Not for human or veterinary consumption, diagnosis or treatment.', 'I confirm I am 18 or older and will use this product for research only.', 'Confirm and add to cart', 'Cancel']
      : ['POUZE PRO VÝZKUMNÉ ÚČELY', 'Než přidáte do košíku', 'Produkt je určen výhradně pro laboratorní a výzkumné účely. Není určen k lidské ani veterinární spotřebě, k diagnostice ani léčbě.', 'Potvrzuji, že je mi 18 let a produkt použiji výhradně k výzkumu.', 'Potvrdit a přidat do košíku', 'Zrušit'];
    var ov = document.createElement('div');
    ov.style.cssText = 'position:fixed;inset:0;z-index:400;background:#07080acc;backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:20px';
    ov.innerHTML = '<div style="width:min(460px,100%);background:#0d0e11;border:1px solid #1f3a2f;border-radius:10px;padding:28px;display:flex;flex-direction:column;gap:18px;font-family:Lexend,sans-serif;color:#ece8e1">' +
      '<div style="font:500 12px \'IBM Plex Mono\',monospace;letter-spacing:.14em;color:#9fe3c4">' + T[0] + '</div>' +
      '<div style="font-size:26px;font-weight:300;line-height:1.15">' + T[1] + '</div>' +
      '<p style="margin:0;font-size:14px;line-height:1.6;color:#a9a6a0">' + T[2] + '</p>' +
      '<label style="display:flex;gap:12px;align-items:flex-start;font-size:14px;line-height:1.5;cursor:pointer;padding:14px;border:1px solid #2c3036;border-radius:6px"><input type="checkbox" style="flex:none;width:18px;height:18px;margin:1px 0 0;accent-color:#9fe3c4">' + T[3] + '</label>' +
      '<div style="display:flex;gap:10px;flex-wrap:wrap"><button data-ok disabled style="flex:1;min-width:200px;height:50px;background:#9fe3c4;color:#07080a;border:0;border-radius:999px;font:600 14px Lexend,sans-serif;cursor:pointer;opacity:.4;transition:opacity .2s">' + T[4] + '</button>' +
      '<button data-no style="height:50px;padding:0 20px;background:transparent;color:#a9a6a0;border:1px solid #2c3036;border-radius:999px;font:500 14px Lexend,sans-serif;cursor:pointer">' + T[5] + '</button></div></div>';
    document.body.appendChild(ov);
    var chk = ov.querySelector('input'), okb = ov.querySelector('[data-ok]');
    chk.onchange = function () { okb.disabled = !chk.checked; okb.style.opacity = chk.checked ? 1 : 0.4; };
    var close = function () { ov.remove(); };
    ov.querySelector('[data-no]').onclick = close;
    ov.onclick = function (e) { if (e.target === ov) close(); };
    okb.onclick = function () { if (!chk.checked) return; try { sessionStorage.setItem('peptrade-age', '1'); } catch (e) {} close(); cb(); };
  };
  function topbar() {
    if (document.querySelector('[data-topbar]')) return;
    var st = document.createElement('style');
    st.textContent = 'body{padding-top:34px}header[data-m=header]{top:34px!important}[data-m=psticky]{padding-top:130px!important}[data-tb-s]{display:none}' +
      '@media (max-width:760px){[data-tb-l]{display:none}[data-tb-s]{display:inline}[data-topbar]{font-size:10px!important;letter-spacing:.08em!important}' +
      '[data-m=header]{flex-wrap:nowrap!important}[data-m=nav],[data-lang-toggle],[data-cur-toggle]{display:none!important}[data-menu-btn]{display:flex!important}' +
      '[data-cart-btn]{position:relative!important;width:44px!important;height:44px!important;padding:0!important;border-radius:999px!important;justify-content:center!important;font-size:0!important;color:transparent!important;background:#121417 url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23ece8e1%27 stroke-width=%271.5%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3E%3Cpath d=%27M3 4h2l2.4 11h10.2L20 7H6.2%27/%3E%3Ccircle cx=%279%27 cy=%2719.5%27 r=%271.3%27/%3E%3Ccircle cx=%2717%27 cy=%2719.5%27 r=%271.3%27/%3E%3C/svg%3E") center/20px no-repeat!important;border:1px solid #2c3036!important}' +
      '[data-cart-btn]>span{position:absolute!important;top:-6px;right:-6px;background:#ece8e1!important;color:#07080a!important}' +
      '[data-m=psticky]{padding-top:120px!important}header[data-m=header]{flex-wrap:nowrap!important}[data-tools]{display:none!important}[data-cart-btn]{margin-left:auto!important}[data-m=header]{gap:10px!important}}' +
      '@media (max-width:380px){[data-m=logo]{height:18px!important}[data-lang-toggle] button,[data-cur-toggle] button{padding:4px 6px!important}}';
    document.head.appendChild(st);
    var bar = document.createElement('div');
    bar.setAttribute('data-topbar', '');
    bar.style.cssText = "position:fixed;top:0;left:0;right:0;z-index:300;height:34px;display:flex;align-items:center;justify-content:center;padding:0 12px;background:#1b2a24;color:#9fe3c4;border-bottom:1px solid #1f3a2f;font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.12em;text-align:center;white-space:nowrap;overflow:hidden";
    var en = lang === 'en';
    bar.innerHTML = '<span data-tb-l>' + (en ? 'FOR RESEARCH USE ONLY · NOT FOR HUMAN CONSUMPTION · ADULTS 18+ ONLY' : 'POUZE PRO VÝZKUMNÉ ÚČELY · NENÍ URČENO K LIDSKÉ SPOTŘEBĚ · PRODEJ POUZE OSOBÁM 18+') + '</span><span data-tb-s>' + (en ? 'RESEARCH ONLY · NOT FOR HUMAN USE · 18+' : 'POUZE PRO VÝZKUM · NE K LIDSKÉ SPOTŘEBĚ · 18+') + '</span>';
    document.body.appendChild(bar);
  }
  document.addEventListener('click', function (e) {
    var b = e.target && e.target.closest && e.target.closest('[data-lang-toggle] button'); if (!b) return;
    var t = (b.textContent || '').trim().toLowerCase(), k = t === 'cs' || t === 'en' ? KEY : t === 'kč' ? CKEY : t === '€' ? CKEY : null; if (!k) return;
    var v = t === 'kč' ? 'czk' : t === '€' ? 'eur' : t, now = k === KEY ? lang : cur;
    e.preventDefault(); e.stopPropagation();
    if (v === now) return;
    try { localStorage.setItem(k, v); } catch (x) {}
    location.reload();
  }, true);
  // React v angličtině hlavičku překreslí a prvky vytvoří znovu, proto se pořadí a označení obnovují.
  function syncHeader(h) {
    var mb = h.querySelector('[data-menu-btn]'), wrap = h.querySelector('[data-tools]'), nav = h.querySelector('nav'); if (!mb || !wrap) return;
    var kids = Array.prototype.filter.call(h.children, function (e) { return e !== mb && e !== wrap; }), cart = kids[kids.length - 1];
    if (cart && !cart.hasAttribute('data-cart-btn')) cart.setAttribute('data-cart-btn', '');
    if (nav && nav.style.marginLeft !== 'auto') { nav.style.marginLeft = 'auto'; nav.style.marginRight = 'auto'; }
    if (cart && wrap.nextElementSibling !== cart) h.insertBefore(wrap, cart);
    if (h.lastElementChild !== mb) h.appendChild(mb);
  }
  function start() {
    document.documentElement.lang = lang;
    topbar();
    var ensure = function () { var h = document.querySelector('header'); if (h && !document.querySelector('x-dc') && h.textContent.indexOf('{{') < 0) { toggle(); syncHeader(h); } };
    ensure();
    new MutationObserver(ensure).observe(document.documentElement, { childList: true, subtree: true });
    if (lang !== 'en' && cur !== 'eur') return;
    walk(document.body);
    var busy = false;
    new MutationObserver(function (ms) {
      if (busy) return; busy = true;
      ms.forEach(function (m) {
        if (m.type === 'characterData') { var r = tr(m.target.nodeValue); if (r !== null && r !== m.target.nodeValue) m.target.nodeValue = r; }
        else if (m.type === 'attributes') { var v = m.target.getAttribute(m.attributeName); var r2 = v && tr(v); if (r2 && r2 !== v) m.target.setAttribute(m.attributeName, r2); }
        else m.addedNodes.forEach(function (n) { if (n.nodeType === 3) { var r = tr(n.nodeValue); if (r !== null && r !== n.nodeValue) n.nodeValue = r; } else if (n.nodeType === 1) walk(n); });
      });
      busy = false;
    }).observe(document.body, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['placeholder', 'aria-label'] });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
