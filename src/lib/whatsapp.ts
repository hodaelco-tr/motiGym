export const PHONE_E164 = '972549189411'
export const PHONE_DISPLAY = '054-918-9411'

/** Prefills the WhatsApp compose box when the chat opens. */
export const WHATSAPP_PREFILL =
  'היי מרדכי, הגעתי מהאתר ואשמח לשמוע על אימון אישי'

/** https://wa.me/972…?text=… */
export function getWhatsAppUrl() {
  return `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(WHATSAPP_PREFILL)}`
}

export function getWhatsAppWebUrl() {
  return getWhatsAppUrl()
}
