"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Concept & Research",
    description: "Validate idea, study competitors, define target users",
    date: "Jan 2024",
  },
  {
    phase: "Phase 2",
    title: "Planning & Branding",
    description: "Finalize brand identity, color theme, tech stack, and user flow",
    date: "Feb 2024",
  },
  {
    phase: "Phase 3",
    title: "MVP Design & Development",
    description: "Build landing page, broker & investor portals, and admin panel",
    date: "Mar 2024",
  },
  {
    phase: "Phase 4",
    title: "Testing & Beta Launch",
    description: "Onboard limited users, collect feedback, refine UX/UI",
    date: "Apr 2024",
  },
  {
    phase: "Phase 5",
    title: "Marketing & Growth Prep",
    description: "Create social media presence, ads, partnerships, and SEO",
    date: "May 2024",
  },
  {
    phase: "Phase 6",
    title: "Official Launch",
    description: "Public release, early traction campaigns, performance monitoring",
    date: "Jun 2024",
  },
  {
    phase: "Phase 7",
    title: "Investor & Funding",
    description: "Pitch deck, investor outreach, partnership building",
    date: "Jul 2024",
  },
  {
    phase: "Phase 8",
    title: "Expansion & Monetization",
    description: "Introduce premium plans, ad revenue, and city-based rollout",
    date: "Aug 2024",
  },
  {
    phase: "Phase 9",
    title: "Long-Term Growth",
    description: "AI matchmaking, mobile app, multilingual expansion, data insights",
    date: "Sep 2024",
  },
]

const CURRENT_PHASE = 3

export default function RoadmapBlog() {
  const [visiblePhases, setVisiblePhases] = useState<number[]>([])
  const [expandedPhases, setExpandedPhases] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            roadmapPhases.forEach((_, index) => {
              setTimeout(() => {
                setVisiblePhases((prev) => [...new Set([...prev, index])])
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.3 },
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const togglePhase = (index: number) => {
    setExpandedPhases((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">Our Roadmap</h2>
          <p className="text-secondary-foreground text-lg max-w-2xl mx-auto">
            Follow our journey as we build the future of broker-investor connections
          </p>
        </div>

        {/* Horizontal Roadmap Timeline */}
        <div
          ref={containerRef}
          className="relative border-2 border-accent rounded-2xl p-8 bg-background/50 backdrop-blur-sm"
        >
          <svg
            className="absolute top-1/2 left-0 right-0 h-1 hidden lg:block transform -translate-y-1/2"
            style={{ width: "100%", height: "6px" }}
          >
            <defs>
              <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset={`${(CURRENT_PHASE / roadmapPhases.length) * 100}%`} stopColor="#B71C1C" stopOpacity="1" />
                <stop
                  offset={`${(CURRENT_PHASE / roadmapPhases.length) * 100}%`}
                  stopColor="#B71C1C"
                  stopOpacity="0.3"
                />
                <stop offset="100%" stopColor="#B71C1C" stopOpacity="0.08" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <style>{`
                @keyframes glowPulse {
                  0%, 100% { filter: drop-shadow(0 0 4px rgba(183, 28, 28, 0.6)); }
                  50% { filter: drop-shadow(0 0 12px rgba(183, 28, 28, 0.95)); }
                }
                @keyframes flowingLine {
                  0% { stroke-dashoffset: 0; }
                  100% { stroke-dashoffset: -20; }
                }
                .glow-line { 
                  animation: glowPulse 2s ease-in-out infinite, flowingLine 3s linear infinite;
                  stroke-dasharray: 20, 10;
                }
              `}</style>
            </defs>
            <line
              x1="0"
              y1="3"
              x2="100%"
              y2="3"
              stroke="url(#glowGradient)"
              strokeWidth="6"
              filter="url(#glow)"
              className="glow-line"
            />
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapPhases.map((item, index) => {
              const isCompleted = index < CURRENT_PHASE
              const isCurrent = index === CURRENT_PHASE - 1
              const isExpanded = expandedPhases.includes(index)

              return (
                <div
                  key={index}
                  className={`relative transition-all duration-700 ease-out ${
                    visiblePhases.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div
                    className={`rounded-xl border backdrop-blur-sm transition-all duration-300 overflow-hidden ${
                      isCompleted
                        ? "bg-gradient-to-br from-background to-background/80 border-accent/40 shadow-lg shadow-accent/15 hover:shadow-accent/25 hover:border-accent/60"
                        : "bg-background/40 border-border/40 opacity-60 hover:opacity-80"
                    } ${isCurrent ? "ring-2 ring-accent ring-offset-2 ring-offset-secondary" : ""}`}
                  >
                    <button
                      onClick={() => togglePhase(index)}
                      className="w-full p-4 text-left hover:bg-accent/5 transition-colors duration-200"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 flex-shrink-0 ${
                                isCompleted
                                  ? "bg-gradient-to-br from-accent to-accent/70 text-background shadow-lg shadow-accent/40"
                                  : "bg-border text-secondary-foreground"
                              }`}
                            >
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <p
                                className={`text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
                                  isCompleted ? "text-accent" : "text-secondary-foreground/60"
                                }`}
                              >
                                {item.phase}
                              </p>
                              <p
                                className={`text-xs transition-colors duration-300 ${
                                  isCompleted ? "text-secondary-foreground" : "text-secondary-foreground/50"
                                }`}
                              >
                                {item.date}
                              </p>
                            </div>
                          </div>

                          <h3
                            className={`text-sm font-bold line-clamp-2 transition-colors duration-300 ${
                              isCompleted ? "text-foreground" : "text-secondary-foreground/70"
                            }`}
                          >
                            {item.title}
                          </h3>
                        </div>

                        <ChevronDown
                          size={18}
                          className={`flex-shrink-0 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          } ${isCompleted ? "text-accent" : "text-secondary-foreground/50"}`}
                        />

                        {isCurrent && (
                          <div className="w-3 h-3 rounded-full bg-[#1E3A34] animate-pulse shadow-lg shadow-[#1E3A34]/50 flex-shrink-0"></div>
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="border-t border-border/30 px-4 py-3 bg-accent/5 animate-in fade-in slide-in-from-top-2 duration-300">
                        <p
                          className={`text-sm leading-relaxed ${
                            isCompleted ? "text-secondary-foreground" : "text-secondary-foreground/60"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
