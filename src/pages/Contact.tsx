import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiClock, FiMapPin, FiLinkedin, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi';
import ContactForm from '../components/ContactForm';

// EmailJS Configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_q3q75bd',
  templateId: 'template_52sgt8p',
  publicKey: 'JPL083BhpGSElhQKd',
  adminEmail: 'techtycoondigitalsolutions@gmail.com'
};

const Contact: React.FC = () => {
  // Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
    message: ''
  });

  const formRef = useRef<HTMLFormElement>(null) as React.RefObject<HTMLFormElement>;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, isSubmitting: true, message: '' });

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          to_email: EMAILJS_CONFIG.adminEmail,
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          type: 'contact'
        },
        EMAILJS_CONFIG.publicKey
      );

      setFormStatus({
        isSubmitting: false,
        isSubmitted: true,
        isError: false,
        message: 'Thank you for your message! We will get back to you soon.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      setFormStatus({
        isSubmitting: false,
        isSubmitted: false,
        isError: true,
        message: 'Something went wrong. Please try again later.'
      });
    }
  };

  return (
    <main className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 min-h-screen">
      <Helmet>
        <title>Contact Us | Tech Tycoon Digital Solution LLP</title>
        <meta name="description" content="Get in touch with Tech Tycoon Digital Solution LLP. Reach out for corporate training, AI workshops, digital marketing consulting, and specialized automation services." />
        <meta name="keywords" content="contact Tech Tycoon, digital marketing consultant Chennai, AI workshop contact, corporate training inquiry India" />
        <link rel="canonical" href="https://www.techtycoon.in/contact" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/90 z-0"></div>
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Connect With Our Team
            </h1>
            <p className="text-xl text-gray-150 max-w-2xl mx-auto">
              Have questions about our AI-powered courses or marketing services? We are here to help you grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Info Cards Column */}
            <motion.div 
              className="lg:col-span-5 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl">
                      <FiPhone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-base">Phone Numbers</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        <a href="tel:+917558133039" className="hover:text-blue-600 transition-colors">+91 75581 33039</a>
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        <a href="tel:+917305182420" className="hover:text-blue-600 transition-colors">+91 73051 82420</a>
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-xl">
                      <FiMail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-base">Email Addresses</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        <a href="mailto:techtycoondigitalsolutions@gmail.com" className="hover:text-blue-600 transition-colors">techtycoondigitalsolutions@gmail.com</a>
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        <a href="mailto:saiskillsage@gmail.com" className="hover:text-blue-600 transition-colors">saiskillsage@gmail.com</a>
                      </p>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 rounded-xl">
                      <FiClock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-base">Office Hours</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                        Monday – Saturday: 9:00 AM – 5:30 PM
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>

                  {/* Office Location */}
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-xl">
                      <FiMapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-base">Corporate Office</h4>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 leading-relaxed">
                        Tech Tycoon Digital Solution LLP<br />
                        Chennai, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Connect Card */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Connect Socially</h3>
                <div className="flex gap-4">
                  {[
                    { href: "https://www.linkedin.com/in/antony-praveen/", icon: <FiLinkedin className="w-5 h-5" />, label: "LinkedIn" },
                    { href: "https://www.instagram.com/antony_praveen/", icon: <FiInstagram className="w-5 h-5" />, label: "Instagram" },
                    { href: "https://www.facebook.com/people/Tech-Tycoon/61571520140700/", icon: <FiFacebook className="w-5 h-5" />, label: "Facebook" },
                    { href: "https://www.youtube.com/@antony_praveen", icon: <FiYoutube className="w-5 h-5" />, label: "YouTube" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-gray-55 hover:bg-blue-500 hover:text-white dark:bg-gray-700/50 dark:hover:bg-blue-600 text-gray-500 dark:text-gray-300 rounded-xl transition-all"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form Column */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <ContactForm
                formRef={formRef}
                formData={formData}
                formStatus={formStatus}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
