interface BadgeProps {
  children: React.ReactNode
  variant?: 'gold' | 'teal' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'gold', className = '' }: BadgeProps) {
  const variants = {
    gold: 'bg-brand/10 text-brand border border-brand/30',
    teal: 'bg-accent/10 text-accent-light border border-accent/30',
    outline: 'border border-border text-ink-muted',
  }

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-medium tracking-wide uppercase ${variants[variant]} ${className}`}>
      {children}
    </span>
  )
}
