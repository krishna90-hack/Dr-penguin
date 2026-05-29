"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { getWhatsAppLink, getCallLink } from "@/lib/utils";

const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || "+919999999999";
const PHONE = process.env.NEXT_PUBLIC_PHONE || "+919999999999";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <motion.a
        href={getWhatsAppLink(WHATSAPP, "Hi Dr. Penguin, I need CCTV installation services.")}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/40 transition-shadow"
        style={{ animation: "pulseGlow 2s ease-in-out infinite" }}
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>

      <motion.a
        href={getCallLink(PHONE)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-accent-orange rounded-full flex items-center justify-center shadow-lg hover:shadow-accent-orange/40 transition-shadow"
        style={{ animation: "pulseGlow 2s ease-in-out infinite" }}
      >
        <Phone className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  );
}
