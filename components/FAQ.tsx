"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What exactly do you fulfill per tier?",
    answer: "Tier 1 ($498): 50-query tracking, 8 answer-first blogs/mo, schema/llms.txt, Featured.com mentions. Tier 2 ($1,498): +150 queries, 36 authority mentions, TLDR page summaries. Tier 3 ($2,498): +250 queries, 70+ mentions, YouTube transcripts, dominance-to-dollars reports."
  },
  {
    question: "How is Rankett different from SEO tools?",
    answer: "SEO = clicks. AI Visibility = zero-click recommendations. SEO tools track rankings and traffic. Rankett provides content + mentions + SOV tracking so AI picks your client first. Agencies charge $1.5k\u2013$7.5k/mo retainers (vs $500 SEO packages)."
  },
  {
    question: "What is Share of Voice (SOV)?",
    answer: "SOV = % of times AI cites your client vs 50 competitors across buyer queries. Example: \u201CBest dentist Hillsboro\u201D \u2192 Track ChatGPT, Perplexity, and Gemini. Average lift: 0\u219215% SOV in 90 days across partner accounts."
  },
  {
    question: "What proof/case studies exist?",
    answer: "Pooled benchmarks: Tier 1 avg 12% SOV lift in 90 days. Live vault access for partners (before/after SOV charts, competitor gaps, revenue correlations). Early adopters contribute \u2192 everyone benefits."
  },
  {
    question: "How do I onboard my first client?",
    answer: "1. Run branded audit \u2192 show client gaps. 2. Close retainer \u2192 create seat in Rankett. 3. Send client your onboarding link (yourdomain.com/onboard). 4. We deliver. You bill."
  }
];

const leftColumnFAQs = faqData.slice(0, 3);
const rightColumnFAQs = faqData.slice(3, 5);

function FAQItemComponent({ faq, index }: { faq: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`border-b border-slate-800 ${isOpen ? 'border-l-2 border-l-blue-500 pl-4' : ''} transition-all duration-300`}
      style={{ paddingTop: '28px', paddingBottom: '28px' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group min-h-[48px] py-2"
      >
        <span className={`text-base sm:text-lg font-medium transition-all pr-4 leading-tight ${isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
            isOpen ? "rotate-180 text-blue-400" : "text-slate-600 group-hover:text-blue-400"
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-slate-950 py-32 overflow-hidden border-t border-slate-800">
      {/* Subtle Transition Gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-slate-900/50 to-transparent pointer-events-none" />

      <div className="w-full flex flex-col items-center justify-center px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            FAQ
          </h2>
          <p className="text-lg sm:text-xl text-slate-400">
            Common questions about AI Visibility Optimization.
          </p>
        </motion.div>

        {/* Two Column FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 max-w-7xl w-full">
          {/* Left Column */}
          <div>
            {leftColumnFAQs.map((faq, index) => (
              <FAQItemComponent key={index} faq={faq} index={index} />
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightColumnFAQs.map((faq, index) => (
              <FAQItemComponent key={index} faq={faq} index={index + 3} />
            ))}
          </div>
        </div>

        {/* View all FAQs link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12"
        >
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-300 group"
          >
            <span className="text-sm sm:text-base">View all FAQs</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
