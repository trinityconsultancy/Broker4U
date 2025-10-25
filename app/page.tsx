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
      <section id="roadmap" className="py-20">
        <RoadmapBlog />
      </section>
      <section id="contact-us" className="py-20">
        <ContactFaq />
      </section>
      <section id="faqs" className="py-20">
        <Founders />
      </section>
      <Footer />
    </main>
  )
}
