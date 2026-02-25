"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // ESC key handler for menu accessibility
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      {/* Fixed Logo - Home Button */}
      <Link
        href="/"
        className="fixed top-8 left-1/2 -translate-x-1/2 z-50 md:top-12 opacity-90 hover:opacity-100 transition-opacity"
        aria-label="Go to home"
      >
        <img
          src="/images/louenterprise.ico"
          alt="LouEnterprises"
          className="w-10 h-10 md:w-12 md:h-12"
        />
      </Link>

      {/* Fixed Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-50 text-base text-white transition-colors hover:text-cyan md:top-12 md:right-12 cursor-pointer font-medium tracking-wide"
        aria-label="Open navigation menu"
      >
        Menu
      </button>

      {/* Full Screen Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] bg-white"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 z-[110] text-black text-2xl font-medium tracking-wide hover:text-gray-600 transition-colors cursor-pointer"
          >
            Close
          </button>

          {/* Menu Items */}
          <nav className="flex flex-col items-center justify-center h-full gap-12">
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="text-black text-5xl md:text-6xl lg:text-7xl font-bold hover:text-cyan transition-colors cursor-pointer leading-tight tracking-tight"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="text-black text-5xl md:text-6xl lg:text-7xl font-bold hover:text-cyan transition-colors cursor-pointer leading-tight tracking-tight"
            >
              Contact
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-black text-5xl md:text-6xl lg:text-7xl font-bold hover:text-cyan transition-colors cursor-pointer leading-tight tracking-tight"
            >
              Home
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
