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
  openingHours: "Mo 08:30-19:00, Di 09:00-19:00, Mi 10:00-19:00, Do 10:00-19:00, Fr 10:00-19:00, Sa 11:00-15:00, So geschlossen",
  mapsUrl: "https://www.google.com/maps/place/Leo+Hackl+Coaching/@47.2889657,8.5706351,17z",
  whatsappUrl: "https://wa.me/41794335072",
  sameAs: [
    "https://www.google.com/maps/place/Leo+Hackl+Coaching/@47.2889657,8.5706351,17z",
    "https://wa.me/41794335072",
  ],
};

export const DEFAULT_OG_IMAGE = BUSINESS.image;

export const GOOGLE_REVIEWS = {
  rating: "5,0",
  count: 17,
  url: "https://www.google.com/maps/place/Leo+Hackl+Coaching/@47.2889657,8.5706351,17z/data=!3m1!4b1!4m6!3m5!1s0x479aa881fc3855a5:0x4b08a8aa8cc1de1e!8m2!3d47.2889657!4d8.5706351!16s%2Fg%2F1tcv0ddk",
};

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
    description: "Impressum von Leo Hackl Coaching. Kontaktdaten, Unternehmensinformationen und rechtliche Angaben.",
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
  "/bewertungen": {
    title: "Bewertungen | Leo Hackl Coaching – 5,0 Sterne auf Google",
    description: "Leo Hackl Coaching hat 17 Google-Bewertungen mit 5,0 Sternen. Lesen Sie, was Klienten über die psychologische Beratung in Thalwil berichten.",
    canonicalPath: "/bewertungen",
  },
  "/blog": {
    title: "Blog | Leo Hackl Coaching – Ratgeber zu Ängsten, Burnout & Psychologie",
    description: "Fundierte Ratgeber und Tipps rund um Ängste, Phobien, Burnout, Verhaltensmuster und psychologische Beratung. Einblicke aus 30 Jahren Praxis und 2'000 gelösten Fällen.",
    canonicalPath: "/blog",
  },
};

// ── Schema-Generatoren ────────────────────────────────────────────

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description: BUSINESS.description,
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: BUSINESS.logo,
    },
    image: BUSINESS.image,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      postalCode: BUSINESS.postalCode,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
      contactType: "customer service",
      areaServed: "CH",
      availableLanguage: ["German"],
    },
    sameAs: BUSINESS.sameAs,
    founder: {
      "@type": "Person",
      name: "Leo Hackl",
      jobTitle: "Psychologischer Berater & Systemischer Hypnotherapeut",
    },
    employee: {
      "@type": "Person",
      name: "Leo Hackl",
      jobTitle: "Psychologischer Berater & Systemischer Hypnotherapeut",
    },
    knowsAbout: [
      "Psychologische Beratung",
      "Angstbehandlung",
      "Phobieauflösung",
      "Hypnosystemische Therapie",
      "Burnout-Behandlung",
      "Verhaltensmuster-Auflösung",
      "Neuroplastizität",
      "Systemische Hypnotherapie",
    ],
    areaServed: BUSINESS.areaServed,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS.name,
    alternateName: "Hackl Coaching",
    url: BASE_URL,
    description: BUSINESS.description,
    inLanguage: "de-CH",
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: {
        "@type": "ImageObject",
        url: BUSINESS.logo,
      },
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leo Hackl",
    jobTitle: "Psychologischer Berater & Systemischer Hypnotherapeut",
    description:
      "Psychologe und systemischer Hypnotherapeut mit über 30 Jahren praktischer Erfahrung. Hat über 2'000 Klienten bei der Auflösung von Ängsten, Phobien, Verhaltensmustern und Burnout begleitet.",
    image: "https://www.hacklcoaching.ch/wp-content/uploads/2010/10/Leone.jpeg",
    url: `${BASE_URL}/ueber-mich`,
    worksFor: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: BASE_URL,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      postalCode: BUSINESS.postalCode,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    knowsAbout: [
      "Psychologische Beratung",
      "Angstbehandlung",
      "Phobieauflösung",
      "Hypnosystemische Therapie",
      "Burnout-Behandlung",
      "Verhaltensmuster-Auflösung",
      "Neuroplastizität",
      "Systemische Hypnotherapie",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Psychologiestudium",
    },
    sameAs: BUSINESS.sameAs,
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
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "08:30", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Wednesday", "Thursday", "Friday"], opens: "10:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "11:00", closes: "15:00" },
    ],
    sameAs: BUSINESS.sameAs,
    hasMap: BUSINESS.mapsUrl,
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

export function reviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    image: BUSINESS.image,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      postalCode: BUSINESS.postalCode,
      addressRegion: BUSINESS.addressRegion,
      addressCountry: BUSINESS.addressCountry,
    },
    telephone: BUSINESS.phone,
    url: BASE_URL,
    priceRange: BUSINESS.priceRange,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "17",
      bestRating: "5",
      worstRating: "1",
    },
  };
}