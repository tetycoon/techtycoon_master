import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import GetInTouchModal from '../components/GetInTouchModal';
import { createPortal } from 'react-dom';

// Import images from the Newsletter folder
import rathinamImg1 from '../assets/Newsletter/Rathinam College/IMG-20250113-WA0001.jpg';
import rathinamImg2 from '../assets/Newsletter/Rathinam College/IMG-20250113-WA0002.jpg';
import rathinamImg3 from '../assets/Newsletter/Rathinam College/IMG-20250113-WA0003.jpg';

import simpsonImg1 from '../assets/Newsletter/Simpson/WhatsApp Image 2025-04-29 at 23.09.28_4c0913f7.jpg';
import simpsonImg2 from '../assets/Newsletter/Simpson/WhatsApp Image 2025-04-29 at 23.09.29_79ed8a98.jpg';
import simpsonImg3 from '../assets/Newsletter/Simpson/WhatsApp Image 2025-04-29 at 23.09.30_1530f658.jpg';

import tagroeImg1 from '../assets/Newsletter/Tagroe Medical College/IMG-20250321-WA0004.jpg';
import tagroeImg2 from '../assets/Newsletter/Tagroe Medical College/IMG-20250321-WA0008.jpg';
import tagroeImg3 from '../assets/Newsletter/Tagroe Medical College/IMG-20250321-WA0010.jpg';

import torreyImg1 from '../assets/Newsletter/torrey a japanese company/WhatsApp Image 2025-11-20 at 18.35.40_9c583a8c.jpg';
import krishnaImg1 from "../assets/Newsletter/krishna swamy women's college/WhatsApp Image 2025-07-04 at 10.13.33_f604e68e.jpg";
import vidyaImg1 from '../assets/Newsletter/FDP Program at Vidya Sagar/20250628_120434.jpg';
import keralaImg1 from '../assets/Newsletter/training at kerala/WhatsApp Image 2025-06-17 at 10.38.38_d4578834.jpg';
import mmaImg1 from '../assets/Newsletter/cofacilaor at MMA/WhatsApp Image 2025-05-23 at 18.50.22_0673c820.jpg';
import vitImg1 from '../assets/Newsletter/VIT/IMG_1252.jpg';
import periyarImg1 from '../assets/Newsletter/periyar college/IMG_3609.jpg';
import maxwellImg1 from '../assets/Newsletter/Maxwell Centre/maxwell_workshop.png';
import vestinImg1 from '../assets/Newsletter/Vestin Park/vestin_park_training.png';
import madrasImg1 from '../assets/Newsletter/Madras University/madras_university_training.png';
import loyolaImg1 from '../assets/Newsletter/St Loyola/cybersecurity_training.png';
import leylandImg1 from '../assets/Newsletter/Ashok Leyland/ashok_leyland_training.png';
import hindustanImg1 from '../assets/Newsletter/Hindustan/hindustan1.jpg';

interface CollegeActivity {
  id: number;
  college: string;
  title: string;
  date: string;
  description: React.ReactNode;
  images: string[];
  location: string;
  participants: string;
}

