import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Acceptance of Terms",
      description: "By accessing or using our websites, purchasing services, or enrolling in our courses, you confirm that:",
      items: [
        "You are at least 18 years old or possess legal parental/guardian consent",
        "You agree to comply with and be legally bound by these Terms of Service",
        "You provide accurate, current, and complete registration and billing information"
      ]
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Services & Learning Platforms Overview",
      description: "Tech Tycoon Digital Solution LLP operates and delivers services across multiple integrated platforms:",
      items: [
        "techtycoon.in – Main corporate agency offering AI Marketing, SEO, Web Development, Content Creation, and Digital Consulting.",
        "academy.techtycoon.in – On-demand online video learning academy (LMS / Udemy-style platform) offering self-paced modules, tutorials, and certifications.",
        "course.techtycoon.in – Live interactive online sessions, cohort-based bootcamps, workshops, and masterclasses hosted with dedicated course slugs."
      ],
      note: "We reserve the right to improve, update, or modify curriculum, course structures, and services to maintain educational and industry standards."
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: "Account Registration & Online Learning Access",
      description: "When enrolling in programs on academy.techtycoon.in or course.techtycoon.in:",
      items: [
        "Single-User License: Course access, login credentials, and LMS dashboards are strictly for individual, non-commercial use.",
        "Prohibition on Sharing: You may not share, sell, transfer, or assign your login credentials, Zoom/Meet live session links, or course materials to any third party.",
        "Security: You are solely responsible for maintaining the confidentiality of your account credentials and for all activities under your account."
      ]
    },
    {
      id: 4,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Live Online Sessions & Satisfaction Policy (course.techtycoon.in)",
      description: "For cohort-based courses and workshops conducted via live video conference:",
      items: [
        "Punctuality & Decorum: Participants are expected to join on time and maintain professional, respectful conduct in audio, video, and chat interactions.",
        "Missed Session Reschedule: If Tech Tycoon misses or is unable to conduct a particular live session as originally scheduled (due to technical issues or instructor emergency), no monetary refund is provided. Tech Tycoon will reschedule and conduct that session within 4 to 7 days.",
        "Course / Session Satisfaction: If a participant is not satisfied with a particular live session or topic, we take their constructive feedback seriously and will arrange an updated or supplementary session in the upcoming days to ensure complete learning value.",
        "No Unauthorized Recording: Participants are strictly prohibited from screen-recording, capturing, or distributing live classroom sessions or webinars.",
        "Disciplinary Action: Tech Tycoon reserves the right to immediately remove any participant engaging in abusive behavior, harassment, spamming, or disruption, without refund."
      ]
    },
    {
      id: 5,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: "User Responsibilities & Acceptable Use",
      description: "You agree NOT to:",
      items: [
        "Use any of our websites or portals for fraudulent, malicious, or unlawful purposes",
        "Interfere with, overburden, or compromise the technical infrastructure or security of our platforms",
        "Rip, scrape, reverse-engineer, or rip videos, audio, code, or curriculum content from academy.techtycoon.in or course.techtycoon.in",
        "Upload or transmit viruses, malicious bots, or harmful code",
        "Infringe on the intellectual property, privacy, or publicity rights of Tech Tycoon or other students"
      ]
    },
    {
      id: 6,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Payments, Invoicing & Duplicate Payments",
      description: "Financial transactions across techtycoon.in, academy.techtycoon.in, and course.techtycoon.in are subject to the following:",
      items: [
        "Upfront Payment: All course enrollments and service packages require 100% full upfront payment prior to accessing the LMS or receiving live session links.",
        "Prices & Currency: Prices are quoted in Indian Rupees (INR) unless specified otherwise, and applicable taxes (GST) are calculated at checkout.",
        "Duplicate / Excess Payments: If a user accidentally registers for the same course/session multiple times or pays extra, the user must request a refund of the duplicate balance amount to admin@techtycoon.in. Once our verification team confirms it as a valid duplicate payment, our team will initiate the refund back to the original payment source within 5 to 7 business days."
      ]
    },
    {
      id: 7,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      title: "Strict No Refund Policy",
      description: "Tech Tycoon maintains a strict No Refund Policy across all websites and platforms. We do not provide monetary refunds for any purchases, subject only to valid duplicate payments:",
      items: [
        "All Webpages & Services: All sales and fee payments across techtycoon.in, academy.techtycoon.in, and course.techtycoon.in are final and 100% non-refundable under any circumstances.",
        "Self-Paced Courses (academy.techtycoon.in): Non-refundable upon immediate granting of digital LMS access and materials.",
        "Live Online Sessions (course.techtycoon.in): Non-refundable. If Tech Tycoon misses conducting a scheduled session, we will arrange the rescheduled session within 4 to 7 days.",
        "Session Dissatisfaction: No cash refunds are provided for dissatisfaction. Feedback is gathered and updated sessions are scheduled in upcoming days.",
        "Agency & Consulting (techtycoon.in): Retainers, setup fees, and project milestone payments are non-refundable once work commences."
      ],
      note: "For complete details, please read our official Refund & Cancellation Policy."
    },
    {
      id: 8,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: "Intellectual Property & Copyright",
      description: "All intellectual property across all Tech Tycoon domains belongs exclusively to Tech Tycoon Digital Solution LLP:",
      items: [
        "Video lessons, lecture recordings, curriculum outlines, and presentation decks",
        "Source code, prompts, frameworks, workbooks, cheat sheets, and downloadable assets",
        "Company branding, logos, graphics, text copy, and website designs",
        "Unauthorized duplication, screen recording, reselling, or public dissemination is a criminal offense under Indian Copyright and Cyber Laws."
      ]
    },
    {
      id: 9,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Limitation of Liability & Educational Disclaimers",
      description: "Please note the following disclaimers regarding our educational and consulting offerings:",
      items: [
        "No Guaranteed Outcomes: Educational programs provide knowledge, practical skills, and frameworks. We do not guarantee specific financial results, income, job placements, or business profits.",
        "System Compatibility: Users are responsible for ensuring their devices, browsers, and internet connections meet the requirements for streaming and attending live video sessions.",
        "Indirect Damages: Tech Tycoon is not liable for indirect, incidental, or consequential damages resulting from platform usage or downtime."
      ]
    },
    {
      id: 10,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      title: "Account Suspension & Termination",
      description: "We reserve the right to immediately suspend or permanently revoke access to any account or live session:",
      items: [
        "For violations of our intellectual property, course sharing prohibitions, or code of conduct",
        "For chargeback disputes initiated without contacting support first",
        "At our sole discretion if malicious intent or abusive behavior is established"
      ]
    },
    {
      id: 11,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Governing Law & Jurisdiction",
      description: "These Terms of Service are governed by and construed in accordance with the laws of India. Any disputes arising in connection with these Terms or any of our platforms shall be subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu, India."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/20 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/20 relative overflow-hidden">
      <Helmet>
        <title>Terms of Service | Tech Tycoon Digital Solution LLP</title>
        <meta name="description" content="Review the Terms of Service for Tech Tycoon Digital Solution LLP governing techtycoon.in, academy.techtycoon.in, and course.techtycoon.in online learning programs and digital services." />
        <meta name="keywords" content="Tech Tycoon terms of service, academy.techtycoon.in terms, course.techtycoon.in terms, online learning terms and conditions, AI training legal India" />
        <link rel="canonical" href="https://www.techtycoon.in/terms-of-service" />
        <meta property="og:title" content="Terms of Service | Tech Tycoon Digital Solution LLP" />
        <meta property="og:description" content="Read our Terms of Service governing our agency services, online video academy, and live interactive training sessions." />
        <meta property="og:url" content="https://www.techtycoon.in/terms-of-service" />
      </Helmet>

      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="max-w-6xl mx-auto mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
          >
            <Link to="/" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-purple-600 dark:text-purple-400 font-medium">Terms of Service</span>
          </motion.div>
        </div>

        {/* Header Section */}
        <div className="max-w-6xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block p-3 bg-purple-500/10 rounded-2xl mb-6">
              <svg className="w-16 h-16 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Please review these terms governing your use of our corporate services, self-paced learning academy, and live interactive training sessions.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full text-sm text-purple-600 dark:text-purple-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Last Updated: October 2026
            </div>
          </motion.div>
        </div>

        {/* Intro */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border-l-4 border-purple-500"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              These Terms of Service constitute a legally binding agreement between you and <span className="text-purple-600 dark:text-purple-400 font-bold">Tech Tycoon Digital Solution LLP</span> governing your access to and use of our primary website at <a href="https://www.techtycoon.in" className="text-purple-600 dark:text-purple-400 hover:underline font-semibold">www.techtycoon.in</a>, our on-demand course platform at <a href="https://academy.techtycoon.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline font-semibold">academy.techtycoon.in</a>, and our cohort-based live online training portal at <a href="https://course.techtycoon.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline font-semibold">course.techtycoon.in</a>. By accessing any of these platforms, you accept these terms in full.
            </p>
          </motion.div>
        </div>

        {/* Sections */}
        <div className="max-w-6xl mx-auto space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 p-6 md:p-8 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-purple-500 to-pink-600 text-white rounded-xl shadow-lg">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {section.id}. {section.title}
                  </h2>
                  {section.description && (
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{section.description}</p>
                  )}
                  {section.items && (
                    <ul className="space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.note && (
                    <div className="mt-4 p-3 bg-purple-50/50 dark:bg-purple-900/10 rounded-xl border border-purple-200/40 dark:border-purple-800/40">
                      <p className="text-sm text-purple-700 dark:text-purple-300 font-medium">{section.note}</p>
                    </div>
                  )}
                  {section.id === 7 && (
                    <div className="mt-4">
                      <Link 
                        to="/refund-policy" 
                        className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 hover:underline"
                      >
                        Read full Cancellation & Refund Policy &rarr;
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Need Clarification?</h2>
            <p className="text-purple-100 mb-6">For legal inquiries or questions regarding these Terms:</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:admin@techtycoon.in" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                admin@techtycoon.in
              </a>
              <Link to="/refund-policy" className="inline-flex items-center gap-2 px-6 py-3 bg-purple-700/60 hover:bg-purple-700 text-white rounded-xl font-semibold transition-colors border border-white/20">
                Cancellation & Refund Policy
              </Link>
            </div>
            <div className="mt-6 text-xs text-purple-200">
              Tech Tycoon Digital Solution LLP | No. 3/59B, 1st Floor, 3rd Street, Ragava Nagar, Moovarasampet, Chennai-600091, Tamil Nadu, India
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
