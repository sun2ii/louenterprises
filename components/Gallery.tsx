"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Footer from "./Footer";

export default function Gallery() {
  const [brandLabel, setBrandLabel] = useState("LouCanette");
  const [projectLabel, setProjectLabel] = useState("Louji");
  const [yearLabel, setYearLabel] = useState("LouCasa");
  const [currentSection, setCurrentSection] = useState(0);
  const [labelsVisible, setLabelsVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const sections = document.querySelectorAll("section[data-brand]");
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        // Check if footer is in view (with 100px buffer for early fade-out)
        const footer = document.querySelector("footer");
        if (footer) {
          const footerRect = footer.getBoundingClientRect();
          const footerInView = footerRect.top < window.innerHeight - 100;
          setLabelsVisible(!footerInView);
        }

        sections.forEach((section, index) => {
          const sectionEl = section as HTMLElement;
          const sectionTop = sectionEl.offsetTop;
          const sectionHeight = sectionEl.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          // Update labels when in viewport AND footer not visible
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            // Only update labels if footer isn't in view
            const footer = document.querySelector("footer");
            const shouldUpdate = !footer || footer.getBoundingClientRect().top >= window.innerHeight - 100;

            if (shouldUpdate) {
              const brand = section.getAttribute("data-brand");
              const project = section.getAttribute("data-project");
              const year = section.getAttribute("data-year");

              // Only trigger transition if values actually changed
              if (brand !== brandLabel || project !== projectLabel || year !== yearLabel) {
                setIsTransitioning(true);

                // Blur + slide out (300ms)
                setTimeout(() => {
                  // Update text while transitioned out
                  if (brand) setBrandLabel(brand);
                  if (project) setProjectLabel(project);
                  if (year) setYearLabel(year);

                  // Unblur + slide in
                  setTimeout(() => {
                    setIsTransitioning(false);
                  }, 50);
                }, 300);
              }

              setCurrentSection(index);
            }
          }

          // Image scale effect: zoom from 1.0 to 1.1 as user scrolls through section
          const rect = sectionEl.getBoundingClientRect();
          const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
          const clampedPercent = Math.max(0, Math.min(1, scrollPercent));
          const scale = 1 + (clampedPercent * 0.1); // 1.0 to 1.1

          // Blur effect: 0px when centered, 4px at edges
          const blur = Math.abs(0.5 - clampedPercent) * 8;

          const img = sectionEl.querySelector('img');
          if (img) {
            img.style.transform = `scale(${scale})`;
            img.style.filter = `blur(${blur}px)`;
            img.style.transformOrigin = 'center center';
          }
        });
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <main className="relative w-full">
      {/* Sticky Text Labels - Stacked on mobile, horizontal on desktop */}
      <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4 md:hidden label-animate-mobile label-transition ${labelsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${isTransitioning ? 'label-transition-out' : 'label-transition-in'}`}>
        <div className="text-lg text-center text-white font-bold tracking-wide uppercase">{brandLabel}</div>
        <div className="text-lg text-center text-cyan font-semibold tracking-wide">{projectLabel}</div>
        <div className="text-lg text-center text-white font-bold tracking-wide uppercase">{yearLabel}</div>
      </div>

      {/* Desktop layout - hidden on mobile */}
      <div className={`hidden md:block fixed top-1/2 -translate-y-1/2 left-12 z-40 text-2xl lg:text-3xl text-white font-bold tracking-wide uppercase label-animate-left label-transition ${labelsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${isTransitioning ? 'label-transition-out' : 'label-transition-in'}`}>
        {brandLabel}
      </div>
      <div className={`hidden md:block fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-40 text-2xl lg:text-3xl text-cyan font-semibold tracking-wide label-animate-center label-transition ${labelsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${isTransitioning ? 'label-transition-out' : 'label-transition-in'}`}>
        {projectLabel}
      </div>
      <div className={`hidden md:block fixed top-1/2 -translate-y-1/2 right-12 z-40 text-2xl lg:text-3xl text-white font-bold tracking-wide uppercase label-animate-right label-transition ${labelsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${isTransitioning ? 'label-transition-out' : 'label-transition-in'}`}>
        {yearLabel}
      </div>

      {/* Section Indicators */}
      <div className={`fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3 transition-opacity duration-300 ${labelsVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === index
                ? 'bg-cyan w-3 h-3'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Section ${index + 1}`}
          />
        ))}
      </div>

      {/* Section 1: Lou Enterprises */}
      <section
        className="relative flex h-screen items-center"
        data-brand="LouCanette"
        data-project="Louji"
        data-year="LouCasa"
      >
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.8)_100%)]" />
        <Image
          src="/images/louenterprise.webp"
          alt="Lou Enterprises"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* Section 2: Lou Casa */}
      <section
        className="relative flex h-screen items-center"
        data-brand="LouCasa"
        data-project="Sicilian Jewels"
        data-year="2025"
      >
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.8)_100%)]" />
        <Image
          src="/images/loucasa.webp"
          alt="Lou Casa"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* Section 3: Lou Canette */}
      <section
        className="relative flex h-screen items-center"
        data-brand="LouCanette"
        data-project="Can Sealing Solutions"
        data-year="2025"
      >
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.8)_100%)]" />
        <Image
          src="/images/loucanette.webp"
          alt="Lou Canette"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* Section 4: Lou Ji */}
      <section
        className="relative flex h-screen items-center"
        data-brand="LouJi"
        data-project="Matcha Machine"
        data-year="2026"
      >
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_50%,rgba(0,0,0,0.8)_100%)]" />
        <Image
          src="/images/louji.webp"
          alt="Lou Ji"
          fill
          loading="lazy"
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
