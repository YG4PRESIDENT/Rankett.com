"use client";

import {
  SmoothScrollProvider,
  FadeInOnScroll,
  ParallaxSection,
  StickyReveal,
  HorizontalScroll,
} from "@/components/scroll";

export default function ScrollDemo() {
  return (
    <SmoothScrollProvider>
      <div className="bg-slate-950 text-white">
        {/* ============================================ */}
        {/* HERO - Introduction */}
        {/* ============================================ */}
        <section className="min-h-screen flex flex-col items-center justify-center px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-6">
            Smooth Scroll Demo
          </h1>
          <p className="text-xl text-slate-400 text-center max-w-2xl">
            Scroll down to see all 4 effects in action: Fade-in, Parallax,
            Sticky Reveal, and Horizontal Scroll.
          </p>
          <div className="mt-12 animate-bounce">
            <svg
              className="w-8 h-8 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 1: Fade-In On Scroll */}
        {/* ============================================ */}
        <section className="min-h-screen py-32 px-8">
          <FadeInOnScroll direction="up" className="max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              1. Fade-In On Scroll
            </h2>
            <p className="text-slate-400 text-lg">
              Elements animate into view as they enter the viewport.
            </p>
          </FadeInOnScroll>

          {/* Grid of cards that fade in */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            <FadeInOnScroll direction="up" delay={0}>
              <div className="bg-slate-800 rounded-2xl p-8 h-64 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">From Below</h3>
                <p className="text-slate-400">direction=&quot;up&quot;</p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="left" delay={0.1}>
              <div className="bg-slate-800 rounded-2xl p-8 h-64 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">From Right</h3>
                <p className="text-slate-400">direction=&quot;left&quot;</p>
              </div>
            </FadeInOnScroll>

            <FadeInOnScroll direction="right" delay={0.2}>
              <div className="bg-slate-800 rounded-2xl p-8 h-64 flex flex-col justify-end">
                <h3 className="text-2xl font-bold mb-2">From Left</h3>
                <p className="text-slate-400">direction=&quot;right&quot;</p>
              </div>
            </FadeInOnScroll>
          </div>

          {/* More staggered items */}
          <div className="max-w-4xl mx-auto mt-24 space-y-8">
            {[1, 2, 3, 4].map((i) => (
              <FadeInOnScroll key={i} direction="up" delay={i * 0.1}>
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border border-purple-500/30">
                  <h4 className="text-xl font-semibold">Staggered Item {i}</h4>
                  <p className="text-slate-400 mt-2">
                    Each item appears slightly after the previous one using
                    delay={i * 0.1}
                  </p>
                </div>
              </FadeInOnScroll>
            ))}
          </div>
        </section>

        {/* ============================================ */}
        {/* SECTION 2: Parallax Effect */}
        {/* ============================================ */}
        <ParallaxSection
          speed={0.3}
          height="100vh"
          className="flex items-center justify-center"
        >
          {/* Gradient background for parallax effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/50 via-slate-950 to-blue-900/50" />

          <div className="relative z-10 text-center px-8">
            <FadeInOnScroll>
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                2. Parallax Effect
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                The background moves at a different speed than the content,
                creating a sense of depth. This section has speed=0.3 (background
                moves slower).
              </p>
            </FadeInOnScroll>
          </div>
        </ParallaxSection>

        {/* Spacer */}
        <div className="h-[50vh] flex items-center justify-center">
          <p className="text-slate-500 text-lg">Keep scrolling...</p>
        </div>

        {/* Another parallax with different speed */}
        <ParallaxSection
          speed={0.7}
          height="80vh"
          className="flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-purple-600/30" />
          <div className="relative z-10 text-center px-8">
            <h3 className="text-3xl md:text-4xl font-bold">
              This one has speed=0.7
            </h3>
            <p className="text-slate-300 mt-4">
              Higher speed = background moves faster (less depth effect)
            </p>
          </div>
        </ParallaxSection>

        {/* ============================================ */}
        {/* SECTION 3: Sticky Reveal */}
        {/* ============================================ */}
        <StickyReveal
          scrollLength={3}
          backgroundColor="#0f172a"
          className="px-8"
        >
          <div className="h-screen flex flex-col items-center justify-center max-w-4xl mx-auto">
            <h2
              data-reveal-item
              className="text-4xl md:text-5xl font-bold mb-8 text-center"
            >
              3. Sticky Reveal Section
            </h2>
            <p data-reveal-item className="text-xl text-slate-400 text-center mb-12">
              This section is pinned. Keep scrolling to reveal more content.
            </p>

            <div className="grid md:grid-cols-3 gap-6 w-full">
              <div
                data-reveal-item
                className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 rounded-xl border border-green-500/30"
              >
                <h4 className="text-xl font-bold mb-2">Step 1</h4>
                <p className="text-slate-400">First item reveals</p>
              </div>
              <div
                data-reveal-item
                className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-6 rounded-xl border border-yellow-500/30"
              >
                <h4 className="text-xl font-bold mb-2">Step 2</h4>
                <p className="text-slate-400">Second item reveals</p>
              </div>
              <div
                data-reveal-item
                className="bg-gradient-to-br from-red-500/20 to-pink-500/20 p-6 rounded-xl border border-red-500/30"
              >
                <h4 className="text-xl font-bold mb-2">Step 3</h4>
                <p className="text-slate-400">Third item reveals</p>
              </div>
            </div>

            <p data-reveal-item className="text-slate-500 mt-12">
              scrollLength=3 means it stays pinned for 3 viewport heights
            </p>
          </div>
        </StickyReveal>

        {/* ============================================ */}
        {/* SECTION 4: Horizontal Scroll */}
        {/* ============================================ */}
        <section className="py-24 px-8">
          <FadeInOnScroll className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              4. Horizontal Scroll
            </h2>
            <p className="text-slate-400 text-lg">
              Scroll down but the content moves sideways. Great for showcasing
              projects or features.
            </p>
          </FadeInOnScroll>
        </section>

        <HorizontalScroll backgroundColor="#1e293b">
          {/* Each "slide" in the horizontal scroll */}
          {[
            { title: "Project One", color: "from-purple-500 to-pink-500" },
            { title: "Project Two", color: "from-blue-500 to-cyan-500" },
            { title: "Project Three", color: "from-green-500 to-emerald-500" },
            { title: "Project Four", color: "from-orange-500 to-red-500" },
            { title: "Project Five", color: "from-pink-500 to-purple-500" },
          ].map((project, i) => (
            <div
              key={i}
              className="w-screen h-screen flex items-center justify-center px-8 shrink-0"
            >
              <div
                className={`w-full max-w-2xl aspect-video bg-gradient-to-br ${project.color} rounded-3xl flex items-center justify-center shadow-2xl`}
              >
                <h3 className="text-4xl font-bold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </HorizontalScroll>

        {/* ============================================ */}
        {/* FOOTER - Ending */}
        {/* ============================================ */}
        <section className="min-h-screen flex flex-col items-center justify-center px-8 bg-slate-950">
          <FadeInOnScroll>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-6">
              That&apos;s All The Effects!
            </h2>
            <p className="text-xl text-slate-400 text-center max-w-2xl">
              Now you can mix and match these components on your actual Rankett.com
              pages. Check the code in <code className="bg-slate-800 px-2 py-1 rounded">/components/scroll/</code>
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.3} className="mt-12">
            <a
              href="/"
              className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-200 transition"
            >
              Back to Homepage
            </a>
          </FadeInOnScroll>
        </section>
      </div>
    </SmoothScrollProvider>
  );
}
