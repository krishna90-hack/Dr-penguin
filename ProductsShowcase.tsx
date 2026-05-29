"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProductCard from "./ProductCard";

const categories = ["All", "Bullet", "Dome", "PTZ", "WiFi", "4K", "Solar"];

const products = [
  {
    name: "HD Bullet Camera Pro",
    category: "Bullet",
    features: ["Weatherproof", "IP66", "Wide Angle"],
    resolution: "2MP 1080p",
    hasNightVision: true,
    hasWifi: false,
    isSolar: false,
  },
  {
    name: "Dome Camera Elite",
    category: "Dome",
    features: ["Vandal-proof", "Indoor", "360° View"],
    resolution: "4MP 1440p",
    hasNightVision: true,
    hasWifi: false,
    isSolar: false,
  },
  {
    name: "PTZ Smart Camera",
    category: "PTZ",
    features: ["Auto-tracking", "20x Zoom", "AI Detection"],
    resolution: "5MP 1944p",
    hasNightVision: true,
    hasWifi: true,
    isSolar: false,
  },
  {
    name: "Wireless WiFi Cam",
    category: "WiFi",
    features: ["Easy Setup", "Cloud Storage", "Two-way Audio"],
    resolution: "3MP 1296p",
    hasNightVision: true,
    hasWifi: true,
    isSolar: false,
  },
  {
    name: "4K Ultra HD Camera",
    category: "4K",
    features: ["8MP Resolution", "HDR", "Smart Analytics"],
    resolution: "8MP 4K",
    hasNightVision: true,
    hasWifi: false,
    isSolar: false,
  },
  {
    name: "Solar Powered Cam",
    category: "Solar",
    features: ["Eco-friendly", "Battery Backup", "Wireless"],
    resolution: "2MP 1080p",
    hasNightVision: true,
    hasWifi: true,
    isSolar: true,
  },
];

export default function ProductsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="section-padding bg-dark-bg-50 relative">
      <div className="container-custom">
        <SectionHeading
          title="Our Products"
          subtitle="Premium quality CCTV cameras and security equipment from top brands"
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-accent-orange text-white shadow-lg shadow-accent-orange/25"
                  : "glass text-gray-400 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.name} {...product} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
