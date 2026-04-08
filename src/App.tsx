import { Hero } from './components/Hero'
import { Story } from './components/Story'
import { Rates } from './components/Rates'
import { Benefits } from './components/Benefits'
import { FAQ } from './components/FAQ'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Hero />
      <main>
        <Story />
        <Rates />
        <Benefits />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
