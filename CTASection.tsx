"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { getWhatsAppLink, getCallLink } from "@/lib/utils";

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || "+919999999999";
const PHONE = process.env.NEXT_PUBLIC_PHONE || "+919999999999";

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-navy-gradient" />
      <div className="absolute inset-0 bg-orange-glow opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-orange/10 rounded-full blur-3xl" />

      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Apni <span className="text-gradient">Security Upgrade</span> Karein Aaj Hi
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Free site survey aur professional consultation ke liye abhi contact karein. 
            Hamare experts aapki security needs ko samajhkar best solution denge.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={getCallLink(PHONE)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center gap-2 text-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </motion.a>

            <motion.a
              href={getWhatsAppLink(WHATSAPP, "Hi Dr. Penguin, I want to get a free quote for CCTV installation.")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 text-lg hover:bg-white/10 transition-all"
            >
              <MessageCircle className="w-5 h-5 text-green-400" />
              WhatsApp
            </motion.a>

            <motion.a
              href="/contact/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-6 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 text-lg hover:bg-white/10 transition-all"
            >
              <FileText className="w-5 h-5 text-accent-orange" />
              Get Free Quote
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
