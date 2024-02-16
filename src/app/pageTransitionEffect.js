"use client";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";

export const PageTransitionComponen = ({ children }) => {
  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          document.body.classList.remove("overflow-hidden");
        }}
      >
        {children}
      </AnimatePresence>
    </LazyMotion>
  );
};
