import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiLinkedin, 
  FiAward, 
  FiBookOpen, 
  FiCpu, 
  FiTarget, 
  FiTrendingUp, 
  FiUsers 
} from 'react-icons/fi';

import InfiniteMarquee from '../components/InfiniteMarquee';
import GetInTouchModal from '../components/GetInTouchModal';

const Profile: React.FC = () => {
  const [activeProfile, setActiveProfile] = useState<'antony' | 'saibabu'>('antony');
  const [showContactModal, setShowContactModal] = useState(false);

  // --- Antony Praveen Data ---
  const antonyStats = [
    { label: "Training Programs", value: 100, suffix: "+" },
    { label: "Corporate Sectors", value: 30, suffix: "+" },
    { label: "Colleges", value: 70, suffix: "+" },
    { label: "People Impacted", value: 4000, suffix: "+" }
  ];

  const antonyFocusAreas = [
    {
      title: "Digital Marketing & Strategy",
      description: "Driving growth through data-driven digital strategies and execution.",
      icon: <FiTrendingUp className="w-6 h-6" />
    },
    {
      title: "Prompt Engineering & Generative AI",
      description: "Mastering the art of AI interaction to boost productivity and creativity.",
      icon: <FiCpu className="w-6 h-6" />
    },
    {
      title: "Digital Media & Branding",
      description: "Crafting compelling brand identities and digital narratives.",
      icon: <FiTarget className="w-6 h-6" />
    },
    {
      title: "AI Tools in Education",
      description: "Empowering educators and students with cutting-edge AI integration.",
      icon: <FiBookOpen className="w-6 h-6" />
    },
    {
      title: "IoT & Cybersecurity",
      description: "Ensuring secure and connected digital environments.",
      icon: <FiAward className="w-6 h-6" />
    },
    {
      title: "Visual Communication",
      description: "Using Canva and other tools for impactful visual storytelling.",
      icon: <FiUsers className="w-6 h-6" />
    }
  ];

  const antonyJourney = [
    { year: "2023", event: "Started Marketing and Training Journey", description: "Beginning the professional path in digital strategy." },
    { year: "2024", event: "Established Tech Tycoon", description: "Founding Tech Tycoon Digital Solution LLP." },
    { year: "2026", event: "Corporate Training Expansion", description: "Upskilling corporate teams for the digital age." }
  ];

  const partners = [
    "Rathinam College", "CIT Coimbatore", "Vidhya Sagar College", 
    "Tagore Medical College", "Shri Krishnaswamy College", "PERI Education",
    "AON", "TORAY", "SIMPSON", "Mahindra", "Cru"
  ];

  return (
    <motion.div 
      className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Top Banner & Tab Switcher */}
      <section className="pt-28 pb-6 bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-blue-900/10 dark:via-gray-950 dark:to-gray-950 text-center">
        <div className="container mx-auto px-4">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 uppercase tracking-wider">
            Leadership Team
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Profiles</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
            Meet the leaders guiding Tech Tycoon Digital Solution LLP towards digital excellence.
          </p>

          {/* Sliding Tab Switcher */}
          <div className="flex justify-center">
            <div className="relative flex p-1 bg-gray-100 dark:bg-gray-900 rounded-full border border-gray-200/50 dark:border-gray-800 shadow-inner animate-pulse-slow">
              <button
                onClick={() => setActiveProfile('antony')}
                className={`relative px-6 py-2.5 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 z-10 w-44 ${
                  activeProfile === 'antony' ? 'text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {activeProfile === 'antony' && (
                  <motion.span
                    layoutId="activeProfileTab"
                    className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                Antony Praveen
              </button>
              
              <button
                onClick={() => setActiveProfile('saibabu')}
                className={`relative px-6 py-2.5 text-sm md:text-base font-semibold rounded-full transition-colors duration-300 z-10 w-44 ${
                  activeProfile === 'saibabu' ? 'text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {activeProfile === 'saibabu' && (
                  <motion.span
                    layoutId="activeProfileTab"
                    className="absolute inset-0 bg-blue-600 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                RP Saibabu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Render Dynamic Profiles with Transitions */}
      <AnimatePresence mode="wait">
        {activeProfile === 'antony' ? (
          <motion.div
            key="antony-profile"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            {/* Antony Praveen Hero Section */}
            <section className="relative flex flex-col justify-center overflow-hidden pb-16">
              <div className="container mx-auto px-4 md:px-16 lg:px-24 xl:px-32 grid lg:grid-cols-12 gap-12 items-center mb-16">
                <motion.div
                  className="lg:col-span-8"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6 uppercase tracking-wider">
                    Founder & CEO
                  </span>
                  <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                    Antony <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Praveen</span>
                  </h2>
                  <p className="text-xl lg:text-2xl text-gray-800 dark:text-gray-200 mb-4 max-w-2xl font-medium">
                    Founder of Tech Tycoon Digital Solution LLP | Digital Marketing, Digital Media & AI Specialist | Professional Trainer
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
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <button 
                      onClick={() => setShowContactModal(true)}
                      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/25"
                    >
                      Get in Touch
                    </button>
                    
                    <a
                      href="https://www.linkedin.com/in/antony-praveen/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full font-medium transition-all border border-blue-200 dark:border-blue-700/50 shadow-sm"
                    >
                      <FiLinkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      <span>LinkedIn Profile</span>
                    </a>

                    <a
                      href="mailto:admin@techtycoon.in"
                      className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium transition-all shadow-sm"
                    >
                      <FiMail className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                      <span>admin@techtycoon.in</span>
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="relative lg:col-span-4"
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
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
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10" />
                </motion.div>
              </div>

              {/* Antony Stats */}
              <div className="container mx-auto px-4 md:px-16 lg:px-24 xl:px-32 mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {antonyStats.map((stat, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
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

            {/* Antony Areas of Expertise */}
            <section className="py-24 bg-gray-50/50 dark:bg-gray-900/20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">Areas of Expertise</h2>
                  <p className="text-gray-500 dark:text-gray-400">Comprehensive solutions for the modern digital era.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {antonyFocusAreas.map((area, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -8 }}
                      className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        {area.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                        {area.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Antony Mission & Journey */}
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
                    {antonyJourney.map((item, idx) => (
                      <div key={idx} className="flex gap-6">
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-sm">
                            {item.year}
                          </div>
                          {idx !== antonyJourney.length - 1 && <div className="w-0.5 h-full bg-white/20 my-2" />}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-1">{item.event}</h4>
                          <p className="text-blue-100 text-sm md:text-base">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="saibabu-profile"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            {/* RP Saibabu Hero Section */}
            <section className="relative flex flex-col justify-center overflow-hidden pb-16">
              <div className="container mx-auto px-4 md:px-16 lg:px-24 xl:px-32 grid lg:grid-cols-12 gap-12 items-center mb-16">
                <motion.div
                  className="lg:col-span-8"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6 uppercase tracking-wider">
                    Co-Founder
                  </span>
                  <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                    RP <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Saibabu</span>
                  </h2>
                  <p className="text-xl lg:text-2xl text-gray-800 dark:text-gray-200 mb-4 max-w-2xl font-medium">
                    Co-Founder of Tech Tycoon Digital Solution LLP | Corporate Team-Building & Leadership Coach | BFSI & Organizational Development
                  </p>
                  <p className="text-lg text-gray-500 dark:text-gray-400 mb-4 italic">
                    "Unlocking Leadership Potential, Transforming Workplace Culture"
                  </p>
                  
                  {/* Contact Info Quick Badges */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
                    <a href="mailto:saiskillsage@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                      <FiMail className="text-blue-600 w-4 h-4" /> saiskillsage@gmail.com
                    </a>
                    <a href="tel:+917305182420" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                      <FiPhone className="text-blue-600 w-4 h-4" /> +91 73051 82420
                    </a>
                  </div>

                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-3xl">
                    A seasoned corporate trainer and co-founder with over 20 years of success in project implementation, 
                    strategic management, team leadership, and operations in the banking industry. Specializing in 
                    leadership coaching, BFSI domain training, and experiential team building to foster high-performance 
                    workplace cultures.
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <button 
                      onClick={() => setShowContactModal(true)}
                      className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-medium transition-all shadow-lg shadow-blue-500/25"
                    >
                      Get in Touch
                    </button>
                    <a 
                      href="https://www.linkedin.com/in/rpsaibabu117585" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-gray-105 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-white rounded-full font-medium transition-all shadow-md flex items-center gap-2"
                    >
                      <FiLinkedin className="w-5 h-5 text-blue-600" /> LinkedIn
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="relative lg:col-span-4"
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                >
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 max-w-sm mx-auto">
                    <img 
                      src="/marketing/saibabu.jpg" 
                      alt="RP Saibabu" 
                      className="w-full h-auto object-cover aspect-[3/4]"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://placehold.co/600x800/3B82F6/FFFFFF?text=RP+Saibabu";
                      }}
                    />
                  </div>
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl -z-10" />
                </motion.div>
              </div>

              {/* Saibabu Stats */}
              <div className="container mx-auto px-4 md:px-16 lg:px-24 xl:px-32 mt-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {[
                    { label: "Years Experience", value: 20, suffix: "+" },
                    { label: "Employees Trained", value: 3000, suffix: "+" },
                    { label: "Corporate Programs", value: 100, suffix: "+" },
                    { label: "Customer Sat. Growth", value: 40, suffix: "%" }
                  ].map((stat, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
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

            {/* Saibabu Core Competencies */}
            <section className="py-24 bg-gray-50/50 dark:bg-gray-900/20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">Core Competencies</h2>
                  <p className="text-gray-500 dark:text-gray-400">Professional strengths and key areas of corporate expertise.</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      title: "Leadership & Strategic Management",
                      description: "20+ years of success in project implementation, business development, and operations in corporate banking.",
                      icon: <FiAward className="w-6 h-6" />
                    },
                    {
                      title: "Experiential Team Building",
                      description: "Designing outdoor-based active learning modules and game-oriented strategies to improve collaboration.",
                      icon: <FiUsers className="w-6 h-6" />
                    },
                    {
                      title: "BFSI & Retail Banking",
                      description: "Deep expertise in retail branch banking operations, compliance, risk management, and RBI guidelines.",
                      icon: <FiTrendingUp className="w-6 h-6" />
                    },
                    {
                      title: "Customer Relationship Management",
                      description: "Exceptional service delivery focus, maintaining high CASA ratios, and key account management.",
                      icon: <FiTarget className="w-6 h-6" />
                    },
                    {
                      title: "Process Optimization & BCP",
                      description: "Streamlining branch processes and introducing Business Continuity Planning (BCP) at regional levels.",
                      icon: <FiBookOpen className="w-6 h-6" />
                    },
                    {
                      title: "Soft Skills & Emotional Intelligence",
                      description: "Coaching teams in communication, negotiation, conflict resolution, empathy, and resilience.",
                      icon: <FiCpu className="w-6 h-6" />
                    }
                  ].map((area, idx) => (
                    <motion.div 
                      key={idx}
                      whileHover={{ y: -8 }}
                      className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all"
                    >
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                        {area.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-4">{area.title}</h3>
                      <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm md:text-base">
                        {area.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Saibabu Journey & Work Experience */}
            <section className="py-24 bg-blue-600 text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32" />
              
              <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                    <h2 className="text-3xl lg:text-5xl font-bold mb-8">Professional Summary</h2>
                    <p className="text-xl text-blue-100 leading-relaxed mb-8">
                      “A seasoned corporate trainer and leader, bridging the gap between rigorous BFSI operational standards and dynamic team coaching to drive sustainable results.”
                    </p>
                    <div className="space-y-4">
                      {["BFSI Domain Coach", "Outbound Team Facilitator", "UAT & Operations Auditor", "Emotional Intelligence Trainer"].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-white" />
                          <span className="text-lg font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <h3 className="text-2xl font-bold mb-8">Work Experience</h3>
                    {[
                      { year: "2021 – Pres", event: "Freelance Trainer & Financial Consultant", description: "Delivering custom corporate programs and advisory services." },
                      { year: "2016 – 2021", event: "Associate Vice President I", description: "Jana Small Finance Bank Ltd. - Managed operational structures and business excellence." },
                      { year: "2004 – 2016", event: "Deputy Branch Manager", description: "ICICI Bank Ltd. - Guided compliance, risk mitigation, and branch auditing." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-6">
                        <div className="flex flex-col items-center flex-shrink-0">
                          <div className="w-20 h-10 px-2 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center font-bold text-[10px] text-center">
                            {item.year}
                          </div>
                          {idx !== 2 && <div className="w-0.5 h-full bg-white/20 my-2" />}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-1">{item.event}</h4>
                          <p className="text-blue-100 text-sm md:text-base">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Saibabu Training Conducted & IT Credentials */}
            <section className="py-24 bg-white dark:bg-gray-950">
              <div className="container mx-auto px-4 md:px-16 lg:px-24">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Training Conducted */}
                  <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800">
                    <h3 className="text-2xl font-bold mb-6 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                      <FiAward className="w-6 h-6" /> Training Conducted
                    </h3>
                    <ul className="space-y-4">
                      {[
                        { title: "ICICI Bank Ltd", text: "SPOC for compliance training and key speaker on 'Essential of Compliance in Every Desk'; product training on asset segments." },
                        { title: "Jana Small Finance Bank", text: "Train-the-Trainer lead for BFSI Retail Banking; designed Salem region retail lending and group loan programs." },
                        { title: "NFED", text: "Course Mentor for the Certificate Course on Innovation and Creativity." },
                        { title: "NSE Academy", text: "Insurance training mentor for clients like DBS across Chennai and Pondicherry units." },
                        { title: "Naan Mudhalvan", text: "Banking and Finance Specialist trainer delivering workshops in schools and colleges." },
                        { title: "Mahindra Home Finance", text: "Identified Trainer for Entire South region, conducting induction and Managerial Effectiveness courses." }
                      ].map((item, idx) => (
                        <li key={idx} className="border-b border-gray-150 dark:border-gray-800 pb-3 last:border-0 last:pb-0">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-base mb-1">{item.title}</h4>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">{item.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* IT Credentials */}
                  <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-150 dark:border-gray-800">
                    <h3 className="text-2xl font-bold mb-6 text-purple-600 dark:text-purple-400 flex items-center gap-2">
                      <FiCpu className="w-6 h-6" /> IT & UAT Credentials
                    </h3>
                    <div className="mb-6 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Extensive experience in User Acceptance Testing (UAT), system implementation, and functional validation at Jana Small Finance Bank (Bangalore).
                    </div>
                    <ul className="space-y-4">
                      {[
                        { title: "Lead Management System (LMS)", text: "Key tester validating application workflow and lead routing structures." },
                        { title: "Regulatory Reporting Systems", text: "Functional validation of RAMCO-powered reporting applications aligned with RBI compliance." },
                        { title: "ATM CBS & FIS Systems", text: "UAT and validation of transaction/process flows across ATM systems." },
                        { title: "Mobile Banking Process", text: "Functional flow audits and business facilitation validation." }
                      ].map((item, idx) => (
                        <li key={idx} className="border-b border-gray-150 dark:border-gray-800 pb-3 last:border-0 last:pb-0 flex gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white text-base mb-1">{item.title}</h4>
                            <p className="text-gray-500 dark:text-gray-400 text-sm">{item.text}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Saibabu Education & Certifications */}
            <section className="py-24 bg-gray-50 dark:bg-gray-900">
              <div className="container mx-auto px-4 md:px-16 lg:px-24">
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  {/* Education Card */}
                  <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                      <FiBookOpen className="w-6 h-6 text-blue-600" /> Education
                    </h3>
                    <ul className="space-y-4">
                      {[
                        { degree: "Post Graduate Diploma in Business Administration (HR)", institution: "Specialized in Human Resources and Team Leadership" },
                        { degree: "Master of Financial Management (M.F.M.)", institution: "Advanced financial systems and management operations" },
                        { degree: "Bachelor of Commerce (B.Com.)", institution: "Commerce, accounting, and business foundations" }
                      ].map((item, idx) => (
                        <li key={idx} className="border-l-2 border-blue-500 pl-4 py-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-base">{item.degree}</h4>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">{item.institution}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Certifications Card */}
                  <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                    <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2">
                      <FiAward className="w-6 h-6 text-purple-600" /> Certifications
                    </h3>
                    <ul className="space-y-4">
                      {[
                        { cert: "Professional Trainer In Design & Facilitation", organization: "Experiential Learning – IIPE Canada" },
                        { cert: "Game Oriented Active Learning Facilitator", organization: "Outbound Trainer – Life Academy" },
                        { cert: "Certified Course Faculty", organization: "National Foundation for Entrepreneurship Development (NFED)" }
                      ].map((item, idx) => (
                        <li key={idx} className="border-l-2 border-purple-500 pl-4 py-1">
                          <h4 className="font-semibold text-gray-900 dark:text-white text-base">{item.cert}</h4>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">{item.organization}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Shared Partners Marquee */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/60 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 mb-12 text-center">
          <h2 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">Where We Deliver Training</h2>
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

      {/* Shared Training Gallery */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Training Gallery</h2>
            <p className="text-gray-500 dark:text-gray-400">Capturing moments of growth and corporate transformation.</p>
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
