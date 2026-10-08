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
};

// Wichtige Dienstleistung + Ort Kombinationen (Money Pages)
// Bewusst selektiv – keine Massenproduktion, nur kaufstarke Kombinationen.
export const moneyPages = [
  { slug: "aengste-thalwil", serviceSlug: "aengste", regionSlug: "thalwil" },
  { slug: "aengste-zuerich", serviceSlug: "aengste", regionSlug: "zuerich" },
  { slug: "aengste-horgen", serviceSlug: "aengste", regionSlug: "horgen" },
  { slug: "aengste-kilchberg", serviceSlug: "aengste", regionSlug: "kilchberg" },
  { slug: "burnout-zuerich", serviceSlug: "burnout", regionSlug: "zuerich" },
  { slug: "burnout-thalwil", serviceSlug: "burnout", regionSlug: "thalwil" },
  { slug: "verhaltensmuster-zuerich", serviceSlug: "verhaltensmuster", regionSlug: "zuerich" },
  { slug: "verhaltensmuster-thalwil", serviceSlug: "verhaltensmuster", regionSlug: "thalwil" },
  { slug: "beziehungskonflikte-zuerich", serviceSlug: "beziehungskonflikte", regionSlug: "zuerich" },
  { slug: "beziehungskonflikte-thalwil", serviceSlug: "beziehungskonflikte", regionSlug: "thalwil" },
];

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