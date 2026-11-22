"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ImageReveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      initial={{ clipPath: "inset(18% 12% 18% 12% round 2rem)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 1.5rem)" }}
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.25 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
