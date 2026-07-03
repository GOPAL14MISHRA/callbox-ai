"use client";

import { motion } from "framer-motion";
import { LOGIN_URL, SIGNUP_URL } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export function PrimaryCta({
  children = "Get Started Free",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.a
      href={SIGNUP_URL}
      whileHover={{ scale: 1.03, boxShadow: "0 0 25px rgba(255, 255, 255, 0.35)" }}
      whileTap={{ scale: 0.98 }}
      className={`relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-base font-bold text-black shadow-lg shadow-white/10 transition-all ${className}`}
    >
      <span>{children}</span>
      <motion.span
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <ArrowRight className="h-5 w-5" />
      </motion.span>
    </motion.a>
  );
}

export function SecondaryCta({
  children = "Book a Demo",
  href = LOGIN_URL,
  className = "",
}: {
  children?: React.ReactNode;
  href?: string;
  className?: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30 ${className}`}
    >
      <span>{children}</span>
    </motion.a>
  );
}
