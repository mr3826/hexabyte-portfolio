import { ProductStatus } from '@/data/products';

interface ProductStatusBadgeProps {
  status: ProductStatus;
  className?: string;
}

// Semantic status colours: green = live, blue = open beta, amber = closed beta,
// muted = not yet released. Brand indigo is deliberately not used here — it reads
// as "Hexabyte", not "available", and appears on nearly every other element.
const STATUS_CONFIG: Record<ProductStatus, { label: string; className: string; dot: string }> = {
  live: {
    label: 'Live & Available',
    className: 'bg-success/10 border border-success/25 text-success',
    dot: 'bg-success',
  },
  beta: {
    label: 'Beta Access',
    className: 'bg-accent/10 border border-accent/25 text-accent',
    dot: 'bg-accent',
  },
  'private-beta': {
    label: 'Beta Testing',
    className: 'bg-warning/10 border border-warning/25 text-warning',
    dot: 'bg-warning',
  },
  planned: {
    label: 'In Development',
    className: 'bg-muted border border-border text-muted-foreground',
    dot: 'bg-muted-foreground',
  },
};

export function ProductStatusBadge({ status, className = '' }: ProductStatusBadgeProps) {
  const config = STATUS_CONFIG[status];

  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full ${config.className} ${className}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${config.dot}`} aria-hidden="true" />
      <span className="text-xs font-medium whitespace-nowrap">{config.label}</span>
    </div>
  );
}
