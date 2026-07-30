export type AnalyticsEventName =
  | 'cta_clicked'
  | 'inquiry_started'
  | 'inquiry_submitted'
  | 'inquiry_confirmation_shown'
  | 'inquiry_submission_failed'
  | 'service_page_viewed'
  | 'case_study_viewed';

type EventPayload = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function getAttributionFromUrl() {
  if (typeof window === 'undefined') {
    return {
      utm_source: undefined,
      utm_medium: undefined,
      utm_campaign: undefined,
      referrer: undefined,
    };
  }

  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get('utm_source') || undefined,
    utm_medium: params.get('utm_medium') || undefined,
    utm_campaign: params.get('utm_campaign') || undefined,
    referrer: document.referrer || undefined,
  };
}

export function trackEvent(name: AnalyticsEventName, payload: EventPayload = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  const eventPayload = {
    event: name,
    ...payload,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventPayload);

  // A dataLayer push is a trigger in Tag Manager, but GA4's gtag.js ignores it —
  // it only reports what gtag('event', …) sends. Without this line a GA4 property
  // would record pageviews and no conversions at all. Harmless under GTM, where
  // gtag is not defined.
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, { ...payload, page_path: window.location.pathname });
  }

  if (import.meta.env.DEV) {
    // Visible in development, where no container is configured.
    console.debug('[analytics]', eventPayload);
  }
}
