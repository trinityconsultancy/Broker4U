"use client"

import Link from "next/link"
import { Mail, Phone, Linkedin, Instagram, Twitter, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-secondary to-background border-t-2 border-accent/20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8">
          {/* Brand & Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">B</span>
              </div>
              <span className="font-bold text-lg text-foreground">Broker4U</span>
            </div>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Connecting brokers and investors through a trusted digital network. Empowering financial professionals
              with innovative solutions.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-accent flex-shrink-0" />
              <a
                href="mailto:broker4u.in@gmail.com"
                className="text-muted-foreground hover:text-accent text-sm transition-colors"
              >
                broker4u.in@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-accent flex-shrink-0" />
              <a href="tel:+919420690958" className="text-muted-foreground hover:text-accent text-sm transition-colors">
                +91 9420690958
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
              <p className="text-muted-foreground text-sm">
                Nashik Maharashtra
                <br />
                Nashik Road, 422101
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-accent/20 pt-6">
          {/* Social & Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <p className="text-muted-foreground text-xs">© 2025 Broker4U. All rights reserved.</p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-accent/20 hover:bg-accent/40 flex items-center justify-center text-accent hover:text-accent-foreground transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-accent/10">
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "Cookie Policy", href: "#" },
              { label: "Compliance", href: "#" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-muted-foreground hover:text-accent text-xs transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
