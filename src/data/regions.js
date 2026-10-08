// Gemeinsame Daten für alle Regionseiten
export const sharedRegionData = {
  firma: "Leo Hackl Coaching",
  hauptleistung: "Psychologische Beratung",
  telefon: "044 772 89 79",
  telefonMobil: "079 433 50 72",
  email: "info@hacklcoaching.ch",
  adresse: "Zehntenstrasse 17, 8800 Thalwil",
  oeffnungszeiten: "Mo 08:30–19:00, Di 09:00–19:00, Mi–Fr 10:00–19:00, Sa 11:00–15:00, So geschlossen",
  mapsUrl: "https://www.google.com/maps/place/Leo+Hackl+Coaching/@47.2889657,8.5706351,17z",
  trust: [
    { icon: "ShieldCheck", title: "30 Jahre Erfahrung", description: "Über 2'000 gelöste Fälle" },
    { icon: "HeartHandshake", title: "Menschlich & persönlich", description: "Individuelle Beratung, kein Schema F" },
    { icon: "Zap", title: "Schnelle Ergebnisse", description: "Oft nach 1–3 Sitzungen spürbar" },
    { icon: "Pill", title: "Ohne Medikamente", description: "Natürliche Neuroplastizität nutzen" }
  ],
  services: [
    {
      title: "Ängste & Phobien",
      description: "Prüfungsangst, Flugangst, Platzangst, soziale Ängste und spezifische Phobien – wir lösen das zugrundeliegende Muster, nicht nur die Symptome. Die meisten Ängste verschwinden bereits nach ein bis drei Sitzungen dauerhaft.",
      link: "/aengste"
    },
    {
      title: "Verhaltensmuster & Selbstsabotage",
      description: "Dekstruktive Gewohnheiten, Prokrastination, emotionales Essen, Kontrollverlust – wir identifizieren das Ursprungsmuster und lösen es an der Wurzel auf, damit neue gesunde Routinen natürlich entstehen können.",
      link: "/verhaltensmuster"
    },
    {
      title: "Burnout & Belastungsdepression",
      description: "Erschöpfung, Schlafstörungen, emotionale Abstumpfung, Verlust der Lebensfreude – wir helfen Ihnen, die Ursachen zu verstehen und schrittweise wieder in Balance zu kommen, ohne jahrelange Therapie.",
      link: "/burnout"
    }
  ],
  otherServices: [
    { name: "Ängste & Phobien", link: "/aengste" },
    { name: "Verhaltensmuster & Selbstsabotage", link: "/verhaltensmuster" },
    { name: "Burnout & Belastungsdepression", link: "/burnout" },
    { name: "Beziehungskonflikte", link: "/beziehungskonflikte" },
    { name: "Prinzip der Auflösung", link: "/prinzip-der-aufloesung" },
    { name: "Erfahrungsberichte", link: "/erfahrungsberichte" },
    { name: "Über Leo Hackl", link: "/ueber-mich" },
    { name: "Kontakt & Termin", link: "/kontakt" }
  ]
};

