"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import RoadmapBlog from "@/components/roadmap-blog"
import ContactFaq from "@/components/contact-faq"
import Footer from "@/components/footer"
import Founders from "@/components/founders"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-secondary to-background">
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="roadmap" className="py-4">
        <RoadmapBlog />
      </section>
      <section id="faqs" className="py-4">
        <ContactFaq />
      </section>
      <section id="founders" className="py-4">
        <Founders />
      </section>
      <Footer />
    </main>
  )
}
