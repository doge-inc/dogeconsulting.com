export const CONTACT_EMAIL = "hello@dogeconsulting.com";

const EMAIL_TEMPLATE = "What we're building:\n\nWhat's stuck:\n\nTimeline:\n";

/**
 * Builds a mailto link with the inquiry template in the body. Give each CTA its own subject:
 * without analytics, the subject line is how an inbound email shows which CTA produced it.
 */
export function mailtoFor(subject: string) {
  const params = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(EMAIL_TEMPLATE)}`;
  return `mailto:${CONTACT_EMAIL}?${params}`;
}
