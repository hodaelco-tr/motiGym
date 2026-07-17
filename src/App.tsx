import {
  Faq,
  FinalCta,
  Footer,
  Hero,
  Method,
  Plans,
  ProofBar,
  Results,
  Testimonials,
} from './sections'

export default function App() {
  return (
    <div id="top">
      <Hero />
      <ProofBar />
      <Method />
      <Results />
      <Testimonials />
      <Plans />
      <Faq />
      <FinalCta />
      <Footer />
    </div>
  )
}
