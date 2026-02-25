"use client";

import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <main className="h-screen bg-black text-white flex items-center px-8 md:px-16 lg:px-24">
        <div className="w-full max-w-7xl">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-16">
            Get in touch.
            <br />
            We might click together.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg md:text-xl">
            <div className="space-y-2">
              <p>Sofia</p>
              <p>Republic of Bulgaria</p>
              <p>+33786410557</p>
            </div>

            <div className="space-y-2">
              <a
                href="mailto:hello@louenterprises.com"
                className="block hover:text-gray-400 transition-colors"
              >
                hello@louenterprises.com
              </a>
              <a
                href="https://instagram.com/louenterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gray-400 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://twitter.com/louenterprises"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gray-400 transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
