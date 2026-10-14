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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
      title: "Strict No Refund Policy Across All Platforms",
      description: "Tech Tycoon Digital Solution LLP maintains a strict No Refund Policy. Except for verified duplicate/excess payments, we do not provide monetary refunds for any purchases, subscriptions, enrollments, or fees paid across any of our official platforms:",
      items: [
        "techtycoon.in – Corporate agency services, AI consulting, digital marketing, SEO, and web development",
        "academy.techtycoon.in – Self-paced video learning courses, LMS access, digital toolkits, and certifications",
        "course.techtycoon.in – Live online interactive sessions, cohort training programs, masterclasses, and workshops with dedicated course slugs"
      ],
      note: "All sales, purchases, and fee payments are final. No general refunds will be issued once payment is completed."
    },
    {
      id: 2,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Duplicate Registration & Excess Amount Refund Policy",
      description: "We recognize that unintentional duplicate payments or overpayments may occasionally happen during checkout:",
      items: [
        "Accidental Multiple Registrations: If a user mistakenly registers for the exact same course or live online session multiple times, or pays an excess amount over the course fee, the user is entitled to request a refund for the excess balance amount.",
        "Submission of Refund Request: The user must submit a written request via email to admin@techtycoon.in within 7 days of the transaction, providing full name, registered email, course name/slug, and payment transaction IDs/receipts for all duplicate payments.",
        "Team Verification & Acceptance: Once our billing and verification team reviews the payment records and confirms that it is a valid duplicate registration or overpayment, our team will accept and approve the request.",
        "Initiation of Refund: Upon approval, our team will initiate the refund process for the excess balance amount. The funds will be credited directly back to the original source payment method (bank account, credit/debit card, UPI) within 5 to 7 business days, in accordance with standard payment gateway cycles."
      ],
      note: "Refunds in this scenario are strictly limited to the duplicate/excess balance amount paid for the duplicate registration."
    },
    {
      id: 3,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: "Live Online Sessions & Rescheduling Guarantee (course.techtycoon.in)",
      description: "For all live cohort sessions, interactive workshops, and masterclasses hosted with dedicated slugs on course.techtycoon.in:",
      items: [
        "Non-Refundable Seat Reservation: Seat registrations for live online courses are strictly non-refundable due to limited batch caps and reserved instructor time.",
        "Missed Session Rescheduling Policy: If Tech Tycoon misses or is unable to conduct a scheduled live session on its designated date (due to technical issues, instructor unavailability, or unforeseen events), no monetary refund will be provided. Instead, Tech Tycoon will reschedule and conduct that session within 4 to 7 days.",
        "Reschedule Notifications: In the event of a rescheduled session, all enrolled participants will receive prior notifications with the revised date, time, and session link via email and WhatsApp.",
        "Participant Absence: If a participant is unable to attend a live scheduled session, no refund or compensation is provided. Session recordings (if included in that course curriculum) will be provided in the student portal."
      ],
      note: "Rescheduled sessions arranged within 4 to 7 days fulfill our delivery commitment in full."
    },
    {
      id: 4,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: "Course / Session Satisfaction & Continuous Improvement Policy",
      description: "We are deeply committed to delivering high-impact, transformative educational experiences for every learner:",
      items: [
        "Student Feedback Collection: If a participant is not satisfied with a particular session or course topic, we take their constructive feedback very seriously.",
        "Updated Sessions in Upcoming Days: While monetary refunds are not provided for subjective dissatisfaction, our academic and training team will review the participant's feedback and arrange an updated, upgraded, or supplementary session for that topic in the upcoming days.",
        "Doubt Clearance & Mentorship: Participants will also be provided supplementary Q&A assistance and updated learning resources to ensure their doubts are thoroughly addressed and learning goals are fully achieved."
      ],
      note: "We continuously evolve our live sessions and curriculums based on student feedback to guarantee maximum learning value."
    },
    {
      id: 5,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Self-Paced Courses (academy.techtycoon.in)",
      description: "Our online learning academy (Udemy-style platform) delivers instant, unhindered access to proprietary intellectual property upon registration:",
      items: [
        "Instant Access Delivery: Upon successful transaction, users receive immediate digital access to course videos, study frameworks, templates, and downloadable resources.",
        "Non-Refundable: Because all digital materials and course curriculums are accessible immediately, enrollments on academy.techtycoon.in are 100% non-refundable.",
        "No Partial Returns: No partial or full refunds, credits, or exchanges will be granted after an account is activated or a course is unlocked."
      ],
      note: "Please review course syllabus, prerequisites, and previews before making an enrollment purchase."
    },
    {
      id: 6,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2H4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Agency & Digital Marketing Services (techtycoon.in)",
      description: "For corporate consulting, AI implementation, website development, SEO, and digital marketing services:",
      items: [
        "Retainers and setup fees covering initial strategy, auditing, onboarding, and dedicated team allocation are non-refundable once work commences.",
        "Milestone payments are billed upon completion and are non-refundable once approved.",
        "Third-party ad spend budgets (Meta Ads, Google Ads) are disbursed directly to advertising networks and are completely non-refundable by Tech Tycoon."
      ]
    },
    {
      id: 7,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      title: "Chargebacks & Payment Disputes",
      description: "Since all users explicitly agree to this policy prior to checkout:",
      items: [
        "Any unauthorized chargeback or payment dispute raised with a bank or payment gateway will be treated as a breach of contract.",
        "In the event of an unjustified chargeback, user access to all Tech Tycoon platforms (including academy.techtycoon.in, course.techtycoon.in, and community groups) will be permanently terminated.",
        "Tech Tycoon reserves the right to present payment records, IP logs, digital attendance proofs, and this agreed policy to payment processors to dispute fraudulent claims."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple-50/30 to-pink-50/20 dark:from-gray-900 dark:via-purple-950/30 dark:to-pink-950/20 relative overflow-hidden">
      <Helmet>
        <title>No Refund & Cancellation Policy | Tech Tycoon Digital Solution LLP</title>
        <meta name="description" content="Official No Refund and Rescheduling Policy of Tech Tycoon Digital Solution LLP governing techtycoon.in, academy.techtycoon.in, and course.techtycoon.in online learning programs." />
        <meta name="keywords" content="Tech Tycoon refund policy, academy.techtycoon.in refund, course.techtycoon.in rescheduling policy, online learning no refund India, duplicate payment refund" />
        <link rel="canonical" href="https://www.techtycoon.in/refund-policy" />
        <meta property="og:title" content="No Refund & Cancellation Policy | Tech Tycoon Digital Solution LLP" />
        <meta property="og:description" content="Strict No Refund Policy across all digital learning courses, live online sessions, and agency services." />
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
            <div className="inline-block p-3 bg-red-500/10 dark:bg-red-500/20 rounded-2xl mb-6">
              <svg className="w-16 h-16 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Refund & Cancellation Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Please review our strict No Refund Policy, duplicate payment resolution, and session rescheduling terms governing all Tech Tycoon platforms.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-full text-sm font-semibold text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800/40">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              No Refund Policy • Duplicate Payment Protection • 4-7 Days Rescheduling
            </div>
          </motion.div>
        </div>

        {/* Intro Notice Banner */}
        <div className="max-w-4xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-red-50/70 dark:bg-red-950/30 rounded-2xl p-8 border-l-4 border-red-500 shadow-md"
          >
            <h2 className="text-xl font-bold text-red-900 dark:text-red-300 mb-2">Important Notice on Refunds</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium mb-3">
              <span className="font-bold text-gray-900 dark:text-white">Tech Tycoon Digital Solution LLP maintains a strict No Refund Policy</span> across our primary domain <a href="https://www.techtycoon.in" className="text-purple-600 dark:text-purple-400 hover:underline font-semibold">techtycoon.in</a>, our self-paced academy <a href="https://academy.techtycoon.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline font-semibold">academy.techtycoon.in</a>, and our live cohort training platform <a href="https://course.techtycoon.in" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 hover:underline font-semibold">course.techtycoon.in</a>.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
              • <strong>Duplicate / Excess Payments:</strong> If a user mistakenly registers for the same course multiple times or pays extra, submit a refund request for the balance amount. Upon valid verification, our team will initiate the refund.<br />
              • <strong>Missed Live Sessions:</strong> If we miss conducting a live session on <span className="font-semibold text-purple-600 dark:text-purple-400">course.techtycoon.in</span>, we will arrange and conduct the rescheduled session within <strong>4 to 7 days</strong>.<br />
              • <strong>Session Satisfaction:</strong> If not satisfied with a session, we collect feedback and arrange updated sessions in the upcoming days.
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
                    <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">{section.description}</p>
                  )}
                  {section.items && (
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.note && (
                    <div className="mt-4 p-3.5 bg-red-50/50 dark:bg-red-950/20 rounded-xl border border-red-200/60 dark:border-red-900/40">
                      <p className="text-sm text-red-700 dark:text-red-300 font-semibold">{section.note}</p>
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
            <h2 className="text-3xl font-bold mb-4">Need Help or Have a Billing Question?</h2>
            <p className="text-purple-100 mb-6 max-w-xl mx-auto">
              For duplicate payment verification, session queries, or feedback, our student support team is here to assist you.
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
