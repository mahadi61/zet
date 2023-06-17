"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
// ..

const BigAnimation = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      AOS.init();
    }
  }, []);
  return <></>;
};

export default BigAnimation;
