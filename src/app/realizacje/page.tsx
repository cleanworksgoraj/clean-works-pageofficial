import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/page-intro";
import { ServiceAreaSection } from "@/components/service-area-section";
import { faqs, galleryItems } from "@/data/site";

export const metadata: Metadata = {
  title: "Realizacje — Łódź i okolice | CleanWorks",
  description: "Mycie i malowanie dachów oraz elewacji. Zobacz wybrane realizacje CleanWorks i sprawdź obszar dojazdu w promieniu ok. 200 km od Łodzi.",
};

export default function ProjectsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="NASZE PRACE"
        title="Realizacje"
        description="Zobacz wybrane realizacje i porównaj wygląd powierzchni przed wykonaniem prac oraz po ich zakończeniu."
      />
      <section className="section section-gallery">
        <div className="section-wrap">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <article className={`gallery-card gallery-card-${index + 1}`} key={item.title}>
                <div className="gallery-caption">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
                <div className="gallery-photos">
                  {item.photos.map((photo) => (
                    <figure className="gallery-photo" key={photo.src}>
                      <div className="gallery-photo-image">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                        />
                        <figcaption>{photo.label}</figcaption>
                      </div>
                    </figure>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section-faq" aria-labelledby="projects-faq-title">
        <div className="section-wrap faq-grid">
          <div>
            <p className="eyebrow">DOBRZE WIEDZIEĆ</p>
            <h2 id="projects-faq-title">Najczęściej zadawane pytania</h2>
            <p className="section-intro">
              Dowiedz się więcej o wycenie, oględzinach i obszarze działania CleanWorks.
            </p>
            <a className="text-link" href="/kontakt">Masz inne pytanie? Skontaktuj się z nami <span aria-hidden="true">↗</span></a>
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
