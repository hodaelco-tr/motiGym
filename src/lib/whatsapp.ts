export const PHONE_E164 = '972549189411'
export const PHONE_DISPLAY = '054-918-9411'
export const WHATSAPP_MESSAGE = 'היי מרדכי, אשמח לקבוע אימון היכרות'

export function getWhatsAppWebUrl() {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
}

export function getWhatsAppAppUrl() {
  return `whatsapp://send?phone=${PHONE_E164}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
}

function isMobileUa(ua: string) {
  return /iPhone|iPad|iPod|Android/i.test(ua)
}

function isInAppBrowser(ua: string) {
  // Embedded browsers (Teams / social apps) often crash on WhatsApp links
  return /Teams|MSAppHost|FBAN|FBAV|Instagram|Line\/|Twitter|LinkedInApp/i.test(
    ua,
  )
}

/** Opens WhatsApp to Mordechai's chat — safe for mobile + in-app browsers. */
export function openWhatsApp(event?: {
  preventDefault: () => void
  stopPropagation?: () => void
}) {
  event?.preventDefault()
  event?.stopPropagation?.()

  const ua = navigator.userAgent || ''
  const webUrl = getWhatsAppWebUrl()
  const appUrl = getWhatsAppAppUrl()

  // Android inside Teams/etc: use an Intent that escapes the WebView
  if (/Android/i.test(ua) && isInAppBrowser(ua)) {
    const intent =
      `intent://send?phone=${PHONE_E164}&text=${encodeURIComponent(WHATSAPP_MESSAGE)}` +
      '#Intent;scheme=whatsapp;package=com.whatsapp;S.browser_fallback_url=' +
      encodeURIComponent(webUrl) +
      ';end'
    window.location.href = intent
    return
  }

  if (isMobileUa(ua)) {
    // Prefer native app scheme, then fall back to wa.me if app isn't installed
    const started = Date.now()
    window.location.href = appUrl
    window.setTimeout(() => {
      if (!document.hidden && Date.now() - started < 1600) {
        window.location.href = webUrl
      }
    }, 1200)
    return
  }

  // Desktop: WhatsApp Web / Desktop
  window.location.href = webUrl
}
