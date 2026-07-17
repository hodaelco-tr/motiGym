import { CtaButton } from './components/CtaButton'
import { useReveal } from './hooks/useReveal'

const PHONE = '972549189411'
const WHATSAPP_TEXT = encodeURIComponent('היי מרדכי, אשמח לקבוע אימון היכרות')
// wa.me is the most reliable deep-link for mobile WhatsApp
const WHATSAPP = `https://wa.me/${PHONE}?text=${WHATSAPP_TEXT}`
const TEL = `tel:+${PHONE}`

export function Hero() {
  return (
    <header className="relative min-h-[100svh] overflow-hidden text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2400&q=80')",
        }}
        role="img"
        aria-label="חדר כושר"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,10,10,0.88)_8%,rgba(10,10,10,0.55)_48%,rgba(10,10,10,0.35)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,77,0,0.28),transparent_45%)]" />

      <nav className="relative z-10 flex items-center justify-between px-4 py-5 sm:px-6 lg:px-10">
        <a href="#top" className="font-brand text-2xl font-extrabold tracking-[0.14em]">
          MOTI
        </a>
        <div className="hidden items-center gap-8 text-sm font-semibold text-white/80 md:flex">
          <a href="#method" className="transition-colors hover:text-white">
            השיטה
          </a>
          <a href="#plans" className="transition-colors hover:text-white">
            מסלולים
          </a>
          <a href="#faq" className="transition-colors hover:text-white">
            שאלות
          </a>
        </div>
        <a
          href={TEL}
          className="hidden text-sm font-semibold tracking-wide text-white/70 transition-colors hover:text-white sm:inline"
          dir="ltr"
        >
          054-918-9411
        </a>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-88px)] max-w-6xl flex-col justify-end px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-10 lg:pb-24">
        <p
          className="animate-brand font-brand text-[clamp(4.5rem,18vw,11rem)] leading-[0.85] font-extrabold tracking-[0.08em] text-white"
          style={{ animationDelay: '0.05s' }}
        >
          MOTI
        </p>

        <div className="mt-4 h-1 w-28 origin-right bg-blaze animate-pulse-line sm:w-40" />

        <h1
          className="animate-rise mt-6 max-w-3xl font-display text-[clamp(1.85rem,5.2vw,3.6rem)] leading-[1.12] font-extrabold text-balance"
          style={{ animationDelay: '0.18s' }}
        >
          תגיע לגוף שרצית — בלי לנחש מה לעשות בחדר כושר
        </h1>

        <p
          className="animate-rise mt-5 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl"
          style={{ animationDelay: '0.32s' }}
        >
          אימון אישי עם מוטי. תוכנית מדויקת, ליווי צמוד, תוצאות שנשארות.
        </p>

        <div
          className="animate-rise mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: '0.45s' }}
        >
          <CtaButton href="#contact" className="min-w-[220px]">
            קבע אימון היכרות חינם
          </CtaButton>
          <CtaButton href={WHATSAPP} variant="ghost" className="min-w-[180px]">
            דבר איתי ב-WhatsApp
          </CtaButton>
        </div>

        <p
          className="animate-rise mt-5 text-sm text-white/65"
          style={{ animationDelay: '0.55s' }}
        >
          בלי התחייבות · 45 דקות · מתאים לכולם
        </p>
      </div>
    </header>
  )
}

