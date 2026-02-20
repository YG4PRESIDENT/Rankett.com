'use client'

import { useState } from 'react'
import { Send, CheckCircle2, Mail } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:info@rankett.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

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

          {submitted ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Your email client should have opened
              </h2>
              <p className="text-slate-400 mb-6">
                If it didn&apos;t, you can reach us directly at{' '}
                <a href="mailto:info@rankett.com" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                  info@rankett.com
                </a>
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div
                className="rounded-2xl p-8"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
                  border: '1px solid rgba(51, 65, 85, 0.5)',
                }}
              >
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@youragency.com"
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your agency and what you're looking for..."
                      className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500/50 resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </div>

              <div className="text-center">
                <p className="text-sm text-slate-500">
                  Or email us directly at{' '}
                  <a href="mailto:info@rankett.com" className="text-blue-400 hover:text-blue-300">
                    info@rankett.com
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
