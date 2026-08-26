'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { SITE_EMAIL } from '@/lib/constants'

export function ContactBanner() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', inquiry: 'general', message: '' })

  function update(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const payload = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '',
        subject: `[GcMAF Inquiry] ${form.inquiry || 'General'} — ${form.name}`,
        from_name: 'GcMAF Website',
        replyto: form.email,
        ...form,
      }
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-24 lg:py-32 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden p-6 sm:p-10 lg:p-16"
          style={{ backgroundColor: 'var(--color-accent)' }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, var(--color-brand) 0%, transparent 50%), radial-gradient(circle at 80% 50%, #ffffff 0%, transparent 50%)`,
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Copy */}
            <div>
              <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
                <span className="w-6 h-px bg-white/40" />
                Contact
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                Connect With Us Today
              </h2>
              <p className="font-body text-lg text-white/80 leading-relaxed mb-6">
                GcMAF distributes clinical-grade GcMAF to licensed physicians, medical clinics, and accredited research institutions worldwide.
              </p>
              <p className="font-body text-lg text-white/80 leading-relaxed">
                For procurement inquiries, clinical consultation, or research collaboration, please fill out the form and a member of our team will contact you within 24–48 business hours.
              </p>
            </div>

            {/* Right Column: Form */}
            <div className="bg-surface rounded-2xl p-8 lg:p-10 shadow-xl border border-border relative">
              <h3 className="font-display text-2xl font-semibold text-ink mb-2">Send an Inquiry</h3>
              <p className="font-body text-ink-muted text-sm mb-8">We supply exclusively to medical professionals.</p>

              {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-12 gap-4">
                  <CheckCircle2 size={48} className="text-brand" />
                  <h4 className="font-display text-xl font-semibold text-ink">Message Sent</h4>
                  <p className="font-body text-ink-muted">Thank you — we&apos;ll be in touch within 24–48 business hours.</p>
                  <button onClick={() => { setStatus('idle'); setForm({ name: '', email: '', inquiry: 'general', message: '' }) }} className="mt-4 font-body text-sm font-semibold text-brand hover:underline">Send another inquiry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block font-body text-sm font-medium text-ink mb-2" htmlFor="name">Name <span className="text-brand">*</span></label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={update} className="w-full border border-border rounded-xl px-4 py-3 font-body text-sm text-ink placeholder-ink/50 bg-bg focus:outline-none focus:border-brand transition-colors" placeholder="Dr. Jane Smith" />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-ink mb-2" htmlFor="email">Email Address <span className="text-brand">*</span></label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={update} className="w-full border border-border rounded-xl px-4 py-3 font-body text-sm text-ink placeholder-ink/50 bg-bg focus:outline-none focus:border-brand transition-colors" placeholder="jane@clinic.com" />
                  </div>
                  
                  <div>
                    <label className="block font-body text-sm font-medium text-ink mb-2" htmlFor="message">Message <span className="text-brand">*</span></label>
                    <textarea id="message" name="message" rows={4} required value={form.message} onChange={update} className="w-full border border-border rounded-xl px-4 py-3 font-body text-sm text-ink placeholder-ink/50 bg-bg focus:outline-none focus:border-brand transition-colors resize-none" placeholder="Please describe your inquiry..." />
                  </div>
                  
                  {status === 'error' && (
                    <p className="font-body text-sm text-red-500 mt-2">Something went wrong. Please try emailing us directly at {SITE_EMAIL}.</p>
                  )}
                  
                  <button type="submit" disabled={status === 'loading'} className="w-full bg-brand hover:bg-brand-light text-bg font-body py-4 rounded-xl transition-all duration-300 font-semibold text-base disabled:opacity-60 disabled:cursor-not-allowed mt-2 shadow-md">
                    {status === 'loading' ? 'Sending…' : 'Send Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
