"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Props = {
  onComplete: () => void;
  onSkip?: () => void;
};

export default function IntroAnimation({ onComplete, onSkip }: Props) {
  const [showCurtain, setShowCurtain] = useState(false);

  // Text content split into words
  const leftWords = ["LouCanette"];
  const centerWords = ["Louji"];
  const rightWords = ["LouCasa"];

  // Calculate total words for timing
  const totalWords = leftWords.length + centerWords.length + rightWords.length;
  const wordDelay = 600; // ms per word
  const textRevealDuration = totalWords * wordDelay;
  const pauseDuration = 1200;
  const curtainDuration = 1500;

  useEffect(() => {
    // Start curtain reveal after text reveal + pause
    const curtainTimer = setTimeout(() => {
      setShowCurtain(true);
    }, textRevealDuration + pauseDuration);

    // Complete animation after curtain finishes
    const completeTimer = setTimeout(() => {
      onComplete();
    }, textRevealDuration + pauseDuration + curtainDuration);

    return () => {
      clearTimeout(curtainTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete, textRevealDuration, pauseDuration, curtainDuration]);

  return (
    <div className="fixed inset-0 z-50">
      {/* Skip Button */}
      {onSkip && (
        <button
          onClick={onSkip}
          className="fixed top-8 right-8 z-50 text-sm text-gray-400 hover:text-white transition-colors md:top-12 md:right-12 cursor-pointer"
          aria-label="Skip intro animation"
        >
          Skip →
        </button>
      )}

      {/* Black background with text reveal */}
      <div className="fixed inset-0 flex items-center bg-black">
        {/* Left text: Lou Perez */}
        <div className="absolute left-8 flex gap-2 md:left-12">
          {leftWords.map((word, index) => (
            <span
              key={index}
              className="text-xl text-white opacity-0 md:text-2xl font-bold tracking-wide uppercase"
              style={{
                animation: `fadeIn 600ms ease-in-out ${index * wordDelay}ms forwards`,
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Center text: Colombian Photographer */}
        <div className="absolute left-1/2 flex -translate-x-1/2 gap-2">
          {centerWords.map((word, index) => {
            const globalIndex = leftWords.length + index;
            return (
              <span
                key={index}
                className="text-xl text-cyan opacity-0 md:text-2xl font-semibold tracking-wide"
                style={{
                  animation: `fadeIn 300ms ease-in-out ${globalIndex * wordDelay}ms forwards`,
                }}
              >
                {word}
              </span>
            );
          })}
        </div>

        {/* Right text: based in London */}
        <div className="absolute right-8 flex gap-2 text-white md:right-12">
          {rightWords.map((word, index) => {
            const globalIndex = leftWords.length + centerWords.length + index;
            return (
              <span
                key={index}
                className="text-xl opacity-0 md:text-2xl font-bold tracking-wide uppercase"
                style={{
                  animation: `fadeIn 300ms ease-in-out ${globalIndex * wordDelay}ms forwards`,
                }}
              >
                {word}
              </span>
            );
          })}
        </div>
      </div>

      {/* Curtain reveal */}
      <div
        className={`fixed inset-0 transition-transform duration-[1500ms] ease-out ${
          showCurtain ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Image
          src="/images/louenterprise.webp"
          alt="Lou Enterprises"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Text overlay on curtain (same as final gallery) */}
        <div className="absolute left-8 text-xl text-white drop-shadow-lg md:left-12 md:text-2xl font-bold tracking-wide uppercase">
          LouCanette
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 text-xl text-cyan drop-shadow-lg md:text-2xl font-semibold tracking-wide">
          Louji
        </div>
        <div className="absolute right-8 text-xl text-white drop-shadow-lg md:right-12 md:text-2xl font-bold tracking-wide uppercase">
          LouCasa
        </div>
      </div>

      {/* CSS keyframe animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