// Einzigartige Daten pro Region
export const regions = [
  {
    slug: "psychologische-beratung-thalwil",
    ort: "Thalwil",
    region: "Kanton Zürich",
    metaTitle: "Psychologische Beratung Thalwil | Leo Hackl Coaching",
    metaDescription: "Psychologische Beratung in Thalwil: Ängste, Phobien & Burnout nachhaltig auflösen. 30 Jahre Erfahrung, über 2'000 gelöste Fälle. Termin vereinbaren.",
    h1: "Psychologische Beratung in Thalwil – frei von Ängsten und Blockaden",
    hero: {
      eyebrow: "Ihre Praxis in Thalwil",
      description: "Sie wohnen in Thalwil und suchen psychologische Beratung, die wirklich wirkt? Bei Leo Hackl Coaching lösen wir Ängste, Phobien und destruktive Verhaltensmuster nachhaltig – mit über 30 Jahren Erfahrung und mehr als 2'000 gelösten Fällen. Vereinbaren Sie heute Ihr persönliches Erstgespräch an der Zehntenstrasse."
    },
    intro: {
      title: "Psychologische Beratung direkt am Zürichsee",
      text: "Thalwil ist mehr als ein Pendlerort. Wer hier lebt, schätzt die Nähe zur Stadt und die Ruhe am Wasser. Doch auch im idyllischen Thalwil kennen Menschen Ängste, Stress und Lebenskrisen. Vielleicht spüren Sie seit Wochen eine innere Unruhe, die nicht verschwindet. Vielleicht vermeiden Sie Situationen, die früher selbstverständlich waren. Vielleicht fühlen Sie sich erschöpft, obwohl der Alltag äusserlich gut aussieht. Psychologische Beratung in Thalwil bedeutet bei Leo Hackl Coaching: Sie müssen nicht jahrelang leiden. Die meisten Ängste und Blockaden lassen sich in wenigen Sitzungen auflösen – nachhaltig und ohne Medikamente. Sie kommen in die Praxis an der Zehntenstrasse, nur wenige Gehminuten vom Bahnhof Thalwil entfernt, und gehen mit einem konkreten Plan nach Hause."
    },
    whyUs: [
      { headline: "Direkt am Bahnhof Thalwil", description: "Praxis an der Zehntenstrasse – wenige Minuten vom Bahnhof entfernt." },
      { headline: "30 Jahre Erfahrung", description: "Über 2'000 gelöste Fälle in drei Jahrzehnten Praxisarbeit." },
      { headline: "Schnelle, spürbare Ergebnisse", description: "Oft bereits nach ein bis drei Sitzungen erste Veränderungen." },
      { headline: "Persönlich und menschlich", description: "Individuelle Beratung statt Schema F – Sie stehen im Zentrum." },
      { headline: "Nachhaltig ohne Medikamente", description: "Die Methode nutzt die natürliche Neuroplastizität Ihres Gehirns." }
    ],
    faq: [
      { question: "Was kostet eine psychologische Beratung in Thalwil?", answer: "Die Kosten hängen vom Aufwand und der Anzahl Sitzungen ab. In einem kostenlosen Erstgespräch klären wir Ihren Bedarf und erstellen eine transparente Offerte. Die meisten Klienten benötigen zwischen einer und fünf Sitzungen." },
      { question: "Wie lange dauert eine Sitzung in Thalwil?", answer: "Eine Sitzung dauert in der Regel zwischen 60 und 90 Minuten. Die genaue Länge hängt vom Thema und Ihrem Bedarf ab. Wir nehmen uns die Zeit, die notwendig ist – ohne Hektik und ohne überflüssige Folgesitzungen." },
      { question: "Wie viele Sitzungen brauche ich bei Ängsten?", answer: "Viele Ängste und Phobien lassen sich bereits in ein bis drei Sitzungen auflösen. Komplexere Verhaltensmuster oder Burnout können mehrere Sitzungen erfordern. Wir besprechen den voraussichtlichen Aufwand offen im ersten Gespräch." },
      { question: "Ist die Praxis in Thalwil gut erreichbar?", answer: "Ja, die Praxis an der Zehntenstrasse 17 liegt nur wenige Gehminuten vom Bahnhof Thalwil entfernt. Mit dem Auto sind Sie über die Seestrasse in zwei Minuten da. Parkplätze sind in der Nähe verfügbar." },
      { question: "Tut die psychologische Behandlung weh?", answer: "Nein. Die Methode arbeitet sanft und respektvoll mit Ihren inneren Bildern und Mustern. Sie bleiben jederzeit Herr des Geschehens. Die meisten Klienten empfinden die Sitzungen als befreiend und angenehm." },
      { question: "Bieten Sie auch Online-Beratung an?", answer: "Ja, auf Wunsch führen wir Sitzungen auch per Video durch. Das ist praktisch, wenn Sie ausserhalb von Thalwil wohnen oder beruflich viel unterwegs sind. Die Wirksamkeit ist vergleichbar mit Präsenzsitzungen." }
    ],
    serviceArea: ["Thalwil", "Rüschlikon", "Kilchberg", "Oberrieden", "Horgen", "Langnau am Albis", "Adliswil", "Zürich Wollishofen", "Zürich Enge", "Zürich Wiedikon"],
    finalCta: { title: "Bereit für Veränderung?", text: "Vereinbaren Sie heute Ihr kostenloses Erstgespräch in Thalwil und machen Sie den ersten Schritt in ein freieres Leben." }
  },

  {
    slug: "psychologische-beratung-zuerich",
    ort: "Zürich",
    region: "Kanton Zürich",
    metaTitle: "Psychologische Beratung Zürich | Leo Hackl Coaching",
    metaDescription: "Psychologische Beratung für Zürich: Ängste, Burnout & Verhaltensmuster nachhaltig auflösen. 15 Min. ab Zürich HB. Über 2'000 gelöste Fälle.",
    h1: "Psychologische Beratung für Zürich – nachhaltige Lösungen statt Symptombehandlung",
    hero: {
      eyebrow: "15 Minuten ab Zürich HB",
      description: "Sie leben oder arbeiten in Zürich und suchen psychologische Beratung, die an der Wurzel ansetzt? Leo Hackl Coaching in Thalwil ist mit der S-Bahn in 15 Minuten ab Zürich Hauptbahnhof erreichbar. Wir lösen Ängste, Phobien, Burnout und destruktive Verhaltensmuster – nachhaltig, schnell und persönlich."
    },
    intro: {
      title: "Wenn Zürich Sie fordert",
      text: "Zürich ist dynamisch, international und schnell. Wer hier arbeitet, leistet oft viel – und zahlt einen Preis. Schlafprobleme, innere Unruhe und Erschöpfung sind in Zürich keine Seltenheit. Vielleicht spüren Sie den Druck, funktionieren zu müssen, während Sie innerlich längst eine Pause bräuchten. Vielleicht vermeiden Sie Präsentationen oder soziale Anlässe, obwohl Sie wissen, dass es Ihre Entwicklung begrenzt. Psychologische Beratung bei Leo Hackl Coaching heisst: Sie müssen nicht ewig daran tragen. Die Praxis in Thalwil ist von Zürich aus schnell und bequem erreichbar – und Sie profitieren von einer Methode, die in 30 Jahren über 2'000 Menschen geholfen hat, ihre Blockaden nachhaltig aufzulösen. Ohne Medikamente, ohne jahrelange Therapie, ohne Schmerz."
    },
    whyUs: [
      { headline: "Schnell ab Zürich erreichbar", description: "15 Minuten mit der S-Bahn ab Zürich HB bis Thalwil." },
      { headline: "Diskret und vertraulich", description: "Ausserhalb der Zürcher Innenstadt – ohne Bekanntenbegegnungen." },
      { headline: "Flexible Termine", description: "Auch ausserhalb der Bürozeiten für anspruchsvolle Kalender." },
      { headline: "30 Jahre bewährte Methode", description: "Über 2'000 gelöste Fälle – von Führungskräften bis Studierenden." },
      { headline: "Medikamentenfrei und nachhaltig", description: "Die Methode nutzt die natürliche Plastizität Ihres Gehirns." }
    ],
    faq: [
      { question: "Wie komme ich von Zürich zur Praxis?", answer: "Mit der S-Bahn (Linien 2, 8 oder 24) sind Sie in 15 Minuten ab Zürich HB in Thalwil. Die Praxis an der Zehntenstrasse liegt wenige Gehminuten vom Bahnhof entfernt. Mit dem Auto benötigen Sie über die Seestrasse etwa 20 Minuten." },
      { question: "Was kostet eine psychologische Beratung für Zürich?", answer: "Die Kosten richten sich nach Aufwand und Anzahl Sitzungen. Im kostenlosen Erstgespräch klären wir Ihren Bedarf und geben Ihnen eine transparente Offerte. Die meisten Klienten aus Zürich benötigen zwischen einer und fünf Sitzungen." },
      { question: "Wie viele Sitzungen brauche ich?", answer: "Viele Themen wie Ängste oder Phobien lassen sich in ein bis drei Sitzungen auflösen. Burnout oder tiefere Verhaltensmuster können mehr Sitzungen erfordern. Wir besprechen den voraussichtlichen Aufwand offen im Erstgespräch." },
      { question: "Sind Termine ausserhalb der Bürozeiten möglich?", answer: "Ja, wir bieten flexible Termine auch ausserhalb der klassischen Bürozeiten an – ideal für Zürcher Klienten mit anspruchsvollen Terminkalendern. Vereinbaren Sie einen Zeitpunkt, der zu Ihrem Rhythmus passt." },
      { question: "Bieten Sie Online-Beratung für Zürich an?", answer: "Ja, auf Wunsch führen wir Sitzungen per Video durch. Das ist praktisch, wenn Sie in Zürich beruflich eingespannt sind oder von zu Hause aus arbeiten. Die Wirksamkeit ist vergleichbar mit Präsenzsitzungen." },
      { question: "Ist die Beratung diskret?", answer: "Absolut. Die Praxis in Thalwil liegt ausserhalb der Zürcher Innenstadt – die Wahrscheinlichkeit, Bekannte zu treffen, ist minimal. Alle Inhalte bleiben strikt vertraulich." }
    ],
    serviceArea: ["Zürich", "Zürich Enge", "Zürich Wollishofen", "Zürich Wiedikon", "Zürich Hottingen", "Zürich Seefeld", "Kilchberg", "Thalwil", "Zollikon", "Küsnacht"],
    finalCta: { title: "Gestalten Sie Ihren nächsten Schritt", text: "Kommen Sie von Zürich in die Praxis nach Thalwil und vereinbaren Sie Ihr kostenloses Erstgespräch – schnell, diskret und nachhaltig." }
  },

  {
    slug: "psychologische-beratung-horgen",
    ort: "Horgen",
    region: "Kanton Zürich",
    metaTitle: "Psychologische Beratung Horgen | Leo Hackl Coaching",
    metaDescription: "Psychologische Beratung in Horgen: Ängste, Phobien & Burnout nachhaltig auflösen. 5 Min. bis zur Praxis in Thalwil. Über 2'000 gelöste Fälle.",
    h1: "Psychologische Beratung in Horgen – Ängste und Blockaden auflösen",
    hero: {
      eyebrow: "Nachbarpraxis in Thalwil",
      description: "Sie leben in Horgen und suchen psychologische Beratung in Ihrer Nähe? Die Praxis von Leo Hackl Coaching in Thalwil ist nur fünf Minuten entfernt. Wir lösen Ängste, Phobien, Burnout und destruktive Verhaltensmuster nachhaltig – mit über 30 Jahren Erfahrung und mehr als 2'000 gelösten Fällen."
    },
    intro: {
      title: "Beratung für die Horgener Gemeinschaft",
      text: "Horgen ist gewachsen. Aus dem einstigen Industrieort am See ist eine lebendige Gemeinde mit Familien, Pendlern und Selbstständigen geworden. Mit dem Wachstum kommen auch neue Belastungen: Leistungsdruck, Familienkonflikte, Existenzsorgen. Vielleicht spüren Sie eine Angst, die Sie nicht erklären können. Vielleicht stecken Sie in einer Lebenskrise, die alle Strukturierungskräfte übersteigt. Vielleicht haben Sie das Gefühl, in einer Schleife festzusitzen, die Sie selbst nicht durchbrechen können. Psychologische Beratung in der Nachbarschaft – in Thalwil, nur wenige Minuten von Horgen entfernt – bedeutet kurze Wege und schnelle Hilfe. Leo Hackl Coaching arbeitet mit einer Methode, die in 30 Jahren über 2'000 Menschen geholfen hat. Die meisten Blockaden lassen sich in wenigen Sitzungen auflösen, ohne Medikamente und ohne jahrelange Therapie."
    },
    whyUs: [
      { headline: "Nur 5 Minuten entfernt", description: "Thalwil liegt direkt neben Horgen – kürzeste Anfahrt am See." },
      { headline: "Vertraut aus der Region", description: "Leo Hackl kennt die See-Gemeinden und ihre Menschen seit Jahrzehnten." },
      { headline: "Schnelle Termine", description: "Oft innerhalb von wenigen Tagen – ohne lange Wartezeit." },
      { headline: "Für Familien und Pendler", description: "Flexible Zeiten, die in den Horgener Alltag passen." },
      { headline: "Nachhaltig und sanft", description: "Die Methode arbeitet mit der natürlichen Neuroplastizität." }
    ],
    faq: [
      { question: "Wie weit ist die Praxis von Horgen entfernt?", answer: "Die Praxis in Thalwil ist von Horgen aus in etwa fünf Minuten mit dem Auto oder zehn Minuten mit der S-Bahn erreichbar. Die Zehntenstrasse liegt direkt am See, wenige Gehminuten vom Bahnhof Thalwil entfernt." },
      { question: "Was kostet eine psychologische Beratung für Horgen?", answer: "Die Kosten richten sich nach Aufwand und Anzahl Sitzungen. Im kostenlosen Erstgespräch klären wir Ihren Bedarf und geben Ihnen eine transparente Offerte. Die meisten Klienten aus Horgen benötigen zwischen einer und fünf Sitzungen." },
      { question: "Wie viele Sitzungen sind nötig?", answer: "Viele Ängste und Phobien lassen sich in ein bis drei Sitzungen auflösen. Burnout oder tiefere Verhaltensmuster erfordern oft mehr Sitzungen. Wir besprechen den voraussichtlichen Aufwand offen im Erstgespräch." },
      { question: "Helfen Sie auch bei Familienkonflikten?", answer: "Ja, Beziehungskonflikte und familiäre Belastungen sind ein wesentlicher Teil unserer Arbeit. Wir helfen Ihnen, die zugrundeliegenden Muster zu erkennen und schrittweise aufzulösen – einzeln oder als Paar." },
      { question: "Bieten Sie Online-Beratung an?", answer: "Ja, auf Wunsch führen wir Sitzungen per Video durch. Das ist praktisch, wenn Sie in Horgen beruflich eingespannt sind oder von zu Hause aus arbeiten. Die Wirksamkeit ist vergleichbar mit Präsenzsitzungen." },
      { question: "Ist die Behandlung schmerzhaft?", answer: "Nein. Die Methode arbeitet sanft und respektvoll mit Ihren inneren Bildern und Mustern. Sie bleiben jederzeit Herr des Geschehens. Die meisten Klienten empfinden die Sitzungen als befreiend." }
    ],
    serviceArea: ["Horgen", "Thalwil", "Wädenswil", "Oberrieden", "Meilen", "Richterswil", "Kilchberg", "Langnau am Albis", "Zürich Wollishofen", "Hirzel"],
    finalCta: { title: "Der erste Schritt ist der wichtigste", text: "Vereinbaren Sie Ihr kostenloses Erstgespräch – nur fünf Minuten von Horgen entfernt in Thalwil." }
  },

  {
    slug: "psychologische-beratung-meilen",
    ort: "Meilen",
    region: "Kanton Zürich",
    metaTitle: "Psychologische Beratung Meilen | Leo Hackl Coaching",
    metaDescription: "Psychologische Beratung für Meilen: Ängste, Perfektionismus & Burnout nachhaltig auflösen. Über 2'000 gelöste Fälle. Termin vereinbaren.",
    h1: "Psychologische Beratung für Meilen – nachhaltig frei von Ängsten",
    hero: {
      eyebrow: "Goldküste & Seestrasse",
      description: "Sie leben an der Goldküste in Meilen und suchen psychologische Beratung, die diskret und wirksam ist? Leo Hackl Coaching in Thalwil ist in wenigen Minuten erreichbar. Wir lösen Ängste, Perfektionismus, Burnout und destruktive Verhaltensmuster – nachhaltig, persönlich und ohne Medikamente."
    },
    intro: {
      title: "Wenn hohe Erwartung zur Last wird",
      text: "Meilen steht für Lebensqualität am Zürichsee. Doch hinter den schönen Fassaden der Goldküste leben Menschen mit den gleichen Ängsten wie überall: Perfektionsdruck, Leistungsangst, Beziehungskrisen, Erschöpfung. Vielleicht spüren Sie, dass Sie sich selbst immer höhere Massstäbe setzen, bis nichts mehr gut genug ist. Vielleicht vermeiden Sie Situationen, in denen Sie nicht als vollkommen erscheinen. Vielleicht haben Sie das Gefühl, äusserlich zu funktionieren, während Sie innerlich längst erschöpft sind. Psychologische Beratung bei Leo Hackl Coaching in Thalwil – nur wenige Minuten von Meilen entfernt – bietet Ihnen einen geschützten Raum, in dem Sie ohne Masken sein können. Die Methode von Leo Hackl hat in 30 Jahren über 2'000 Menschen geholfen, ihre inneren Blockaden nachhaltig aufzulösen. Ohne Medikamente, ohne Schmerz, oft in nur wenigen Sitzungen."
    },
    whyUs: [
      { headline: "Diskret am Seeufer", description: "Thalwil liegt ausserhalb des direkten Goldküsten-Umlaufs – maximale Diskretion." },
      { headline: "Erfahrung mit Anspruch", description: "Leo Hackl kennt die Dynamik hoher Erwartungen seit Jahrzehnten." },
      { headline: "Schnelle, spürbare Wirkung", description: "Oft bereits nach ein bis drei Sitzungen erste Veränderungen." },
      { headline: "Persönliche Begleitung", description: "Individuelle Beratung statt Schema F – Sie stehen im Zentrum." },
      { headline: "Medikamentenfrei", description: "Die Methode nutzt die natürliche Neuroplastizität Ihres Gehirns." }
    ],
    faq: [
      { question: "Wie komme ich von Meilen zur Praxis?", answer: "Mit dem Auto sind Sie von Meilen über die Seestrasse in etwa 10 bis 15 Minuten in Thalwil. Alternativ erreichen Sie die Praxis mit der S-Bahn über Zürich oder mit dem Schiff ab Meilen nach Thalwil – eine malerische Fahrt." },
      { question: "Was kostet eine psychologische Beratung für Meilen?", answer: "Die Kosten richten sich nach Aufwand und Anzahl Sitzungen. Im kostenlosen Erstgespräch klären wir Ihren Bedarf und geben Ihnen eine transparente Offerte. Die meisten Klienten aus Meilen benötigen zwischen einer und fünf Sitzungen." },
      { question: "Helfen Sie bei Perfektionismus?", answer: "Ja, Perfektionismus ist ein häufiges Thema. Wir helfen Ihnen, das zugrundeliegende Muster zu erkennen und aufzulösen, damit Sie wieder mit Leichtigkeit und ohne ständigen Druck leben können – oft in nur wenigen Sitzungen." },
      { question: "Wie viele Sitzungen brauche ich?", answer: "Viele Themen wie Ängste oder Phobien lassen sich in ein bis drei Sitzungen auflösen. Burnout oder tiefere Verhaltensmuster können mehr Sitzungen erfordern. Wir besprechen den Aufwand offen im Erstgespräch." },
      { question: "Ist die Beratung vertraulich?", answer: "Absolut. Die Praxis in Thalwil liegt ausserhalb des direkten Goldküsten-Umlaufs. Die Wahrscheinlichkeit, Bekannte zu treffen, ist minimal. Alle Inhalte bleiben strikt vertraulich." },
      { question: "Bieten Sie Online-Beratung an?", answer: "Ja, auf Wunsch führen wir Sitzungen per Video durch. Das ist praktisch, wenn Sie in Meilen beruflich eingespannt sind. Die Wirksamkeit ist vergleichbar mit Präsenzsitzungen." }
    ],
    serviceArea: ["Meilen", "Erlenbach", "Küsnacht", "Zollikon", "Uetikon am See", "Männedorf", "Stäfa", "Thalwil", "Herrliberg", "Zürich Goldbach"],
    finalCta: { title: "Leben ohne ständigen Druck", text: "Vereinbaren Sie Ihr kostenloses Erstgespräch in Thalwil – diskret, schnell und nur wenige Minuten von Meilen entfernt." }
  },

  {
    slug: "psychologische-beratung-waedenswil",
    ort: "Wädenswil",
    region: "Kanton Zürich",
    metaTitle: "Psychologische Beratung Wädenswil | Leo Hackl Coaching",
    metaDescription: "Psychologische Beratung in Wädenswil: Ängste, Blockaden & Burnout nachhaltig auflösen. 10 Min. bis zur Praxis. Über 2'000 gelöste Fälle.",
    h1: "Psychologische Beratung in Wädenswil – Blockaden überwinden",
    hero: {
      eyebrow: "Am linken Seeufer",
      description: "Sie wohnen in Wädenswil und suchen psychologische Beratung, die wirklich hilft? Leo Hackl Coaching in Thalwil ist in zehn Minuten erreichbar. Wir lösen Ängste, Phobien, Burnout und destruktive Verhaltensmuster nachhaltig – mit über 30 Jahren Erfahrung und mehr als 2'000 gelösten Fällen."
    },
    intro: {
      title: "Wenn der Alltag Sie überholt",
      text: "Wädenswil ist eine wachsende Gemeinde am linken Seeufer. Junge Familien, Pendler, Studierende der ZHAW – die Vielfalt bringt Lebendigkeit, aber auch Belastungen. Vielleicht spüren Sie seit der Geburt Ihres Kindes eine Angst, die Sie sich nicht erklären können. Vielleicht stecken Sie in einer Lebensphase, in der alles gleichzeitig verlangt wird: Beruf, Beziehung, Familie. Vielleicht haben Sie das Gefühl, dass eine innere Stimme Sie immer wieder bremst, obwohl Sie längst wissen, wohin Sie wollen. Psychologische Beratung in der Nachbarschaft – in Thalwil, nur zehn Minuten von Wädenswil entfernt – bedeutet kurze Wege und schnelle Hilfe. Leo Hackl Coaching arbeitet mit einer Methode, die in 30 Jahren über 2'000 Menschen geholfen hat, ihre Blockaden nachhaltig aufzulösen. Ohne Medikamente, ohne Schmerz, oft in nur wenigen Sitzungen."
    },
    whyUs: [
      { headline: "10 Minuten entfernt", description: "Thalwil liegt direkt nördlich von Wädenswil am Seeufer." },
      { headline: "Für junge Familien", description: "Leo Hackl kennt die Lebensrealität wachsender Gemeinden." },
      { headline: "Schnelle Termine", description: "Oft innerhalb weniger Tage – ohne lange Wartezeit." },
      { headline: "Persönlich und unkompliziert", description: "Individuelle Beratung in vertrauensvoller Atmosphäre." },
      { headline: "Nachhaltig ohne Medikamente", description: "Die Methode nutzt die natürliche Neuroplastizität." }
    ],
    faq: [
      { question: "Wie weit ist die Praxis von Wädenswil entfernt?", answer: "Die Praxis in Thalwil ist von Wädenswil in etwa zehn Minuten mit dem Auto oder 15 Minuten mit der S-Bahn erreichbar. Die Zehntenstrasse liegt direkt am See, wenige Gehminuten vom Bahnhof Thalwil." },
      { question: "Was kostet eine psychologische Beratung für Wädenswil?", answer: "Die Kosten richten sich nach Aufwand und Anzahl Sitzungen. Im kostenlosen Erstgespräch klären wir Ihren Bedarf und geben Ihnen eine transparente Offerte. Die meisten Klienten benötigen zwischen einer und fünf Sitzungen." },
      { question: "Helfen Sie auch bei Familienängsten?", answer: "Ja, Ängste rund um Familie, Kinder und Verantwortung sind ein häufiges Thema. Wir helfen Ihnen, die zugrundeliegenden Muster zu erkennen und aufzulösen, damit Sie wieder mit Freude und Gelassenheit leben können." },
      { question: "Wie viele Sitzungen brauche ich?", answer: "Viele Ängste und Phobien lassen sich in ein bis drei Sitzungen auflösen. Burnout oder tiefere Verhaltensmuster erfordern oft mehr Sitzungen. Wir besprechen den Aufwand offen im Erstgespräch." },
      { question: "Bieten Sie Online-Beratung an?", answer: "Ja, auf Wunsch führen wir Sitzungen per Video durch. Das ist praktisch für Wädenswiler Klienten mit jungen Kindern oder engen Terminkalendern. Die Wirksamkeit ist vergleichbar mit Präsenzsitzungen." },
      { question: "Ist die Behandlung schmerzhaft?", answer: "Nein. Die Methode arbeitet sanft und respektvoll mit Ihren inneren Bildern und Mustern. Sie bleiben jederzeit Herr des Geschehens. Die meisten Klienten empfinden die Sitzungen als befreiend." }
    ],
    serviceArea: ["Wädenswil", "Richterswil", "Horgen", "Thalwil", "Schönenberg", "Hirzel", "Oberrieden", "Wädenswil Zentrum", "Wädenswil Oberdorf", "Samstagern"],
    finalCta: { title: "Gehen Sie den ersten Schritt", text: "Vereinbaren Sie Ihr kostenloses Erstgespräch in Thalwil – nur zehn Minuten von Wädenswil entfernt." }
  },

  {
    slug: "psychologische-beratung-kilchberg",
    ort: "Kilchberg",
    region: "Kanton Zürich",
    metaTitle: "Psychologische Beratung Kilchberg | Leo Hackl Coaching",
    metaDescription: "Psychologische Beratung für Kilchberg: Ängste, Perfektionismus & Burnout nachhaltig auflösen. 5 Min. bis zur Praxis. Über 2'000 gelöste Fälle.",
    h1: "Psychologische Beratung für Kilchberg – persönliche Lösungen",
    hero: {
      eyebrow: "Exklusiv am See",
      description: "Sie leben in Kilchberg und suchen psychologische Beratung, die diskret und wirksam ist? Leo Hackl Coaching in Thalwil ist in fünf Minuten erreichbar. Wir lösen Ängste, Perfektionismus, Burnout und destruktive Verhaltensmuster – nachhaltig, persönlich und ohne Medikamente."
    },
    intro: {
      title: "Wenn äussere Vollkommenheit nicht genügt",
      text: "Kilchberg ist eine der begehrtesten Wohnlagen am Zürichsee. Wer hier lebt, hat viel erreicht – und trägt oft eine unsichtbare Last. Hohe Erwartungen an sich selbst, der Druck, alles unter Kontrolle zu haben, die Angst, den Anschein zu verlieren. Vielleicht spüren Sie eine innere Unruhe, die sich nicht mit äusserem Erfolg beruhigen lässt. Vielleicht vermeiden Sie Situationen, in denen Sie verletzlich wirken könnten. Vielleicht haben Sie das Gefühl, dass Ihr Leben von aussen perfekt aussieht, während Sie innerlich längst erschöpft sind. Psychologische Beratung in der Nachbarschaft – in Thalwil, nur fünf Minuten von Kilchberg entfernt – bietet Ihnen einen geschützten Raum, in dem Sie ohne Masken sein können. Die Methode von Leo Hackl hat in 30 Jahren über 2'000 Menschen geholfen, ihre inneren Blockaden nachhaltig aufzulösen. Ohne Medikamente, ohne Schmerz, oft in nur wenigen Sitzungen."
    },
    whyUs: [
      { headline: "5 Minuten am Seeufer", description: "Thalwil liegt direkt neben Kilchberg – kürzeste Anfahrt." },
      { headline: "Maximale Diskretion", description: "Ausserhalb des direkten Kilchberger Umlaufs – vertraulich und geschützt." },
      { headline: "Erfahrung mit Anspruch", description: "Leo Hackl kennt die Dynamik hoher Erwartungen seit Jahrzehnten." },
      { headline: "Schnelle, spürbare Wirkung", description: "Oft bereits nach ein bis drei Sitzungen erste Veränderungen." },
      { headline: "Medikamentenfrei", description: "Die Methode nutzt die natürliche Neuroplastizität Ihres Gehirns." }
    ],
    faq: [
      { question: "Wie komme ich von Kilchberg zur Praxis?", answer: "Die Praxis in Thalwil ist von Kilchberg in etwa fünf Minuten mit dem Auto oder zehn Minuten mit der S-Bahn erreichbar. Die Zehntenstrasse liegt direkt am See, wenige Gehminuten vom Bahnhof Thalwil entfernt." },
      { question: "Was kostet eine psychologische Beratung für Kilchberg?", answer: "Die Kosten richten sich nach Aufwand und Anzahl Sitzungen. Im kostenlosen Erstgespräch klären wir Ihren Bedarf und geben Ihnen eine transparente Offerte. Die meisten Klienten aus Kilchberg benötigen zwischen einer und fünf Sitzungen." },
      { question: "Helfen Sie bei Perfektionismus?", answer: "Ja, Perfektionismus und Leistungsangst sind häufige Themen. Wir helfen Ihnen, das zugrundeliegende Muster zu erkennen und aufzulösen, damit Sie wieder mit Leichtigkeit leben können – oft in nur wenigen Sitzungen." },
      { question: "Ist die Beratung diskret?", answer: "Absolut. Die Praxis in Thalwil liegt ausserhalb des direkten Kilchberger Umlaufs. Die Wahrscheinlichkeit, Bekannte zu treffen, ist minimal. Alle Inhalte bleiben strikt vertraulich." },
      { question: "Wie viele Sitzungen brauche ich?", answer: "Viele Ängste und Phobien lassen sich in ein bis drei Sitzungen auflösen. Burnout oder tiefere Verhaltensmuster können mehr Sitzungen erfordern. Wir besprechen den Aufwand offen im Erstgespräch." },
      { question: "Bieten Sie Online-Beratung an?", answer: "Ja, auf Wunsch führen wir Sitzungen per Video durch. Das ist praktisch, wenn Sie in Kilchberg beruflich eingespannt sind. Die Wirksamkeit ist vergleichbar mit Präsenzsitzungen." }
    ],
    serviceArea: ["Kilchberg", "Rüschlikon", "Thalwil", "Zürich Wollishofen", "Zürich Enge", "Zürich Wiedikon", "Oberrieden", "Horgen", "Adliswil", "Zürich Leimbach"],
    finalCta: { title: "Frei sein hinter der Fassade", text: "Vereinbaren Sie Ihr kostenloses Erstgespräch in Thalwil – diskret, schnell und nur fünf Minuten von Kilchberg entfernt." }
  },

  {
    slug: "psychologische-beratung-rueschlikon",
    ort: "Rüschlikon",
    region: "Kanton Zürich",
    metaTitle: "Psychologische Beratung Rüschlikon | Leo Hackl Coaching",
    metaDescription: "Psychologische Beratung in Rüschlikon: Ängste & Blockaden nachhaltig auflösen. 3 Min. bis zur Praxis in Thalwil. Über 2'000 gelöste Fälle.",
    h1: "Psychologische Beratung in Rüschlikon – Ruhe finden",
    hero: {
      eyebrow: "Ruhige Nachbargemeinde",
      description: "Sie leben in Rüschlikon und suchen psychologische Beratung in unmittelbarer Nähe? Leo Hackl Coaching in Thalwil ist nur drei Minuten entfernt. Wir lösen Ängste, Phobien, Burnout und destruktive Verhaltensmuster nachhaltig – mit über 30 Jahren Erfahrung und mehr als 2'000 gelösten Fällen."
    },
    intro: {
      title: "Wenn die Ruhe trügt",
      text: "Rüschlikon gilt als eine der ruhigsten Gemeinden am Zürichsee. Doch auch im idyllischen Rüschlikon kennen Menschen Ängste, Lebenskrisen und innere Blockaden. Vielleicht spüren Sie seit einer Lebensveränderung – einer Trennung, einem Berufswechsel, einem Verlust – eine Angst, die sich nicht mit Vernunft beruhigen lässt. Vielleicht stecken Sie in einer Phase, in der alles äusserlich stabil wirkt, während Sie innerlich längst erschöpft sind. Vielleicht haben Sie das Gefühl, dass eine innere Stimme Sie immer wieder bremst, obwohl Sie längst wissen, wohin Sie wollen. Psychologische Beratung in der direkten Nachbarschaft – in Thalwil, nur drei Minuten von Rüschlikon entfernt – bedeutet kürzeste Wege und schnelle Hilfe. Leo Hackl Coaching arbeitet mit einer Methode, die in 30 Jahren über 2'000 Menschen geholfen hat, ihre Blockaden nachhaltig aufzulösen. Ohne Medikamente, ohne Schmerz, oft in nur wenigen Sitzungen."
    },
    whyUs: [
      { headline: "3 Minuten entfernt", description: "Thalwil liegt direkt neben Rüschlikon – kürzeste Anfahrt am See." },
      { headline: "Vertraut aus der Nachbarschaft", description: "Leo Hackl kennt die See-Gemeinden und ihre Menschen seit Jahrzehnten." },
      { headline: "Schnelle Termine", description: "Oft innerhalb weniger Tage – ohne lange Wartezeit." },
      { headline: "Persönlich und ruhig", description: "Individuelle Beratung in vertrauensvoller Atmosphäre." },
      { headline: "Nachhaltig ohne Medikamente", description: "Die Methode nutzt die natürliche Neuroplastizität." }
    ],
    faq: [
      { question: "Wie weit ist die Praxis von Rüschlikon entfernt?", answer: "Die Praxis in Thalwil ist von Rüschlikon in etwa drei Minuten mit dem Auto oder fünf Minuten mit der S-Bahn erreichbar. Die Zehntenstrasse liegt direkt am See, wenige Gehminuten vom Bahnhof Thalwil." },
      { question: "Was kostet eine psychologische Beratung für Rüschlikon?", answer: "Die Kosten richten sich nach Aufwand und Anzahl Sitzungen. Im kostenlosen Erstgespräch klären wir Ihren Bedarf und geben Ihnen eine transparente Offerte. Die meisten Klienten benötigen zwischen einer und fünf Sitzungen." },
      { question: "Helfen Sie bei Lebenskrisen?", answer: "Ja, Lebenskrisen, Übergangsphasen und Verlusterlebnisse sind häufige Themen. Wir helfen Ihnen, die zugrundeliegenden Muster zu erkennen und aufzulösen, damit Sie wieder Klarheit und Lebensfreude finden." },
      { question: "Wie viele Sitzungen brauche ich?", answer: "Viele Ängste und Phobien lassen sich in ein bis drei Sitzungen auflösen. Burnout oder tiefere Verhaltensmuster erfordern oft mehr Sitzungen. Wir besprechen den Aufwand offen im Erstgespräch." },
      { question: "Bieten Sie Online-Beratung an?", answer: "Ja, auf Wunsch führen wir Sitzungen per Video durch. Das ist praktisch, wenn Sie in Rüschlikon beruflich eingespannt sind. Die Wirksamkeit ist vergleichbar mit Präsenzsitzungen." },
      { question: "Ist die Behandlung schmerzhaft?", answer: "Nein. Die Methode arbeitet sanft und respektvoll mit Ihren inneren Bildern und Mustern. Sie bleiben jederzeit Herr des Geschehens. Die meisten Klienten empfinden die Sitzungen als befreiend." }
    ],
    serviceArea: ["Rüschlikon", "Thalwil", "Kilchberg", "Horgen", "Oberrieden", "Zürich Wollishofen", "Zürich Enge", "Adliswil", "Langnau am Albis", "Zürich Leimbach"],
    finalCta: { title: "Zurück zur inneren Klarheit", text: "Vereinbaren Sie Ihr kostenloses Erstgespräch in Thalwil – nur drei Minuten von Rüschlikon entfernt." }
  },

  {
    slug: "psychologische-beratung-adliswil",
    ort: "Adliswil",
    region: "Kanton Zürich",
    metaTitle: "Psychologische Beratung Adliswil | Leo Hackl Coaching",
    metaDescription: "Psychologische Beratung für Adliswil: Stress, Ängste & Burnout nachhaltig auflösen. 5 Min. bis zur Praxis. Über 2'000 gelöste Fälle.",
    h1: "Psychologische Beratung für Adliswil – Stress und Ängste auflösen",
    hero: {
      eyebrow: "Am Fuss des Albis",
      description: "Sie leben in Adliswil und suchen psychologische Beratung, die an der Wurzel ansetzt? Leo Hackl Coaching in Thalwil ist in fünf Minuten erreichbar. Wir lösen Ängste, Phobien, Burnout und destruktive Verhaltensmuster nachhaltig – mit über 30 Jahren Erfahrung und mehr als 2'000 gelösten Fällen."
    },
    intro: {
      title: "Wenn der Berg nicht reicht",
      text: "Adliswil liegt am Fuss des Albis – nah an der Natur und doch nah an der Stadt. Wer hier wohnt, schätzt die Balance – und spürt dennoch den Druck des modernen Lebens. Stress, Schlafprobleme, innere Unruhe, Ängste, die sich schleichend aufbauen. Vielleicht spüren Sie eine Anspannung, die auch am Wochenende nicht loslässt. Vielleicht vermeiden Sie Situationen, die früher selbstverständlich waren. Vielleicht haben Sie das Gefühl, dass Ihr Körper längst Signale sendet, die Sie immer noch überhören. Psychologische Beratung in der Nachbarschaft – in Thalwil, nur fünf Minuten von Adliswil entfernt – bedeutet kurze Wege und schnelle Hilfe. Leo Hackl Coaching arbeitet mit einer Methode, die in 30 Jahren über 2'000 Menschen geholfen hat, ihre Blockaden nachhaltig aufzulösen. Ohne Medikamente, ohne Schmerz, oft in nur wenigen Sitzungen."
    },
    whyUs: [
      { headline: "5 Minuten entfernt", description: "Thalwil liegt direkt neben Adliswil – kürzeste Anfahrt." },
      { headline: "Naturverbunden und ruhig", description: "Die Praxis am See bietet eine entspannende Atmosphäre." },
      { headline: "Schnelle Termine", description: "Oft innerhalb weniger Tage – ohne lange Wartezeit." },
      { headline: "Persönlich und unkompliziert", description: "Individuelle Beratung in vertrauensvoller Atmosphäre." },
      { headline: "Nachhaltig ohne Medikamente", description: "Die Methode nutzt die natürliche Neuroplastizität." }
    ],
    faq: [
      { question: "Wie komme ich von Adliswil zur Praxis?", answer: "Die Praxis in Thalwil ist von Adliswil in etwa fünf Minuten mit dem Auto oder zehn Minuten mit der S-Bahn erreichbar. Die Zehntenstrasse liegt direkt am See, wenige Gehminuten vom Bahnhof Thalwil." },
      { question: "Was kostet eine psychologische Beratung für Adliswil?", answer: "Die Kosten richten sich nach Aufwand und Anzahl Sitzungen. Im kostenlosen Erstgespräch klären wir Ihren Bedarf und geben Ihnen eine transparente Offerte. Die meisten Klienten benötigen zwischen einer und fünf Sitzungen." },
      { question: "Helfen Sie bei chronischem Stress?", answer: "Ja, Stress, Erschöpfung und Burnout-Prävention sind häufige Themen. Wir helfen Ihnen, die zugrundeliegenden Muster zu erkennen und aufzulösen, damit Sie wieder mit Energie und Klarheit leben können." },
      { question: "Wie viele Sitzungen brauche ich?", answer: "Viele Ängste und Phobien lassen sich in ein bis drei Sitzungen auflösen. Burnout oder tiefere Verhaltensmuster erfordern oft mehr Sitzungen. Wir besprechen den Aufwand offen im Erstgespräch." },
      { question: "Bieten Sie Online-Beratung an?", answer: "Ja, auf Wunsch führen wir Sitzungen per Video durch. Das ist praktisch für Adliswiler Klienten, die von zu Hause aus arbeiten. Die Wirksamkeit ist vergleichbar mit Präsenzsitzungen." },
      { question: "Ist die Behandlung schmerzhaft?", answer: "Nein. Die Methode arbeitet sanft und respektvoll mit Ihren inneren Bildern und Mustern. Sie bleiben jederzeit Herr des Geschehens. Die meisten Klienten empfinden die Sitzungen als befreiend." }
    ],
    serviceArea: ["Adliswil", "Thalwil", "Langnau am Albis", "Zürich Leimbach", "Kilchberg", "Rüschlikon", "Zürich Wollishofen", "Horgen", "Oberrieden", "Zürich Enge"],
    finalCta: { title: "Spannung lösen, Klarheit finden", text: "Vereinbaren Sie Ihr kostenloses Erstgespräch in Thalwil – nur fünf Minuten von Adliswil entfernt." }
  },

  {
    slug: "psychologische-beratung-erlenbach",
    ort: "Erlenbach",
    region: "Kanton Zürich",
    metaTitle: "Psychologische Beratung Erlenbach | Leo Hackl Coaching",
    metaDescription: "Psychologische Beratung in Erlenbach: Burnout, Ängste & Blockaden nachhaltig auflösen. Diskret in Thalwil. Über 2'000 gelöste Fälle.",
    h1: "Psychologische Beratung in Erlenbach – frei und belastbar",
    hero: {
      eyebrow: "Goldküste links",
      description: "Sie leben in Erlenbach und suchen psychologische Beratung, die diskret und wirksam ist? Leo Hackl Coaching in Thalwil ist in wenigen Minuten erreichbar. Wir lösen Ängste, Burnout, Perfektionismus und destruktive Verhaltensmuster – nachhaltig, persönlich und ohne Medikamente."
    },
    intro: {
      title: "Wenn Leistung zur Falle wird",
      text: "Erlenbach ist eine der begehrtesten Gemeinden der Goldküste. Wer hier lebt, hat viel geleistet – und trägt oft eine unsichtbare Last. Der Druck, immer zu funktionieren, die Angst, den Anschein zu verlieren, die Erschöpfung hinter einer perfekten Fassade. Vielleicht spüren Sie, dass Sie sich selbst immer höhere Massstäbe setzen, bis nichts mehr gut genug ist. Vielleicht haben Sie das Gefühl, äusserlich zu leisten, während Sie innerlich längst erschöpft sind. Vielleicht vermeiden Sie Situationen, in denen Sie verletzlich wirken könnten. Psychologische Beratung in der Nachbarschaft – in Thalwil, nur wenige Minuten von Erlenbach entfernt – bietet Ihnen einen geschützten Raum, in dem Sie ohne Masken sein können. Die Methode von Leo Hackl hat in 30 Jahren über 2'000 Menschen geholfen, ihre inneren Blockaden nachhaltig aufzulösen. Ohne Medikamente, ohne Schmerz, oft in nur wenigen Sitzungen."
    },
    whyUs: [
      { headline: "Wenige Minuten entfernt", description: "Thalwil ist von Erlenbach über die Seestrasse schnell erreichbar." },
      { headline: "Maximale Diskretion", description: "Ausserhalb des direkten Erlenbacher Umlaufs – vertraulich und geschützt." },
      { headline: "Erfahrung mit Führungskräften", description: "Leo Hackl kennt die Dynamik hoher Verantwortung seit Jahrzehnten." },
      { headline: "Schnelle, spürbare Wirkung", description: "Oft bereits nach ein bis drei Sitzungen erste Veränderungen." },
      { headline: "Medikamentenfrei", description: "Die Methode nutzt die natürliche Neuroplastizität Ihres Gehirns." }
    ],
    faq: [
      { question: "Wie komme ich von Erlenbach zur Praxis?", answer: "Mit dem Auto sind Sie von Erlenbach über die Seestrasse in etwa 10 bis 15 Minuten in Thalwil. Alternativ erreichen Sie die Praxis mit der S-Bahn über Zürich oder mit dem Schiff ab Erlenbach nach Thalwil." },
      { question: "Was kostet eine psychologische Beratung für Erlenbach?", answer: "Die Kosten richten sich nach Aufwand und Anzahl Sitzungen. Im kostenlosen Erstgespräch klären wir Ihren Bedarf und geben Ihnen eine transparente Offerte. Die meisten Klienten aus Erlenbach benötigen zwischen einer und fünf Sitzungen." },
      { question: "Helfen Sie bei Burnout-Prävention?", answer: "Ja, Burnout-Prävention und Erschöpfung sind häufige Themen. Wir helfen Ihnen, die zugrundeliegenden Muster zu erkennen und aufzulösen, damit Sie wieder mit Energie und Lebensfreude leben können." },
      { question: "Ist die Beratung diskret?", answer: "Absolut. Die Praxis in Thalwil liegt ausserhalb des direkten Erlenbacher Umlaufs. Die Wahrscheinlichkeit, Bekannte zu treffen, ist minimal. Alle Inhalte bleiben strikt vertraulich." },
      { question: "Wie viele Sitzungen brauche ich?", answer: "Viele Ängste und Phobien lassen sich in ein bis drei Sitzungen auflösen. Burnout oder tiefere Verhaltensmuster können mehr Sitzungen erfordern. Wir besprechen den Aufwand offen im Erstgespräch." },
      { question: "Bieten Sie Online-Beratung an?", answer: "Ja, auf Wunsch führen wir Sitzungen per Video durch. Das ist praktisch für Erlenbacher Klienten mit anspruchsvollen Terminkalendern. Die Wirksamkeit ist vergleichbar mit Präsenzsitzungen." }
    ],
    serviceArea: ["Erlenbach", "Meilen", "Küsnacht", "Zollikon", "Thalwil", "Kilchberg", "Zürich Goldbach", "Zürich Küsnacht", "Herrliberg", "Uetikon am See"],
    finalCta: { title: "Leistung ohne Selbstverlust", text: "Vereinbaren Sie Ihr kostenloses Erstgespräch in Thalwil – diskret, schnell und nur wenige Minuten von Erlenbach entfernt." }
  },

  {
    slug: "psychologische-beratung-langnau-am-albis",
    ort: "Langnau am Albis",
    region: "Kanton Zürich",
    metaTitle: "Psychologische Beratung Langnau am Albis | Leo Hackl Coaching",
    metaDescription: "Psychologische Beratung in Langnau am Albis: Ängste & Blockaden nachhaltig auflösen. 5 Min. bis zur Praxis. Über 2'000 gelöste Fälle.",
    h1: "Psychologische Beratung in Langnau am Albis – Ängste überwinden",
    hero: {
      eyebrow: "Albispass und Dorf",
      description: "Sie leben in Langnau am Albis und suchen psychologische Beratung in Ihrer Nähe? Leo Hackl Coaching in Thalwil ist in fünf Minuten erreichbar. Wir lösen Ängste, Phobien, Burnout und destruktive Verhaltensmuster nachhaltig – mit über 30 Jahren Erfahrung und mehr als 2'000 gelösten Fällen."
    },
    intro: {
      title: "Wenn Dorf und Berg nicht reichen",
      text: "Langnau am Albis liegt zwischen See und Berg – eine Gemeinde, die ländliche Ruhe und städtische Nähe verbindet. Doch auch hier kennen Menschen Ängste, Lebenskrisen und innere Blockaden. Vielleicht spüren Sie seit einer Veränderung – einem Umzug, einem Berufswechsel, einem Verlust – eine Angst, die sich nicht mit Vernunft beruhigen lässt. Vielleicht stecken Sie in einer Phase, in der alles äusserlich stabil wirkt, während Sie innerlich längst erschöpft sind. Vielleicht haben Sie das Gefühl, dass eine innere Stimme Sie immer wieder bremst, obwohl Sie längst wissen, wohin Sie wollen. Psychologische Beratung in der Nachbarschaft – in Thalwil, nur fünf Minuten von Langnau am Albis entfernt – bedeutet kürzeste Wege und schnelle Hilfe. Leo Hackl Coaching arbeitet mit einer Methode, die in 30 Jahren über 2'000 Menschen geholfen hat, ihre Blockaden nachhaltig aufzulösen. Ohne Medikamente, ohne Schmerz, oft in nur wenigen Sitzungen."
    },
    whyUs: [
      { headline: "5 Minuten entfernt", description: "Thalwil liegt direkt unterhalb von Langnau am Albis am See." },
      { headline: "Vertraut aus der Region", description: "Leo Hackl kennt die Albis-Gemeinden und ihre Menschen seit Jahrzehnten." },
      { headline: "Schnelle Termine", description: "Oft innerhalb weniger Tage – ohne lange Wartezeit." },
      { headline: "Persönlich und ruhig", description: "Individuelle Beratung in vertrauensvoller Atmosphäre." },
      { headline: "Nachhaltig ohne Medikamente", description: "Die Methode nutzt die natürliche Neuroplastizität." }
    ],
    faq: [
      { question: "Wie weit ist die Praxis von Langnau am Albis entfernt?", answer: "Die Praxis in Thalwil ist von Langnau am Albis in etwa fünf Minuten mit dem Auto oder zehn Minuten mit der S-Bahn erreichbar. Die Zehntenstrasse liegt direkt am See, wenige Gehminuten vom Bahnhof Thalwil." },
      { question: "Was kostet eine psychologische Beratung für Langnau am Albis?", answer: "Die Kosten richten sich nach Aufwand und Anzahl Sitzungen. Im kostenlosen Erstgespräch klären wir Ihren Bedarf und geben Ihnen eine transparente Offerte. Die meisten Klienten benötigen zwischen einer und fünf Sitzungen." },
      { question: "Helfen Sie bei Lebenskrisen?", answer: "Ja, Lebenskrisen, Übergangsphasen und Verlusterlebnisse sind häufige Themen. Wir helfen Ihnen, die zugrundeliegenden Muster zu erkennen und aufzulösen, damit Sie wieder Klarheit und Lebensfreude finden." },
      { question: "Wie viele Sitzungen brauche ich?", answer: "Viele Ängste und Phobien lassen sich in ein bis drei Sitzungen auflösen. Burnout oder tiefere Verhaltensmuster erfordern oft mehr Sitzungen. Wir besprechen den Aufwand offen im Erstgespräch." },
      { question: "Bieten Sie Online-Beratung an?", answer: "Ja, auf Wunsch führen wir Sitzungen per Video durch. Das ist praktisch für Langnauer Klienten, die abseits der S-Bahn-Verbindungen wohnen. Die Wirksamkeit ist vergleichbar mit Präsenzsitzungen." },
      { question: "Ist die Behandlung schmerzhaft?", answer: "Nein. Die Methode arbeitet sanft und respektvoll mit Ihren inneren Bildern und Mustern. Sie bleiben jederzeit Herr des Geschehens. Die meisten Klienten empfinden die Sitzungen als befreiend." }
    ],
    serviceArea: ["Langnau am Albis", "Thalwil", "Adliswil", "Horgen", "Rüschlikon", "Oberrieden", "Albispass", "Hausen am Albis", "Baar", "Cham"],
    finalCta: { title: "Der Berg wird leichter", text: "Vereinbaren Sie Ihr kostenloses Erstgespräch in Thalwil – nur fünf Minuten von Langnau am Albis entfernt." }
  }
];

export const getRegionByOrt = (ort) => regions.find((r) => r.ort === ort);