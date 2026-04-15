"use client";

/**
 * ContactForm – Kontaktformular mit Netlify Forms
 */

import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map(k => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

interface FormData {
  name: string;
  betrieb: string;
  email: string;
  nachricht: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    betrieb: "",
    email: "",
    nachricht: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await fetch("/netlify-forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "kontakt", ...form }),
      });
      setStatus("success");
      setForm({ name: "", betrieb: "", email: "", nachricht: "" });
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="glass--elevated contact-form-wrap">
        <div className="form-success">
          <CheckCircle size={48} className="form-success__icon" />
          <h3>Danke! Ich melde mich innerhalb von 24 Stunden.</h3>
          <p>Ich freue mich auf unser Gespräch.</p>
          <button
            onClick={() => setStatus("idle")}
            className="btn btn--glass btn--md"
            style={{ marginTop: "8px" }}
          >
            Neue Nachricht
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="glass--elevated contact-form-wrap">
      <form onSubmit={handleSubmit}>
        {/* Error Message */}
        {status === "error" && (
          <div className="form-error">
            <AlertCircle size={16} style={{ flexShrink: 0 }} />
            Etwas ist schiefgelaufen. Schreib mir direkt auf WhatsApp.
          </div>
        )}

        {/* Name */}
        <div className="form-group">
          <label className="form-label">Dein Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Max Mustermann"
            required
            className="form-input"
            aria-label="Dein Name"
          />
        </div>

        {/* Betrieb */}
        <div className="form-group">
          <label className="form-label">
            Dein Betrieb <span style={{ opacity: 0.55 }}>(optional)</span>
          </label>
          <input
            type="text"
            name="betrieb"
            value={form.betrieb}
            onChange={handleChange}
            placeholder="z.B. Friseursalon Schneider"
            className="form-input"
            aria-label="Dein Betrieb"
          />
        </div>

        {/* E-Mail */}
        <div className="form-group">
          <label className="form-label">Deine E-Mail *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="deine@email.de"
            required
            className="form-input"
            aria-label="Deine E-Mail"
          />
        </div>

        {/* Nachricht */}
        <div className="form-group">
          <label className="form-label">Deine Nachricht *</label>
          <textarea
            name="nachricht"
            value={form.nachricht}
            onChange={handleChange}
            placeholder="Was kann ich für dich tun?"
            required
            rows={5}
            className="form-input"
            aria-label="Deine Nachricht"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn btn--primary btn--lg"
          style={{ width: "100%", justifyContent: "center", marginTop: "8px", opacity: status === "loading" ? 0.6 : 1, cursor: status === "loading" ? "not-allowed" : "pointer" }}
          aria-label="Nachricht senden"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} />
              Wird gesendet…
            </>
          ) : (
            <>
              <Send size={18} />
              Nachricht senden
            </>
          )}
        </button>

        <p className="form-hint">Kein Spam. Versprochen.</p>
      </form>
    </div>
  );
}
