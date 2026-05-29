"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    city: "Delhi",
    rating: 5,
    review: "Dr. Penguin ne hamare office mein professional CCTV setup kiya. Installation fast tha aur mobile monitoring bahut smooth hai. Team bahut cooperative thi. Highly recommended!",
    avatar: "RS",
  },
  {
    name: "Priya Patel",
    city: "Mumbai",
    rating: 5,
    review: "Hamare dukan ke liye best security solution mila. Night vision quality amazing hai. Ab raat ko bhi tension-free so paati hoon. Price bhi reasonable tha.",
    avatar: "PP",
  },
  {
    name: "Amit Kumar",
    city: "Bangalore",
    rating: 5,
    review: "Warehouse ke liye 16 camera ka setup karwaya. 360 degree coverage aur AI motion detection ne hamari security next level kar di. Great service and support!",
    avatar: "AK",
  },
  {
    name: "Sneha Gupta",
    city: "Hyderabad",
    rating: 5,
    review: "Ghar ke liye WiFi cameras install karwaye. Setup bahut easy tha aur mobile app se kahi se bhi dekh sakti hoon. Dr. Penguin team is very professional and polite.",
    avatar: "SG",
  },
  {
    name: "Vikram Singh",
    city: "Chennai",
    rating: 5,
    review: "Factory mein 50+ cameras ki installation. Team ne timeline se pehle kaam complete kiya. AMC service bhi excellent hai. Dr. Penguin is our trusted security partner.",
    avatar: "VS",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-padding bg-navy-600/30 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-orange/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-accent-orange/30 mx-auto mb-6" />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8 italic">
                &ldquo;{testimonials[current].review}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent-orange/20 flex items-center justify-center text-accent-orange font-bold text-lg">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-white">{testimonials[current].name}</div>
                  <div className="text-sm text-gray-400">{testimonials[current].city}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "w-8 bg-accent-orange" : "bg-white/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
