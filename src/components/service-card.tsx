import type { Service } from "@/data/site";
import Link from "next/link";
import { ServiceIcon } from "@/components/service-icon";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link className="service-card service-card-link" href={`/uslugi/${service.slug}`} aria-label={service.title}>
      <div className="service-icon"><ServiceIcon name={service.icon} /></div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </Link>
  );
}