const collegeActivities: CollegeActivity[] = [
  {
    id: 15,
    college: "Ashok Leyland",
    title: "AI Multiplier in Manufacturing: A Strategic Corporate Workshop",
    date: "April 16 - 17, 2026",
    description: (
      <>
        <p className="mb-4">
          I walked into <strong>Ashok Leyland in Hosur</strong> expecting to teach AI, but what I didn’t expect was the profound shift in mindset I would witness. Over two intense days with two batches of 25+ participants, we didn't just talk about AI—we used it to solve real workplace challenges.
        </p>
        <p className="mb-4">
          From 9 AM to 5 PM, we explored how <strong>Microsoft Copilot</strong> can act as a force multiplier. Participants saw firsthand how to turn rough ideas into professional emails and build impactful presentations in minutes, significantly reducing effort while improving output quality.
        </p>
        <div className="mb-4">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">🚀 Workshop Impact:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Thinking First:</strong> Moving from "how to use a tool" to "how to think with AI."</li>
            <li><strong>Real-time Results:</strong> Implementing Copilot workflows on actual daily tasks.</li>
            <li><strong>Efficiency Multiplier:</strong> Demonstrating how to achieve more with significantly less effort.</li>
            <li><strong>Manufacturing 4.0:</strong> Preparing the workforce for the evolving digital landscape of manufacturing.</li>
          </ul>
        </div>
        <p className="mb-4">
          At first, there was hesitation: <em>"Can AI really help in my daily job?"</em> By the end, that question disappeared. They saw it working. In real time. On their own tasks.
        </p>
        <p>
          The biggest shift? People realizing their own potential when empowered with the right tools. The future of manufacturing is not about the tools we have, but how ready we are to use them properly.
        </p>
      </>
    ),
    images: [leylandImg1],
    location: "Ashok Leyland, Hosur",
    participants: "25+ Corporate Professionals (Two Batches)"
  },
  {
    id: 11,
    college: "Maxwell Centre",
    title: "Leadership in the Era of AI: A Strategic Workshop",
    date: "January 23, 2026",
    description: (
      <>
        <p className="mb-4">
          Some moments in a career arrive quietly—but leave a lasting mark. January 23rd, 2026, was one such defining moment. I had the privilege of leading an exclusive executive workshop hosted by the <strong>Maxwell Centre for Industrial Training & Development</strong>, engaging a group of 10 senior corporate decision-makers from four diverse organizations.
        </p>
        <p className="mb-4">
          These were leaders responsible for the very pillars of their companies: strategy, people, and digital transformation. Our focus was intensely practical, moving beyond the hype to address core challenges:
        </p>
        <div className="mb-4">
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Reshaping Industries:</strong> How AI is fundamentally altering leadership paradigms.</li>
            <li><strong>Hands-on Productivity:</strong> Mastering prompt engineering for immediate corporate results.</li>
            <li><strong>Custom AI Agents:</strong> Tailoring intelligent workflows for specific business needs.</li>
            <li><strong>Ethics & Responsibility:</strong> Navigating the critical role of responsible AI adoption.</li>
          </ul>
        </div>
        <p className="mb-4">
          What stood out most was the quality of the dialogue. These leaders weren’t just curious about AI—they were deeply committed to using it thoughtfully, ethically, and strategically. It reinforced a core belief I hold: while technology may evolve at breakneck speed, it is <strong>responsible leadership</strong> that truly shapes the future.
        </p>
        <p>
          Grateful for the trust, the deep conversations, and the opportunity to contribute where it matters most.
        </p>
      </>
    ),
    images: [maxwellImg1],
    location: "Maxwell Centre for Industrial Training & Development",
    participants: "10 senior corporate decision-makers"
  },
  {
    id: 16,
    college: "Hindustan University",
    title: "AI & Automation: The New Frontier in Digital Marketing",
    date: "January 22, 2026",
    description: (
      <>
        <p className="mb-4">
          100 students. One room. Three hours that changed everything. Yesterday at <strong>Hindustan University</strong>, I walked into what I thought would be a routine workshop on the <em>"Role of AI and Automation in Digital Marketing."</em> I was quickly proven wrong by a generation that doesn't just "get" technology—they are ready to disrupt it.
        </p>
        <p className="mb-4">
          The moment that defined the session occurred just 15 minutes in, when a student asked: <strong>"If AI can write better copy than humans, what's our competitive advantage?"</strong> The room went silent, but the answer became the cornerstone of our discussion: AI isn't a competitor; it's a colleague.
        </p>
        <div className="mb-4">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">💡 Core Shifts We Explored:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>The Exceptional Marketer:</strong> AI won't replace marketers; it will separate the average from the exceptional.</li>
            <li><strong>Reclaiming Humanity:</strong> Automation doesn't remove the human touch—it gives us the time to <em>be</em> more human.</li>
            <li><strong>Experience Engineering:</strong> Digital marketing has evolved from "posting content" to "engineering experiences."</li>
            <li><strong>Ethical Mastery:</strong> Navigating the critical balance between AI efficiency and human creativity.</li>
          </ul>
        </div>
        <p className="mb-4">
          What hit me hardest was realizing that these 100 students are the first generation to grow up with AI as a teammate. While many are still debating <em>whether</em> to use these tools, they are already asking <em>how</em> to use them ethically and strategically to remain irreplaceable.
        </p>
        <p>
          The disruption isn't coming—it's already here, sitting in college classrooms and asking the uncomfortable questions that will shape the future of our industry.
        </p>
      </>
    ),
    images: [hindustanImg1],
    location: "Hindustan University, Chennai",
    participants: "100 Digital Marketing Students"
  },
  {
    id: 12,
    college: "Vestin Park Hotel",
    title: "Scaling the Public Stage: A Milestone in My AI Journey",
    date: "January 11, 2026",
    description: (
      <>
        <p className="mb-4">
          Some days don’t just pass—they mark you for life. January 11th, 2026, was one such day. Standing in front of a room filled with trainers, coaches, facilitators, and entrepreneurs at the <strong>Vestin Park Hotel, Egmore</strong>, I felt a rush of emotions that words can barely hold: excitement, gratitude, and a quiet inner voice saying, <em>"This is where you belong."</em>
        </p>
        <p className="mb-4">
          This was my first public training program in this format, and the energy in the room was electric. We brought together 20 powerful participants—20 curious minds ready to grow. Our mission was to bind <strong>Marketing and AI</strong> together, not just in theory, but practically, strategically, and purposefully.
        </p>
        <p className="mb-4">
          A highlight of the session was a special guest segment on sales tactics by master trainer <strong>Mr. Yaseen</strong>. Watching him decode the psychology and real-world wisdom of sales with such clarity was a masterclass in itself—a reminder that experience, when shared with intent, becomes a lasting legacy.
        </p>
        <div className="mb-4">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">🎯 Specialized Training for Trainers:</h4>
          <p>
            We take pride in conducting specialized sessions specifically designed for <strong>trainers, facilitators, and educators</strong>. These programs go beyond the basics, focusing on pedagogical excellence and the strategic integration of AI into teaching and coaching workflows.
          </p>
        </div>
        <p className="mb-4">
          As the session progressed, I realized that this wasn’t just a program; it was a perfect alignment of vision and execution. I am deeply thankful for the strength to step forward, the courage to lead, and the individuals who trusted me with their time and attention.
        </p>
        <p>
          Grateful for every participant who showed up with openness. This is just the beginning, and my heart is full.
        </p>
      </>
    ),
    images: [vestinImg1],
    location: "Vestin Park Hotel, Egmore, Chennai",
    participants: "20 Trainers, Coaches, and Entrepreneurs"
  },
  {
    id: 13,
    college: "University of Madras",
    title: "Future-Readiness for 150 Educators: A Strategic Mindset Shift",
    date: "January 3 - 9, 2026",
    description: (
      <>
        <p className="mb-4">
          Six days. 150 Professors. One powerful shift in mindset. On Day One, the room was filled with decades of teaching wisdom and one silent question: <em>"Where does Artificial Intelligence fit into my role as an educator?"</em> By Day Six, that question had transformed into an eager, <strong>"How fast can I implement this?"</strong>
        </p>
        <p className="mb-4">
          Alongside fellow trainers <strong>Mr. Saibabu and Ms. Jayanthi</strong>, we worked with 150 professors from various institutions under Madras University. What unfolded was not just a training program—it was a collective reinvention of teaching. Every day was charged with breakthrough moments as confidence replaced confusion.
        </p>
        <div className="mb-4">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">🎓 Key Transformation Pillars:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Teaching Effectiveness:</strong> Enhancing classroom engagement with AI-driven insights.</li>
            <li><strong>Workload Optimization:</strong> Reducing academic administrative burden through smart automation.</li>
            <li><strong>Research Productivity:</strong> Elevating research capabilities with advanced AI tools.</li>
            <li><strong>Leadership:</strong> Positioning educators as pioneers in the AI-driven future of education.</li>
          </ul>
        </div>
        <p className="mb-4">
          What inspired me most was their unlearning and relearning mindset. No resistance, no fear—only a deep commitment to growth. When educators upgrade their thinking, generations upgrade their future. This experience was about empowerment and proving that learning never expires.
        </p>
        <p>
          Grateful for the synergy and the incredible energy shared by every professor in that room. The future of education is already here.
        </p>
      </>
    ),
    images: [madrasImg1],
    location: "University of Madras, Chennai",
    participants: "150 College Professors & Researchers"
  },
  {
    id: 14,
    college: "St. Loyola Institute of Technology",
    title: "Cybersecurity in the AI Era: Defending the Digital Frontier",
    date: "December 3 - 9, 2025",
    description: (
      <>
        <p className="mb-4">
          Imagine a room full of 35 eager engineering students, all curious about how AI and cybersecurity intertwine in today's complex tech landscape. That was the scene at 8 AM on a Monday morning at <strong>St. Loyola Institute of Technology, Poonamallee</strong>. For the next six days, we embarked on a deep dive into the world of digital defense.
        </p>
        <p className="mb-4">
          Throughout the week, we moved beyond theory to explore <strong>real-world hacking scenarios</strong>, analyzing how AI acts as both a powerful tool and a sophisticated challenge in modern cybersecurity. It was incredible to see the students connect the dots between theoretical concepts and the practical application of protecting data in an AI-driven world.
        </p>
        <div className="mb-4">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">🛡️ Program Highlights:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>AI-Driven Defense:</strong> Leveraging machine learning for proactive threat detection.</li>
            <li><strong>Hacking Scenarios:</strong> Analyzing modern attack vectors and defensive countermeasures.</li>
            <li><strong>Hands-on Labs:</strong> Practical exercises in securing networks and data infrastructure.</li>
            <li><strong>Future Outlook:</strong> Navigating the evolving role of AI in the cybersecurity ecosystem.</li>
          </ul>
        </div>
        <p className="mb-4">
          By the end of the program, the feedback from the students was truly heartwarming. Seeing them grow in confidence and skill reminds me of why I am so passionate about this mission—helping the next generation navigate and lead in the ever-evolving tech space.
        </p>
        <p>
          This experience was a powerful reminder that learning is a continuous journey, and I'm excited to keep sharing this knowledge and growing along with everyone involved.
        </p>
      </>
    ),
    images: [loyolaImg1],
    location: "St. Loyola Institute of Technology, Chennai",
    participants: "35 Engineering Students"
  },
  {
    id: 10,
    college: "AON",
    title: "Metric Maven Digital Marketing Workshop",
    date: "November 20 & 21, 2025",
    description: (
      <>
        <p className="mb-4">
          AON successfully conducted a 2-day corporate training program titled “Metric Maven” on 20 & 21 November 2025 at the Bengaluru office. The workshop was delivered by Mr. Antony Praveen, Digital Marketing & AI Trainer, and brought together 60 enthusiastic participants from various teams.
          The objective of the program was to help employees strengthen their understanding of digital marketing metrics, customer behavior, and performance-driven strategies. The sessions covered key topics such as SEO, SEM, Social Media Marketing, Content Marketing, Email Marketing, Web Analytics (GA4), Lead Nurturing, and Sales Funnel Management. Participants also explored practical tools for analytics, automation, and campaign optimization.
        </p>
        <p className="mb-4">
          The training followed an engaging and interactive format with real-world examples, activities, case discussions, and tool demonstrations. Employees appreciated the practical approach and shared highly positive feedback, noting that the sessions were insightful, well-structured, and directly applicable to their work.
        </p>
        <p>
          Overall, the Metric Maven workshop successfully enhanced participants’ digital capabilities and equipped them with actionable strategies to implement in their ongoing business operations. AON continues to invest in upskilling its workforce, reinforcing its commitment to innovation, digital transformation, and continuous learning.
        </p>
      </>
    ),
    images: [torreyImg1],
    location: "AON, Bengaluru",
    participants: "60 enthusiastic participants"
  },
  {
    id: 9,
    college: "Krishna Swamy Women’s College",
    title: "AI Career Pathfinder Bootcamp",
    date: "July 4, 2025",
    description: (
      <>
        <p className="mb-4">
          We launched a women-in-tech pathway that helps final-year learners navigate AI-first roles. The session combined
          mentorship circles, live portfolio critiques, and a fast track on responsible AI practices for marketers and HR grads.
        </p>
        <p>
          Students left with action plans, curated toolkits, and project prompts they can showcase during campus placements.
        </p>
      </>
    ),
    images: [krishnaImg1],
    location: "Krishna Swamy Women’s College, Chennai",
    participants: "120 undergraduate learners"
  },
  {
    id: 8,
    college: "Vidya Sagar College",
    title: "Faculty Development Program on Generative AI",
    date: "June 28, 2025",
    description: (
      <>
        <p className="mb-4">
          This FDP empowered professors to embed GenAI workflows into their lesson plans. From rubric creation to lab
          simulations, we demonstrated how faculty can save prep time while keeping assessments authentic.
        </p>
        <p>
          The cohort co-created five AI-enabled course blueprints that will go live in the upcoming semester.
        </p>
      </>
    ),
    images: [vidyaImg1],
    location: "Vidya Sagar College, Chennai",
    participants: "42 faculty members"
  },
  {
    id: 7,
    college: "Kerala Technology Training",
    title: "AI Productivity Retreat",
    date: "June 17, 2025",
    description: (
      <>
        <p className="mb-4">
          Hosted in Kochi, this retreat focused on sustainability startups that want to modernize operations with AI copilots.
          Teams prototyped investor dashboards, auto-generated marketing assets, and co-built policy guardrails for data use.
        </p>
        <p>
          Every founder left with a personalized 30-60-90 adoption blueprint mapped to their product roadmap.
        </p>
      </>
    ),
    images: [keralaImg1],
    location: "Kochi, Kerala",
    participants: "25 climate-tech founders"
  },
  {
    id: 6,
    college: "MMA Cofacilitator Program",
    title: "Executive Communication with AI",
    date: "May 23, 2025",
    description: (
      <>
        <p className="mb-4">
          As part of MMA&apos;s leadership circle, we co-facilitated a lab on using AI to craft investor narratives, strategy
          briefs, and policy responses in minutes. Business heads practiced blending data storytelling with on-brand voice.
        </p>
        <p>
          The highlight was a rapid-fire simulation where each CXO deployed AI copilots to respond to market-moving scenarios.
        </p>
      </>
    ),
    images: [mmaImg1],
    location: "Madras Management Association, Chennai",
    participants: "30 CXOs and business heads"
  },
  {
    id: 5,
    college: "VIT University",
    title: "Future Skills Design Lab",
    date: "May 15, 2025",
    description: (
      <>
        <p className="mb-4">
          VIT invited us to run a design lab that stitches together AI, design thinking, and entrepreneurial finance.
          Multidisciplinary teams reimagined campus services with AI copilots and pitched full-stack MVPs by the end of day.
        </p>
        <p>
          The winning squad built an AI concierge for the placement cell, now being piloted with the career services team.
        </p>
      </>
    ),
    images: [vitImg1],
    location: "VIT, Vellore",
    participants: "80 engineering & management students"
  },
  {
    id: 4,
    college: "Periyar College",
    title: "AI-Ready Curriculum Sprint",
    date: "May 5, 2025",
    description: (
      <>
        <p className="mb-4">
          Periyar College partnered with us to refresh their curriculum for the NEP-aligned academic year. We mapped every
          department&apos;s outcomes to AI use-cases and co-authored lab assignments that deliver measurable skill outcomes.
        </p>
        <p>
          Department heads received playbooks covering assessment rubrics, tooling stacks, and accreditation-friendly metrics.
        </p>
      </>
    ),
    images: [periyarImg1],
    location: "Periyar College of Arts & Science, Trichy",
    participants: "Heads of 12 departments"
  },
  {
    id: 2,
    college: "Simpson Company",
    title: "AI-POWERED ADVANCED POWERPOINT TRAINING",
    date: "April 29, 2025",
    description: (
      <>
        <p className="mb-4">
          We are thrilled to share the successful completion of an AI-Powered Advanced PowerPoint Training Session
          conducted for the dedicated employees of Simpson Sembiam Huzur Garden.
        </p>
        <p className="mb-4">
          Held as part of our corporate upskilling initiative, this hands-on training brought together 22 enthusiastic
          participants from multiple units within the organization. The session was carefully crafted to enhance
          productivity, boost creativity, and empower participants with smarter presentation skills.
        </p>
        <div className="mb-4">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">🔍 Session Highlights:</h4>
          <p className="font-medium mb-1">Morning Session – Mastering Advanced PowerPoint Techniques:</p>
          <p className="mb-2">
            Participants explored a wide range of advanced PowerPoint features aimed at enhancing their presentation
            design and communication efficiency. From slide mastery to dynamic transitions, the session was packed
            with powerful tools and tips.
          </p>
          <p className="font-medium mb-1">Afternoon Session – Integrating AI & Smart Tools:</p>
          <p className="mb-2">
            The second half focused on incorporating AI tools, productivity add-ins, innovative websites, and
            time-saving hacks. These digital enhancements were introduced to help professionals streamline their
            workflow and deliver more impactful content effortlessly.
          </p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">🎤 Practical Application:</h4>
          <p>
            As a wrap-up activity, every participant was challenged to create and present a 3-minute presentation
            applying the skills they had just learned. The creativity, confidence, and practical application shown
            by the team were truly commendable and inspiring.
          </p>
        </div>
      </>
    ),
    images: [simpsonImg1, simpsonImg2, simpsonImg3],
    location: "Simpson Sembiam Huzur Garden, Chennai",
    participants: "22 professionals from multiple departments"
  },
  {
    id: 1,
    college: "Tagore Medical College",
    title: "DIGITAL DENTISTRY: TRANSFORMING THE FUTURE OF ORAL HEALTHCARE",
    date: "March 21, 2025",
    description: (
      <>
        <p className="mb-4">
          Tech Tycoon Digital Solution LLP was proud to deliver an insightful and future-focused session at
          Tagore Medical College, Chennai, for a vibrant group of 70 aspiring dental students. Originally
          planned as a session on "Computer Literacy," the session was rebranded to "Digital Dentistry" to
          better reflect the evolving needs of the dental industry in today's digital era.
        </p>
        <div className="mb-4">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">🎯 Session Focus:</h4>
          <p className="mb-2">
            The one-hour interactive session explored the powerful intersection of Artificial Intelligence (AI)
            and Digital Media in dentistry. The aim was to equip future dentists with a forward-thinking
            perspective on how digital tools are reshaping oral healthcare.
          </p>
          <p className="mb-1">Key topics covered included:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>AI-Powered Diagnostic Tools: Enhancing precision in diagnosis and treatment planning</li>
            <li>3D Printing in Dentistry: Revolutionizing prosthetics and dental restoration</li>
            <li>Digital Patient Management Systems: Streamlining clinical operations</li>
            <li>Digital Marketing for Dentists: Strategies for building an online brand and attracting patients in the digital age</li>
          </ul>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">💬 Interactive Engagement:</h4>
          <p>
            The session sparked active participation, with students engaging in thought-provoking discussions
            on the latest technological advancements and their real-world applications. Their curiosity and
            enthusiasm highlighted a growing awareness of the importance of digital integration in dentistry.
          </p>
        </div>
      </>
    ),
    images: [tagroeImg1, tagroeImg2, tagroeImg3],
    location: "Tagore Medical College, Chennai",
    participants: "70 dental students"
  },
  {
    id: 3,
    college: "Rathinam College",
    title: "DM WITH AI: EMPOWERING FUTURE MARKETERS",
    date: "January 13, 2025",
    description: (
      <>
        <p className="mb-4">
          We are excited to share the successful completion of a five-day seminar on Digital Marketing with Artificial
          Intelligence (DM with AI), conducted for the enthusiastic students of Rathinam College, Coimbatore.
        </p>
        <p className="mb-4">
          The session welcomed over 60+ participants who were eager to explore the evolving landscape of digital marketing.
          While the original topic focused on digital marketing fundamentals, the program was thoughtfully upgraded to
          incorporate Artificial Intelligence (AI)—reflecting the current market trends and future demands of the industry.
        </p>
        <div className="mb-4">
          <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">🎓 What the Seminar Covered:</h4>
          <ul className="list-disc pl-5 space-y-1">
            <li>Foundations of Digital Marketing: SEO, social media, email marketing, and content strategy</li>
            <li>AI-Powered Tools and Trends: Smart automation, customer analytics, AI-generated content</li>
            <li>Real-World Applications: Case studies and examples of AI enhancing marketing strategies</li>
            <li>Hands-on Demonstrations: Practical exposure to tools that marketers use today</li>
          </ul>
        </div>
        <p>
          The engagement, energy, and curiosity of the students made it an awesome and memorable experience.
          Their openness to innovation and digital transformation was truly inspiring.
        </p>
      </>
    ),
    images: [rathinamImg1, rathinamImg2, rathinamImg3],
    location: "Rathinam College, Coimbatore",
    participants: "60+ marketing students"
  }
];

