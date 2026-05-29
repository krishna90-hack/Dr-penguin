"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export default function ServiceCard({ icon: Icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative glass rounded-2xl p-6 md:p-8 overflow-hidden card-hover"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Icon */}
      <div className="relative w-14 h-14 bg-accent-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent-orange/20 transition-colors">
        <Icon className="w-7 h-7 text-accent-orange" />
      </div>

      {/* Content */}
      <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-accent-orange transition-colors">
        {title}
      </h3>
      <p className="relative text-gray-400 text-sm leading-relaxed">
        {description}
      </p>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-accent-orange/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
}
