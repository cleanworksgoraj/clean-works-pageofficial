import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { businessPhone } from "@/data/site";

export const metadata: Metadata = {
  title: "Kontakt | CleanWorks",
  description: "Skontaktuj się z CleanWorks w sprawie mycia lub malowania dachu.",
};

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="section contact-page-intro">
        <div className="section-wrap contact-page-grid">
          <div className="contact-page-copy">
            <p className="eyebrow">POROZMAWIAJMY</p>
            <h1>Opowiedz nam o swoim dachu.</h1>
            <p className="section-intro">
              Zadzwoń lub napisz — chętnie odpowiemy na pytania dotyczące malowania i mycia dachu.
            </p>
            <a className="button button-primary" href={businessPhone.href}>
              Zadzwoń: {businessPhone.display} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-page-info">
            <div className="contact-page-info-row">
              <span className="contact-page-info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>
              </span>
              <div>
                <span>ADRES E-MAIL</span>
                <a href="mailto:cleanworks.goraj@gmail.com">cleanworks.goraj@gmail.com</a>
              </div>
            </div>
            <div className="contact-page-info-row">
              <span className="contact-page-info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
              </span>
              <div>
                <span>GODZINY KONTAKTU</span>
                <strong>Poniedziałek–piątek, 7:00–18:00</strong>
              </div>
            </div>
            <div className="contact-page-info-row">
              <span className="contact-page-info-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>
              </span>
              <div>
                <span>OBSZAR DZIAŁANIA</span>
                <strong>Łódź i okolice</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section contact-page-form-section">
        <div className="section-wrap contact-page-form-wrap">
          <div className="contact-page-form-heading">
            <p className="eyebrow">BEZPŁATNA WYCENA</p>
            <h2>Wyślij zapytanie</h2>
            <p>Opisz, czego potrzebuje Twój dach. Skontaktujemy się, aby omówić szczegóły.</p>
          </div>
          <div className="hero-form-panel">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
