"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "WordPress & WooCommerce Websites.",
  "Custom Frontend & React Web Apps.",
  "Core Web Vitals & Speed Optimization.",
  "Technical SEO & Search-Ready Systems.",
  "Bug Troubleshooting & Reliability.",
];

export default function TypewriterEffect() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];
    const typingSpeed = isDeleting ? 35 : 75;
    const pauseTime = isDeleting ? 300 : 1800;

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentWord) {
      // Pause at end of word before backspacing
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayText === "") {
      // Pause before typing next word
      timer = setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % WORDS.length);
      }, pauseTime);
    } else {
      // Add or remove character
      timer = setTimeout(() => {
        const nextText = isDeleting
          ? currentWord.substring(0, displayText.length - 1)
          : currentWord.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <span className="inline-flex items-center text-gradient-cyan">
      <span className="min-h-[1.2em]">{displayText}</span>
      <span className="inline-block w-[3px] h-[0.9em] ml-1.5 bg-cyan-400 animate-pulse rounded-full shadow-[0_0_8px_#00f2fe]" />
    </span>
  );
}
