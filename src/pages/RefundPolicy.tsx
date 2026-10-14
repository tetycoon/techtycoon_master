import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const RefundPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const policies = [
    {
      id: 1,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Scope & Covered Platforms",
      description: "This Cancellation & Refund Policy applies to all products, educational programs, and digital services offered by Tech Tycoon Digital Solution LLP across all official platforms:",
      items: [
        "techtycoon.in – Corporate agency, consulting, digital marketing & AI solutions",
        "academy.techtycoon.in – Self-paced on-demand video learning platform (LMS / Udemy-style courses)",
        "course.techtycoon.in – Live interactive online sessions, cohort-based training programs, masterclasses & workshops with distinct course slugs"
      ],
      note: "By purchasing, enrolling, or registering on any of our platforms, you agree to the terms outlined in this policy."
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Self-Paced Courses (academy.techtycoon.in)",
      description: "Our on-demand courses hosted on academy.techtycoon.in grant instant digital access to proprietary video lessons, downloadable templates, and curriculum assets.",
      items: [
        "Refund Eligibility: Refund requests must be emailed within 48 hours of purchase, provided the student has viewed less than 15% of the total course video content and has not downloaded any accompanying digital assets or certificates.",
        "Non-Refundable Condition: If more than 15% of the course has been accessed, or if downloadable materials/source files have been accessed, the enrollment is strictly non-refundable.",
        "Technical Faults: In the rare event of a verified technical problem preventing platform access that our technical team cannot resolve within 72 hours, a full 100% refund will be granted."
      ],
      note: "Instant digital consumption and certificate issuance permanently waive refund eligibility."
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Live Online Sessions & Workshops (course.techtycoon.in)",
      description: "Live courses, bootcamps, and masterclasses hosted on course.techtycoon.in have limited cohort seats and dedicated live instructor reservations.",
      items: [
        "Cancellation 48+ Hours Before Batch Start: Participants may cancel their seat up to 48 hours prior to the scheduled start time of the first live session to receive a 100% refund (minus gateway processing charges) OR a free transfer to the next available batch.",
        "Cancellation Within 48 Hours: Cancellations submitted less than 48 hours before the batch begins are non-refundable, as instructor allocation and seat caps are locked. A one-time batch transfer may be requested at our discretion.",
        "After Session Commencement & No-Shows: Once the live cohort has started or a session has been conducted, no refunds or cancellations will be entertained.",
        "Missed Sessions: If you miss a scheduled live session, session recordings (if part of that course syllabus) and support resources will be made available in your dashboard; missed attendance does not qualify for a refund."
      ],
      note: "Live training seats are strictly non-transferable to other individuals without prior written approval."
    },
    {
      id: 4,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Agency & Consulting Services (techtycoon.in)",
      description: "For corporate consulting, AI implementation, website development, SEO, and digital marketing services:",
      items: [
        "Retainers and setup fees covering initial strategy, auditing, onboarding, and dedicated team allocation are non-refundable once work commences.",
        "Milestone-based projects are billed upon milestone sign-off. Payments for approved deliverables or completed milestones cannot be refunded.",
        "Client ad spends and third-party media budgets are paid directly to ad platforms (Google, Meta) and are non-refundable by Tech Tycoon."
      ]
    },
    {
      id: 5,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Cancellations Initiated by Tech Tycoon",
      description: "We are committed to delivering the highest quality learning experience. If an unforeseen event arises:",
      items: [
        "If Tech Tycoon cancels or reschedules a live course, workshop, or webinar on course.techtycoon.in due to instructor illness, technical breakdown, or unavoidable events, participants will be notified immediately.",
        "You will have the complete freedom to choose between moving your enrollment to the rescheduled date / next batch, OR receiving an immediate 100% full refund with zero deductions."
      ]
    },
    {
      id: 6,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Refund Request Process & Timelines",
      description: "To request a refund, please follow this verified procedure:",
      items: [
        "Send an email from your registered email ID to admin@techtycoon.in with the subject line 'Refund Request - [Course Name / Order ID]'.",
        "Include your full legal name, phone number, transaction ID / invoice, the specific platform (academy.techtycoon.in or course.techtycoon.in/<slug>), and a clear reason for your request.",
        "Our student support & billing team will review your application against our course consumption and access logs within 2 business days.",
        "Upon approval, refunds are processed directly back to the original payment source (credit/debit card, net banking, UPI) within 5 to 7 business days, depending on your bank's clearance cycle."
      ],
      note: "Cash refunds or third-party bank account transfers are not supported for security and anti-fraud compliance."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/20 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/20 relative overflow-hidden">
      <Helmet>
        <title>Cancellation & Refund Policy | Tech Tycoon Digital Solution LLP</title>
        <meta name="description" content="Read the official Cancellation and Refund Policy of Tech Tycoon Digital Solution LLP covering techtycoon.in, academy.techtycoon.in, and course.techtycoon.in online learning programs." />
        <meta name="keywords" content="Tech Tycoon refund policy, academy.techtycoon.in refund, course.techtycoon.in cancellation, online learning refund policy, digital courses refund India" />
        <link rel="canonical" href="https://www.techtycoon.in/refund-policy" />
        <meta property="og:title" content="Cancellation & Refund Policy | Tech Tycoon Digital Solution LLP" />
        <meta property="og:description" content="Transparent cancellation and refund terms for all digital learning courses, live online sessions, and agency services." />
        <meta property="og:url" content="https://www.techtycoon.in/refund-policy" />
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
            <span className="text-purple-600 dark:text-purple-400 font-medium">Refund Policy</span>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Cancellation & Refund Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Clear, transparent, and fair policies governing our digital agency services, online video academy, and live interactive training sessions.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-purple-50 dark:bg-purple-900/20 rounded-full text-sm text-purple-600 dark:text-purple-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Last Updated: October 2026
            </div>
          </motion.div>
        </div>

        {/* Intro Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border-l-4 border-purple-500"
          >
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium">
              Tech Tycoon Digital Solution LLP operates our main corporate website at <a href="https://www.techtycoon.in" className="text-purple-600 dark:text-purple-400 hover:underline font-semibold">www.techtycoon.in</a>, our on-demand self-paced learning portal at <a href="https://academy.techtycoon.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline font-semibold">academy.techtycoon.in</a>, and our cohort-based live training sessions at <a href="https://course.techtycoon.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline font-semibold">course.techtycoon.in</a>. We strive to provide unparalleled value in all educational programs and client deliverables. Please review our specific refund and cancellation terms below.
            </p>
          </motion.div>
        </div>

        {/* Policy Sections */}
        <div className="max-w-6xl mx-auto space-y-6">
          {policies.map((section, index) => (
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
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact & Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="max-w-4xl mx-auto mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Have Questions About a Course or Refund?</h2>
            <p className="text-purple-100 mb-6 max-w-xl mx-auto">
              Our support team is available to assist you with any questions regarding course access, scheduling, or refund requests.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:admin@techtycoon.in" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-purple-50 transition-colors shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                admin@techtycoon.in
              </a>
              <Link 
                to="/terms-of-service" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-700/60 hover:bg-purple-700 text-white rounded-xl font-semibold transition-colors border border-white/20"
              >
                View Terms of Service
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

export default RefundPolicy;
