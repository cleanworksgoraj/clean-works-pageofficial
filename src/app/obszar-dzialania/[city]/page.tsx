import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { ServiceAreaSection } from "@/components/service-area-section";
import { businessPhone, serviceAreaLocations, services } from "@/data/site";

type LocationPageProps = {
  params: Promise<{ city: string }>;
};

function getLocation(slug: string) {
  return serviceAreaLocations.find((location) => location.slug === slug);
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) return { title: "Obszar działania | CleanWorks" };

  return {
    title: `Mycie i malowanie dachów ${location.locative} | CleanWorks`,
    description: `CleanWorks oferuje mycie i malowanie dachów oraz czyszczenie i malowanie elewacji w ${location.locative} i okolicach. Zapytaj o dojazd i bezpłatną wycenę.`,
  };
}

export function generateStaticParams() {
  return serviceAreaLocations.map(({ slug }) => ({ city: slug }));
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) notFound();

  const mapQuery = encodeURIComponent(`${location.name}, Polska`);
  const questions = [
    {
      question: `Czy CleanWorks dojeżdża do ${location.locative}?`,
      answer: `Obsługujemy Łódź i wybrane miejscowości w promieniu około 200 km. Skontaktuj się z nami, aby potwierdzić dostępność terminu i dojazdu pod konkretny adres w ${location.locative}.`,
    },
    {
      question: `Jakie usługi można zamówić w ${location.locative}?`,
      answer: "Oferujemy mycie i malowanie dachów oraz czyszczenie i malowanie elewacji. Zakres prac dobieramy po rozmowie o rodzaju i stanie powierzchni.",
    },
    {
      question: `Jak uzyskać wycenę w ${location.locative}?`,
      answer: "Zadzwoń lub wyślij zapytanie przez formularz. Przybliżona powierzchnia, opis prac i zdjęcia pomogą nam ustalić zakres oraz kolejne kroki.",
    },
  ];

  return (
    <main>
      <PageIntro
        eyebrow="OBSZAR DZIAŁANIA"
        title={`Mycie i malowanie dachów w ${location.locative}`}
        description={`CleanWorks realizuje usługi dachowe i elewacyjne w ${location.locative} oraz okolicznych miejscowościach. Skontaktuj się z nami, aby potwierdzić dojazd i zapytać o bezpłatną wycenę.`}
      />
      <section className="section location-services-section">
        <div className="section-wrap">
          <header className="location-section-heading">
            <p className="eyebrow">OFERTA CLEANWORKS</p>
            <h2>Usługi dostępne w {location.locative}</h2>
            <p>Każdą usługę planujemy z uwzględnieniem rodzaju powierzchni, jej stanu i oczekiwanego efektu.</p>
          </header>
          <div className="location-service-grid">
            {services.map((service) => (
              <article className="location-service-card" key={service.slug}>
                <h3>{service.title} w {location.locative}</h3>
                <p>{service.description}</p>
                <Link href={`/uslugi/${service.slug}`}>Szczegóły usługi <span aria-hidden="true">↗</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-faq location-faq-section">
        <div className="section-wrap faq-grid">
          <div>
            <p className="eyebrow">PYTANIA I ODPOWIEDZI</p>
            <h2>Usługi CleanWorks w {location.locative}</h2>
            <p className="section-intro">Sprawdź informacje o dojeździe i wycenie. Warunki realizacji ustalamy indywidualnie.</p>
            <a className="text-link" href={businessPhone.href}>Zadzwoń: {businessPhone.display} <span aria-hidden="true">↗</span></a>
          </div>
          <div className="faq-list">
            {questions.map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}<span aria-hidden="true">+</span></summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="section location-map-section">
        <div className="section-wrap location-map-grid">
          <div>
            <p className="eyebrow">CLEANWORKS W OKOLICY</p>
            <h2>Działamy w {location.locative} i okolicach</h2>
            <p>Obszar dojazdu ustalamy dla konkretnego zlecenia. Skontaktuj się z nami, aby potwierdzić możliwość realizacji pod wskazanym adresem.</p>
            <Link className="button button-primary" href="/kontakt">Zapytaj o dojazd <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="service-area-map">
            <iframe
              title={`Mapa — CleanWorks w ${location.locative}`}
              src={`https://maps.google.com/maps?q=${mapQuery}&z=11&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      <ServiceAreaSection />
    </main>
  );
}