export function ProofBar() {
  const ref = useReveal<HTMLElement>()
  const items = [
    { value: '8+', label: 'שנות אימון' },
    { value: '200+', label: 'מתאמנים' },
    { value: '1:1', label: 'יחס אישי' },
  ]

  return (
    <section
      ref={ref}
      className="reveal border-y border-line bg-white"
      aria-label="הוכחות חברתיות"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-3 gap-6 px-4 py-8 sm:px-6 lg:px-10">
        {items.map((item) => (
          <div key={item.label} className="text-center md:text-start">
            <p className="font-brand text-4xl font-extrabold tracking-wide text-ink sm:text-5xl">
              {item.value}
            </p>
            <p className="mt-1 text-sm font-medium text-muted">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Method() {
  const ref = useReveal<HTMLElement>()
  const steps = [
    {
      title: 'אבחון',
      text: 'מבינים את נקודת ההתחלה והמטרה האמיתית שלך.',
    },
    {
      title: 'תוכנית',
      text: 'אימונים ועומסים מותאמים אליך — לא תבנית גנרית.',
    },
    {
      title: 'ליווי',
      text: 'מעקב שבועי ותיקונים בזמן אמת.',
    },
  ]

  return (
    <section
      id="method"
      ref={ref}
      className="reveal bg-ink px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold tracking-[0.18em] text-blaze uppercase">
          השיטה
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-balance sm:text-5xl">
          ככה עובדים עם מוטי
        </h2>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className="relative border border-white/15 bg-white/[0.03] p-6"
            >
              <span className="font-brand text-6xl leading-none font-extrabold text-blaze/90">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-white/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export function Results() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="results"
      ref={ref}
      className="reveal bg-paper-deep px-4 py-16 sm:px-6 sm:py-24 lg:px-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div className="max-w-2xl">
          <p className="text-sm font-bold tracking-[0.18em] text-blaze uppercase">
            תוצאות
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-balance sm:text-5xl">
            שינוי אמיתי נבנה מחזרתיות — לא ממוטיבציה של יום אחד
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            מסלול ברור: מדידה, התאמה, התקדמות. ככה נשארים — וככה רואים תוצאה.
          </p>
        </div>
        <div className="shrink-0 border-r-4 border-blaze pr-5">
          <p className="font-brand text-7xl leading-none font-extrabold text-ink sm:text-8xl">
            12
          </p>
          <p className="mt-2 max-w-[12rem] text-sm leading-snug text-muted">
            שבועות בממוצע עד שינוי שמרגישים
          </p>
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const ref = useReveal<HTMLElement>()
  const quotes = [
    {
      name: 'נועם כ.',
      role: 'הייטק · תל אביב',
      text: 'סוף סוף תוכנית לפי הלו״ז שלי. תוך חודשיים חזרתי להרגיש חזק.',
    },
    {
      name: 'מאיה ר.',
      role: 'רעננה',
      text: 'פחדתי מחדר כושר. בשבוע הרביעי כבר חיכיתי לאימון.',
    },
    {
      name: 'איתי ל.',
      role: 'הרצליה',
      text: 'ההבדל הוא באחריות. יש מי שבודק ומתקן — וזה מה שהחזיק אותי.',
    },
  ]

  return (
    <section ref={ref} className="reveal bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold tracking-[0.18em] text-blaze uppercase">
          מתאמנים מספרים
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold sm:text-5xl">
          חוויות אמיתיות
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {quotes.map((q) => (
            <blockquote
              key={q.name}
              className="flex h-full flex-col border border-line bg-paper p-6"
            >
              <p className="flex-1 text-lg leading-relaxed text-ink-soft">
                ״{q.text}״
              </p>
              <footer className="mt-6 border-t border-line pt-4">
                <p className="font-display font-bold">{q.name}</p>
                <p className="text-sm text-muted">{q.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Plans() {
  const ref = useReveal<HTMLElement>()
  const plans = [
    {
      name: 'היכרות',
      price: 'חינם',
      note: '45 דקות',
      features: ['אבחון מטרות', 'בדיקת טכניקה', 'המלצה למסלול'],
      cta: 'קבע היכרות',
      featured: false,
    },
    {
      name: 'ליווי אישי',
      price: 'מסלול חודשי',
      note: 'הכי פופולרי',
      features: ['תוכנית מותאמת', '2–3 מפגשים בשבוע', 'מעקב + תזונה'],
      cta: 'רוצה להתחיל',
      featured: true,
    },
    {
      name: 'אונליין',
      price: 'ליווי מרחוק',
      note: 'גמיש ללו״ז',
      features: ['תוכנית דיגיטלית', 'צ׳ק־אין שבועי', 'תיקוני וידאו'],
      cta: 'שאל על אונליין',
      featured: false,
    },
  ]

  return (
    <section
      id="plans"
      ref={ref}
      className="reveal bg-ink px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-bold tracking-[0.18em] text-blaze uppercase">
          מסלולים
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold sm:text-5xl">
          בחר איך להתחיל
        </h2>
        <p className="mt-4 max-w-xl text-white/70">
          קודם היכרות — אחר כך מסלול שמתאים לך.
        </p>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex flex-col border p-6 ${
                plan.featured
                  ? 'border-blaze bg-blaze text-white'
                  : 'border-white/15 bg-white/[0.03]'
              }`}
            >
              <p
                className={`text-sm font-bold tracking-wide ${
                  plan.featured ? 'text-white/85' : 'text-blaze'
                }`}
              >
                {plan.note}
              </p>
              <h3 className="mt-2 font-display text-3xl font-extrabold">
                {plan.name}
              </h3>
              <p className="mt-1 font-brand text-2xl font-bold tracking-wide">
                {plan.price}
              </p>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm sm:text-base">
                    <span
                      aria-hidden
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-current"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <CtaButton
                href="#contact"
                variant={plan.featured ? 'secondary' : 'primary'}
                className="mt-8 w-full"
              >
                {plan.cta}
              </CtaButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  const ref = useReveal<HTMLElement>()
  const items = [
    {
      q: 'אני מתחיל לגמרי — זה מתאים לי?',
      a: 'במיוחד. מתחילים מאבחון רגוע ורק אחר כך מעלים עומס.',
    },
    {
      q: 'כמה פעמים בשבוע?',
      a: 'רוב האנשים מתקדמים יפה עם 2–3 אימונים. נדייק לפי הלו״ז שלך.',
    },
    {
      q: 'מה קורה בהיכרות?',
      a: 'מטרות, טכניקה בסיסית, וכיוון ברור — בלי התחייבות.',
    },
  ]

  return (
    <section
      id="faq"
      ref={ref}
      className="reveal bg-paper px-4 py-16 sm:px-6 sm:py-24 lg:px-10"
    >
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold tracking-[0.18em] text-blaze uppercase">
          שאלות נפוצות
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold sm:text-5xl">
          לפני שמתחילים
        </h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold sm:text-xl">
                {item.q}
                <span className="text-blaze transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCta() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="contact"
      ref={ref}
      className="reveal relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-10"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=2200&q=80')",
        }}
        role="img"
        aria-label="ציוד כושר"
      />
      <div className="absolute inset-0 bg-ink/88" />

      <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
        <p className="font-brand text-5xl font-extrabold tracking-[0.12em] sm:text-7xl">
          MOTI
        </p>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-balance sm:text-5xl">
          מוכן להפסיק לנחש ולהתחיל להתקדם?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
          קבע אימון היכרות חינם. נבין ביחד מה חסר ואיך נראה המסלול שלך.
        </p>

        <div className="mt-10 flex flex-col items-center gap-5">
          <CtaButton href={WHATSAPP} className="min-w-[240px]">
            שלח הודעה ב-WhatsApp
          </CtaButton>
          <a
            href={TEL}
            className="group inline-flex flex-col items-center gap-1 text-white/55 transition-colors hover:text-white"
          >
            <span className="text-xs font-medium tracking-[0.18em] uppercase">
              או התקשר
            </span>
            <span
              dir="ltr"
              className="font-brand text-2xl font-bold tracking-[0.08em] text-white underline decoration-blaze/70 decoration-2 underline-offset-8 group-hover:decoration-blaze"
            >
              054-918-9411
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-white px-4 py-8 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-brand text-2xl font-extrabold tracking-[0.12em]">MOTI</p>
        <a href={TEL} className="text-sm text-muted transition-colors hover:text-ink" dir="ltr">
          054-918-9411
        </a>
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Moti Gym
        </p>
      </div>
    </footer>
  )
}
