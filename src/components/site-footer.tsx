import Link from "next/link";
import { HomeLogoLink } from "@/components/home-logo-link";
import { businessPhone, serviceAreaLocations, services } from "@/data/site";

const facebookUrl = "https://www.facebook.com/p/CLEAN-WORKS-61557168899248/";
const instagramUrl = "https://www.instagram.com/clean.works.goraj";
const businessEmail = "cleanworks.goraj@gmail.com";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-wrap footer-main">
        <div className="footer-column footer-brand-column">
          <HomeLogoLink
            className="brand brand-footer"
            imageClassName="brand-logo brand-logo-footer"
            imageSrc="/cleanworks-logo-footer.png"
            label="Clean Works — strona główna"
          />
          <p>Mycie i malowanie dachów oraz czyszczenie i malowanie elewacji. Działamy w Łodzi i okolicach.</p>
          <div className="footer-contact-list">
            <a href={businessPhone.href}>
              <svg className="footer-outline-icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 3h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10.7 19 5 13.3 5 6c0-1.7.7-3 2-3Z" />
              </svg>
              {businessPhone.display}
            </a>
            <a href={`mailto:${businessEmail}`}>
              <svg className="footer-outline-icon" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              {businessEmail}
            </a>
            <div className="footer-contact-hours">
              <svg className="footer-outline-icon" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
              <span>Pon.–Pt. 7:00–18:00</span>
            </div>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Clean Works na Facebooku">
              <svg className="social-icon-facebook footer-social-facebook" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14 21v-8h2.7l.4-3H14V8c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.2V10H8v3h2.6v8H14Z" />
              </svg>
              Facebook
            </a>
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Clean Works na Instagramie">
              <svg className="social-icon-instagram" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle className="social-icon-dot" cx="17.5" cy="6.8" r="1" />
              </svg>
              Instagram
            </a>
          </div>
        </div>
        <nav className="footer-column" aria-label="Usługi w stopce">
          <h2>Usługi</h2>
          <ul>
            {services.map((service) => (
              <li key={service.slug}><Link href={`/uslugi/${service.slug}`}>{service.title}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="footer-column">
          <h2>Obszar działania</h2>
          <ul>
            {serviceAreaLocations.slice(0, 8).map((location) => (
              <li key={location.slug}><Link href={`/obszar-dzialania/${location.slug}`}>{location.name}</Link></li>
            ))}
          </ul>
          <Link className="footer-more-link" href="/realizacje#obszar">Wszystkie lokalizacje <span aria-hidden="true">→</span></Link>
        </div>
        <nav className="footer-column" aria-label="Informacje o firmie">
          <h2>Firma</h2>
          <ul>
            <li><Link href="/o-firmie">O firmie</Link></li>
            <li><Link href="/kontakt">Kontakt</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </nav>
      </div>
      <div className="section-wrap footer-bottom">
        <span>© {new Date().getFullYear()} Clean Works Krystian Góraj. NIP: 7712778567. Wszelkie prawa zastrzeżone.</span>
        <span>Województwo Łódzkie · Tuszyn</span>
      </div>
    </footer>
  );
}
