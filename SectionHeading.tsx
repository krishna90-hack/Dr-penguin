"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title.split(" ").map((word, i) =>
          word.toLowerCase().includes("dr.") ||
          word.toLowerCase().includes("penguin") ||
          word.toLowerCase().includes("security") ||
          word.toLowerCase().includes("cctv") ? (
            <span key={i} className="text-gradient">
              {word}{" "}
            </span>
          ) : (
            <span key={i}>{word} </span>
          )
        )}
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={`mt-4 flex ${centered ? "justify-center" : ""}`}>
        <div className="h-1 w-20 bg-gradient-to-r from-accent-orange to-orange-400 rounded-full" />
      </div>
    </motion.div>
  );
}
