"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function HeroSection() {
  const boxRef = useRef(null);
  const textboxRef = useRef(null);
  const textRef = useRef(null);
  const textH2Ref = useRef(null);
  const btnRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      boxRef.current,
      { x: -800, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    );

    tl.fromTo(
      [textboxRef.current, textH2Ref.current, textRef.current],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.2 },
      "-=0.5"
    );

    tl.fromTo(
      btnRef.current,
      { y: 20, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "bounce.out" },
      "-=0.5"
    );
  });

  return (
    <div className="hero h-[600px] px-6">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <div className="lg:w-2/5 w-full flex items-center justify-center">
          <Image
            ref={boxRef}
            src="/music.PNG"
            alt="music"
            className="rounded-lg shadow-sm shadow-indigo-300/50 border-indigo-300 border-r-2 border-b-2"
            height={500}
            width={400}
          />
        </div>

        <div className="lg:w-3/5 w-full text-center lg:text-left">
          <h1 className="text-5xl font-bold" ref={textboxRef}>
            Discover How You Listen!
          </h1>
          <h2 ref={textH2Ref} className="text-2xl font-semibold mt-2">
            Your Personal Music Journey
          </h2>
          <p className="py-6" ref={textRef}>
            Explore a world of music curated just for you. Dive into genres,
            artists, and albums that match your unique taste, and uncover new
            sounds to expand your playlist.
          </p>
          <button ref={btnRef} type="button" className="btn btn-primary">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
