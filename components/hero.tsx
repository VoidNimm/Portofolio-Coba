'use client'

import Balancer from 'react-wrap-balancer'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex h-[calc(100vh-4rem)] min-h-[500px] w-full flex-col items-center justify-center text-center">
      <div className="container max-w-screen-xl px-4 md:px-8">
        {/* The wide-tracked name, a key part of the "identity-first" design. */}
        <h2 className="text-sm font-medium uppercase tracking-hero text-muted">
          Jules
        </h2>

        {/* The large, fluid headline with a text balancer for clean line breaks. */}
        <h1 className="mt-4 text-[clamp(2.8rem,6vw,6rem)] font-bold leading-tight">
          <Balancer>
            Creative Developer
            <br />& Designer
          </Balancer>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted">
          I build premium, accessible, and performant web experiences that feel amazing to use.
        </p>
      </div>

      {/* The "scroll to explore" cue with a subtle bounce animation. */}
      <div className="absolute bottom-8 flex flex-col items-center justify-center space-y-2">
        <p className="text-xs text-muted">Explore</p>
        <ChevronDown className="h-5 w-5 animate-bounce text-muted" />
      </div>
    </section>
  )
}
