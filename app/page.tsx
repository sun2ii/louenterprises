"use client";

import { useState, useEffect } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import Gallery from "@/components/Gallery";

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  // Check if user has seen intro animation in this session
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setAnimationComplete(true);
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem('hasSeenIntro', 'true');
    setAnimationComplete(true);
  };

  return animationComplete ? (
    <Gallery />
  ) : (
    <IntroAnimation onComplete={handleComplete} onSkip={handleComplete} />
  );
}
