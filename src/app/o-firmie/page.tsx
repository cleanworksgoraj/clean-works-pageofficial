import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { businessPhone, services } from "@/data/site";

export const metadata: Metadata = {
  title: "O firmie | CleanWorks",
  description: "Poznaj CleanWorks — mycie i malowanie dachów oraz czyszczenie i malowanie elewacji w Łodzi i okolicach.",
};

export default function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow="POZNAJ CLEANWORKS"
        title="Zadbane dachy i elewacje, bez zgadywania od czego zacząć."
        description="CleanWorks oferuje mycie i malowanie dachów oraz czyszczenie i malowanie elewacji w Łodzi i okolicach. Powiedz nam, czego potrzebuje Twoja nieruchomość — wspólnie ustalimy dalsze kroki."
      />

      <section className="section about-story-section">
        <div className="section-wrap about-story-grid">
          <div className="about-story-copy">
            <p className="eyebrow">JAK PRACUJEMY?</p>
            <h2>Ty opisujesz potrzebę. My pomagamy zaplanować prace.</h2>
            <p>
              Nie musisz wiedzieć, która usługa będzie najlepsza. Opowiedz nam
              o dachu lub elewacji, a wspólnie ustalimy, jakie informacje będą
              potrzebne do określenia zakresu.
            </p>
            <p>
              Przed rozpoczęciem prac omawiamy plan i wycenę. Możesz najpierw
              zapytać o szczegóły, przesłać zdjęcia lub umówić dalsze kroki —
              decyzję podejmujesz po poznaniu oferty.
            </p>
            <div className="about-story-actions">
              <Link className="button button-primary" href="/kontakt">
                Zapytaj o bezpłatną wycenę <span aria-hidden="true">↗</span>
              </Link>
              <a className="about-phone-link" href={businessPhone.href}>
                Zadzwoń: {businessPhone.display}
              </a>
            </div>
          </div>
          <div className="about-story-image">
            <Image
              src="/realizacje/malowanie-dachu-po.jpg"
              alt="Dach po odświeżeniu — przykład prac CleanWorks"
              fill
              sizes="(max-width: 760px) 100vw, 50vw"
            />
            <span>Efekt zaczyna się od dobrego planu</span>
          </div>
        </div>
      </section>

      <section className="section about-contact-section">
        <div className="section-wrap about-contact-grid">
          <div className="about-contact-details">
            <p className="eyebrow">POROZMAWIAJMY</p>
            <h2>Masz pytanie o dach lub elewację?</h2>
            <p className="about-contact-intro">Zadzwoń lub napisz. Chętnie porozmawiamy o Twojej nieruchomości i pomożemy ustalić, od czego zacząć.</p>
            <div className="about-contact-item">
              <span className="about-contact-icon" aria-hidden="true">☎</span>
              <div>
                <span>Telefon</span>
                <a href={businessPhone.href}>{businessPhone.display}</a>
                <small>Najprostszy sposób, by omówić zlecenie</small>
              </div>
            </div>
            <div className="about-contact-item">
              <span className="about-contact-icon" aria-hidden="true">⌖</span>
              <div>
                <span>Obszar działania</span>
                <strong>Łódź i okolice</strong>
                <small>Dojazd ustalamy dla konkretnej lokalizacji</small>
              </div>
            </div>
          </div>
          <div className="about-contact-callout">
            <p className="eyebrow">BEZ ZOBOWIĄZAŃ</p>
            <h3>Opowiedz nam, czego potrzebuje Twój dach.</h3>
            <p>Przedstawimy możliwy zakres prac i bezpłatną wycenę. To Ty zdecydujesz, co dalej.</p>
            <Link className="button button-primary" href="/kontakt">
              Napisz do nas <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section about-services-section">
        <div className="section-wrap">
          <header className="about-section-heading">
            <p className="eyebrow">JAK MOŻEMY POMÓC?</p>
            <h2>Usługi CleanWorks</h2>
            <p>Wybierz usługę, aby sprawdzić jej zakres i poznać więcej szczegółów.</p>
          </header>
          <div className="about-services-grid">
            {services.map((service) => (
              <Link className="about-service-link" href={`/uslugi/${service.slug}`} key={service.slug}>
                <span>{service.title}</span>
                <span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <div className="about-services-cta">
            <p>Nie wiesz, która usługa będzie odpowiednia?</p>
            <Link className="button button-primary" href="/kontakt">
              Opisz nam swoją potrzebę <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
