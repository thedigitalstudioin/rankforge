import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function BreadcrumbNav({
  items,
}: {
  items: BreadcrumbItem[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {i > 0 && (
              <span className="text-text-muted/40" aria-hidden="true">
                /
              </span>
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-text-primary">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
