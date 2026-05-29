"use client";

import { motion } from "framer-motion";
import { Shield, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services/" },
  { name: "Products", href: "/products/" },
  { name: "Projects", href: "/projects/" },
  { name: "About Us", href: "/about/" },
  { name: "Contact", href: "/contact/" },
];

const services = [
  "Home Security",
  "Shop Security",
  "Office Security",
  "Warehouse Security",
  "24/7 Monitoring",
  "AMC Services",
];

export default function Footer() {
  return (
    <footer className="bg-navy-500 border-t border-white/10">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent-orange rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  Dr. <span className="text-accent-orange">Penguin</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              India&apos;s most trusted CCTV & security solutions provider. 
              Professional installation with 24/7 support across the nation.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-gray-400 hover:text-accent-orange hover:border-accent-orange/30 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">+91 99999 99999</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">info@drpenguin.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Pan India Service<br />
                  Delhi, Mumbai, Bangalore, Hyderabad, Chennai & more
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Dr. Penguin. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <span className="text-accent-orange">security & trust</span> across India
          </p>
        </div>
      </div>
    </footer>
  );
}
