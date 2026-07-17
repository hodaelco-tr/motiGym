import type { ReactNode } from 'react'
import { getWhatsAppUrl } from '../lib/whatsapp'

type Variant = 'primary' | 'secondary' | 'ghost' | 'light' | 'fab'

type Props = {
  children?: ReactNode
  variant?: Variant
  className?: string
}

const variants: Record<Variant, string> = {
  primary:
    'bg-blaze text-white hover:bg-blaze-deep shadow-[0_12px_28px_-12px_rgba(255,77,0,0.7)] px-6 min-h-12',
  secondary: 'bg-ink text-white hover:bg-ink-soft px-6 min-h-12',
  ghost:
    'bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10 px-6 min-h-12',
  light: 'bg-white text-ink hover:bg-white/90 px-6 min-h-12',
  fab: 'fixed z-40 bottom-6 left-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe57] md:left-6',
}

/**
 * WhatsApp click-to-chat with prefilled message.
 * Plain <a href> — no JS intercept, no target=_blank.
 */
export function WhatsAppButton({
  children = 'שלח הודעה ב-WhatsApp',
  variant = 'primary',
  className = '',
}: Props) {
  const fab = variant === 'fab'

  return (
    <a
      href={getWhatsAppUrl()}
      aria-label="פתח WhatsApp עם מרדכי"
      className={`inline-flex items-center justify-center gap-2 text-base font-bold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {fab ? (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.89.52 3.66 1.43 5.19L2 22l5.05-1.32a9.86 9.86 0 004.99 1.27h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.79 14.12c-.24.68-1.4 1.24-1.94 1.32-.5.07-1.13.1-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.17-4.93-4.36-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.38.26-.29.57-.36.76-.36h.55c.17 0 .41-.07.64.49.24.58.82 2 .89 2.14.07.14.12.31.02.5-.1.19-.14.31-.29.48-.14.17-.31.37-.44.5-.14.14-.29.29-.12.56.17.28.74 1.22 1.59 1.98 1.09.97 2.01 1.28 2.29 1.42.28.14.45.12.61-.07.17-.19.7-.81.89-1.09.19-.28.38-.23.64-.14.26.1 1.66.78 1.95.93.28.14.47.21.54.33.07.12.07.68-.17 1.36z" />
        </svg>
      ) : (
        children
      )}
    </a>
  )
}
