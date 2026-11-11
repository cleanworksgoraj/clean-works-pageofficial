import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "CleanWorks | Malowanie i mycie dachów",
  description:
    "CleanWorks oferuje mycie i malowanie dachów oraz czyszczenie i malowanie elewacji. Skontaktuj się z nami, aby zapytać o bezpłatną wycenę.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pl" data-scroll-behavior="smooth">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
