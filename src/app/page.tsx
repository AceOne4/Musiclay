"use client";

import dynamic from "next/dynamic";

const TestContainer = dynamic(() => import("@/components/TestContainer"), {
  ssr: false,
});
const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
const HeroSection = dynamic(() => import("@/components/HeroSection"), {
  ssr: false,
});
export default function Home() {
  return (
    <TestContainer>
      <Navbar />
      <HeroSection />
    </TestContainer>
  );
}
