import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, CheckCircle2, AlertCircle, Send } from "lucide-react";

const WEBHOOK_URL =
  "https://app.meisterflow.ch/api/webhooks/enquiries/a902bb23d7e98901900e3750083b670344a14683633ae15f";

export default function ContactForm({ compact = false }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", description: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});
  const [consent, setConsent] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Bitte geben Sie Ihren Namen ein.";
    if (!form.email.trim()) e.email = "Bitte geben Sie Ihre E-Mail ein.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Ungültige E-Mail-Adresse.";
    if (!form.description.trim()) e.description = "Bitte beschreiben Sie Ihr Anliegen.";
    if (!consent) e.consent = "Bitte stimmen Sie der Datenverarbeitung zu.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: undefined });
  };

  const submit = async (e) => {
    e.preventDefault();
    // honeypot
    if (form.company) return;
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          description: form.description.trim(),
        }),
      });
      if (!res.ok) throw new Error("Network");
      setStatus("success");
      setForm({ name: "", email: "", phone: "", description: "" });
      setConsent(false);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
        <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-4" />
        <h3 className="font-heading text-xl font-bold text-primary mb-2">Vielen Dank!</h3>
        <p className="text-foreground/70 mb-6">
          Ihre Anfrage ist eingegangen. Ich melde mich so bald wie möglich bei Ihnen.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-muted transition-colors"
        >
          Neue Anfrage senden
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-5" noValidate>
      {/* Honeypot */}
      <input
        type="text"
        name="company"
        value={form.company || ""}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className={compact ? "space-y-4" : "grid gap-5 md:grid-cols-2"}>
        <Field
          label="Ihr Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          error={errors.name}
          required
        />
        <Field
          label="E-Mail"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
          required
        />
        <Field
          label="Telefon"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
        />
        {!compact && <div />}
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Ihr Anliegen <span className="text-accent">*</span>
        </label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={compact ? 4 : 5}
          className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${
            errors.description ? "border-destructive" : "border-border"
          }`}
          placeholder="Womit darf ich Ihnen helfen?"
        />
        {errors.description && (
          <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="h-3.5 w-3.5" /> {errors.description}
          </p>
        )}
      </div>

      {status === "error" && (
        <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive flex items-center gap-2">
          <AlertCircle className="h-4 w-4 shrink-0" />
          Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder rufen Sie an: 079 433 50 72.
        </div>
      )}

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => {
              setConsent(e.target.checked);
              if (errors.consent) setErrors({ ...errors, consent: undefined });
            }}
            className="mt-1 h-4 w-4 shrink-0 rounded border-border text-primary focus:ring-primary"
          />
          <span className="text-xs text-muted-foreground leading-relaxed">
            Ich willige ein, dass meine Daten zur Bearbeitung der Anfrage gespeichert und an unseren
            externen Dienstleister MeisterFlow übermittelt werden. Die Einwilligung kann jederzeit
            widerrufen werden. Details siehe{" "}
            <Link to="/datenschutz" className="text-primary font-semibold underline">Datenschutzerklärung</Link>.
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
            <AlertCircle className="h-3.5 w-3.5" /> {errors.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "loading" || !consent}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> wird gesendet…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" /> Anfrage senden
          </>
        )}
      </button>
      <p className="text-xs text-muted-foreground">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäss Datenschutzerklärung zu.
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", value, onChange, error, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-foreground mb-1.5">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 ${
          error ? "border-destructive" : "border-border"
        }`}
      />
      {error && (
        <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
          <AlertCircle className="h-3.5 w-3.5" /> {error}
        </p>
      )}
    </div>
  );
}