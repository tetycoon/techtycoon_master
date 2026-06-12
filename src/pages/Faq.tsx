import React, { ReactElement } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Faq from '../components/Faq';

const FaqPage: React.FC = (): ReactElement => {
  return (
    <div className="pt-24 pb-20">
      <Helmet>
        <title>FAQ | AI Marketing, Digital Services & Training Questions | Tech Tycoon</title>
        <meta name="description" content="Get answers to frequently asked questions about Tech Tycoon's AI marketing services, digital marketing training, corporate workshops, pricing, and how our AI-driven solutions can help your business grow in India." />
        <meta name="keywords" content="Tech Tycoon FAQ, AI marketing questions India, digital marketing agency FAQ, corporate AI training FAQ, SEO services FAQ, social media marketing questions, digital marketing course FAQ" />
        <link rel="canonical" href="https://www.techtycoon.in/faq" />
        <meta property="og:title" content="FAQ | AI Marketing, Digital Services & Training Questions | Tech Tycoon" />
        <meta property="og:description" content="Find answers about Tech Tycoon's AI marketing services, digital training programs, corporate workshops, and pricing. Expert digital marketing solutions across India." />
        <meta property="og:url" content="https://www.techtycoon.in/faq" />
      </Helmet>
      <div className="container-custom text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our courses and programs
          </p>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Faq />
      </motion.div>
    </div>
  );
};

export default FaqPage; 