/**
 * Single source of truth for public company facts.
 *
 * Used by the Company Information page, the Footer, the Organization JSON-LD in
 * App.tsx, and every contact link. Previously the address alone was written out
 * in four places, free to drift apart.
 *
 * Only publishable information belongs here — no identity numbers, tax numbers,
 * licence data, or private addresses.
 */
export const company = {
  legalName: 'Hexabyte Technologies',
  brandName: 'Hexabyte Technologies',
  legalNameBn: 'হেক্সাবাইট টেকনোলজিস',
  activity: 'Information technology, software products, and engineering services',
  founder: 'Evan Ahmed',
  email: 'contact@hexabyte.tech',
  phoneDisplay: '+880 1886-895874',
  phoneHref: '+8801886895874',
  website: 'https://hexabyte.tech',
  websiteDisplay: 'hexabyte.tech',
  // No discoveryCallUrl. It held a Calendly booking link that returns 404 — the
  // account does not exist — and it was the href of the primary CTA on nine
  // pages. Every "Book a Discovery Call" on the site sent the visitor to a dead
  // page. (The URL itself is not repeated here: outbound-links.test.tsx fails on
  // any occurrence in src/, which is the point.)
  //
  // Those CTAs now open the inquiry modal, which captures the enquiry and emails
  // it through. When a real booking link exists, wire it through the modal's own
  // scheduling step (VITE_ENABLE_CALENDAR_BOOKING / VITE_CALENDAR_EMBED_URL)
  // rather than reintroducing a bare link here: the modal path records who asked
  // and where they came from, a raw link records nothing.
  address: {
    street: 'Plot-107, North Tower, 8th Floor, Sector-7',
    locality: 'Uttara',
    region: 'Dhaka',
    postalCode: '1230',
    country: 'Bangladesh',
    countryCode: 'BD',
  },
  /** Profiles owned by the business. These belong in Organization `sameAs`. */
  social: {
    facebook: 'https://www.facebook.com/hexabytetechnologies/',
  },
  /** Personal profiles of the founder. These belong on the Person, not the Organization. */
  founderSocial: {
    linkedin: 'https://www.linkedin.com/in/mr3826',
    github: 'https://github.com/mr3826',
  },
} as const;

/** One-line address, e.g. for the footer. */
export const addressLine = [
  company.address.street,
  company.address.locality,
  `${company.address.region}, ${company.address.postalCode}`,
  company.address.country,
].join(', ');
