// Money Pages – Dienstleistung + Ort Kombinationen.
// Jede Kombination erhält eine eigene Landingpage unter /[serviceSlug]-[regionSlug].
// Content wird im MoneyPage-Component aus services.js + regions.js dynamisch komponiert,
// sodass jede Seite individuellen Nutzen bietet (keine Doorway Pages).

import { regions } from "./regions";

// Kurz-Slug → bestehende Region (Lookup in regions.js via ort)
export const moneyPageRegions = {
  thalwil: { name: "Thalwil", regionSlug: "psychologische-beratung-thalwil" },
  zuerich: { name: "Zürich", regionSlug: "psychologische-beratung-zuerich" },
  horgen: { name: "Horgen", regionSlug: "psychologische-beratung-horgen" },
  kilchberg: { name: "Kilchberg", regionSlug: "psychologische-beratung-kilchberg" },
  waedenswil: { name: "Wädenswil", regionSlug: "psychologische-beratung-waedenswil" },
  meilen: { name: "Meilen", regionSlug: "psychologische-beratung-meilen" },
  adliswil: { name: "Adliswil", regionSlug: "psychologische-beratung-adliswil" },
  rueschlikon: { name: "Rüschlikon", regionSlug: "psychologische-beratung-rueschlikon" },
};

// Dienstleistung + Ort Kombinationen (Money Pages)
// Jede Dienstleistung erhält dieselben 6 Orte.
const MONEY_PAGE_SERVICES = ["aengste", "verhaltensmuster", "burnout", "beziehungskonflikte"];
const MONEY_PAGE_ORTE = ["thalwil", "zuerich", "horgen", "adliswil", "rueschlikon", "waedenswil"];

export const moneyPages = MONEY_PAGE_SERVICES.flatMap((serviceSlug) =>
  MONEY_PAGE_ORTE.map((regionSlug) => ({ slug: `${serviceSlug}-${regionSlug}`, serviceSlug, regionSlug }))
);

export const getMoneyPageBySlug = (slug) => moneyPages.find((mp) => mp.slug === slug);

export const getMoneyPagesForService = (serviceSlug) =>
  moneyPages.filter((mp) => mp.serviceSlug === serviceSlug);

export const getMoneyPagesForRegion = (regionSlug) =>
  moneyPages.filter((mp) => mp.regionSlug === regionSlug);

// Hilfsfunktion: Hole die vollständige Region aus regions.js
export const getFullRegion = (regionSlug) => {
  const mapping = moneyPageRegions[regionSlug];
  if (!mapping) return null;
  return regions.find((r) => r.slug === mapping.regionSlug) || null;
};