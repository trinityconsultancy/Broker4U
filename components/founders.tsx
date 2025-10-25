"use client"

import Image from "next/image"

export default function Founders() {
  const founders = [
    {
      id: 1,
      name: "Rajesh Kumar",
      title: "CEO & Co-Founder",
      bio: "Financial tech entrepreneur with 15+ years of experience in digital banking and investment platforms.",
      image: "/professional-man-founder-ceo.jpg",
    },
    {
      id: 2,
      name: "Priya Sharma",
      title: "CTO & Co-Founder",
      bio: "Full-stack developer and tech innovator specializing in scalable financial solutions and blockchain.",
      image: "/professional-woman-founder-cto.jpg",
    },
    {
      id: 3,
      name: "Amit Patel",
      title: "COO & Co-Founder",
      bio: "Operations expert with proven track record in scaling startups and building high-performing teams.",
      image: "/professional-man-founder-coo.jpg",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Meet Our Founders</h2>
          <p className="text-lg text-secondary-foreground max-w-2xl mx-auto">
            Visionary leaders driving innovation in the financial technology space
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((founder) => (
            <div
              key={founder.id}
              className="group bg-background rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-secondary to-secondary/50">
                <Image
                  src={founder.image || "/placeholder.svg"}
                  alt={founder.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent/60"></div>
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Name */}
                <h3 className="text-xl font-bold text-foreground mb-1">{founder.name}</h3>

                {/* Title */}
                <p className="text-sm font-semibold text-accent mb-4">{founder.title}</p>

                {/* Bio */}
                <p className="text-sm text-secondary-foreground leading-relaxed">{founder.bio}</p>

                {/* Divider */}
                <div className="mt-4 pt-4 border-t border-border">
                  {/* Social Links Placeholder */}
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-secondary hover:bg-accent/10 flex items-center justify-center text-accent transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <span className="text-xs font-bold">in</span>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-secondary hover:bg-accent/10 flex items-center justify-center text-accent transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      <span className="text-xs font-bold">𝕏</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
