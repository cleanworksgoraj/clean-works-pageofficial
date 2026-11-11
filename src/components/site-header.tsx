"use client";

import { useEffect, useRef, useState } from "react";
import { businessPhone } from "@/data/site";
import Link from "next/link";
import { HomeLogoLink } from "@/components/home-logo-link";

export function SiteHeader() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (event.target instanceof Node && !servicesRef.current?.contains(event.target)) {
        setServicesOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setServicesOpen(false);
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function closeMenu() {
    setServicesOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <HomeLogoLink
          className="brand"
          imageClassName="brand-logo"
          imageSrc="/cleanworks-logo-transparent.png"
          label="CleanWorks — strona główna"
        />
        <nav className="main-nav" aria-label="Nawigacja główna">
          <Link className="nav-home-link" href="/" onClick={closeMenu}>Strona główna</Link>
          <div className="nav-dropdown" ref={servicesRef}>
            <button
              className="nav-dropdown-trigger"
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="services-menu"
              onClick={() => setServicesOpen((open) => !open)}
            >
              Usługi <span className="nav-chevron" aria-hidden="true" />
            </button>
            <div
              className={`nav-dropdown-menu${servicesOpen ? " is-open" : ""}`}
              id="services-menu"
              aria-hidden={!servicesOpen}
              inert={!servicesOpen}
            >
              <div className="nav-dropdown-menu-inner">
                <Link href="/uslugi" onClick={closeMenu}>Wszystkie usługi</Link>
                <Link href="/uslugi/malowanie-dachow" onClick={closeMenu}>Malowanie dachów</Link>
                <Link href="/uslugi/mycie-dachow" onClick={closeMenu}>Mycie dachów</Link>
                <Link href="/uslugi/czyszczenie-elewacji" onClick={closeMenu}>Czyszczenie elewacji</Link>
                <Link href="/uslugi/malowanie-elewacji" onClick={closeMenu}>Malowanie elewacji</Link>
              </div>
            </div>
          </div>
          <Link href="/realizacje" onClick={closeMenu}>Realizacje</Link>
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
          <Link href="/o-firmie" onClick={closeMenu}>O Firmie</Link>
          <Link href="/kontakt" onClick={closeMenu}>Kontakt</Link>
        </nav>
        <a className="header-contact" href={businessPhone.href} aria-label={`Zadzwoń: ${businessPhone.display}`}>
          <svg className="header-phone-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 3h3l1.5 4-2 1.5a15 15 0 0 0 6 6l1.5-2 4 1.5v3c0 1.1-.9 2-2 2C10.7 19 5 13.3 5 6c0-1.7.7-3 2-3Z" />
          </svg>
          <span>{businessPhone.display}</span>
        </a>
      </div>
    </header>
  );
}
