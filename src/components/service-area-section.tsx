import Link from "next/link";
import { serviceAreaLocations } from "@/data/site";

export function ServiceAreaSection() {
  return (
    <section className="section section-area service-area-section" id="obszar">
      <div className="section-wrap">
        <header className="service-area-heading">
          <p className="eyebrow">OBSZAR DZIAŁANIA</p>
          <h2>Gdzie działamy?</h2>
          <p>
            Całe województwo łódzkie i wybrane miasta w promieniu około 200 km
            od Łodzi — mycie i malowanie dachów oraz elewacji.
          </p>
        </header>
        <div className="service-area-content">
          <div className="service-area-map">
            <iframe
              title="Mapa obszaru działania CleanWorks — Łódź i okolice"
              src="https://maps.google.com/maps?q=%C5%81%C3%B3d%C5%BA%2C%20Polska&z=8&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="service-area-locations">
            <h3>Obsługiwane miejscowości</h3>
            <ul className="area-city-list">
              {serviceAreaLocations.slice(0, 10).map((location) => (
                <li key={location.slug}>
                  <Link href={`/obszar-dzialania/${location.slug}`}>{location.name}<span aria-hidden="true">›</span></Link>
                </li>
              ))}
            </ul>
            <details className="service-area-all">
              <summary>Wszystkie lokalizacje <span aria-hidden="true">+</span></summary>
              <ul className="area-city-list">
                {serviceAreaLocations.slice(10).map((location) => (
                  <li key={location.slug}>
                    <Link href={`/obszar-dzialania/${location.slug}`}>{location.name}<span aria-hidden="true">›</span></Link>
                  </li>
                ))}
              </ul>
            </details>
            <Link className="button button-primary service-area-cta" href="/kontakt">
              Zapytaj o dojazd <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
