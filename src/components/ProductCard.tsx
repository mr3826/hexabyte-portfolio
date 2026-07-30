import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Product } from '@/data/products';
import { ProductStatusBadge } from '@/components/ProductStatusBadge';

/**
 * Tailwind v4 scans source text for class names (`@import 'tailwindcss' source(none)`),
 * so `bg-${product.color}/15` would never be generated. The accents have to be
 * written out literally.
 */
const PRODUCT_ACCENT: Record<Product['color'], { iconBg: string; icon: string; border: string; link: string }> = {
  primary: {
    iconBg: 'bg-primary/15',
    icon: 'text-primary',
    border: 'hover:border-primary/40',
    link: 'text-primary hover:text-primary/80',
  },
  accent: {
    iconBg: 'bg-accent/15',
    icon: 'text-accent',
    border: 'hover:border-accent/40',
    link: 'text-accent hover:text-accent/80',
  },
  success: {
    iconBg: 'bg-success/15',
    icon: 'text-success',
    border: 'hover:border-success/40',
    link: 'text-success hover:text-success/80',
  },
  warning: {
    iconBg: 'bg-warning/15',
    icon: 'text-warning',
    border: 'hover:border-warning/40',
    link: 'text-warning hover:text-warning/80',
  },
};

interface ProductCardProps {
  product: Product;
  /** `compact` hides the category pill — used where four cards sit in one row. */
  variant?: 'compact' | 'full';
  linkLabel?: string;
  className?: string;
}

export function ProductCard({
  product,
  variant = 'full',
  linkLabel = 'View Product',
  className = '',
}: ProductCardProps) {
  const accent = PRODUCT_ACCENT[product.color];

  return (
    <div
      className={`bg-card border border-border rounded-xl p-6 flex flex-col transition-colors ${accent.border} ${className}`}
    >
      {/* Column-first: the badge does not fit beside the product identity at 360px. */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4">
        <div
          className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${accent.iconBg}`}
        >
          <product.icon className={`w-5 h-5 ${accent.icon}`} />
        </div>
        <div className="min-w-0">
          <div className="font-bold text-base leading-snug">{product.name}</div>
          <ProductStatusBadge status={product.status} className="mt-1" />
        </div>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-grow">
        {product.shortDescription}
      </p>

      <div className="flex flex-wrap items-center justify-between gap-3 mt-auto">
        {variant === 'full' ? (
          <span className="text-xs px-2 py-1 bg-secondary rounded text-muted-foreground">
            {product.category}
          </span>
        ) : (
          <span />
        )}
        <Link
          to={`/products#${product.anchor}`}
          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${accent.link}`}
        >
          {linkLabel} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
