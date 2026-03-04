'use client'

import { Mail, ArrowRight } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-slate-950">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-400">
              Have questions about Rankett? We&apos;d love to hear from you.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email Card */}
            <a
              href="mailto:info@rankett.com"
              className="block p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30"
              style={{
                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
                border: '1px solid rgba(51, 65, 85, 0.5)',
              }}
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-1">Email Us</h2>
                  <p className="text-slate-400 text-sm mb-3">
                    For partnership inquiries, support, or general questions.
                  </p>
                  <span className="inline-flex items-center gap-2 text-blue-400 font-medium text-sm">
                    info@rankett.com
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
