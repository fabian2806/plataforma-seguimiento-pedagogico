import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { RolesSection } from "@/components/roles-section"
import { FeaturesSection } from "@/components/features-section"
import { HowItWorks } from "@/components/how-it-works"
import { CtaSection } from "@/components/cta-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <RolesSection />
        <FeaturesSection />
        <HowItWorks />
      </main>
      <CtaSection />
    </div>
  )
}
