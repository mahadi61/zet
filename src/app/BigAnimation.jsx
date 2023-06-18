"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BigAnimation = () => {
  useEffect(() => {
    if (typeof window !== undefined) {
      AOS.init();
    }
  }, []);
  return <></>;
};

export default BigAnimation;
