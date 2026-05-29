"use client";

import { motion } from "framer-motion";
import { Shield, Phone, MessageCircle, FileText, Star, Users } from "lucide-react";
import { getWhatsAppLink, getCallLink } from "@/lib/utils";

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || "+919999999999";
const PHONE = process.env.NEXT_PUBLIC_PHONE || "+919999999999";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-dark-bg" />
      <div className="absolute inset-0 bg-navy-gradient opacity-80" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Animated Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-orange/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-navy-50/20 rounded-full blur-3xl"
      />

      {/* Floating Security Camera Icons */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-white/5"
          style={{
            top: `${15 + (i * 15)}%`,
            left: `${10 + (i * 12)}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <Shield className="w-8 h-8 md:w-12 md:h-12" />
        </motion.div>
      ))}

      <div className="relative container-custom text-center z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <Users className="w-4 h-4 text-accent-orange" />
          <span className="text-sm text-gray-300">Trusted by 10,000+ Customers</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Dr. Penguin –{" "}
          <span className="text-gradient">24/7 Pan India</span>
          <br />
          CCTV & Security
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10"
        >
          Advanced CCTV surveillance, smart monitoring aur professional security solutions — 
          homes, shops, offices aur industries ke liye poore India mein.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.a
            href="/contact/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary flex items-center justify-center gap-2 text-lg"
          >
            <FileText className="w-5 h-5" />
            Free Site Survey
          </motion.a>

          <motion.a
            href="/contact/"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 text-lg hover:bg-white/10 transition-all"
          >
            <Shield className="w-5 h-5 text-accent-orange" />
            Get Quote
          </motion.a>

          <motion.a
            href={getWhatsAppLink(WHATSAPP, "Hi Dr. Penguin, I want to discuss CCTV installation.")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 text-lg hover:bg-white/10 transition-all"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            WhatsApp Support
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {[
            { value: "10,000+", label: "Installations" },
            { value: "24/7", label: "Support" },
            { value: "Pan India", label: "Service" },
            { value: "5 Years", label: "Warranty" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-4"
            >
              <div className="text-2xl md:text-3xl font-bold text-accent-orange">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-accent-orange rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
