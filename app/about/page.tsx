"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section with Parallax */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <Image
            src="/images/louis1.webp"
            alt="Louis"
            fill
            priority
            className="object-cover object-[center_30%]"
            sizes="100vw"
          />
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />

        {/* Large Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-white leading-none tracking-tighter mix-blend-difference"
            style={{
              transform: `translateY(${scrollY * 0.2}px)`,
            }}
          >
            Soy Lou
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <main className="bg-black text-white py-16 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-white leading-tight">
            Louis — Entrepreneur, Private Butler & Designer
          </h2>

          {/* Biography - Large Bold Text */}
          <div className="space-y-12 text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
            <p>
              Louis is a luxury hospitality professional and entrepreneur known for blending precision service, refined aesthetics, and forward-thinking business concepts. With over a decade of experience as a private butler serving ultra-high-net-worth families all over the world, he has built a reputation for discretion, excellence, and an exceptional eye for detail.
            </p>

            <p>
              Beyond private service, Louis is an interior designer with a strong understanding of space, lifestyle, and elevated living. His career in elite households has shaped a unique perspective on modern luxury — one that informs both his design work and his entrepreneurial ventures.
            </p>

            <p>
              Louis is the founder of LouEnterprises Ltd, a creative business group developing innovative lifestyle and hospitality concepts. His current projects include:
            </p>

            {/* Projects List */}
            <ul className="space-y-6 list-disc ml-8">
              <li>
                <span className="font-bold">LouCanette</span> — a business focused on beverage sealing machines and turnkey drink solutions for cafés and restaurants.
              </li>
              <li>
                <span className="font-bold">LouJi</span> — a patented matcha preparation system designed for both professional cafés and home use.
              </li>
              <li>
                <span className="font-bold">LouLectric</span> <span className="italic">(coming soon)</span> — an automotive venture dedicated to converting classic vehicles into electric cars.
              </li>
              <li>
                <span className="font-bold">LouCasa</span> — a design-focused brand rooted in refined interiors and lifestyle aesthetics.
              </li>
            </ul>

            <p>
              An international professional, Louis has built his career between Los Angeles, Dubai, and the South of France, where he also owns property and continues to develop new ventures. Known for his discipline, vision, and entrepreneurial instinct, he has generated significant personal capital through private service while investing heavily into his own companies and intellectual property.
            </p>

            <p>
              Louis operates at the intersection of luxury service, design, and innovation — creating projects that merge elegance, efficiency, and modern lifestyle.
            </p>
          </div>

          {/* Company Information */}
          <div className="mt-24 pt-12 border-t border-gray-800">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              LouEnterprises Ltd.
            </h3>

            <div className="text-xl md:text-2xl space-y-3 text-gray-400 font-normal">
              <p>Republic of Bulgaria</p>
              <p>Sofia, 1700, Studentski district</p>
              <p>zh.k. Malinova Dolina, bl. 29, entr. C, fl. 8, app. 49</p>
              <p className="mt-6">
                <span className="text-gray-500">Tax Number:</span>{" "}
                <span className="text-white font-medium">BG208507534</span>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
