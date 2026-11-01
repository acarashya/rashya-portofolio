/**
 * Utility functions for Muhammad Rashya Reihansyah's portfolio.
 * Pure logic decoupled for testability and maintainability.
 */

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

/**
 * Validates the contact form inputs.
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  if (!data.name || data.name.trim().length < 2) {
    errors.name = 'Please enter a valid name (at least 2 characters).';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!data.subject || data.subject.trim().length < 3) {
    errors.subject = 'Please enter a subject (at least 3 characters).';
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.message = 'Please enter a detailed message (at least 10 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Constructs a safe mailto URL from contact form data.
 */
export function buildMailtoUrl(
  recipient: string,
  form: ContactFormData
): string {
  const subject = encodeURIComponent(`[Portfolio Inquiry] ${form.subject.trim()}`);
  const body = encodeURIComponent(
    `Hello Rashya,\n\nName: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\nMessage:\n${form.message.trim()}\n\n---\nSent via portfolio contact form`
  );
  return `mailto:${recipient}?subject=${subject}&body=${body}`;
}

/**
 * Format educational and organizational periods.
 */
export function formatPeriod(
  startYear: string | number,
  endYear?: string | number,
  isCurrent?: boolean,
  lang: 'en' | 'id' = 'en'
): string {
  if (isCurrent) {
    return lang === 'id' ? `${startYear} – Sekarang` : `${startYear} – Present`;
  }
  if (!endYear || startYear === endYear) {
    return `${startYear}`;
  }
  return `${startYear} – ${endYear}`;
}

/**
 * Returns color classes and label for technical skill levels.
 */
export function getSkillLevelMeta(level: 'Basic' | 'Intermediate' | 'Advanced') {
  switch (level) {
    case 'Intermediate':
      return {
        badgeClass: 'bg-red-950/60 text-red-300 border-red-500/40',
        dotClass: 'bg-[#FF243D]',
        levelText: 'Intermediate',
      };
    case 'Basic':
    default:
      return {
        badgeClass: 'bg-neutral-900/80 text-neutral-300 border-neutral-700/50',
        dotClass: 'bg-[#E50924]',
        levelText: 'Basic',
      };
  }
}