interface ImageLightboxProps {
  image: string;
  onClose: () => void;
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({ image, onClose }) => {
  useEffect(() => {
    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 240, damping: 22 }}
        className="relative w-[min(90vw,1100px)] max-h-[90vh] rounded-3xl bg-white dark:bg-gray-900 shadow-2xl border border-white/20 dark:border-gray-800 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/90 hover:text-white transition-colors"
          aria-label="Close image preview"
        >
          <FaTimes size={26} />
        </button>

        <div className="p-4 sm:p-6">
          <img
            src={image}
            alt="Full size preview"
            className="w-full h-full max-h-[80vh] object-contain rounded-2xl"
          />
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

const Newsletter: React.FC = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <Helmet>
        <title>AI Workshops & Corporate Training | Tech Tycoon Outreach</title>
        <meta name="description" content="Explore high-impact AI workshops conducted at prestigious institutions like Madras University, Ashok Leyland, and VIT. Hands-on training for the next generation." />
      </Helmet>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Blobs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-[-10%] w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/10 rounded-full filter blur-[120px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            x: [0, -120, 0], 
            y: [0, 80, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-[-10%] w-[600px] h-[600px] bg-purple-400/10 dark:bg-purple-600/5 rounded-full filter blur-[120px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -100, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-indigo-300/15 dark:bg-indigo-500/5 rounded-full filter blur-[100px]"
        ></motion.div>

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-4 backdrop-blur-md border border-blue-200/50 dark:border-blue-800/50"
          >
            🚀 Tech Tycoon Outreach
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
            Workshops at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Colleges & Corporates</span>
          </h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"
          ></motion.div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            Empowering the next generation of leaders and professionals through high-impact 
            educational workshops and advanced AI training programs across India.
          </p>
        </motion.div>

        {/* College Activities */}
        <div className="relative max-w-7xl mx-auto space-y-16">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[54.5%] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-blue-500/50 hidden lg:block"></div>
          {collegeActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/50 hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index % 3 * 0.1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
                {/* Images Section */}
                <div
                  className="relative h-80 lg:h-auto overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(activity.images[0])}
                >
                  <img
                    src={activity.images[0]}
                    alt={`${activity.college}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent pointer-events-none"></div>
                  <div className="absolute top-4 left-4 z-10 pointer-events-none">
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300">
                      {activity.college}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{activity.title}</h2>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 ml-2">{activity.date}</span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="text-gray-600 dark:text-gray-300 prose prose-blue dark:prose-invert">
                      {activity.description}
                    </div>

                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{activity.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300">{activity.participants}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-blue-600 dark:text-blue-400 font-medium italic">
                      "At Tech Tycoon Digital Solution LLP, we believe in bridging education with real-world innovation.
                      This initiative reflects our mission to prepare the next generation with future-ready skills."
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                      – Antony Praveen, Founder
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white overflow-hidden relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {/* Decorative shapes */}
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-indigo-500/20 rounded-full blur-xl"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">Bring AI education to your institution and Corporate</h2>
              <p className="text-white/90 mb-6">
                We offer specialized workshops, seminars, and training programs tailored to various academic disciplines. Contact us to organize an AI workshop at your college or university.
              </p>
              <button
                onClick={() => setShowContactModal(true)}
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Contact Us for Our Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src={rathinamImg1}
                alt="College Workshop"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                style={{ height: "300px" }}
              />
            </div>
          </div>
        </motion.div>

        <AnimatePresence>
          {selectedImage && (
            <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
          )}
        </AnimatePresence>

        {/* Get In Touch Modal */}
        <AnimatePresence>
          {showContactModal && (
            <GetInTouchModal onClose={() => setShowContactModal(false)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Newsletter;