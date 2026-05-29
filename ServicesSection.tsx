"use client";

import { Home, Store, Building2, Warehouse, Eye, Wrench } from "lucide-react";
import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: Home,
    title: "Home Security",
    description: "Smart CCTV monitoring for ghar ki full-time security with mobile access and night vision. Aapke family ki safety hamari priority.",
  },
  {
    icon: Store,
    title: "Shop Security",
    description: "Complete surveillance solutions for dukan aur retail stores. Theft prevention, customer monitoring, aur inventory security.",
  },
  {
    icon: Building2,
    title: "Office Security",
    description: "Professional CCTV setup for offices with access control, employee monitoring, aur visitor management systems.",
  },
  {
    icon: Warehouse,
    title: "Warehouse Security",
    description: "Large-scale surveillance for warehouses and godowns. 360° coverage, motion detection, aur remote monitoring.",
  },
  {
    icon: Eye,
    title: "24/7 Monitoring",
    description: "Round-the-clock live monitoring with instant alerts. Hamara team real-time mein aapki property ko dekhti hai.",
  },
  {
    icon: Wrench,
    title: "AMC Services",
    description: "Annual Maintenance Contract for all security systems. Regular servicing, software updates, aur priority support.",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-padding bg-dark-bg relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent-orange/5 rounded-full blur-3xl" />

      <div className="container-custom relative">
        <SectionHeading
          title="Our Security Services"
          subtitle="Comprehensive security solutions tailored for every need — from homes to large industries"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
