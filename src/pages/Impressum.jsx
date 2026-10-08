import React from "react";
import PageHeader from "@/components/PageHeader";
import ScrollReveal from "@/components/ScrollReveal";
import Seo from "@/components/Seo";
import { PAGE_META, localBusinessSchema } from "@/data/seoConfig";

export default function Impressum() {
  return (
    <>
      <Seo {...PAGE_META["/impressum"]} schema={[localBusinessSchema()]} />
      <PageHeader
        eyebrow="Impressum"
        title="Impressum"
        subtitle="Angaben gemäss Schweizer Recht zur Anbieterkennzeichnung."
        breadcrumbs={[{ label: "Start", to: "/" }, { label: "Impressum" }]}
      />
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl border border-border bg-white p-8 md:p-10 shadow-sm mb-8">
              <h2 className="font-heading text-xl font-bold text-primary mb-3">Anbieter</h2>
              <p className="text-foreground/70 leading-relaxed">
                Leo Hackl Coaching<br />
                Zehntenstrasse 17<br />
                8800 Thalwil, Schweiz<br />
                Telefon: 044 772 89 79 / 079 433 50 72
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="space-y-8 text-foreground/70 leading-relaxed">
              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">Inhalt des Onlineangebotes</h2>
                <p>
                  Der Autor übernimmt keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit
                  oder Qualität der bereitgestellten Informationen. Haftungsansprüche gegen den Autor,
                  welche sich auf Schäden materieller oder ideeller Art beziehen, die durch die
                  Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch die Nutzung
                  fehlerhafter und unvollständiger Informationen verursacht wurden, sind grundsätzlich
                  ausgeschlossen, sofern seitens des Autors kein nachweislich vorsätzliches oder grob
                  fahrlässiges Verschulden vorliegt. Alle Angebote sind freibleibend und unverbindlich.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">Verweise und Links</h2>
                <p>
                  Bei direkten oder indirekten Verweisen auf fremde Webseiten („Hyperlinks"), die
                  ausserhalb des Verantwortungsbereiches des Autors liegen, würde eine
                  Haftungsverpflichtung ausschliesslich in dem Fall in Kraft treten, in dem der Autor
                  von den Inhalten Kenntnis hat und es ihm technisch möglich und zumutbar wäre, die
                  Nutzung im Falle rechtswidriger Inhalte zu verhindern. Der Autor distanziert sich
                  hiermit ausdrücklich von allen Inhalten aller verlinkten Seiten, die nach der
                  Linksetzung verändert wurden.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">Urheber- und Kennzeichenrecht</h2>
                <p>
                  Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der verwendeten
                  Bilder, Grafiken, Tondokumente, Videosequenzen und Texte zu beachten. Das Copyright
                  für veröffentlichte, vom Autor selbst erstellte Objekte bleibt allein beim Autor der
                  Seiten. Eine Vervielfältigung oder Verwendung in anderen elektronischen oder
                  gedruckten Publikationen ist ohne ausdrückliche Zustimmung des Autors nicht gestattet.
                </p>
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-primary mb-3">Rechtswirksamkeit dieses Haftungsausschlusses</h2>
                <p>
                  Dieser Haftungsausschluss ist als Teil des Internetangebotes zu betrachten, von dem
                  aus auf diese Seite verwiesen wurde. Sofern Teile oder einzelne Formulierungen dieses
                  Textes der geltenden Rechtslage nicht, nicht mehr oder nicht vollständig entsprechen
                  sollten, bleiben die übrigen Teile des Dokumentes in ihrem Inhalt und ihrer Gültigkeit
                  davon unberührt.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}