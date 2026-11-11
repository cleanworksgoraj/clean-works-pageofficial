import Image from "next/image";
import Link from "next/link";
import { ServiceCard } from "@/components/service-card";
import { ContactForm } from "@/components/contact-form";
import { ServiceAreaSection } from "@/components/service-area-section";
import { businessPhone, faqs, galleryItems, services } from "@/data/site";

export default function HomePage() {
  return (
    <main>
        <section className="hero section-wrap" id="start">
          <div className="hero-copy">
            <p className="eyebrow">CLEANWORKS · MALOWANIE I MYCIE DACHÓW</p>
            <h1>Malowanie dachów</h1>
            <p className="hero-slogan">Odśwież swój dach — zyskaj na lata!</p>
            <p className="hero-lede">
              Przywracamy dachom świeży wygląd. Zaczynamy od dokładnego czyszczenia dachu.
            </p>
            <ul className="hero-benefits">
              <li>
                <span aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M4 5h12a3 3 0 0 1 3 3v1H9a3 3 0 0 1-3-3V5Zm12 4v3a3 3 0 0 1-3 3h-1v5m-2 0h4" /></svg>
                </span>
                Profesjonalne malowanie dachów
              </li>
              <li>
                <span aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="M8 4c0 2-3 5-3 8a3 3 0 0 0 6 0c0-3-3-6-3-8Zm9 2c0 1.5-2 3.5-2 5.5a2 2 0 0 0 4 0C19 9.5 17 7.5 17 6ZM5 19c3 1.5 11 1.5 14 0" /></svg>
                </span>
                Dokładne czyszczenie dachów
              </li>
              <li>
                <span aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path d="m2 11 10-8 10 8M5 10v10h14V10M9 20v-6h6v6M9 8h.01M15 8h.01" /></svg>
                </span>
                Estetyczny wygląd Twojego domu
              </li>
            </ul>
            <a className="hero-phone" href={businessPhone.href}>
              <span className="phone-icon" aria-hidden="true">☎</span>
              <span className="phone-copy">
                <span>Zadzwoń i zapytaj o wycenę</span>
                <strong>{businessPhone.display}</strong>
              </span>
            </a>
          </div>
          <div className="hero-form-panel">
            <div className="hero-form-heading">
              <h2>Bezpłatna wycena</h2>
            </div>
            <ContactForm />
          </div>
        </section>
        <section className="section section-services" id="uslugi">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <h2>Usługi, które robią różnicę.</h2>
              </div>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-process">
          <div className="section-wrap">
            <div className="section-heading section-heading-centered">
              <div>
                <p className="eyebrow">JAK TO DZIAŁA?</p>
                <h2>Prosta współpraca, krok po kroku.</h2>
                <p className="process-intro">Nie musisz znać się na dachach — przeprowadzimy Cię przez cały proces.</p>
              </div>
            </div>
            <div className="process-grid" aria-label="Etapy współpracy z CleanWorks">
              {[
                ["01", "Kontaktujesz się", "Zadzwoń lub napisz. Powiedz, co chcesz odświeżyć — resztę ustalimy wspólnie."],
                ["02", "Poznajemy potrzeby", "Zapytamy o rodzaj i stan powierzchni oraz oczekiwany efekt."],
                ["03", "Omawiamy wycenę", "Przedstawimy proponowany zakres prac i koszt przed podjęciem decyzji."],
                ["04", "Ustalamy termin", "Jeśli zaakceptujesz warunki, wspólnie wybierzemy dogodny termin realizacji."],
              ].map(([number, title, description]) => (
                <article className="process-step" key={number}>
                  <span className="step-number">{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
            <div className="process-contact">
              <p>Masz pytanie lub chcesz porozmawiać o swoim dachu?</p>
              <a href={businessPhone.href}>Zadzwoń: {businessPhone.display} <span aria-hidden="true">↗</span></a>
              <span className="process-contact-divider" aria-hidden="true">lub</span>
              <a href="/kontakt">Napisz do nas <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="section home-about-section">
          <div className="section-wrap home-contact-grid">
            <div className="home-contact-copy">
              <p className="eyebrow">POROZMAWIAJMY</p>
              <h2>Opowiedz nam o swoim dachu.</h2>
              <p className="section-intro">
                Nie wiesz, od czego zacząć? Zadzwoń lub napisz — porozmawiamy
                o potrzebach Twojego domu i podpowiemy kolejny krok.
              </p>
              <div className="home-contact-details">
                <div className="home-contact-detail">
                  <span className="home-contact-icon" aria-hidden="true">☎</span>
                  <div>
                    <span>Telefon</span>
                    <a href={businessPhone.href}>{businessPhone.display}</a>
                  </div>
                </div>
                <div className="home-contact-detail">
                  <span className="home-contact-icon" aria-hidden="true">⌖</span>
                  <div>
                    <span>Obszar działania</span>
                    <strong>Łódź i okolice</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-contact-callout">
              <p className="eyebrow">CLEANWORKS</p>
              <strong>50+</strong>
              <h3>realizacji dachów i elewacji</h3>
              <p>Chcesz odświeżyć swoją nieruchomość? Zapytaj o bezpłatną wycenę — bez zobowiązań.</p>
              <div className="home-contact-actions">
                <Link className="button button-primary" href="/kontakt">
                  Napisz do nas <span aria-hidden="true">↗</span>
                </Link>
                <Link className="home-contact-projects" href="/realizacje">
                  Zobacz realizacje <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-gallery" id="realizacje">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">NASZE REALIZACJE</p>
                <h2>Najlepiej widać to na przykładach.</h2>
              </div>
              <p className="section-intro">
                Zobacz efekty mycia i malowania dachów oraz elewacji na zdjęciach
                przed i po.
              </p>
            </div>
            <div className="gallery-grid">
              {galleryItems.map((item, index) => (
                <article className={`gallery-card gallery-card-${index + 1}`} key={item.title}>
                  <div className="gallery-photos">
                    {item.photos.map((photo) => (
                      <figure className="gallery-photo" key={photo.src}>
                        <div className="gallery-photo-image">
                          <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" />
                          <figcaption>{photo.label}</figcaption>
                        </div>
                      </figure>
                    ))}
                  </div>
                  <div className="gallery-caption">
                    <div><h3>{item.title}</h3><p>{item.description}</p></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-faq" id="faq">
          <div className="section-wrap faq-grid">
            <div>
              <p className="eyebrow">DOBRZE WIEDZIEĆ</p>
              <h2>Masz pytania?</h2>
              <p className="section-intro">
                Zebraliśmy kilka odpowiedzi na początek. Jeśli nie ma tu tego,
                czego szukasz, skontaktuj się z nami.
              </p>
              <a className="text-link" href="#kontakt">Zadaj własne pytanie <span aria-hidden="true">↗</span></a>
            </div>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details className="faq-item" key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <ServiceAreaSection />

    </main>
  );
}
