"use client";

import { motion } from "framer-motion";
import { Award, Headphones, MapPin, ShieldCheck, Users, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { icon: Users, value: 10000, suffix: "+", label: "Installations" },
  { icon: Headphones, value: 24, suffix: "/7", label: "Support" },
  { icon: MapPin, value: 28, suffix: "+", label: "States Covered" },
  { icon: ShieldCheck, value: 5, suffix: " Years", label: "Warranty" },
  { icon: Award, value: 500, suffix: "+", label: "Certified Engineers" },
  { icon: Zap, value: 48, suffix: "h", label: "Fast Installation" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Certified Engineers",
    description: "Hamari team mein trained aur certified professionals hain jo best installation service dete hain.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Kisi bhi time help chahiye? Hamara support team hamesha available hai — call, WhatsApp, ya email.",
  },
  {
    icon: MapPin,
    title: "Pan India Service",
    description: "Chahe Delhi ho ya Chennai, Dr. Penguin poore India mein apki service ke liye ready hai.",
  },
  {
    icon: Award,
    title: "5 Years Warranty",
    description: "Har product par 5 saal ki warranty. Aapko tension-free rehna hai, bas security enjoy karna hai.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-navy-gradient relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-orange/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <SectionHeading
          title="Why Choose Dr. Penguin"
          subtitle="India's most trusted security partner with unmatched service quality"
        />

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass rounded-xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 text-accent-orange mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8 flex gap-5 group hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 bg-accent-orange/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-accent-orange/20 transition-colors">
                <feature.icon className="w-7 h-7 text-accent-orange" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-orange transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
