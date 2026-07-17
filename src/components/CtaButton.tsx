import type { ReactNode, MouseEvent } from 'react'
import { getWhatsAppWebUrl, openWhatsApp } from '../lib/whatsapp'

type CtaProps = {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'light'
  className?: string
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

const variants = {
  primary:
    'bg-blaze text-white hover:bg-blaze-deep shadow-[0_12px_28px_-12px_rgba(255,77,0,0.7)]',
  secondary:
    'bg-ink text-white hover:bg-ink-soft shadow-[0_12px_28px_-14px_rgba(18,18,18,0.55)]',
  ghost:
    'bg-transparent text-white border border-white/40 hover:border-white hover:bg-white/10',
  light: 'bg-white text-ink hover:bg-white/90',
} as const

function isWhatsApp(href: string) {
  return /wa\.me|api\.whatsapp\.com|whatsapp:/i.test(href)
}

export function CtaButton({
  href = '#contact',
  children,
  variant = 'primary',
  className = '',
  onClick,
}: CtaProps) {
  const whatsapp = isWhatsApp(href)
  const resolvedHref = whatsapp ? getWhatsAppWebUrl() : href
  const external = /^https?:/i.test(resolvedHref)

  return (
    <a
      href={resolvedHref}
      onClick={(event) => {
        if (whatsapp) {
          openWhatsApp(event)
          return
        }
        onClick?.(event)
      }}
      {...(external && !whatsapp
        ? { target: '_blank', rel: 'noopener noreferrer' }
        : undefined)}
      className={`inline-flex min-h-12 items-center justify-center gap-2 px-6 text-base font-bold tracking-wide transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  )
}
