/** Official click-to-chat — https://faq.whatsapp.com/5913398998672934 */
export const PHONE_E164 = '972549189411'
export const PHONE_DISPLAY = '054-918-9411'
export const WHATSAPP_MESSAGE = 'היי מרדכי, אשמח לקבוע אימון היכרות'

/**
 * Prefer api.whatsapp.com over wa.me:
 * wa.me does a server redirect that often fails / crashes on iOS Safari.
 * See: https://stackoverflow.com/questions/51539605
 */
export function getWhatsAppUrl() {
  const params = new URLSearchParams({
    phone: PHONE_E164,
    text: WHATSAPP_MESSAGE,
  })
  return `https://api.whatsapp.com/send?${params.toString()}`
}

/** @deprecated use getWhatsAppUrl */
export function getWhatsAppWebUrl() {
  return getWhatsAppUrl()
}
