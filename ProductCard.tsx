"use client";

import { motion } from "framer-motion";
import { Eye, Moon, Wifi, Battery } from "lucide-react";

interface ProductCardProps {
  name: string;
  category: string;
  features: string[];
  resolution: string;
  hasNightVision: boolean;
  hasWifi: boolean;
  isSolar: boolean;
  index: number;
}

export default function ProductCard({
  name,
  category,
  features,
  resolution,
  hasNightVision,
  hasWifi,
  isSolar,
  index,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative glass rounded-2xl overflow-hidden card-hover"
    >
      {/* Product Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-navy-300 to-navy-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-accent-orange/5" />
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.4 }}
          className="w-20 h-20 rounded-2xl bg-accent-orange/20 flex items-center justify-center"
        >
          <Eye className="w-10 h-10 text-accent-orange" />
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-medium text-accent-orange">
          {category}
        </div>

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-sm"
          >
            View Details
          </motion.button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-orange transition-colors">
          {name}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {features.map((feature) => (
            <span key={feature} className="text-xs glass px-2 py-1 rounded text-gray-400">
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <Eye className="w-4 h-4 text-accent-orange" />
            {resolution}
          </span>
          {hasNightVision && (
            <span className="flex items-center gap-1">
              <Moon className="w-4 h-4 text-blue-400" />
              Night Vision
            </span>
          )}
          {hasWifi && (
            <span className="flex items-center gap-1">
              <Wifi className="w-4 h-4 text-green-400" />
              WiFi
            </span>
          )}
          {isSolar && (
            <span className="flex items-center gap-1">
              <Battery className="w-4 h-4 text-yellow-400" />
              Solar
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
