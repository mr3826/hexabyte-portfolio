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
  brandName: 'Hexabyte',
  structure: 'Sole Proprietorship',
  activity: 'Information technology, software products, and engineering services',
  founder: 'Evan Ahmed',
  email: 'contact@hexabyte.tech',
  phoneDisplay: '+880 1886-895874',
  phoneHref: '+8801886895874',
  website: 'https://hexabyte.tech',
  websiteDisplay: 'hexabyte.tech',
  discoveryCallUrl: 'https://calendly.com/hexabyte/discovery',
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
  `${company.address.region}-${company.address.postalCode}`,
  company.address.country,
].join(', ');
