"use client";
import { useState, useEffect, useRef } from "react";

// ── Logo ───────────────────────────────────────────────────────
function DynafyLogo({ size = 36 }: { size?: number }) {
  const id = `logo-${Math.random().toString(36).slice(2,7)}`;
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <rect width="44" height="44" rx="12" fill="#070c1a"/>
      <defs>
        <linearGradient id={`${id}-line`} x1="5" y1="0" x2="39" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4f8ef7"/>
          <stop offset="60%" stopColor="#a855f7"/>
          <stop offset="100%" stopColor="#ec4899"/>
        </linearGradient>
        <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d="M5,30 C10,30 10,18 16,18 C22,18 22,26 27,24 C32,22 34,15 39,14 L39,36 L5,36 Z" fill={`url(#${id}-fill)`}/>
      <path d="M5,30 C10,30 10,18 16,18 C22,18 22,26 27,24 C32,22 34,15 39,14" fill="none" stroke={`url(#${id}-line)`} strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="39" cy="14" r="3" fill="#a855f7"/>
      <circle cx="39" cy="14" r="5" fill="#a855f7" opacity="0.15"/>
    </svg>
  );
}

// ── Icons (inline SVG) ─────────────────────────────────────────
const Check = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const Plus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

// ── Translations ───────────────────────────────────────────────
const TRANSLATIONS = {
  nl: {
    // Nav
    navLinks: ["Functies", "ZZP", "Prijzen", "FAQ"],
    navHrefs: ["#functies", "#zzp", "#prijzen", "#faq"],
    login: "Inloggen",
    ctaNav: "Gratis starten",
    // Hero
    badge: "AI Powered",
    h1a: "Jouw financiën",
    h1b: "volledig in beeld door AI",
    h1c: "privé en zakelijk",
    heroSub: "Dynafy combineert persoonlijk financieel beheer met volledige ZZP-administratie. Transacties, facturen, BTW en inzichten, alles op één plek.",
    heroCta1: "Gratis beginnen",
    heroCta2: "Bekijk functies",
    trustLine: "✓ Geen creditcard nodig \u00a0·\u00a0 ✓ Gratis plan altijd beschikbaar \u00a0·\u00a0 ✓ Opgezegd wanneer je wil",
    // App preview
    appPreviewLabel: "Het product",
    appPreviewSub: "Alles overzichtelijk op één scherm — saldo, cashflow, investeringen, transacties en meer.",
    // Social proof
    stat1Label: "Actieve gebruikers",
    stat2Label: "Gemiddelde beoordeling",
    stat3Label: "Om te beginnen",
    // Features section
    featuresLabel: "Functies",
    featuresH2a: "Alles wat je nodig hebt,",
    featuresH2b: "niets wat je niet nodig hebt",
    featuresSub: "Van budgetteren tot investeringen bijhouden — Dynafy heeft het allemaal, zonder gedoe.",
    // How it works
    howLabel: "Hoe het werkt",
    howH2: "In 3 stappen live",
    // Investment section
    investLabel: "Investeringen",
    investH2: "Al je beleggingen op één plek",
    investSub: "Crypto, aandelen, goud — live koersen, één overzicht. Altijd weten wat je portfolio waard is.",
    // ZZP section
    zzpLabel: "Voor ZZP'ers",
    zzpH2a: "Jouw complete",
    zzpH2b: "ZZP-administratie",
    zzpH2c: "— ingebouwd",
    zzpSub: "Geen losse boekhoudpakket meer. Dynafy combineert je privéfinanciën met je zakelijke administratie. Facturen versturen, kosten bijhouden, BTW berekenen — vanuit één app.",
    zzpCta: "Probeer ZZP gratis →",
    // ZZP Mockup section
    zzpMockupLabel: "ZZP Facturen",
    zzpMockupH2: "Van concept naar betaald — in minuten",
    zzpMockupSub: "Facturen aanmaken, versturen en bijhouden. Inclusief live preview en automatische BTW-berekening.",
    // Pricing
    pricingLabel: "Prijzen",
    pricingH2: "Transparant. Geen verborgen kosten.",
    pricingSub: "Maandelijks opzegbaar · Alle prijzen excl. BTW",
    // Testimonials
    testimonialsLabel: "Ervaringen",
    testimonialsH2: "Wat gebruikers zeggen",
    // FAQ
    faqLabel: "FAQ",
    faqH2: "Veelgestelde vragen",
    // Final CTA
    finalH2a: "Klaar om grip te krijgen",
    finalH2b: "op je",
    finalH2c: "financiën?",
    finalSub: "Start gratis. Geen creditcard. Geen verplichtingen.",
    finalCta: "Gratis starten — nu direct",
    finalSocial: "Al meer dan 500 ZZP\u2019ers en particulieren gingen je voor.",
    // Footer
    footerLinks: ["Privacy", "Voorwaarden", "Contact"],
    footerLinksHrefs: ["/privacy", "/voorwaarden", "/contact"],
    footerCopy: "Alle rechten voorbehouden",
  },
  en: {
    // Nav
    navLinks: ["Features", "Freelance", "Pricing", "FAQ"],
    navHrefs: ["#functies", "#zzp", "#prijzen", "#faq"],
    login: "Log in",
    ctaNav: "Start for free",
    // Hero
    badge: "AI Powered",
    h1a: "Your finances",
    h1b: "fully in view",
    h1c: "private and business",
    heroSub: "Dynafy combines personal financial management with complete freelance administration. Transactions, invoices, VAT and insights, all in one place.",
    heroCta1: "Start for free",
    heroCta2: "View features",
    trustLine: "✓ No credit card needed \u00a0·\u00a0 ✓ Free plan always available \u00a0·\u00a0 ✓ Cancel whenever you want",
    // App preview
    appPreviewLabel: "The product",
    appPreviewSub: "Everything clearly on one screen — balance, cashflow, investments, transactions and more.",
    // Social proof
    stat1Label: "Active users",
    stat2Label: "Average rating",
    stat3Label: "To get started",
    // Features section
    featuresLabel: "Features",
    featuresH2a: "Everything you need,",
    featuresH2b: "nothing you don\u2019t",
    featuresSub: "From budgeting to tracking investments — Dynafy has it all, without the hassle.",
    // How it works
    howLabel: "How it works",
    howH2: "Live in 3 steps",
    // Investment section
    investLabel: "Investments",
    investH2: "All your investments in one place",
    investSub: "Crypto, stocks, gold — live rates, one overview. Always know what your portfolio is worth.",
    // ZZP section
    zzpLabel: "For Freelancers",
    zzpH2a: "Your complete",
    zzpH2b: "freelance administration",
    zzpH2c: "— built in",
    zzpSub: "No more separate accounting packages. Dynafy combines your personal finances with your business administration. Send invoices, track expenses, calculate VAT — from one app.",
    zzpCta: "Try Freelance for free →",
    // ZZP Mockup section
    zzpMockupLabel: "Freelance Invoices",
    zzpMockupH2: "From draft to paid — in minutes",
    zzpMockupSub: "Create, send and track invoices. Including live preview and automatic VAT calculation.",
    // Pricing
    pricingLabel: "Pricing",
    pricingH2: "Transparent. No hidden costs.",
    pricingSub: "Cancel monthly · All prices excl. VAT",
    // Testimonials
    testimonialsLabel: "Reviews",
    testimonialsH2: "What users say",
    // FAQ
    faqLabel: "FAQ",
    faqH2: "Frequently asked questions",
    // Final CTA
    finalH2a: "Ready to get a grip on",
    finalH2b: "your",
    finalH2c: "finances?",
    finalSub: "Start for free. No credit card. No obligations.",
    finalCta: "Start for free — right now",
    finalSocial: "More than 500 freelancers and individuals have gone before you.",
    // Footer
    footerLinks: ["Privacy", "Terms", "Contact"],
    footerLinksHrefs: ["/privacy", "/terms", "/contact"],
    footerCopy: "All rights reserved",
  },
} as const;

