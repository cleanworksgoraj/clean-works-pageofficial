import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Usługi | CleanWorks",
  description: "Sprawdź ofertę CleanWorks: mycie i malowanie dachów oraz czyszczenie i malowanie elewacji.",
};

export default function ServicesPage() {
  return (
    <main>
      <PageIntro
        eyebrow="OFERTA CLEANWORKS"
        title="Usługi"
        description="Sprawdź, jak możemy pomóc w czyszczeniu, przygotowaniu i odświeżeniu dachu."
      />
      <section className="section section-services">
        <div className="section-wrap">
          <div className="service-grid">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
