/**
 * Single source of truth for all business-specific constants.
 * Update this file when any contact info, hours, or links change —
 * every component that uses these values will automatically reflect the update.
 */
export const SITE = {
  name: 'Third Proof Pizzeria',
  tagline: 'New Haven–style pizza',

  address: {
    street: '263 Changebridge Rd.',
    city: 'Pine Brook',
    state: 'NJ',
    zip: '07058',
    oneLine: '263 Changebridge Rd., Pine Brook, NJ 07058',
    twoLine: '263 Changebridge Rd.\nPine Brook, NJ 07058',
    mapsUrl: 'https://maps.google.com/?q=263+Changebridge+Rd+Pine+Brook+NJ+07058',
    reviewsUrl: 'https://maps.google.com/?q=Third+Proof+Pizzeria+Pine+Brook+NJ',
  },

  phone: {
    display: '(973) 287-7220',
    e164: '+19732877220',
    href: 'tel:+19732877220',
  },

  hours: {
    summary: 'Wed–Sat, 11 AM–8 PM',
    days: 'Wednesday – Saturday',
    time: '11:00 AM – 8:00 PM',
  },

  instagram: {
    handle: '@thirdproof',
    url: 'https://www.instagram.com/thirdproof',
  },

  ordering: {
    toastUrl: 'https://order.toasttab.com/online/thirdproofpizzeria',
  },
} as const;