// ── Data (NL) ──────────────────────────────────────────────────
const FEATURES_NL = [
  {
    icon: "📊",
    color: "#4f8ef7",
    title: "Slim dashboard",
    desc: "Één overzicht van al je inkomsten, uitgaven, spaargeld en investeringen. Altijd up-to-date.",
  },
  {
    icon: "🏦",
    color: "#22c55e",
    title: "CSV import",
    desc: "Upload je bankafschrift van ING, ABN AMRO, Rabobank, SNS of andere banken. Automatisch verwerkt in seconden.",
  },
  {
    icon: "🧠",
    color: "#a855f7",
    title: "AI-categorisatie",
    desc: "Transacties worden automatisch gecategoriseerd. Leer het systeem bij en het wordt steeds slimmer.",
  },
  {
    icon: "📈",
    color: "#f59e0b",
    title: "Investeringen",
    desc: "Crypto, aandelen, vastgoed, goud, alles in één portfolio-overzicht met live koersen.",
  },
  {
    icon: "🎯",
    color: "#f43f5e",
    title: "Spaardoelen",
    desc: "Stel doelen in (noodfonds, vakantie, auto) en zie in één oogopslag hoe ver je bent.",
  },
  {
    icon: "🔄",
    color: "#14b8a6",
    title: "Vaste lasten",
    desc: "Automatisch herkende abonnementen en terugkerende kosten. Nooit meer verrassingen.",
  },
];

const FEATURES_EN = [
  {
    icon: "📊",
    color: "#4f8ef7",
    title: "Smart dashboard",
    desc: "One overview of all your income, expenses, savings and investments. Always up-to-date.",
  },
  {
    icon: "🏦",
    color: "#22c55e",
    title: "CSV import",
    desc: "Upload your bank statement from any bank. Automatically processed in seconds.",
  },
  {
    icon: "🧠",
    color: "#a855f7",
    title: "AI categorisation",
    desc: "Transactions are automatically categorised. Train the system and it gets smarter and smarter.",
  },
  {
    icon: "📈",
    color: "#f59e0b",
    title: "Investments",
    desc: "Crypto, stocks, real estate, gold, all in one portfolio overview with live rates.",
  },
  {
    icon: "🎯",
    color: "#f43f5e",
    title: "Savings goals",
    desc: "Set goals (emergency fund, vacation, car) and see at a glance how far you are.",
  },
  {
    icon: "🔄",
    color: "#14b8a6",
    title: "Fixed costs",
    desc: "Automatically recognised subscriptions and recurring costs. No more surprises.",
  },
];

const ZZP_FEATURES_NL = [
  { icon: "🧾", title: "Facturen aanmaken", desc: "Professionele facturen in jouw huisstijl, rechtstreeks vanuit de app versturen." },
  { icon: "💼", title: "Kosten & bonnen", desc: "Registreer zakelijke kosten en upload bonnen, klaar voor de boekhouder." },
  { icon: "📋", title: "BTW-aangifte", desc: "Automatisch BTW-overzicht per kwartaal. Nooit meer rekenen voor de aangifte." },
  { icon: "🤝", title: "Boekhouder portaal", desc: "Geef je boekhouder toegang. Samenwerken was nog nooit zo eenvoudig." },
  { icon: "🏢", title: "Meerdere bedrijven", desc: "Beheer meerdere bedrijfsprofielen vanuit één account." },
  { icon: "🔗", title: "Moneybird koppeling", desc: "Werk je al met Moneybird? Dynafy koppelt er direct mee." },
];

const ZZP_FEATURES_EN = [
  { icon: "🧾", title: "Create invoices", desc: "Professional invoices in your house style, sent directly from the app." },
  { icon: "💼", title: "Costs & receipts", desc: "Record business expenses and upload receipts, ready for your accountant." },
  { icon: "📋", title: "VAT return", desc: "Automatic VAT overview per quarter. No more calculating for the return." },
  { icon: "🤝", title: "Accountant portal", desc: "Give your accountant access. Collaboration has never been this easy." },
  { icon: "🏢", title: "Multiple companies", desc: "Manage multiple business profiles from one account." },
  { icon: "🔗", title: "Moneybird integration", desc: "Already using Moneybird? Dynafy connects directly with it." },
];

const PLANS_NL = [
  {
    name: "Gratis",
    price: "€0",
    per: "",
    desc: "Om kennis te maken",
    color: "#64748b",
    featured: false,
    badge: "",
    features: [
      "1 bankrekening of 1 ZZP-bedrijf",
      "CSV import",
      "Transactieoverzicht (3 maanden)",
      "Basis categorisatie",
      "Vaste lasten overzicht",
      "Max. 3 facturen per maand",
    ],
    cta: "Gratis starten",
    ctaStyle: "ghost",
  },
  {
    name: "Premium",
    price: "€5,99",
    per: "/maand",
    yearly: "of €49/jaar",
    desc: "Voor de serieuze particulier",
    color: "#4f8ef7",
    featured: false,
    badge: "",
    features: [
      "Alles van Gratis",
      "Onbeperkte rekeningen",
      "Volledige transactiehistorie",
      "AI-categorisatie",
      "Investeringsportefeuille",
      "Spaar- & doelen tracker",
      "Budgetten per categorie",
      "Export naar Excel / PDF",
    ],
    cta: "Starten met Premium",
    ctaStyle: "blue",
  },
  {
    name: "ZZP Premium",
    price: "€17,99",
    per: "/maand",
    yearly: "of €159/jaar",
    desc: "Voor de actieve ZZP'er",
    color: "#a855f7",
    featured: true,
    badge: "Meest gekozen",
    features: [
      "Alles van Premium",
      "ZZP Dashboard",
      "Onbeperkt facturen & offertes",
      "Kosten registreren",
      "Bonnen uploaden",
      "BTW-aangifte voorbereiding",
      "1 bedrijfsprofiel",
      "Moneybird koppeling",
      "Boekhouder support (meekijken)",
    ],
    cta: "Starten met ZZP Premium",
    ctaStyle: "purple",
  },
  {
    name: "ZZP Diamond",
    price: "€89",
    per: "/maand",
    yearly: "of €849/jaar",
    desc: "Volledig ontzorgd",
    color: "#f59e0b",
    featured: false,
    badge: "",
    features: [
      "Alles van ZZP Premium",
      "Boekhouder maakt facturen aan",
      "AI bonnen scan (automatisch)",
      "Bonnen upload via whatsapp",
      "Tot 5 bedrijfsprofielen",
      "Boekhouder portaal (volledig)",
      "BTW aangifte door boekhouder",
      "IB aangifte door boekhouder",
      "Prioriteit support",
    ],
    cta: "Starten met Diamond",
    ctaStyle: "amber",
  },
];

const PLANS_EN = [
  {
    name: "Gratis",
    price: "€0",
    per: "",
    desc: "To get acquainted",
    color: "#64748b",
    featured: false,
    badge: "",
    features: [
      "1 bank account or 1 freelance company",
      "CSV import",
      "Transaction overview (3 months)",
      "Basic categorisation",
      "Fixed costs overview",
      "Max. 3 invoices per month",
    ],
    cta: "Start for free",
    ctaStyle: "ghost",
  },
  {
    name: "Premium",
    price: "€5,99",
    per: "/month",
    yearly: "or €49/year",
    desc: "For the serious individual",
    color: "#4f8ef7",
    featured: false,
    badge: "",
    features: [
      "Everything from Free",
      "Unlimited accounts",
      "Full transaction history",
      "AI categorisation",
      "Investment portfolio",
      "Savings & goals tracker",
      "Budgets per category",
      "Export to Excel / PDF",
    ],
    cta: "Start with Premium",
    ctaStyle: "blue",
  },
  {
    name: "ZZP Premium",
    price: "€17,99",
    per: "/month",
    yearly: "or €159/year",
    desc: "For the active freelancer",
    color: "#a855f7",
    featured: true,
    badge: "Most chosen",
    features: [
      "Everything from Premium",
      "Freelance Dashboard",
      "Unlimited invoices & quotes",
      "Record expenses",
      "Upload receipts",
      "VAT return preparation",
      "1 business profile",
      "Moneybird integration",
      "Accountant support (view access)",
    ],
    cta: "Start with Freelance Premium",
    ctaStyle: "purple",
  },
  {
    name: "ZZP Diamond",
    price: "€89",
    per: "/month",
    yearly: "or €849/year",
    desc: "Fully taken care of",
    color: "#f59e0b",
    featured: false,
    badge: "",
    features: [
      "Everything from Freelance Premium",
      "Accountant creates invoices",
      "AI receipt scan (automatic)",
      "Receipt upload via WhatsApp",
      "Up to 5 business profiles",
      "Accountant portal (full)",
      "VAT return by accountant",
      "Income tax return by accountant",
      "Priority support",
    ],
    cta: "Start with Diamond",
    ctaStyle: "amber",
  },
];

