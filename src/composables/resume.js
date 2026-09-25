import { site } from '../data/profile'

// Résumé destination for one portfolio. With a URL it opens the document; without one
// it falls back to an email request, so the CTA is never a dead link.
export function resumeLink (url, role) {
  if (url) {
    return { href: url, label: 'View résumé', available: true, attrs: { target: '_blank', rel: 'noopener noreferrer' } }
  }

  const subject = encodeURIComponent(`${role} résumé request`)
  return { href: `mailto:${site.email}?subject=${subject}`, label: 'Request résumé', available: false, attrs: {} }
}
