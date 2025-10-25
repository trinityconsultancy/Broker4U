"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showComingSoon, setShowComingSoon] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleDownloadClick = () => {
    setShowComingSoon(true)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-medium leading-7 my-0 py-0 bg-sidebar-accent ${
          isScrolled
            ? "bg-gradient-to-b from-secondary to-secondary/80 backdrop-blur-md shadow-lg py-3 border-b border-border"
            : "bg-gradient-to-b from-secondary via-secondary/95 to-secondary/90 py-6 border-b border-border/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="#hero" className="flex items-center" onClick={(e) => handleSmoothScroll(e, "hero")}>
            <img
              src="/images/design-mode/lqp%20%281%29.png"
              alt="Broker4U Logo"
              className="h-[30px] px-0 my-0 py-[-px] py-[-px] py-0 mx-[-32px] w-52"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Roadmap", id: "roadmap" },
              { label: "Features", id: "hero" },
              { label: "Contact Us", id: "contact-us" },
              { label: "FAQs", id: "faqs" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleSmoothScroll(e as any, item.id)}
                className="text-foreground hover:text-accent transition-colors duration-300 relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <Button
            onClick={handleDownloadClick}
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 flex items-center gap-2"
          >
            <Download size={18} />
            Download
          </Button>
        </div>
      </header>

      {/* Coming Soon Popup */}
      {showComingSoon && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background border-2 border-accent rounded-lg shadow-2xl max-w-md w-full p-8 animate-in fade-in zoom-in duration-300">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-foreground">Coming Soon</h2>
              <button
                onClick={() => setShowComingSoon(false)}
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-foreground/80 mb-6">
              The Broker4U mobile app is coming soon! Stay tuned for updates and be among the first to download.
            </p>
            <div className="flex gap-3">
              <Button
                onClick={() => setShowComingSoon(false)}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-lg transition-all duration-300"
              >
                Got it
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
