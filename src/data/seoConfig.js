// Zentrale SEO-Konfiguration – alle Meta-Daten, Schema-Generatoren und Geschäftsdaten.
// Wird von der <Seo>-Komponente auf jeder Seite verwendet.

export const BASE_URL = "https://hacklcoaching.meister-flow.ch";

export const BUSINESS = {
  name: "Leo Hackl Coaching",
  legalName: "Leo Hackl Coaching",
  description: "Psychologische Beratung in Thalwil. Auflösung von Ängsten, Phobien, Verhaltensmustern und Burnout – mit über 2'000 gelösten Fällen und 30 Jahren Erfahrung.",
  streetAddress: "Zehntenstrasse 17",
  addressLocality: "Thalwil",
  postalCode: "8800",
  addressRegion: "Zürich",
  addressCountry: "CH",
  phone: "+41447728979",
  phoneDisplay: "044 772 89 79",
  mobileDisplay: "079 433 50 72",
  email: "info@hacklcoaching.ch",
  url: BASE_URL,
  logo: "https://media.base44.com/images/public/6ac4ae046d53c41e9b937a32/bb186175f_logo.png",
  image: "https://www.hacklcoaching.ch/wp-content/uploads/2014/11/Leo-Hackl-CD.jpg",
  geo: { lat: 47.2889657, lng: 8.5706351 },
  priceRange: "$$",
  areaServed: "Schweiz",
  openingHours: "Mo-Fr 08:00-19:00",
  mapsUrl: "https://www.google.com/maps/place/Leo+Hackl+Coaching/@47.2889657,8.5706351,17z",
};

export const DEFAULT_OG_IMAGE = BUSINESS.image;

