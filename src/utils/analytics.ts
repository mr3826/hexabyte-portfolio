export type AnalyticsEventName =
  | 'cta_clicked'
  | 'inquiry_started'
  | 'inquiry_submitted'
  | 'service_page_viewed'
  | 'case_study_viewed';

type EventPayload = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function getAttributionFromUrl() {
  if (typeof window === 'undefined') {
    return {
      utm_source: null,
      utm_medium: null,
      utm_campaign: null,
      referrer: null,
    };
  }

  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
    referrer: document.referrer || null,
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

  if (import.meta.env.DEV) {
    // Keep this visible in development until GTM/GA4 wiring is finalized.
    console.debug('[analytics]', eventPayload);
  }
}
