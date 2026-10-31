

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Presentation from "@/components/Presentation";
import Footer from "@/components/Footer";
import TestimoniosSection from "@/components/TestimoniosSection";

const SwipeCards = dynamic(
  () => import("@/components/Cards"),
  { ssr: false }
);

const Navbar = dynamic(
  () => import("@/components/Navbar"),
  { ssr: false }
);

export default function Home() {
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowCards(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Presentation />
      <Navbar />
      {showCards && <SwipeCards />}
      <TestimoniosSection />
      <Footer />
    </>
  );
}