// ── Seiten-Meta-Daten (statische Seiten) ──────────────────────────
export const PAGE_META = {
  "/": {
    title: "Leo Hackl Coaching – Psychologische Beratung Thalwil | Ängste, Phobien, Verhaltensmuster",
    description: "Psychologische Beratung in Thalwil. Leo Hackl löst Ängste, Phobien, Selbstsabotage und Burnout nachhaltig – mit über 2'000 gelösten Fällen und 30 Jahren Erfahrung.",
    canonicalPath: "/",
  },
  "/aengste": {
    title: "Ängste & Phobien auflösen | Leo Hackl Coaching Thalwil",
    description: "Flugangst, Prüfungsangst, Panikattacken, Platzangst – Ängste und Phobien in 1–3 Sitzungen dauerhaft auflösen. Sanfte hypnosystemische Methode. Über 90% Erfolgsquote.",
    canonicalPath: "/aengste",
  },
  "/verhaltensmuster": {
    title: "Verhaltensmuster & Selbstsabotage auflösen | Leo Hackl Coaching",
    description: "Destruktive Gewohnheiten, emotionales Essen, Prokrastination – hypnosystemische Auflösung an der Wurzel. Oft in 1–3 intensiven Sitzungen dauerhaft verändert.",
    canonicalPath: "/verhaltensmuster",
  },
  "/burnout": {
    title: "Burnout & Belastungsdepression überwinden | Leo Hackl Coaching",
    description: "Burnout ist Belastungsdepression. Wir finden die Ursachen, lösen belastende Muster und bauen neue innere Stabilität auf. Authentische Lösungen statt blosser Auszeit.",
    canonicalPath: "/burnout",
  },
  "/beziehungskonflikte": {
    title: "Beziehungskonflikte lösen | Leo Hackl Coaching Thalwil",
    description: "Verständnisvolle Begleitung bei Beziehungskonflikten in Partnerschaft, Familie und Beruf. Dauerhafte Lösungen durch Auflösung der zugrundeliegenden Konfliktmuster.",
    canonicalPath: "/beziehungskonflikte",
  },
  "/ueber-mich": {
    title: "Über Leo Hackl – Psychologische Beratung mit 30 Jahren Erfahrung",
    description: "Leo Hackl, Psychologe und systemischer Hypnotherapeut in Thalwil. Über 2'000 gelöste Fälle in 30 Jahren Praxisarbeit. Lernen Sie den Menschen hinter der Methode kennen.",
    canonicalPath: "/ueber-mich",
  },
  "/erfahrungsberichte": {
    title: "Erfahrungsberichte | Leo Hackl Coaching – Was Klienten berichten",
    description: "Authentische Erfahrungsberichte von Klienten, die Ängste, Phobien, Burnout und Verhaltensmuster mit Leo Hackl nachhaltig aufgelöst haben. Lesen Sie, was sie erlebt haben.",
    canonicalPath: "/erfahrungsberichte",
  },
  "/prinzip-der-aufloesung": {
    title: "Das Prinzip der Auflösung – Hirnforschung trifft Psychologie",
    description: "Die Methode von Leo Hackl: neuronale Plastizität nutzt die Fähigkeit des Gehirns, sich neu zu verdrahten. So lassen sich Ängste und Phobien restlos und dauerhaft auflösen.",
    canonicalPath: "/prinzip-der-aufloesung",
  },
  "/kontakt": {
    title: "Kontakt & Termin anfragen | Leo Hackl Coaching Thalwil",
    description: "Vereinbaren Sie Ihr persönliches Erstgespräch in Thalwil. Telefon 044 772 89 79 oder Kontaktformular. Praxis an der Zehntenstrasse 17, wenige Minuten vom Bahnhof.",
    canonicalPath: "/kontakt",
  },
  "/impressum": {
    title: "Impressum | Leo Hackl Coaching",
    description: "Impressum und Anbieterkennzeichnung von Leo Hackl Coaching, Thalwil.",
    canonicalPath: "/impressum",
  },
  "/datenschutz": {
    title: "Datenschutzerklärung | Leo Hackl Coaching",
    description: "Datenschutzerklärung von Leo Hackl Coaching. Informationen zur Verarbeitung personenbezogener Daten und Ihren Rechten.",
    canonicalPath: "/datenschutz",
  },
  "/regionen": {
    title: "Regionen | Leo Hackl Coaching – Psychologische Beratung",
    description: "Psychologische Beratung in Ihrer Region: Thalwil, Zürich, Horgen, Meilen, Wädenswil, Kilchberg, Rüschlikon, Adliswil, Erlenbach, Langnau am Albis.",
    canonicalPath: "/regionen",
  },
  "/dienstleistungen": {
    title: "Dienstleistungen | Leo Hackl Coaching – Psychologische Beratung",
    description: "Alle Dienstleistungen von Leo Hackl Coaching: Ängste & Phobien, Verhaltensmuster & Selbstsabotage, Burnout & Belastungsdepression, Beziehungskonflikte. Nachhaltig auflösen.",
    canonicalPath: "/dienstleistungen",
  },
  "/faq": {
    title: "FAQ – Häufige Fragen | Leo Hackl Coaching",
    description: "Antworten auf häufige Fragen zur psychologischen Beratung bei Leo Hackl: Ablauf, Kosten, Dauer, Vertraulichkeit, Praxis in Thalwil und Online-Beratung.",
    canonicalPath: "/faq",
  },
};

// ── Schema-Generatoren ────────────────────────────────────────────

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS.name,
    url: BASE_URL,
    logo: BUSINESS.logo,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    description: BUSINESS.description,
    image: BUSINESS.image,
    logo: BUSINESS.logo,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      postalCode: BUSINESS.postalCode,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    url: BASE_URL,
    priceRange: BUSINESS.priceRange,
    areaServed: BUSINESS.areaServed,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    sameAs: [
      "https://www.google.com/maps/place/Leo+Hackl+Coaching/@47.2889657,8.5706351,17z",
    ],
  };
}

export function serviceSchema(service, regionName) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    name: regionName ? `${service.title} in ${regionName}` : service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.streetAddress,
        addressLocality: BUSINESS.addressLocality,
        postalCode: BUSINESS.postalCode,
        addressCountry: BUSINESS.addressCountry,
      },
    },
    areaServed: regionName
      ? { "@type": "City", name: regionName }
      : { "@type": "Country", name: "Schweiz" },
    url: regionName
      ? `${BASE_URL}/${service.slug}-${regionName.toLowerCase().replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue")}`
      : `${BASE_URL}${service.link}`,
  };
}

export function faqPageSchema(faqItems) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: item.to ? `${BASE_URL}${item.to}` : undefined,
    })),
  };
}

export function reviewSchema(testimonials) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWorkSeries",
    name: "Erfahrungsberichte – Leo Hackl Coaching",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(testimonials.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      reviewBody: t.text,
      author: { "@type": "Person", name: t.author },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
    })),
  };
}