'use client'

import { useState } from 'react'
import { Mail, CheckCircle2, MapPin, Copy } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { Turnstile } from '@marsidev/react-turnstile'
import { SITE_EMAIL, SITE_ADDRESS, SITE_PHONE } from '@/lib/constants'

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={handleCopy} type="button" className="flex items-center gap-1.5 font-body text-sm font-medium text-ink hover:text-brand transition-colors bg-transparent border-0 cursor-pointer p-0">
      {copied ? <CheckCircle2 size={16} className="text-brand" /> : <Copy size={16} />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

function ActionLink({ icon: Icon, label, href }: { icon: React.ElementType, label: string, href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 font-body text-sm font-medium text-ink hover:text-brand transition-colors bg-transparent border-0 cursor-pointer p-0">
      <Icon size={16} />
      {label}
    </a>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', inquiry: 'general', message: '' })
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)

  function update(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    
    if (!turnstileToken) {
      setStatus('error')
      return
    }

    setStatus('loading')
    try {
      // Browsers bypass Cloudflare WAF easily. We map the state to Web3Forms payload requirements.
      const payload = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '',
        subject: `[GcMAF Inquiry] ${form.inquiry || 'General'} — ${form.name}`,
        from_name: 'GcMAF Website',
        replyto: form.email,
        name: form.name,
        email: form.email,
        inquiry: form.inquiry,
        message: form.message,
      }

      const res = await fetch('https://api.web3forms.com/submit', { 
        method: 'POST', 
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }, 
        body: JSON.stringify(payload) 
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = 'w-full border border-border rounded-xl px-4 py-3 font-body text-sm text-ink placeholder-ink/50 bg-bg focus:outline-none focus:border-brand transition-colors'

  return (
    <>
      <section className="pt-32 pb-16 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-brand) 0%, #4a9aaa 45%, var(--color-hero-end) 100%)' }}>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-44 h-44 rounded-full border border-white/10" />
          <div className="absolute bottom-[10%] right-[5%] w-56 h-56 rounded-full border border-white/8" />
          <div className="absolute top-[50%] left-[5%] w-20 h-20 rounded-full bg-white/5" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/80 mb-4">
              <span className="w-6 h-px bg-white/60" />
              Contact
            </span>
            <h1 className="font-display text-hero font-bold text-white leading-tight mb-4">Get In Touch</h1>
            <p className="font-body text-lg text-white/80 leading-relaxed">
              We work exclusively with licensed physicians and accredited medical institutions. We respond within 24–48 business hours.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
          <span className="font-display font-bold text-white block text-center" style={{ fontSize: 'clamp(4rem, 14vw, 12rem)', opacity: 0.06, lineHeight: 1, letterSpacing: '-0.02em' }}>Contact</span>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-3xl font-semibold text-ink mb-4">Contact Information</h2>
                <p className="font-body text-ink-muted leading-relaxed">
                  GcMAF distributes clinical-grade GcMAF to licensed physicians and medical institutions worldwide. Our team is available to discuss procurement, clinical applications, and research collaboration.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-5">
                <div className="bg-surface rounded-2xl border border-border p-5">
                  <div className="flex gap-4">
                    <div className="p-2.5 bg-brand/10 rounded-xl shrink-0 h-fit">
                      <MapPin size={24} className="text-brand" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-ink mb-1">Corporate Office</h3>
                      <p className="font-body text-sm text-ink-muted leading-relaxed">{SITE_ADDRESS}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface rounded-2xl border border-border p-5">
                  <div className="flex gap-4">
                    <div className="p-2.5 bg-brand/10 rounded-xl shrink-0 h-fit">
                      <WhatsAppIcon size={24} className="text-brand" />
                    </div>
                    <div className="w-full">
                      <h3 className="font-display text-base font-semibold text-ink mb-1">Phone</h3>
                      <p className="font-body text-sm text-ink-muted leading-relaxed mb-4">{SITE_PHONE}</p>
                      <div className="flex items-center gap-6 pt-4 border-t border-border">
                        <CopyButton text={SITE_PHONE} />
                        <ActionLink icon={WhatsAppIcon} label="WhatsApp" href={`https://wa.me/${SITE_PHONE.replace(/\D/g, '')}`} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-surface rounded-2xl border border-border p-5">
                  <div className="flex gap-4">
                    <div className="p-2.5 bg-brand/10 rounded-xl shrink-0 h-fit">
                      <Mail size={24} className="text-brand" />
                    </div>
                    <div className="w-full">
                      <h3 className="font-display text-base font-semibold text-ink mb-1">General Email</h3>
                      <p className="font-body text-sm text-ink-muted leading-relaxed mb-4">{SITE_EMAIL}</p>
                      <div className="flex items-center gap-6 pt-4 border-t border-border">
                        <CopyButton text={SITE_EMAIL} />
                        <ActionLink icon={Mail} label="Send Email" href={`mailto:${SITE_EMAIL}`} />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-surface rounded-2xl border border-border p-8 h-full flex flex-col">
                <h3 className="font-display text-2xl font-semibold text-ink mb-8">Send an Inquiry</h3>

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 gap-4 flex-1">
                    <CheckCircle2 size={48} className="text-brand" />
                    <h4 className="font-display text-xl font-semibold text-ink">Message Sent</h4>
                    <p className="font-body text-ink-muted">Thank you — we&apos;ll be in touch within 24–48 business hours.</p>
                    <button onClick={() => { setStatus('idle'); setForm({ name: '', email: '', inquiry: 'general', message: '' }) }} className="mt-4 font-body text-sm text-brand hover:underline">Send another inquiry</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 flex-1 flex flex-col">
                    <div>
                      <label className="block font-body text-sm font-medium text-ink mb-2" htmlFor="name">Name <span className="text-brand">*</span></label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={update} className={inputClass} placeholder="Dr. Jane Smith" />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-ink mb-2" htmlFor="email">Email Address <span className="text-brand">*</span></label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={update} className={inputClass} placeholder="jane@clinic.com" />
                    </div>

                    <div className="flex-1 flex flex-col">
                      <label className="block font-body text-sm font-medium text-ink mb-2" htmlFor="message">Message <span className="text-brand">*</span></label>
                      <textarea id="message" name="message" required value={form.message} onChange={update} className={`${inputClass} resize-none flex-1 min-h-[120px]`} placeholder="Please describe your inquiry, including your medical specialty and intended clinical application..." />
                    </div>
                    {status === 'error' && !turnstileToken && (
                      <p className="font-body text-sm text-red-500">Please complete the anti-spam check to proceed.</p>
                    )}
                    {status === 'error' && turnstileToken && (
                      <p className="font-body text-sm text-red-500">Something went wrong. Please try emailing us directly at {SITE_EMAIL}.</p>
                    )}

                    <div className="mt-auto pt-2">
                      <div className="flex justify-center my-4 min-h-[65px]">
                        <Turnstile
                          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
                          onSuccess={(token) => {
                            setTurnstileToken(token)
                            if (status === 'error') setStatus('idle')
                          }}
                          onError={() => setStatus('error')}
                          onExpire={() => setTurnstileToken(null)}
                          options={{ theme: 'light' }}
                        />
                      </div>
                    </div>

                    <button type="submit" disabled={status === 'loading' || !turnstileToken} className="w-full bg-brand hover:bg-brand-light text-bg font-body font-medium py-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-brand/20 text-base disabled:opacity-60 disabled:cursor-not-allowed">
                      {status === 'loading' ? 'Sending…' : !turnstileToken ? 'Checking...' : 'Send Inquiry'}
                    </button>
                    <p className="font-body text-xs text-ink-muted text-center">We typically respond within 24–48 business hours.</p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
