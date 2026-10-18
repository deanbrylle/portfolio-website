import { HeroSection } from '@/sections/HeroSection'
import { TrustSection } from '@/sections/TrustSection'
import { SelectedWorkSection } from '@/sections/SelectedWork'
import { ServicesSection } from '@/sections/ServicesSection'
import { TechStackSection } from '@/sections/TechStackSection'
import { AboutSection } from '@/sections/AboutSection'
import { ProcessSection } from '@/sections/ProcessSection'
import { PricingSection } from '@/sections/PricingSection'
import { FAQSection } from '@/sections/FAQSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <SelectedWorkSection />
      <ServicesSection />
      <TechStackSection />
      <AboutSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
