import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageIntro } from "@/components/page-intro";
import { ServiceIcon } from "@/components/service-icon";
import { businessPhone, services } from "@/data/site";

const servicePhotos: Record<string, { src: string; alt: string; label: string }[]> = {
  "malowanie-dachow": [
    { src: "/realizacje/malowanie-dachu-przed.jpg", alt: "Dach przed malowaniem", label: "Przed" },
    { src: "/realizacje/malowanie-dachu-po.jpg", alt: "Dach po malowaniu", label: "Po" },
  ],
  "mycie-dachow": [
    { src: "/realizacje/mycie-dachu-przed.jpg", alt: "Dach przed myciem", label: "Przed" },
    { src: "/realizacje/mycie-dachu-po.jpg", alt: "Dach po myciu", label: "Po" },
  ],
  "czyszczenie-elewacji": [
    { src: "/realizacje/mycie-elewacji-przed.jpg", alt: "Elewacja przed myciem", label: "Przed" },
    { src: "/realizacje/mycie-elewacji-po.jpg", alt: "Elewacja po myciu", label: "Po" },
  ],
  "malowanie-elewacji": [
    { src: "/realizacje/malowanie-elewacji-przed.jpg", alt: "Elewacja przed malowaniem", label: "Przed" },
    { src: "/realizacje/malowanie-elewacji-po.jpg", alt: "Elewacja po malowaniu", label: "Po" },
  ],
};

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  return {
    title: service ? `${service.title} | CleanWorks` : "Usługa | CleanWorks",
    description: service?.description,
  };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();

  const photos = servicePhotos[service.slug] ?? [];

  return (
    <main>
      <PageIntro title={service.title} description={service.description} />
      {photos.length > 0 && (
        <section className="section service-photos-section" aria-labelledby="service-photos-title">
          <div className="section-wrap">
            <div className="service-photos-heading">
              <h2 id="service-photos-title">Nasze realizacje</h2>
            </div>
            <div className="service-photos-grid">
              {photos.map((photo) => (
                <figure className="service-photo" key={photo.src}>
                  <div className="service-photo-image">
                    <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" />
                    <figcaption>{photo.label}</figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="section service-detail-section">
        <div className="section-wrap detail-grid">
          <article className="detail-copy">
            <h2>{service.contentHeading}</h2>
            {service.longDescription.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <h3>Zakres dopasujemy do Twojej powierzchni.</h3>
            <p>
              Każde pokrycie i każda realizacja są inne. Zaczynamy od poznania
              potrzeb, rodzaju powierzchni i oczekiwanego efektu. Następnie
              omawiamy możliwy zakres prac oraz wycenę.
            </p>
            <ul className="detail-list">
              {service.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
            <a className="button button-primary" href={businessPhone.href}>
              Zadzwoń: {businessPhone.display} <span aria-hidden="true">↗</span>
            </a>
            <Link className="detail-back-link" href="/uslugi">← Zobacz wszystkie usługi</Link>
          </article>
          <aside className="detail-callout">
            <span className="service-icon"><ServiceIcon name={service.icon} /></span>
            <p className="eyebrow">BEZPŁATNA WYCENA</p>
            <h2>Zapytaj o usługę</h2>
            <p>Opowiedz nam, czego potrzebujesz. Ustalimy kolejne kroki i odpowiemy na pytania.</p>
            <Link className="button button-primary" href="/kontakt">Przejdź do kontaktu <span aria-hidden="true">↗</span></Link>
          </aside>
        </div>
      </section>
      <section className="section section-faq service-detail-faq" aria-labelledby="service-faq-title">
        <div className="section-wrap faq-grid">
          <div>
            <p className="eyebrow">DOBRZE WIEDZIEĆ</p>
            <h2 id="service-faq-title">Pytania i odpowiedzi</h2>
            <p className="section-intro">Sprawdź najważniejsze informacje dotyczące usługi {service.title.toLowerCase()}.</p>
            <Link className="text-link" href="/kontakt">Masz inne pytanie? <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="faq-list">
            {service.faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
