import React, { useState } from "react";
import { Star, CheckCircle2, Loader2, AlertCircle, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import Seo from "@/components/Seo";

const WEBHOOK_URL =
  "https://app.meisterflow.ch/api/webhooks/enquiries/a902bb23d7e98901900e3750083b670344a14683633ae15f";
const GOOGLE_REVIEW_LINK =
  "https://www.google.com/maps/place/Leo+Hackl+Coaching/@47.2889657,8.5706351,17z/data=!3m1!4b1!4m6!3m5!1s0x479aa881fc3855a5:0x4b08a8aa8cc1de1e!8m2!3d47.2889657!4d8.5706351!16s%2Fg%2F1tcv0ddk";

const QUESTIONS = [
  "Wie gut wurden Sie von Leo Hackl verstanden?",
  "Wie zufrieden sind Sie mit dem Ergebnis der Sitzung?",
  "Wie wahrscheinlich ist es, dass Sie Leo Hackl weiterempfehlen?",
];

export default function AuftragBewerten() {
  const [step, setStep] = useState(1); // 1: questions, 2: stars, 3: result
  const [answers, setAnswers] = useState([0, 0, 0]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("idle");

  const setAnswer = (i, v) => {
    const next = [...answers];
    next[i] = v;
    setAnswers(next);
  };

  const allAnswered = answers.every((a) => a > 0);

  const submitInternal = async () => {
    setStatus("loading");
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Auftragsbewertung (intern)",
          email: "bewertung@hacklcoaching.ch",
          phone: "",
          description: `Bewertung: ${rating}/5 Sterne | Fragen: ${answers.join(", ")} | Feedback: ${feedback}`,
        }),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const onRatingSelect = (n) => {
    setRating(n);
    setStep(3);
    if (n <= 3) {
      // stay on result, internal feedback shown
    }
  };

  return (
    <>
    <Seo title="Bewertung abgeben | Leo Hackl Coaching" description="Bewerten Sie Ihre Erfahrung mit Leo Hackl Coaching." noindex />
    <section className="relative overflow-hidden bg-navy text-white pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen">
      <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="relative mx-auto max-w-2xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-10">
            <span className="inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-5">
              Bewertung abgeben
            </span>
            <h1 className="font-heading text-3xl md:text-4xl font-bold leading-tight">
              Wie war Ihr Auftrag?
            </h1>
            <p className="mt-3 text-white/70">
              Ihre ehrliche Rückmeldung hilft uns, stetig besser zu werden.
            </p>
          </div>
        </ScrollReveal>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mb-10">
          {[1, 2, 3].map((s) => (
            <span
              key={s}
              className={`h-2 rounded-full transition-all ${
                step >= s ? "w-8 bg-accent" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* STEP 1: Questions */}
        {step === 1 && (
          <ScrollReveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 md:p-9 backdrop-blur">
              <div className="space-y-8">
                {QUESTIONS.map((q, i) => (
                  <div key={i}>
                    <p className="text-sm font-medium text-white/90 mb-3">
                      {i + 1}. {q}
                    </p>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((v) => (
                        <button
                          key={v}
                          onClick={() => setAnswer(i, v)}
                          className={`flex-1 rounded-xl border py-3 text-sm font-semibold transition-all ${
                            answers[i] === v
                              ? "border-accent bg-accent text-white"
                              : "border-white/15 text-white/70 hover:border-white/40 hover:bg-white/5"
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => allAnswered && setStep(2)}
                disabled={!allAnswered}
                className="mt-8 w-full rounded-full bg-accent px-6 py-3.5 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
              >
                Weiter zur Sternebewertung
              </button>
            </div>
          </ScrollReveal>
        )}

        {/* STEP 2: Stars */}
        {step === 2 && (
          <ScrollReveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 md:p-9 backdrop-blur text-center">
              <h2 className="font-heading text-2xl font-bold mb-2">Ihre Gesamtbewertung</h2>
              <p className="text-white/70 text-sm mb-8">Wie viele Sterne geben Sie Ihrem Auftrag?</p>
              <div className="flex justify-center gap-3 mb-8">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    onClick={() => onRatingSelect(n)}
                    onMouseEnter={() => setHover(n)}
                    onMouseLeave={() => setHover(0)}
                    aria-label={`${n} Sterne`}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`h-12 w-12 md:h-14 md:w-14 ${
                        (hover || rating) >= n
                          ? "fill-accent text-accent"
                          : "text-white/30"
                      }`}
                    />
                  </button>
                ))}
              </div>
              <button
                onClick={() => setStep(1)}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Zurück zu den Fragen
              </button>
            </div>
          </ScrollReveal>
        )}

        {/* STEP 3a: Internal feedback (1-3 stars) */}
        {step === 3 && rating <= 3 && status !== "success" && (
          <ScrollReveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7 md:p-9 backdrop-blur">
              <h2 className="font-heading text-2xl font-bold mb-2">Vielen Dank für Ihr Feedback</h2>
              <p className="text-white/70 text-sm mb-6">
                Es tut uns leid, dass wir Sie nicht voll überzeugen konnten. Damit wir uns
                verbessern können, freuen wir uns über Ihre ehrliche Kritik.
              </p>
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={5}
                placeholder="Wie können wir uns verbessern?"
                className="w-full rounded-xl border border-white/15 bg-navy/40 px-4 py-3 text-sm text-white outline-none focus:border-accent placeholder:text-white/40"
              />
              {status === "error" && (
                <p className="mt-3 text-sm text-red-300 flex items-center gap-1.5">
                  <AlertCircle className="h-4 w-4" /> Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
                </p>
              )}
              <button
                onClick={submitInternal}
                disabled={status === "loading"}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold disabled:opacity-60 hover:opacity-90 transition-opacity"
              >
                {status === "loading" ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> wird gesendet…</>
                ) : (
                  "Feedback senden"
                )}
              </button>
              <p className="mt-3 text-xs text-white/40 text-center">
                Ihr Feedback wird vertraulich und nur intern verwendet.
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* STEP 3a success (internal) */}
        {step === 3 && rating <= 3 && status === "success" && (
          <ScrollReveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-9 text-center backdrop-blur">
              <CheckCircle2 className="h-14 w-14 text-accent mx-auto mb-4" />
              <h2 className="font-heading text-2xl font-bold mb-2">Danke!</h2>
              <p className="text-white/70">
                Ihr Feedback ist eingegangen und hilft uns, besser zu werden.
              </p>
            </div>
          </ScrollReveal>
        )}

        {/* STEP 3b: Positive (4-5 stars) */}
        {step === 3 && rating >= 4 && (
          <ScrollReveal>
            <div className="rounded-2xl border border-accent/30 bg-accent/10 p-9 text-center backdrop-blur">
              <div className="flex justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 fill-accent text-accent" />
                ))}
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
                Vielen Dank für Ihre tolle Bewertung!
              </h2>
              <p className="text-white/80 mb-7 max-w-md mx-auto">
                Würden Sie uns auch auf Google weiterempfehlen? Das hilft anderen Kunden, uns zu finden.
              </p>
              <a
                href={GOOGLE_REVIEW_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold shadow-lg hover:opacity-90 transition-opacity"
              >
                Auf Google bewerten <ExternalLink className="h-4 w-4" />
              </a>
              <p className="mt-4 text-xs text-white/40 leading-relaxed max-w-md mx-auto">
                Hinweis: Beim Klick auf „Auf Google bewerten" werden Sie zu Google weitergeleitet.
                Dabei können Daten (mindestens Ihre IP-Adresse) an Google LLC (USA) übertragen werden.
                Details siehe Datenschutzerklärung.
              </p>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
    </>
  );
}