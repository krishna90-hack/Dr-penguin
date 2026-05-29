"use client";

import { motion } from "framer-motion";
import { MapPin, Building } from "lucide-react";

interface Project {
  title: string;
  location: string;
  category: string;
  type: string;
}

const projects: Project[] = [
  { title: "Corporate Office Complex", location: "Mumbai, Maharashtra", category: "Commercial", type: "Office" },
  { title: "Luxury Villa Security", location: "Bangalore, Karnataka", category: "Residential", type: "Home" },
  { title: "Warehouse Surveillance", location: "Delhi NCR", category: "Industrial", type: "Warehouse" },
  { title: "Retail Chain Store", location: "Hyderabad, Telangana", category: "Commercial", type: "Shop" },
  { title: "Apartment Complex", location: "Chennai, Tamil Nadu", category: "Residential", type: "Apartment" },
  { title: "Manufacturing Plant", location: "Pune, Maharashtra", category: "Industrial", type: "Factory" },
];

export default function ProjectGallery() {
  return (
    <section className="section-padding bg-dark-bg relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-300 via-navy-400 to-navy-500" />

              {/* Animated Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,98,0,0.3) 1px, transparent 0)`,
                  backgroundSize: "20px 20px",
                }} />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="glass px-3 py-1 rounded-full text-xs font-medium text-accent-orange">
                  {project.category}
                </span>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-accent-orange/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 text-accent-orange mb-2">
                  <Building className="w-4 h-4" />
                  <span className="text-sm font-medium">{project.type}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-orange transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
