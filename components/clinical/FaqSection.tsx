export function FaqSection({ faqs }: { faqs: { question: string, answer: string }[] }) {
  if (!faqs || faqs.length === 0) return null

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-semibold text-ink">Practitioner FAQ</h2>
          <p className="font-body text-ink-muted mt-4">Common clinical inquiries regarding protocols and application.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-bg border border-border">
              <h3 className="font-display text-lg font-semibold text-ink mb-3">{faq.question}</h3>
              <p className="font-body text-sm text-ink-muted leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
