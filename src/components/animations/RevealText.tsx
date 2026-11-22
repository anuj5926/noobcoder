"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealTextProps = {
  lines: string[];
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  accentLines?: number[];
  accentClassName?: string;
  delay?: number;
  id?: string;
};

const line: Variants = {
  hidden: { y: "105%" },
  show: (i: number) => ({ y: "0%", transition: { duration: 1.1, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] } }),
};

export function RevealText({ lines, as = "h2", className, accentLines = [], accentClassName, delay = 0, id }: RevealTextProps) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      id={id}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ delayChildren: delay }}
    >
      {lines.map((text, i) => (
        <span key={i} className="mask-line">
          {i > 0 && " "}
          <motion.span custom={i} variants={line} className={cn("block", accentLines.includes(i) && accentClassName)}>
            {text}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
