"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";

type HomeLogoLinkProps = {
  className: string;
  imageClassName: string;
  imageSrc: string;
  label: string;
  children?: ReactNode;
};

export function HomeLogoLink({
  className,
  imageClassName,
  imageSrc,
  label,
  children,
}: HomeLogoLinkProps) {
  const pathname = usePathname();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <Link className={className} href="/#start" aria-label={label} onClick={handleClick}>
      <Image className={imageClassName} src={imageSrc} alt="" width={517} height={270} priority />
      {children}
    </Link>
  );
}
