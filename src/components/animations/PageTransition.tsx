"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { LogoMark } from "@/components/brand/LogoMark";

export function PageTransition() {
  const pathname = usePathname();
  const previous = useRef(pathname);
  const [key, setKey] = useState(0);
  const reduce = useReducedMotion();

  useLayoutEffect(() => {
    if (previous.current === pathname) return;
    previous.current = pathname;
    if (!reduce) setKey((k) => k + 1);
  }, [pathname, reduce]);

  return (
    <AnimatePresence>
      {key > 0 && (
        <motion.div
          key={key}
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[80] grid origin-top place-items-center bg-violet"
          initial={{ clipPath: "inset(0 0 0% 0)" }}
          animate={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          onAnimationComplete={() => setKey(0)}
        >
          <motion.div initial={{ opacity: 1, y: 0 }} animate={{ opacity: 0, y: -30 }} transition={{ duration: 0.4 }}>
            <LogoMark className="size-16" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
