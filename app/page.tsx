"use client"

import { useState } from "react"
import { LogoEntrance } from "@/components/logo-entrance"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Features } from "@/components/features"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"
import { TechBackground } from "@/components/tech-background"

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  return (
    <>
      {!showContent && <LogoEntrance onComplete={() => setShowContent(true)} />}
      {showContent && (
        <>
          <TechBackground />
          <main className="min-h-screen relative z-10">
            <Header />
            <Hero />
            <Services />
            <Features />
            <CTA />
            <Footer />
          </main>
        </>
      )}
    </>
  )
}
