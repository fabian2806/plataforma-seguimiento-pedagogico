import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { RolesSection } from "@/components/roles-section"
import { HowItWorks } from "@/components/how-it-works"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <RolesSection />
        <HowItWorks />
        <FeaturesSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
    </div>
  )
}
