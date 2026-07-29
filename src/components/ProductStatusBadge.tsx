import { ProductStatus } from '@/data/products';

interface ProductStatusBadgeProps {
  status: ProductStatus;
  className?: string;
}

export function ProductStatusBadge({ status, className = '' }: ProductStatusBadgeProps) {
  const statusConfig: Record<ProductStatus, { label: string; className: string }> = {
    live: {
      label: 'Live & Available',
      className: 'bg-primary/10 border border-primary/20 text-primary',
    },
    beta: {
      label: 'Beta Access',
      className: 'bg-accent/10 border border-accent/20 text-accent',
    },
    'private-beta': {
      label: 'Beta Testing',
      className: 'bg-accent/10 border border-accent/20 text-accent',
    },
    planned: {
      label: 'In Development',
      className: 'bg-muted border border-border text-muted-foreground',
    },
  };

  const config = statusConfig[status];

  return (
    <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full ${config.className} ${className}`}>
      {status !== 'planned' && (
        <span className={`w-1.5 h-1.5 rounded-full ${status === 'live' ? 'bg-primary' : 'bg-accent animate-pulse'}`} />
      )}
      <span className="text-xs font-medium">{config.label}</span>
    </div>
  );
}