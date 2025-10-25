"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  return (
    <section className="pt-32 pb-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-background/95">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6 items-start leading-7 mx-0 my-0 px-0">
          {/* Left Side - Title, Subtext & Features */}
          <div className="space-y-4 animate-slide-in-up">
            {/* Title Section */}
            <div className="mb-2">
              <h2 className="text-4xl sm:text-5xl text-balance font-extrabold text-red-700 mx-0 my-[-11px]">
                What is Broker4U?
              </h2>
            </div>

            {/* Main Description */}
            <div className="space-y-2">
              <p className="text-lg text-foreground font-semibold py-2.5 my-[-2px]">
                India's first real estate marketplace built on a social media structure
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                seamlessly connecting verified brokers and serious investors on a single trusted platform. Designed to
                bring transparency and trust to the real estate ecosystem, Broker4U offers verified broker profiles,
                access to essential property documentation, advanced matching tools, and a modern user experience. It's
                not just a platform, it's a premium network built to empower real estate professionals and investors
                with clarity, confidence, and meaningful connections.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-0 mx-0 border-0 py-0 px-0 my-3">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wide mx-0 leading-6 my-[-15px]">
                Why Broker4U?
              </h3>
              <ul className="mx-0 leading-5 space-y-2 my-5">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="text-sm text-muted-foreground">
                    Verified broker profiles with complete transparency
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="text-sm text-muted-foreground">Access to essential property documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="text-sm text-muted-foreground">Advanced matching tools for better connections</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span className="text-sm text-muted-foreground">Premium network built for professionals</span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 leading-7 tracking-normal sm:flex-row items-center my-0 pb-0 pt-[-px] pt-[-5px] pt-[-50px] pt-0 pl-0 pr-0">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/50 hover:scale-105">
                🧑‍💼 I'm a Broker
              </Button>
              <Button
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent/10 font-semibold px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
              >
                🏢 I'm an Investor
              </Button>
            </div>
          </div>

          {/* Right Side - Video Container */}
          <div className="flex justify-center lg:justify-end animate-slide-in-up">
            <div className="relative w-full max-w-sm">
              <div className="relative rounded-3xl bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/30 backdrop-blur-sm overflow-hidden aspect-[3/4]">
                {/* Video Preview */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-secondary to-muted relative group">
                  <img
                    src="/broker4u-intro-video-preview-professional-finance.jpg"
                    alt="Broker4U intro video"
                    className="w-full h-full object-cover"
                  />

                  {/* Play Button Overlay */}
                  <button
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-all duration-300 mx-0 my-0 px-0"
                  >
                    <div className="w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300 shadow-lg">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </button>

                  {/* Video Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
                    2:45
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 to-transparent blur-2xl -z-10 animate-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
