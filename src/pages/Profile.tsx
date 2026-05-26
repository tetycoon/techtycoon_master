import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiGlobe, 
  FiLinkedin, 
  FiInstagram, 
  FiFacebook, 
  FiYoutube,
  FiAward,
  FiBookOpen,
  FiCpu,
  FiTarget,
  FiTrendingUp,
  FiUsers
} from 'react-icons/fi';

import StatsCounter from '../components/StatsCounter';
import BentoGrid from '../components/BentoGrid';
import InfiniteMarquee from '../components/InfiniteMarquee';
import GetInTouchModal from '../components/GetInTouchModal';

const Profile: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.05], [1, 0.9]);

  const stats = [
    { label: "Training Programs", value: 100, suffix: "+" },
    { label: "Corporate Sectors", value: 30, suffix: "+" },
    { label: "Colleges", value: 70, suffix: "+" },
    { label: "People Impacted", value: 4000, suffix: "+" }
  ];

  const focusAreas = [
    {
      title: "Digital Marketing & Strategy",
      description: "Driving growth through data-driven digital strategies and execution.",
      icon: <FiTrendingUp className="w-6 h-6" />,
      color: "blue"
    },
    {
      title: "Prompt Engineering & Generative AI",
      description: "Mastering the art of AI interaction to boost productivity and creativity.",
      icon: <FiCpu className="w-6 h-6" />,
      color: "purple"
    },
    {
      title: "Digital Media & Branding",
      description: "Crafting compelling brand identities and digital narratives.",
      icon: <FiTarget className="w-6 h-6" />,
      color: "indigo"
    },
    {
      title: "AI Tools in Education",
      description: "Empowering educators and students with cutting-edge AI integration.",
      icon: <FiBookOpen className="w-6 h-6" />,
      color: "cyan"
    },
    {
      title: "IoT & Cybersecurity",
      description: "Ensuring secure and connected digital environments.",
      icon: <FiAward className="w-6 h-6" />,
      color: "blue"
    },
    {
      title: "Visual Communication",
      description: "Using Canva and other tools for impactful visual storytelling.",
      icon: <FiUsers className="w-6 h-6" />,
      color: "sky"
    }
  ];

  const journey = [
    { year: "2023", event: "Started Marketing and Training Journey", description: "Beginning the professional path in digital strategy." },
    { year: "2024", event: "Established Tech Tycoon", description: "Founding Tech Tycoon Digital Solutions LLP." },
    { year: "2026", event: "Corporate Training Expansion", description: "Upskilling corporate teams for the digital age." }
  ];

  const partners = [
    "Rathinam College", "CIT Coimbatore", "Vidhya Sagar College", 
    "Tagore Medical College", "Shri Krishnaswamy College", "PERI Education",
    "AON", "TORAY", "SIMPSON", "Mahindra", "Cru"
  ];

  return (
    <motion.div 
      ref={containerRef}
      className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white dark:from-blue-900/20 dark:to-gray-950 -z-10" />
        
        <div className="container mx-auto px-4 md:px-16 lg:px-24 xl:px-32 grid lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div
            className="lg:col-span-8"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6 uppercase tracking-wider">
              Company Profile
            </span>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Antony <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Praveen</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-800 dark:text-gray-200 mb-4 max-w-2xl font-medium">
              Digital Marketing, Digital Media & AI Specialist | Professional Trainer
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-6 italic">
              "AI-Powered, Human-Centered"
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-3xl">
              With a Master's Degree in Philosophy and over 5 years of expertise in communication, 
              digital media, and AI, I bring a unique perspective to the digital landscape. 
              My passion lies in blending creative strategies with cutting-edge digital tools 
              to empower businesses and individuals.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => setShowContactModal(true)}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/25"
              >
                Get in Touch
              </button>
            </div>
          </motion.div>

          <motion.div
            className="relative lg:col-span-4"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 max-w-sm mx-auto">
              <img 
                src="/marketing/profile.png" 
                alt="Antony Praveen" 
                className="w-full h-auto object-cover aspect-[3/4]"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/600x800/3B82F6/FFFFFF?text=Antony+Praveen";
                }}
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        {/* Stats placed at the bottom of hero section */}
        <div className="container mx-auto px-4 md:px-16 lg:px-24 xl:px-32 mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + (idx * 0.1) }}
                viewport={{ once: true }}
                className="p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-sm text-center border border-gray-100 dark:border-gray-700"
              >
                <h3 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.value}{stat.suffix}</h3>
                <p className="text-gray-500 dark:text-gray-400 font-medium text-sm lg:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Area of Focus */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Areas of Expertise</h2>
            <p className="text-gray-500 dark:text-gray-400">Comprehensive solutions for the modern digital era.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400`}>
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Timeline */}
      <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">Our Mission</h2>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                “To democratize AI-powered marketing and empower businesses of all sizes to thrive in the digital landscape."
              </p>
              <div className="space-y-4">
                {["Digital Marketing", "Professional Training", "Strategic Consulting"].map((service, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-lg font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-8">The Journey</h3>
              {journey.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-sm">
                      {item.year}
                    </div>
                    {idx !== journey.length - 1 && <div className="w-0.5 h-full bg-white/20 my-2" />}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.event}</h4>
                    <p className="text-blue-100">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">Where We Deliver AI Training</h2>
        </div>
        <InfiniteMarquee 
          items={partners.map((partner, idx) => ({
            id: idx,
            content: (
              <span className="text-2xl font-bold text-gray-400 dark:text-gray-600 px-8 py-2 border border-gray-100 dark:border-gray-800 rounded-xl whitespace-nowrap">
                {partner}
              </span>
            )
          }))} 
        />
      </section>



      {/* Training Gallery Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-4xl font-bold mb-4"
            >
              Training Gallery
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-500 dark:text-gray-400"
            >
              Capturing moments of growth and digital transformation.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative aspect-[4/5] bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={`/gallery/gallery-${i}.jpg`} 
                  alt={`Training session ${i}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/techtycoon${i}/600/800`;
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <GetInTouchModal onClose={() => setShowContactModal(false)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Profile;
