"use client"

import Image from "next/image"

export default function Founders() {
  const founders = [
    {
      id: 1,
      name: "Siddhesh Ghode",
      title: "CEO & Co-Founder",
      bio: "Siddhesh is the visionary founder and driving force behind the project. He manages real-life connections, oversees operations, coordinates with the tech team, and ensures everything runs smoothly. As an all-rounder, he keeps the project aligned with its vision and drives it toward success.",
      image: "/images/founders/siddhesh.jpg",
    },
    {
      id: 2,
      name: "Rohit Pekhale",
      title: "COO & Co-Founder",
      bio: "Rohit is the operational backbone of the project. He handles day-to-day operations, leads marketing strategies, manages teams, and ensures smooth execution across all departments. He plays a key role in coordinating efforts, optimizing workflows, and driving growth for the company.",
      image: "/images/founders/rohit.jpg",
    },
    {
      id: 3,
      name: "Dhananjay Kakade",
      title: "CTO & Co-Founder",
      bio: "Dhananjay is the technical mastermind behind the project. He manages full tech and app support, oversees all technical aspects, and ensures smooth functioning across the platform. He is also involved in managing the technical team and coordinating related operations.",
      image: "/images/founders/dhananjay.jpg",
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
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.svg";
                  }}
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
                      aria-label="Instagram"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
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
