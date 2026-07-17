export const PHONE_E164 = '972549189411'
export const PHONE_DISPLAY = '054-918-9411'
export const WHATSAPP_MESSAGE = 'היי מרדכי, אשמח לקבוע אימון היכרות'

/** Plain https link — most reliable across mobile browsers. */
export function getWhatsAppWebUrl() {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
}