const TESTIMONIALS_NL = [
  {
    name: "Lars van den Berg",
    role: "Freelance developer, Amsterdam",
    avatar: "LB",
    color: "#4f8ef7",
    quote: "Ik gebruikte vroeger drie losse tools voor mijn zakelijke en privé-financiën. Met Dynafy heb ik alles op één plek. De BTW-overzichten zijn goud waard.",
    stars: 5,
  },
  {
    name: "Marieke Smits",
    role: "Gezin met 2 kinderen, Utrecht",
    avatar: "MS",
    color: "#22c55e",
    quote: "Eindelijk snap ik waar ons geld naartoe gaat. De vaste lasten-detectie ontdekte abonnementen die we allang waren vergeten. Al in de eerste maand €47 bespaard.",
    stars: 5,
  },
  {
    name: "Daan Hoekstra",
    role: "Grafisch ontwerper ZZP, Rotterdam",
    avatar: "DH",
    color: "#a855f7",
    quote: "De factuurmodule is echt top. In 2 minuten een professionele factuur verstuurd. En het dashboard laat me precies zien hoe mijn kwartaal eruit ziet voor de belasting.",
    stars: 5,
  },
];

const TESTIMONIALS_EN = [
  {
    name: "Lars van den Berg",
    role: "Freelance developer, Amsterdam",
    avatar: "LB",
    color: "#4f8ef7",
    quote: "I used to use three separate tools for my business and personal finances. With Dynafy I have everything in one place. The VAT overviews are worth their weight in gold.",
    stars: 5,
  },
  {
    name: "Marieke Smits",
    role: "Family with 2 children, Utrecht",
    avatar: "MS",
    color: "#22c55e",
    quote: "I finally understand where our money goes. The fixed costs detection discovered subscriptions we had long forgotten. Already saved €47 in the first month.",
    stars: 5,
  },
  {
    name: "Daan Hoekstra",
    role: "Graphic designer freelancer, Rotterdam",
    avatar: "DH",
    color: "#a855f7",
    quote: "The invoice module is really great. A professional invoice sent in 2 minutes. And the dashboard shows me exactly how my quarter looks for tax purposes.",
    stars: 5,
  },
];

const FAQS_NL = [
  {
    q: "Is Dynafy veilig? Heeft het toegang tot mijn bankrekening?",
    a: "Dynafy heeft geen directe toegang tot jouw bankrekening. Je uploadt zelf een CSV-exportbestand van je bank. Er worden geen inloggegevens, pincodes of bankwachtwoorden opgeslagen. Alle data is versleuteld opgeslagen.",
  },
  {
    q: "Welke banken worden ondersteund?",
    a: "Alle Nederlandse banken die CSV-exports ondersteunen: ING, ABN AMRO, Rabobank, SNS, Triodos, ASN, RegioBank en meer. Zolang je een CSV-bestand kunt exporteren, werkt het.",
  },
  {
    q: "Kan ik op elk moment opzeggen?",
    a: "Ja, maandelijkse abonnementen zijn per direct opzegbaar. Bij een jaarabonnement loopt het door tot het einde van de betaalde periode. Geen verborgen kosten.",
  },
  {
    q: "Ik heb al een boekhouder. Wat heeft Dynafy dan nog te bieden?",
    a: "Dynafy bespaart jou en je boekhouder tijd. Jij houdt je zakelijke en privé-financiën bij in de app, en je boekhouder krijgt via het boekhouder-portaal direct inzage in de data die hij nodig heeft. Minder mailverkeer, minder fouten.",
  },
  {
    q: "Werkt Dynafy ook voor particulieren zonder ZZP?",
    a: "Absoluut. Het Gratis en Premium plan zijn speciaal voor particulieren: budgetteren, spaardoelen, investeringen bijhouden, vaste lasten overzicht en inzichten in je uitgavenpatroon.",
  },
];

const FAQS_EN = [
  {
    q: "Is Dynafy safe? Does it have access to my bank account?",
    a: "Dynafy has no direct access to your bank account. You upload a CSV export file from your bank yourself. No login credentials, PINs or bank passwords are stored. All data is stored encrypted.",
  },
  {
    q: "Which banks are supported?",
    a: "All banks that support CSV exports: ING, ABN AMRO, Rabobank, SNS, Triodos, ASN, RegioBank and more. As long as you can export a CSV file, it works.",
  },
  {
    q: "Can I cancel at any time?",
    a: "Yes, monthly subscriptions can be cancelled immediately. For an annual subscription it continues until the end of the paid period. No hidden costs.",
  },
  {
    q: "I already have an accountant. What does Dynafy still offer?",
    a: "Dynafy saves you and your accountant time. You keep track of your business and personal finances in the app, and your accountant gets direct access to the data they need via the accountant portal. Less email, fewer errors.",
  },
  {
    q: "Does Dynafy also work for individuals without a freelance business?",
    a: "Absolutely. The Free and Premium plans are specifically for individuals: budgeting, savings goals, tracking investments, fixed costs overview and insights into your spending pattern.",
  },
];

const STEPS_NL = [
  {
    num: "01",
    color: "#4f8ef7",
    title: "Maak een gratis account aan",
    desc: "In 30 seconden live. Geen creditcard nodig. Kies of je als particulier of ZZP'er wil beginnen.",
  },
  {
    num: "02",
    color: "#a855f7",
    title: "Upload je bankafschrift",
    desc: "Exporteer een CSV van je bank en upload het. Dynafy verwerkt automatisch alle transacties.",
  },
  {
    num: "03",
    color: "#22c55e",
    title: "Krijg direct inzicht",
    desc: "Zie meteen je uitgavenpatroon, vaste lasten, spaarmogelijkheden en meer, alles op één plek.",
  },
];

const STEPS_EN = [
  {
    num: "01",
    color: "#4f8ef7",
    title: "Create a free account",
    desc: "In 30 seconds. No credit card needed. Choose whether to start as an individual or freelancer.",
  },
  {
    num: "02",
    color: "#a855f7",
    title: "Upload your bank statement",
    desc: "Export a CSV from your bank and upload it. Dynafy automatically processes all transactions.",
  },
  {
    num: "03",
    color: "#22c55e",
    title: "Get instant insight",
    desc: "Immediately see your spending pattern, fixed costs, savings opportunities and more, all in one place.",
  },
];

