import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Shield, Target, Eye, Award, Users, MapPin, CheckCircle } from "lucide-react";

const team = [
  { name: "Rajesh Kumar", role: "Founder & CEO", experience: "15+ Years" },
  { name: "Anita Sharma", role: "Technical Director", experience: "12+ Years" },
  { name: "Vikram Patel", role: "Head of Operations", experience: "10+ Years" },
  { name: "Priya Singh", role: "Customer Success Lead", experience: "8+ Years" },
];

const certifications = [
  "PSARA Licensed",
  "ISO 9001:2015 Certified",
  "Hikvision Authorized Partner",
  "Dahua Certified Installer",
  "CP Plus Platinum Partner",
  "MSME Registered",
];

const values = [
  {
    icon: Shield,
    title: "Trust & Integrity",
    description: "Har client ke saath transparency aur honesty se kaam karte hain. Aapki security hamari responsibility.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "Best quality products aur services dena hamara mission hai. Har installation perfect hona chahiye.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "Latest technology aur AI-powered solutions se aapko future-ready security milti hai.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Aapki satisfaction hamari priority. 24/7 support aur quick response time hamara commitment.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-navy-gradient" />
        <div className="absolute inset-0 bg-orange-glow opacity-20" />
        <div className="container-custom relative text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="text-gradient">Dr. Penguin</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            India&apos;s most trusted name in CCTV & security solutions
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Dr. Penguin started with a mission to provide affordable and reliable security systems across India. 
                  2015 mein ek choti si team ke saath shuru hua yeh safar, aaj 10,000+ installations aur 28+ states ki coverage ke saath 
                  India&apos;s leading security company ban chuka hai.
                </p>
                <p>
                  Hamara vision simple tha — har ghar, har dukan, aur har office ko world-class security milni chahiye 
                  without breaking the bank. Isliye hamne top brands ke saath partnership ki aur certified engineers ki team banayi 
                  jo best service deti hai.
                </p>
                <p>
                  Aaj Dr. Penguin sirf CCTV installation company nahi hai — ham complete security ecosystem provide karte hain 
                  including smart monitoring, biometric access, video analytics, aur 24/7 support.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-accent-orange mb-2">
                  <AnimatedCounter end={2015} />
                </div>
                <div className="text-sm text-gray-400">Founded</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-accent-orange mb-2">
                  <AnimatedCounter end={10000} suffix="+" />
                </div>
                <div className="text-sm text-gray-400">Installations</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-accent-orange mb-2">
                  <AnimatedCounter end={28} suffix="+" />
                </div>
                <div className="text-sm text-gray-400">States Covered</div>
              </div>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-accent-orange mb-2">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="text-sm text-gray-400">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-navy-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-orange-glow opacity-10" />
        <div className="container-custom relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed">
                Har Indian home aur business ko affordable, reliable, aur advanced security solutions provide karna. 
                Technology ka use karke aasaan aur effective surveillance banana jisse har koi apni property ko 
                secure kar sake — chahe woh chota ghar ho ya bada industry.
              </p>
            </div>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400 leading-relaxed">
                2030 tak India ka most trusted security partner banna. AI aur IoT technology se smart security 
                ecosystem create karna jahan har property connected, monitored, aur protected ho. 
                Zero-crime communities banana hamara ultimate goal hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass rounded-2xl p-6 text-center group card-hover"
              >
                <div className="w-14 h-14 bg-accent-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-orange/20 transition-colors">
                  <value.icon className="w-7 h-7 text-accent-orange" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-accent-orange transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-dark-bg-50">
        <div className="container-custom">
          <SectionHeading
            title="Leadership Team"
            subtitle="Experienced professionals dedicated to your security"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="glass rounded-2xl p-6 text-center group card-hover"
              >
                <div className="w-20 h-20 rounded-full bg-accent-orange/20 flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-accent-orange">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-accent-orange transition-colors">
                  {member.name}
                </h3>
                <p className="text-accent-orange text-sm mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs">{member.experience} Experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-navy-gradient">
        <div className="container-custom">
          <SectionHeading
            title="Certifications & Partnerships"
            subtitle="Trusted by industry leaders and certified by authorities"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="glass rounded-xl p-4 flex items-center gap-3"
              >
                <Award className="w-5 h-5 text-accent-orange shrink-0" />
                <span className="text-white text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="section-padding bg-dark-bg">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Customers <span className="text-gradient">Trust Us</span>
              </h2>
              <div className="space-y-4">
                {[
                  "10,000+ successful installations across India",
                  "Certified engineers with 10+ years average experience",
                  "Partnership with Hikvision, Dahua, CP Plus — top global brands",
                  "24/7 customer support with average response time under 5 minutes",
                  "5 years warranty on all products and installations",
                  "Transparent pricing — no hidden charges ever",
                  "PSARA licensed and ISO certified company",
                  "Customized solutions for every budget and requirement",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                    <span className="text-gray-400">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Pan India Presence</h3>
              <div className="grid grid-cols-2 gap-3">
                {["Delhi NCR", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Jaipur", "Ahmedabad", "Lucknow", "Chandigarh", "Kochi"].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4 text-accent-orange" />
                    {city}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10 text-center">
                <span className="text-accent-orange font-semibold">And 50+ more cities...</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
