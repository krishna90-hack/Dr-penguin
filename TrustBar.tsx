"use client";

import { motion } from "framer-motion";

const brands = [
  { name: "Hikvision", abbr: "HIK" },
  { name: "Dahua", abbr: "DAH" },
  { name: "CP Plus", abbr: "CP+" },
  { name: "PSARA Certified", abbr: "PSA" },
  { name: "ISO Certified", abbr: "ISO" },
];

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-white/5 bg-navy-600/30">
      <div className="container-custom">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-500 text-sm mb-8 uppercase tracking-widest"
        >
          Trusted by leading brands & certifications
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="group cursor-pointer"
            >
              <div className="text-2xl md:text-3xl font-bold text-gray-600 group-hover:text-accent-orange transition-colors duration-300">
                {brand.abbr}
              </div>
              <div className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors text-center mt-1">
                {brand.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