// ── App Mockup ─────────────────────────────────────────────────
function AppMockup() {
  // Cashflow chart path (area + line)
  const pts = [
    [0, 72], [40, 58], [80, 64], [120, 42], [160, 50], [200, 28], [240, 38],
    [280, 18], [320, 30], [360, 12], [380, 8],
  ];
  const lineD = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ");
  const areaD = lineD + ` L${pts[pts.length - 1][0]},90 L0,90 Z`;

  const txs = [
    { icon: "🛒", name: "Albert Heijn", cat: "Boodschappen",   amount: "-€43,20", color: "#ef4444" },
    { icon: "💻", name: "Clientnaam BV", cat: "Factuur #1042", amount: "+€2.800", color: "#22c55e" },
    { icon: "📱", name: "Ziggo",         cat: "Vaste lasten",  amount: "-€52,95", color: "#ef4444" },
    { icon: "⛽", name: "Shell",         cat: "Vervoer",       amount: "-€78,40", color: "#ef4444" },
  ];

  const navItems = [
    { icon: "⊞",  label: "Dashboard",   active: true  },
    { icon: "↕",  label: "Transacties", active: false },
    { icon: "📈", label: "Investeren",  active: false },
    { icon: "🎯", label: "Doelen",      active: false },
    { icon: "🔄", label: "Vaste lasten",active: false },
    { icon: "🧾", label: "Facturen",    active: false },
  ];

  return (
    <div style={{
      borderRadius: 16, overflow: "hidden",
      border: "1px solid rgba(255,255,255,0.1)",
      boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)",
      background: "#0a1020",
      maxWidth: 980, width: "100%",
    }}>
      {/* Browser chrome */}
      <div style={{
        height: 40, background: "#0d1526",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        display: "flex", alignItems: "center", padding: "0 16px", gap: 12,
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#ff5f57","#febc2e","#28c840"].map(c => (
            <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.85 }}/>
          ))}
        </div>
        <div style={{
          flex: 1, height: 24, background: "rgba(255,255,255,0.05)", borderRadius: 6,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 11, color: "#475569", fontWeight: 500, letterSpacing: "0.01em",
        }}>
          🔒 app.dynafy.nl
        </div>
      </div>

      {/* App layout */}
      <div style={{ display: "flex", height: 460 }}>

        {/* Sidebar */}
        <div style={{
          width: 188, background: "#070c1a", flexShrink: 0,
          borderRight: "1px solid rgba(255,255,255,0.05)",
          display: "flex", flexDirection: "column", padding: "16px 0",
        }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 16px 20px" }}>
            <div style={{
              width: 30, height: 30, borderRadius: 8, background: "#070c1a",
              border: "1px solid rgba(79,142,247,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14,
            }}>〜</div>
            <span style={{ fontWeight: 800, fontSize: 14, color: "#f1f5f9", letterSpacing: "-0.02em" }}>Dynafy</span>
          </div>

          {/* Nav */}
          <div style={{ display: "flex", flexDirection: "column", gap: 2, padding: "0 8px" }}>
            {navItems.map(n => (
              <div key={n.label} style={{
                display: "flex", alignItems: "center", gap: 9,
                padding: "8px 10px", borderRadius: 8, cursor: "pointer",
                background: n.active ? "rgba(79,142,247,0.12)" : "transparent",
                color: n.active ? "#4f8ef7" : "#475569",
                fontSize: 12, fontWeight: n.active ? 700 : 500,
              }}>
                <span style={{ fontSize: 13 }}>{n.icon}</span>
                {n.label}
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div style={{ marginTop: "auto", padding: "12px 8px 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{
              display: "flex", alignItems: "center", gap: 8, padding: "8px 10px",
            }}>
              <div style={{ width: 26, height: 26, borderRadius: "50%", background: "rgba(79,142,247,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#4f8ef7", fontWeight: 700 }}>JD</div>
              <div>
                <div style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600 }}>Jan de Vries</div>
                <div style={{ fontSize: 10, color: "#334155" }}>Premium</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, background: "#080d18", padding: "20px 20px", overflowY: "hidden", display: "flex", flexDirection: "column", gap: 14 }}>

          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em" }}>Goedemiddag, Jan 👋</div>
              <div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>Overzicht · april 2025</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <div style={{ padding: "5px 12px", borderRadius: 8, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", fontSize: 11, color: "#64748b" }}>Deze maand</div>
            </div>
          </div>

          {/* Stat cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {[
              { label: "Totaal saldo",  value: "€18.432", sub: "+€340 deze maand",  color: "#4f8ef7",  bg: "rgba(79,142,247,0.1)"  },
              { label: "Inkomsten",     value: "€4.200",  sub: "april 2025",         color: "#22c55e",  bg: "rgba(34,197,94,0.1)"   },
              { label: "Uitgaven",      value: "€1.847",  sub: "44% van inkomsten",  color: "#f43f5e",  bg: "rgba(244,63,94,0.1)"   },
            ].map(s => (
              <div key={s.label} style={{
                background: "#0d1424", borderRadius: 12, padding: "14px 16px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}>
                <div style={{ fontSize: 10, color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>{s.label}</div>
                <div style={{ fontSize: 20, fontWeight: 800, color: s.color, letterSpacing: "-0.03em", fontVariantNumeric: "tabular-nums" }}>{s.value}</div>
                <div style={{ fontSize: 10, color: "#334155", marginTop: 4 }}>{s.sub}</div>
              </div>
            ))}
          </div>

          {/* Chart + Transactions row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, flex: 1, minHeight: 0 }}>

            {/* Cashflow chart */}
            <div style={{ background: "#0d1424", borderRadius: 12, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", marginBottom: 10 }}>Cashflow trend</div>
              <svg viewBox="0 0 380 90" width="100%" style={{ overflow: "visible" }}>
                <defs>
                  <linearGradient id="mg-area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4f8ef7" stopOpacity="0.3"/>
                    <stop offset="100%" stopColor="#4f8ef7" stopOpacity="0"/>
                  </linearGradient>
                  <linearGradient id="mg-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4f8ef7"/>
                    <stop offset="100%" stopColor="#a855f7"/>
                  </linearGradient>
                </defs>
                {/* Grid lines */}
                {[0, 30, 60, 90].map(y => (
                  <line key={y} x1="0" y1={y} x2="380" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                ))}
                <path d={areaD} fill="url(#mg-area)"/>
                <path d={lineD} fill="none" stroke="url(#mg-line)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                {/* Dot on last point */}
                <circle cx="380" cy="8" r="3.5" fill="#a855f7"/>
                <circle cx="380" cy="8" r="6" fill="#a855f7" opacity="0.2"/>
                {/* Month labels */}
                {["Jan","Feb","Mar","Apr"].map((m, i) => (
                  <text key={m} x={i * 120 + 10} y="88" fontSize="9" fill="#334155" fontWeight="600">{m}</text>
                ))}
              </svg>
              {/* Mini legend */}
              <div style={{ display: "flex", gap: 14, marginTop: 8 }}>
                <div style={{ fontSize: 10, color: "#475569" }}><span style={{ color: "#4f8ef7" }}>●</span> Inkomsten</div>
                <div style={{ fontSize: 10, color: "#475569" }}><span style={{ color: "#a855f7" }}>●</span> Uitgaven</div>
              </div>
            </div>

            {/* Recent transactions */}
            <div style={{ background: "#0d1424", borderRadius: 12, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.06)", overflow: "hidden" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8" }}>Recente transacties</div>
                <div style={{ fontSize: 10, color: "#4f8ef7", cursor: "pointer" }}>Alles zien →</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {txs.map(tx => (
                  <div key={tx.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 30, height: 30, borderRadius: 8, background: "rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>{tx.icon}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 11, fontWeight: 600, color: "#cbd5e1", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{tx.name}</div>
                      <div style={{ fontSize: 10, color: "#334155" }}>{tx.cat}</div>
                    </div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: tx.color, flexShrink: 0, fontVariantNumeric: "tabular-nums" }}>{tx.amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Investment Mockup ──────────────────────────────────────────
const ASSET_CONFIG = [
  { key: "BTC",  name: "Bitcoin",  symbol: "BTC",  color: "#f59e0b", icon: "₿",  startPrice: 62847,  startChange:  2.34, holdings: "0.42 BTC" },
  { key: "ETH",  name: "Ethereum", symbol: "ETH",  color: "#6366f1", icon: "Ξ",  startPrice: 3421,   startChange:  1.87, holdings: "5.2 ETH"  },
  { key: "AAPL", name: "Apple",    symbol: "AAPL", color: "#94a3b8", icon: "A",  startPrice: 189.45, startChange: -0.43, holdings: "85 aand." },
  { key: "GOLD", name: "Goud",     symbol: "XAU",  color: "#eab308", icon: "Au", startPrice: 2341,   startChange:  0.92, holdings: "12 oz"    },
];

function InvestmentMockup() {
  const [assets, setAssets] = useState(
    ASSET_CONFIG.map(a => ({ ...a, price: a.startPrice, change: a.startChange, flash: null as null | "up" | "down" }))
  );
  const [yValues, setYValues] = useState([72,65,68,60,64,54,58,48,55,43,50,38,44,32,39,28,35,24,30,19]);
  const [totalValue, setTotalValue] = useState(84231);
  const [totalFlash, setTotalFlash] = useState<null | "up" | "down">(null);

  useEffect(() => {
    const iv = setInterval(() => {
      setAssets(prev => prev.map(a => {
        const delta = (Math.random() - 0.47) * a.price * 0.002;
        return {
          ...a,
          price: a.price + delta,
          change: Math.max(-5, Math.min(8, a.change + (Math.random() - 0.5) * 0.08)),
          flash: delta > 0 ? "up" : "down",
        };
      }));
      setTimeout(() => setAssets(prev => prev.map(a => ({ ...a, flash: null }))), 350);
    }, 1600);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => {
      setYValues(prev => {
        const last = prev[prev.length - 1];
        const next = Math.max(8, Math.min(82, last + (Math.random() - 0.44) * 9));
        return [...prev.slice(1), next];
      });
    }, 700);
    return () => clearInterval(iv);
  }, []);

  useEffect(() => {
    const iv = setInterval(() => {
      const delta = (Math.random() - 0.47) * 90;
      setTotalValue(prev => prev + delta);
      setTotalFlash(delta > 0 ? "up" : "down");
      setTimeout(() => setTotalFlash(null), 350);
    }, 1600);
    return () => clearInterval(iv);
  }, []);

  const W = 380, H = 90;
  const pts = yValues.map((y, i) => [i * (W / (yValues.length - 1)), y]);
  const lineD = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");
  const areaD = lineD + ` L${pts[pts.length-1][0].toFixed(1)},${H} L0,${H} Z`;
  const lastPt = pts[pts.length - 1];

  const navItems = [
    { icon: "⊞",  label: "Dashboard",    active: false },
    { icon: "↕",  label: "Transacties",  active: false },
    { icon: "📈", label: "Investeren",   active: true  },
    { icon: "🎯", label: "Doelen",       active: false },
    { icon: "🔄", label: "Vaste lasten", active: false },
    { icon: "🧾", label: "Facturen",     active: false },
  ];

  return (
    <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.05)", background: "#0a1020", maxWidth: 980, width: "100%" }}>
      {/* Browser chrome */}
      <div style={{ height: 40, background: "#0d1526", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", padding: "0 16px", gap: 12 }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c, opacity: 0.85 }}/>)}
        </div>
        <div style={{ flex: 1, height: 24, background: "rgba(255,255,255,0.05)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: "#475569", fontWeight: 500 }}>
          🔒 app.dynafy.nl/investeren
        </div>
      </div>

      {/* Layout */}
      <div style={{ display: "flex", height: 480 }}>
        {/* Sidebar */}
        <div style={{ width: 188, background: "#070c1a", flexShrink: 0, borderRight: "1px solid rgba(255,255,255,0.05)", display: "flex", flexDirection: "column", padding: "16px 0" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 16px 20px" }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: "#070c1a", border: "1px solid rgba(79,142,247,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>〜</div>
            <span style={{ fontWeight: 800, fontSize: 14, color: "#f1f5f9", letterSpacing: "-0.02em" }}>Dynafy</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 2, padding: "0 8px" }}>
            {navItems.map(n => (
              <div key={n.label} style={{ display: "flex", alignItems: "center", gap: 9, padding: "8px 10px", borderRadius: 8, background: n.active ? "rgba(245,158,11,0.1)" : "transparent", color: n.active ? "#f59e0b" : "#475569", fontSize: 12, fontWeight: n.active ? 700 : 500 }}>
                <span style={{ fontSize: 13 }}>{n.icon}</span>{n.label}
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div style={{ flex: 1, background: "#080d18", padding: "20px", display: "flex", flexDirection: "column", gap: 14, overflow: "hidden" }}>
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em" }}>Portfolio overzicht</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 4 }}>
                <svg width="8" height="8"><circle cx="4" cy="4" r="4" fill="#22c55e" className="live-dot"/></svg>
                <span style={{ fontSize: 11, color: "#475569" }}>Live koersen</span>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 10, color: "#475569", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>Totaalwaarde</div>
              <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", color: totalFlash === "up" ? "#22c55e" : totalFlash === "down" ? "#f43f5e" : "#f1f5f9", transition: "color 0.2s", fontVariantNumeric: "tabular-nums" }}>
                €{Math.round(totalValue).toLocaleString("nl-NL")}
              </div>
              <div style={{ fontSize: 11, color: "#22c55e", marginTop: 2 }}>↑ +€1.847 deze maand</div>
            </div>
          </div>

          {/* Chart */}
          <div style={{ background: "#0d1424", borderRadius: 12, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8" }}>Portfolio waarde</div>
              <div style={{ display: "flex", gap: 6 }}>
                {["1D","1W","1M","1J"].map((t, i) => (
                  <div key={t} style={{ fontSize: 10, padding: "3px 8px", borderRadius: 5, background: i === 2 ? "rgba(245,158,11,0.15)" : "transparent", color: i === 2 ? "#f59e0b" : "#334155", fontWeight: 600, cursor: "pointer" }}>{t}</div>
                ))}
              </div>
            </div>
            <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ overflow: "visible" }}>
              <defs>
                <linearGradient id="inv-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="inv-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#f59e0b"/>
                  <stop offset="100%" stopColor="#22c55e"/>
                </linearGradient>
                <filter id="dot-glow">
                  <feGaussianBlur stdDeviation="2.5" result="blur"/>
                  <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
              {[0,30,60,90].map(y => <line key={y} x1="0" y1={y} x2={W} y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1"/>)}
              <path d={areaD} fill="url(#inv-area)"/>
              <path d={lineD} fill="none" stroke="url(#inv-line)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx={lastPt[0]} cy={lastPt[1]} r="12" fill="#22c55e" opacity="0.15" className="pulse-ring"/>
              <circle cx={lastPt[0]} cy={lastPt[1]} r="4" fill="#22c55e" filter="url(#dot-glow)"/>
            </svg>
          </div>

          {/* Asset cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
            {assets.map(a => (
              <div key={a.key} style={{ background: "#0d1424", border: `1px solid ${a.flash === "up" ? "rgba(34,197,94,0.3)" : a.flash === "down" ? "rgba(244,63,94,0.25)" : "rgba(255,255,255,0.06)"}`, borderRadius: 12, padding: "12px 14px", transition: "border-color 0.3s" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `${a.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: a.color }}>{a.icon}</div>
                  <div style={{ fontSize: 10, fontWeight: 700, color: a.change >= 0 ? "#22c55e" : "#f43f5e", background: a.change >= 0 ? "rgba(34,197,94,0.1)" : "rgba(244,63,94,0.1)", padding: "2px 6px", borderRadius: 4 }}>
                    {a.change >= 0 ? "+" : ""}{a.change.toFixed(2)}%
                  </div>
                </div>
                <div style={{ fontSize: 10, color: "#475569", fontWeight: 600, marginBottom: 3 }}>{a.name}</div>
                <div style={{ fontSize: 15, fontWeight: 800, color: a.flash === "up" ? "#22c55e" : a.flash === "down" ? "#f43f5e" : "#f1f5f9", transition: "color 0.25s", fontVariantNumeric: "tabular-nums", letterSpacing: "-0.02em" }}>
                  {a.key === "AAPL" ? `$${a.price.toFixed(2)}` : `€${Math.round(a.price).toLocaleString("nl-NL")}`}
                </div>
                <div style={{ fontSize: 10, color: "#334155", marginTop: 3 }}>{a.holdings}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── ZZP Mockup ─────────────────────────────────────────────────
const ZZP_STATUSES = [
  { key: "concept",   label: "Concept",   icon: "📝", color: "#94a3b8", bg: "rgba(148,163,184,0.12)" },
  { key: "verstuurd", label: "Verstuurd", icon: "📤", color: "#4f8ef7", bg: "rgba(79,142,247,0.12)"  },
  { key: "betaald",   label: "Betaald",   icon: "✓",  color: "#22c55e", bg: "rgba(34,197,94,0.12)"   },
] as const;

function ZZPMockup() {
  const [idx, setIdx] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const iv = setInterval(() => {
      setFading(true);
      setTimeout(() => { setIdx(p => (p + 1) % 3); setFading(false); }, 300);
    }, 3000);
    return () => clearInterval(iv);
  }, []);

  const st = ZZP_STATUSES[idx];

  const ctaLabel = idx === 0 ? "Versturen →" : idx === 1 ? "Markeer betaald" : "✓ Betaald";
  const ctaBg    = idx === 0 ? "linear-gradient(135deg,#a855f7,#6366f1)"
                 : idx === 1 ? "linear-gradient(135deg,#4f8ef7,#6366f1)"
                 : "linear-gradient(135deg,#22c55e,#16a34a)";

  const navItems = [
    { icon:"⊞",  label:"Dashboard",    active:false },
    { icon:"↕",  label:"Transacties",  active:false },
    { icon:"📈", label:"Investeren",   active:false },
    { icon:"🎯", label:"Doelen",       active:false },
    { icon:"🔄", label:"Vaste lasten", active:false },
    { icon:"🧾", label:"Facturen",     active:true  },
  ];

  const lineItems = [
    { desc:"Website ontwikkeling", amt:"€2.000,00" },
    { desc:"Onderhoud & support",  amt:"€400,00"   },
  ];

  const recentInvoices = [
    { num:"#1042", client:"TechStart BV",      amt:"€1.800", color:"#22c55e", label:"Betaald"   },
    { num:"#1041", client:"MediaGroep NL",     amt:"€3.200", color:"#4f8ef7", label:"Verstuurd" },
    { num:"#1040", client:"Innovatie Studio",  amt:"€950",   color:"#22c55e", label:"Betaald"   },
  ];

  return (
    <div style={{ borderRadius:16, overflow:"hidden", border:"1px solid rgba(255,255,255,0.1)", boxShadow:"0 40px 120px rgba(0,0,0,0.6)", background:"#0a1020", maxWidth:980, width:"100%" }}>
      {/* Browser chrome */}
      <div style={{ height:40, background:"#0d1526", borderBottom:"1px solid rgba(255,255,255,0.07)", display:"flex", alignItems:"center", padding:"0 16px", gap:12 }}>
        <div style={{ display:"flex", gap:6 }}>
          {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width:11, height:11, borderRadius:"50%", background:c, opacity:0.85 }}/>)}
        </div>
        <div style={{ flex:1, height:24, background:"rgba(255,255,255,0.05)", borderRadius:6, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, color:"#475569", fontWeight:500 }}>
          🔒 app.dynafy.nl/facturen/nieuw
        </div>
      </div>

      {/* App layout */}
      <div style={{ display:"flex", height:480 }}>

        {/* Sidebar */}
        <div style={{ width:188, background:"#070c1a", flexShrink:0, borderRight:"1px solid rgba(255,255,255,0.05)", display:"flex", flexDirection:"column", padding:"16px 0" }}>
          <div style={{ display:"flex", alignItems:"center", gap:8, padding:"0 16px 20px" }}>
            <div style={{ width:30, height:30, borderRadius:8, background:"#070c1a", border:"1px solid rgba(79,142,247,0.3)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14 }}>〜</div>
            <span style={{ fontWeight:800, fontSize:14, color:"#f1f5f9", letterSpacing:"-0.02em" }}>Dynafy</span>
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:2, padding:"0 8px" }}>
            {navItems.map(n => (
              <div key={n.label} style={{ display:"flex", alignItems:"center", gap:9, padding:"8px 10px", borderRadius:8, background:n.active ? "rgba(168,85,247,0.1)" : "transparent", color:n.active ? "#a855f7" : "#475569", fontSize:12, fontWeight:n.active ? 700 : 500 }}>
                <span style={{ fontSize:13 }}>{n.icon}</span>{n.label}
              </div>
            ))}
          </div>
          {/* Sidebar stats */}
          <div style={{ marginTop:"auto", padding:"12px 12px 0", borderTop:"1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ fontSize:10, color:"#334155", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:8 }}>Deze maand</div>
            {[["Omzet","€7.950","#22c55e"],["Facturen","4 stuks","#a855f7"],["Openstaand","€3.200","#f59e0b"]].map(([l,v,c]) => (
              <div key={l} style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                <span style={{ fontSize:11, color:"#475569" }}>{l}</span>
                <span style={{ fontSize:11, fontWeight:700, color:c }}>{v}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main */}
        <div style={{ flex:1, display:"flex", overflow:"hidden" }}>

          {/* Form panel */}
          <div style={{ flex:1, background:"#080d18", padding:"18px 20px", display:"flex", flexDirection:"column", gap:12, borderRight:"1px solid rgba(255,255,255,0.05)", overflow:"hidden" }}>

            {/* Header */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
              <div>
                <div style={{ fontSize:15, fontWeight:800, color:"#f1f5f9" }}>Factuur #1043</div>
                <div style={{ marginTop:6 }}>
                  <span style={{ padding:"3px 10px", borderRadius:20, background:fading ? "transparent" : st.bg, color:fading ? "transparent" : st.color, fontSize:11, fontWeight:700, transition:"all 0.25s" }}>
                    {st.icon} {st.label}
                  </span>
                </div>
              </div>
              <div style={{ padding:"8px 14px", borderRadius:9, background:ctaBg, color:"#fff", fontSize:12, fontWeight:700, cursor:"pointer", boxShadow:idx===0 ? "0 0 20px rgba(168,85,247,0.45)" : "none", transition:"all 0.4s", animation:idx===0 ? "pulse-glow 1.8s ease-in-out infinite" : "none" }}>
                {ctaLabel}
              </div>
            </div>

            {/* Klant */}
            <div>
              <div style={{ fontSize:10, color:"#475569", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:5 }}>Klant</div>
              <div style={{ background:"#0d1424", border:"1px solid rgba(168,85,247,0.2)", borderRadius:8, padding:"8px 12px", fontSize:12, color:"#f1f5f9", fontWeight:600 }}>Webdesign Studio BV</div>
            </div>

            {/* Dates */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
              {[["Factuurdatum","12 april 2025"],["Vervaldatum","26 april 2025"]].map(([l,v]) => (
                <div key={l}>
                  <div style={{ fontSize:10, color:"#475569", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:5 }}>{l}</div>
                  <div style={{ background:"#0d1424", border:"1px solid rgba(255,255,255,0.06)", borderRadius:8, padding:"8px 12px", fontSize:12, color:"#94a3b8" }}>{v}</div>
                </div>
              ))}
            </div>

            {/* Line items */}
            <div>
              <div style={{ fontSize:10, color:"#475569", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.06em", marginBottom:6 }}>Regels</div>
              <div style={{ display:"flex", flexDirection:"column", gap:5 }}>
                {lineItems.map(item => (
                  <div key={item.desc} style={{ display:"flex", alignItems:"center", gap:8, background:"#0d1424", border:"1px solid rgba(255,255,255,0.06)", borderRadius:8, padding:"7px 12px" }}>
                    <span style={{ flex:1, fontSize:11, color:"#cbd5e1" }}>{item.desc}</span>
                    <span style={{ fontSize:12, fontWeight:700, color:"#f1f5f9", fontVariantNumeric:"tabular-nums" }}>{item.amt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Totals */}
            <div style={{ borderTop:"1px solid rgba(255,255,255,0.06)", paddingTop:10 }}>
              {[["Subtotaal","€2.400,00",false],["BTW (21%)","€504,00",false],["Totaal","€2.904,00",true]].map(([l,v,bold]) => (
                <div key={l as string} style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                  <span style={{ fontSize:bold ? 13 : 11, color:bold ? "#f1f5f9" : "#475569", fontWeight:bold ? 700 : 500 }}>{l}</span>
                  <span style={{ fontSize:bold ? 14 : 12, color:bold ? "#f1f5f9" : "#64748b", fontWeight:700, fontVariantNumeric:"tabular-nums" }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Recent invoices */}
            <div style={{ marginTop:"auto", borderTop:"1px solid rgba(255,255,255,0.05)", paddingTop:10 }}>
              <div style={{ fontSize:10, color:"#334155", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:7 }}>Recente facturen</div>
              {recentInvoices.map(inv => (
                <div key={inv.num} style={{ display:"flex", alignItems:"center", gap:8, marginBottom:5 }}>
                  <span style={{ fontSize:11, color:"#334155", fontWeight:600, width:36 }}>{inv.num}</span>
                  <span style={{ flex:1, fontSize:11, color:"#475569" }}>{inv.client}</span>
                  <span style={{ fontSize:11, fontWeight:700, color:"#94a3b8", fontVariantNumeric:"tabular-nums" }}>{inv.amt}</span>
                  <span style={{ fontSize:10, color:inv.color, fontWeight:600 }}>✓</span>
                </div>
              ))}
            </div>
          </div>

          {/* Invoice preview — paper */}
          <div style={{ width:230, background:"#f8fafc", padding:"18px 16px", display:"flex", flexDirection:"column", gap:10, overflow:"hidden", flexShrink:0 }}>
            {/* Header */}
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
              <div>
                <div style={{ fontSize:11, fontWeight:800, color:"#0f172a" }}>Dynafy</div>
                <div style={{ fontSize:8, color:"#94a3b8" }}>app.dynafy.nl</div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:13, fontWeight:800, color:"#0f172a" }}>FACTUUR</div>
                <div style={{ fontSize:9, color:"#64748b" }}>#1043</div>
              </div>
            </div>
            <div style={{ height:1, background:"#e2e8f0" }}/>

            {/* Van / Aan */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
              {[["VAN","Jan de Vries","jan@dynafy.nl"],["AAN","Webdesign Studio BV","info@ws.nl"]].map(([l,n,s]) => (
                <div key={l}>
                  <div style={{ fontSize:7, color:"#94a3b8", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.08em", marginBottom:3 }}>{l}</div>
                  <div style={{ fontSize:9, fontWeight:700, color:"#0f172a" }}>{n}</div>
                  <div style={{ fontSize:8, color:"#94a3b8" }}>{s}</div>
                </div>
              ))}
            </div>

            {/* Dates */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
              {[["Datum","12 apr 2025"],["Vervalt","26 apr 2025"]].map(([l,v]) => (
                <div key={l}>
                  <div style={{ fontSize:7, color:"#94a3b8", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.08em" }}>{l}</div>
                  <div style={{ fontSize:9, color:"#334155", fontWeight:600 }}>{v}</div>
                </div>
              ))}
            </div>

            {/* Line items */}
            <div>
              <div style={{ display:"flex", justifyContent:"space-between", borderBottom:"1px solid #e2e8f0", paddingBottom:5, marginBottom:6 }}>
                {["Omschrijving","Bedrag"].map(h => <span key={h} style={{ fontSize:7, color:"#94a3b8", fontWeight:700, textTransform:"uppercase" }}>{h}</span>)}
              </div>
              {lineItems.map(item => (
                <div key={item.desc} style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                  <span style={{ fontSize:9, color:"#334155" }}>{item.desc}</span>
                  <span style={{ fontSize:9, color:"#334155", fontWeight:600 }}>{item.amt}</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div style={{ borderTop:"1px solid #e2e8f0", paddingTop:8, marginTop:"auto" }}>
              {[["Subtotaal","€2.400,00",false],["BTW 21%","€504,00",false],["Totaal","€2.904,00",true]].map(([l,v,bold]) => (
                <div key={l as string} style={{ display:"flex", justifyContent:"space-between", marginBottom:4 }}>
                  <span style={{ fontSize:bold ? 10 : 8, color:bold ? "#0f172a" : "#64748b", fontWeight:bold ? 800 : 500 }}>{l}</span>
                  <span style={{ fontSize:bold ? 10 : 8, color:bold ? "#0f172a" : "#64748b", fontWeight:bold ? 800 : 500 }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Status stamp */}
            <div style={{ display:"flex", justifyContent:"center", marginTop:4 }}>
              <div style={{
                padding:"5px 14px", borderRadius:4,
                border:`2.5px solid ${st.color}`,
                color:st.color, fontSize:12, fontWeight:800,
                textTransform:"uppercase", letterSpacing:"0.1em",
                opacity:fading ? 0 : 1,
                transform:`rotate(-8deg) scale(${fading ? 0.85 : 1})`,
                transition:"all 0.3s",
              }}>
                {st.label}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Components ─────────────────────────────────────────────────
function Stars({ n = 5 }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} style={{ color: "#f59e0b", fontSize: 14 }}>★</span>
      ))}
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        background: "#0d1424",
        border: `1px solid ${open ? "rgba(79,142,247,0.3)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: 14,
        padding: "20px 24px",
        cursor: "pointer",
        transition: "border-color 0.2s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <span style={{ fontSize: 15, fontWeight: 600, color: "#f1f5f9" }}>{q}</span>
        <span style={{
          width: 28, height: 28, borderRadius: 8, background: open ? "rgba(79,142,247,0.15)" : "rgba(255,255,255,0.05)",
          border: `1px solid ${open ? "rgba(79,142,247,0.3)" : "rgba(255,255,255,0.1)"}`,
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          color: open ? "#4f8ef7" : "#64748b", fontSize: 18, lineHeight: 1,
          transition: "all 0.2s", transform: open ? "rotate(45deg)" : "none",
        }}>+</span>
      </div>
      {open && (
        <p style={{ marginTop: 14, fontSize: 14, lineHeight: 1.75, color: "#94a3b8" }}>{a}</p>
      )}
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────
export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<'nl' | 'en'>('nl');

  const t = TRANSLATIONS[lang];

  const FEATURES    = lang === 'en' ? FEATURES_EN    : FEATURES_NL;
  const ZZP_FEATURES = lang === 'en' ? ZZP_FEATURES_EN : ZZP_FEATURES_NL;
  const PLANS       = lang === 'en' ? PLANS_EN       : PLANS_NL;
  const TESTIMONIALS = lang === 'en' ? TESTIMONIALS_EN : TESTIMONIALS_NL;
  const FAQS        = lang === 'en' ? FAQS_EN        : FAQS_NL;
  const STEPS       = lang === 'en' ? STEPS_EN       : STEPS_NL;

  return (
    <div style={{ minHeight: "100vh", background: "#080d18" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: 64, padding: "0 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "rgba(8,13,24,0.88)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}>
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <DynafyLogo size={36} />
          <span style={{ fontWeight: 800, fontSize: 18, color: "#f1f5f9", letterSpacing: "-0.02em" }}>Dynafy</span>
        </a>

        {/* Links */}
        <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {t.navLinks.map((l, i) => (
            <a key={l} href={t.navHrefs[i]}
              style={{ fontSize: 14, fontWeight: 500, color: "#64748b", textDecoration: "none", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#f1f5f9")}
              onMouseLeave={e => (e.currentTarget.style.color = "#64748b")}>
              {l}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Language switcher */}
          <div style={{ display: "flex", gap: 4, background: "rgba(255,255,255,0.05)", borderRadius: 8, padding: 3 }}>
            {(['nl', 'en'] as const).map(l => (
              <button key={l} onClick={() => setLang(l)} style={{
                padding: "4px 10px", borderRadius: 6, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 700,
                background: lang === l ? "rgba(79,142,247,0.25)" : "transparent",
                color: lang === l ? "#4f8ef7" : "#475569",
                textTransform: "uppercase", transition: "all 0.15s",
              }}>
                {l}
              </button>
            ))}
          </div>

          <a href="https://app.dynafy.nl" className="hide-mobile btn-ghost" style={{ padding: "9px 18px", fontSize: 14 }}>
            {t.login}
          </a>
          <a href="https://app.dynafy.nl?mode=register" className="btn-cta" style={{ padding: "9px 18px", fontSize: 14 }}>
            {t.ctaNav}
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        padding: "100px 40px 60px", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        {/* Background glows */}
        <div style={{
          position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)",
          width: 800, height: 400, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(79,142,247,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}/>
        <div style={{
          position: "absolute", top: "30%", left: "30%",
          width: 400, height: 400, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(168,85,247,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}/>

        <div style={{ maxWidth: 780, position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div className="anim-1" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 16px", borderRadius: 100, background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.25)", marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4f8ef7", display: "inline-block" }}/>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#4f8ef7" }}>{t.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="anim-2" style={{ fontSize: "clamp(38px, 6vw, 68px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24, color: "#f1f5f9" }}>
            {t.h1a}{" "}
            <span className="gradient-text">{t.h1b}</span>
            <br />{t.h1c}
          </h1>

          {/* Sub */}
          <p className="anim-3" style={{ fontSize: "clamp(16px, 2vw, 19px)", lineHeight: 1.7, color: "#64748b", marginBottom: 40, maxWidth: 560, margin: "0 auto 40px" }}>
            {t.heroSub}
          </p>

          {/* CTAs */}
          <div className="anim-4" style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            <a href="https://app.dynafy.nl?mode=register" className="btn-cta">
              {t.heroCta1} <Arrow />
            </a>
            <a href="#functies" className="btn-ghost">
              {t.heroCta2}
            </a>
          </div>

          {/* Trust line */}
          <p className="anim-5" style={{ fontSize: 13, color: "#334155" }}>
            {t.trustLine}
          </p>
        </div>
      </section>

      {/* ── APP PREVIEW ── */}
      <section style={{ padding: "0 40px 100px", position: "relative" }}>
        {/* Gradient glow behind mockup */}
        <div style={{
          position: "absolute", top: "40%", left: "50%", transform: "translate(-50%,-50%)",
          width: 900, height: 400, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(79,142,247,0.1) 0%, rgba(168,85,247,0.06) 50%, transparent 70%)",
          pointerEvents: "none", zIndex: 0,
        }}/>
        <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
          {/* Label */}
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#4f8ef7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>{t.appPreviewLabel}</div>
            <p style={{ fontSize: 15, color: "#475569", marginTop: 10 }}>
              {t.appPreviewSub}
            </p>
          </div>

          {/* Mockup */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <AppMockup />
          </div>
        </div>
      </section>

      {/* ── SOCIAL PROOF BAR ── */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "28px 40px", background: "rgba(13,20,36,0.6)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "clamp(24px, 5vw, 80px)", flexWrap: "wrap" }}>
          {[
            { val: "500+", label: t.stat1Label },
            { val: "4.9★", label: t.stat2Label },
            { val: "€0",   label: t.stat3Label },
          ].map(s => (
            <div key={s.val} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 26, fontWeight: 800, color: "#4f8ef7", fontFamily: "monospace", letterSpacing: "-0.02em" }}>{s.val}</div>
              <div style={{ fontSize: 12, color: "#475569", marginTop: 3, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section id="functies" style={{ padding: "100px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#4f8ef7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>{t.featuresLabel}</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#f1f5f9", marginBottom: 16 }}>
            {t.featuresH2a}<br />{t.featuresH2b}
          </h2>
          <p style={{ fontSize: 16, color: "#64748b", maxWidth: 480, margin: "0 auto" }}>
            {t.featuresSub}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
          {FEATURES.map(f => (
            <div key={f.title} className="card" style={{ padding: 28 }}>
              <div style={{ width: 48, height: 48, borderRadius: 13, background: `${f.color}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 18 }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9", marginBottom: 8 }}>{f.title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: "#64748b" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "80px 40px", background: "rgba(13,20,36,0.5)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#22c55e", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>{t.howLabel}</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#f1f5f9" }}>
              {t.howH2}
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
            {STEPS.map((s, i) => (
              <div key={s.num} style={{ position: "relative", textAlign: "center", padding: "0 20px" }}>
                <div style={{ width: 64, height: 64, borderRadius: 18, background: `${s.color}14`, border: `1px solid ${s.color}30`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px", fontSize: 22, fontWeight: 800, color: s.color, fontFamily: "monospace" }}>
                  {s.num}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#f1f5f9", marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: "#64748b" }}>{s.desc}</p>
                {i < STEPS.length - 1 && (
                  <div className="hide-mobile" style={{ position: "absolute", top: 30, right: -16, fontSize: 20, color: "#1e293b" }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INVESTMENT SHOWCASE ── */}
      <section style={{ padding: "100px 40px", background: "rgba(13,20,36,0.5)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(245,158,11,0.07) 0%, transparent 70%)", pointerEvents: "none" }}/>
        <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#f59e0b", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>{t.investLabel}</div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.02em", marginBottom: 14 }}>
              {t.investH2}
            </h2>
            <p style={{ fontSize: 15, color: "#64748b", maxWidth: 460, margin: "0 auto" }}>
              {t.investSub}
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <InvestmentMockup />
          </div>
        </div>
      </section>

      {/* ── ZZP SECTION ── */}
      <section id="zzp" style={{ padding: "100px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Left */}
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#a855f7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>{t.zzpLabel}</div>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#f1f5f9", marginBottom: 16, lineHeight: 1.15 }}>
              {t.zzpH2a}{" "}
              <span style={{ background: "linear-gradient(135deg, #a855f7, #4f8ef7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{t.zzpH2b}</span>
              <br />{t.zzpH2c}
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#64748b", marginBottom: 32 }}>
              {t.zzpSub}
            </p>
            <a href="https://app.dynafy.nl?mode=register" className="btn-cta" style={{ background: "linear-gradient(135deg, #a855f7, #6366f1)", boxShadow: "0 4px 24px rgba(168,85,247,0.35)" }}>
              {t.zzpCta} <Arrow />
            </a>
          </div>

          {/* Right — feature grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {ZZP_FEATURES.map(f => (
              <div key={f.title} style={{ background: "#0d1424", border: "1px solid rgba(168,85,247,0.12)", borderRadius: 14, padding: "18px 20px", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(168,85,247,0.12)")}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{f.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9", marginBottom: 4 }}>{f.title}</div>
                <div style={{ fontSize: 12, color: "#64748b", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ZZP MOCKUP ── */}
      <section style={{ padding:"100px 40px", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:700, height:400, borderRadius:"50%", background:"radial-gradient(ellipse, rgba(168,85,247,0.07) 0%, transparent 70%)", pointerEvents:"none" }}/>
        <div style={{ maxWidth:1000, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div style={{ fontSize:13, fontWeight:700, color:"#a855f7", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:12 }}>{t.zzpMockupLabel}</div>
            <h2 style={{ fontSize:"clamp(26px, 3.5vw, 40px)", fontWeight:800, color:"#f1f5f9", letterSpacing:"-0.02em", marginBottom:14 }}>
              {t.zzpMockupH2}
            </h2>
            <p style={{ fontSize:15, color:"#64748b", maxWidth:460, margin:"0 auto" }}>
              {t.zzpMockupSub}
            </p>
          </div>
          <div style={{ display:"flex", justifyContent:"center" }}>
            <ZZPMockup />
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="prijzen" style={{ padding: "100px 40px", background: "rgba(13,20,36,0.4)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#f59e0b", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>{t.pricingLabel}</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#f1f5f9", marginBottom: 16 }}>
              {t.pricingH2}
            </h2>
            <p style={{ fontSize: 15, color: "#64748b" }}>{t.pricingSub}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {PLANS.map(plan => (
              <div key={plan.name} style={{
                background: plan.featured ? "linear-gradient(135deg, rgba(168,85,247,0.08), rgba(79,142,247,0.04))" : "#0d1424",
                border: `1px solid ${plan.featured ? "rgba(168,85,247,0.4)" : plan.name === "Premium" ? "rgba(79,142,247,0.3)" : "rgba(255,255,255,0.07)"}`,
                borderRadius: 20,
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 20,
                position: "relative",
                boxShadow: plan.featured ? "0 0 40px rgba(168,85,247,0.12)" : "none",
                transition: "transform 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-4px)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}>

                {plan.badge && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", padding: "5px 14px", borderRadius: 100, background: "linear-gradient(135deg, #a855f7, #6366f1)", fontSize: 11, fontWeight: 700, color: "#fff", whiteSpace: "nowrap" }}>
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: plan.color, marginBottom: 4 }}>{plan.name}</div>
                  <div style={{ fontSize: 11, color: "#475569" }}>{plan.desc}</div>
                </div>

                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                    <span style={{ fontSize: 38, fontWeight: 800, color: "#f1f5f9", letterSpacing: "-0.03em", fontFamily: "monospace" }}>{plan.price}</span>
                    <span style={{ fontSize: 14, color: "#475569" }}>{plan.per}</span>
                  </div>
                  {"yearly" in plan && plan.yearly && <div style={{ fontSize: 11, color: "#334155", marginTop: 4 }}>{plan.yearly}</div>}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 9, flex: 1 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "#94a3b8" }}>
                      <span style={{ color: plan.color, marginTop: 1, flexShrink: 0 }}><Check /></span>
                      {f}
                    </div>
                  ))}
                </div>

                <a href="https://app.dynafy.nl?mode=register" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  padding: "12px", borderRadius: 11,
                  background: plan.ctaStyle === "purple" ? "linear-gradient(135deg, #a855f7, #6366f1)"
                    : plan.ctaStyle === "blue" ? "linear-gradient(135deg, #4f8ef7, #6366f1)"
                    : plan.ctaStyle === "amber" ? "linear-gradient(135deg, #f59e0b, #f97316)"
                    : "rgba(255,255,255,0.06)",
                  border: plan.ctaStyle === "ghost" ? "1px solid rgba(255,255,255,0.1)" : "none",
                  color: plan.ctaStyle === "ghost" ? "#64748b" : "#fff",
                  fontSize: 13, fontWeight: 700, textDecoration: "none", cursor: "pointer",
                  boxShadow: plan.featured ? "0 4px 20px rgba(168,85,247,0.3)" : "none",
                  transition: "opacity 0.15s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}>
                  {plan.cta} {plan.ctaStyle !== "ghost" && <Arrow />}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "100px 40px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#22c55e", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>{t.testimonialsLabel}</div>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#f1f5f9" }}>
            {t.testimonialsH2}
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {TESTIMONIALS.map(t => (
            <div key={t.name} className="card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 20 }}>
              <Stars n={t.stars} />
              <p style={{ fontSize: 14, lineHeight: 1.8, color: "#94a3b8", flex: 1 }}>&ldquo;{t.quote}&rdquo;</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: `${t.color}20`, border: `1px solid ${t.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: t.color, flexShrink: 0 }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#f1f5f9" }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#475569" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ padding: "80px 40px", background: "rgba(13,20,36,0.4)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#4f8ef7", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>{t.faqLabel}</div>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#f1f5f9" }}>
              {t.faqH2}
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FAQS.map(f => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ padding: "100px 40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 600, height: 300, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(79,142,247,0.1) 0%, transparent 70%)", pointerEvents: "none" }}/>
        <div style={{ maxWidth: 600, margin: "0 auto", position: "relative" }}>
          <h2 style={{ fontSize: "clamp(30px, 5vw, 52px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#f1f5f9", marginBottom: 20, lineHeight: 1.15 }}>
            {t.finalH2a}<br />{t.finalH2b}{" "}
            <span className="gradient-text">{t.finalH2c}</span>
          </h2>
          <p style={{ fontSize: 16, color: "#64748b", marginBottom: 40 }}>
            {t.finalSub}
          </p>
          <a href="https://app.dynafy.nl?mode=register" className="btn-cta" style={{ fontSize: 17, padding: "17px 36px" }}>
            {t.finalCta} <Arrow />
          </a>
          <p style={{ marginTop: 20, fontSize: 13, color: "#334155" }}>
            {t.finalSocial}
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "40px 40px", background: "#060b14" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <DynafyLogo size={30} />
            <span style={{ fontWeight: 700, fontSize: 15, color: "#94a3b8" }}>Dynafy</span>
          </div>

          {/* Links */}
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            {t.footerLinks.map((l, i) => (
              <a key={l} href={t.footerLinksHrefs[i]} style={{ fontSize: 13, color: "#334155", textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#64748b")}
                onMouseLeave={e => (e.currentTarget.style.color = "#334155")}>
                {l}
              </a>
            ))}
          </div>

          <p style={{ fontSize: 13, color: "#1e293b" }}>
            &copy; {new Date().getFullYear()} Dynafy &middot; {t.footerCopy}
          </p>
        </div>
      </footer>

    </div>
  );
}
