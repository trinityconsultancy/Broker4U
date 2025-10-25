"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is Broker4U?",
    answer:
      "Broker4U is India’s first real estate networking platform that connects brokers and investors through verified profiles, transparency, and trust. designed to simplify professional connections in the real estate industry.",
  },
  {
    question: "Who can use Broker4U?",
    answer:
      "Broker4U is designed for both brokers and investors. Brokers can showcase their verified properties, connect with serious buyers, and grow their professional network. Investors can explore trusted brokers, discover property opportunities, and communicate securely within the platform.",
  },
  {
    question: "How does Broker4U ensure trust and transparency?",
    answer:
      "Every broker undergoes a document-based verification process. Verified profiles are clearly marked, and all users benefit from open communication channels, profile ratings, and secure document sharing. ensuring transparency at every step.",
  },
  {
    question: "What makes Broker4U different from other property apps?",
    answer:
      "Unlike regular property listing platforms, Broker4U focuses on building connections, not just listings. It’s a professional network made for real estate. combining verification, trust, and collaboration into one seamless experience.",
  },
  {
    question: "Is Broker4U free to use?",
    answer:
      "Yes. for investors, Broker4U is completely free. For brokers, a small platform fee applies, helping us maintain verified visibility, secure connections, and a high-quality professional environment.",
  },
  {
    question: "Will Broker4U charge a commission on deals?",
    answer:
      "No. Broker4U does not take any commission from property deals. Our platform simply connects brokers and investors. allowing them to manage their transactions independently with full transparency.",
  },
];


export default function ContactFaq() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="flex flex-col">
            <div className="mb-8 pb-6 border-b-2 border-accent/20">
              <h2 className="text-3xl font-bold text-foreground">Get in Touch</h2>
              <p className="text-muted-foreground text-sm mt-2">We'd love to hear from you. Send us a message.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5 flex-1">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-accent/30 bg-card focus:border-accent focus:outline-none transition-colors text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-accent/30 bg-card focus:border-accent focus:outline-none transition-colors text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Message subject"
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-accent/30 bg-card focus:border-accent focus:outline-none transition-colors text-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border-2 border-accent/30 bg-card focus:border-accent focus:outline-none transition-colors resize-none text-sm"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 text-sm"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* FAQ */}
          <div className="flex flex-col">
            <div className="mb-8 pb-6 border-b-2 border-accent/20">
              <h2 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-sm mt-2">Find answers to common questions about Broker4U.</p>
            </div>
            <div className="space-y-3 flex-1">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-2 border-accent/30 rounded-lg overflow-hidden bg-card/50 backdrop-blur-sm hover:border-accent/60 transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-5 flex items-center justify-between hover:bg-accent/5 transition-colors leading-7 py-[18px] h-auto tracking-normal my-1.5"
                  >
                    <span className="font-semibold text-foreground text-left text-sm">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-accent transition-transform duration-300 flex-shrink-0 ml-3 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-5 py-3 border-t-2 border-accent/30 bg-accent/5">
                      <p className="text-muted-foreground leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
