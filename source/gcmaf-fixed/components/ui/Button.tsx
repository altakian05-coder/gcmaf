'use client'

import { forwardRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  arrow?: boolean
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

const baseStyles = 'inline-flex items-center gap-2 font-body font-medium transition-all duration-300 rounded-full cursor-pointer'

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-light shadow-md hover:shadow-lg hover:shadow-brand/30',
  outline: 'border-2 border-current text-current hover:bg-current hover:text-ink',
  ghost: 'text-brand hover:text-brand-light',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

/**
 * In Tailwind v4, CSS utility order (not class string order) determines which
 * wins when two classes target the same property. Strip variant classes that
 * would conflict with explicit overrides in className so only one declaration
 * remains per property.
 */
function mergeVariant(variantClasses: string, className: string): string {
  if (!className) return variantClasses
  const extra = className.split(/\s+/).filter(Boolean)
  const has = (re: RegExp) => extra.some(t => re.test(t))
  return variantClasses
    .split(/\s+/)
    .filter(cls => {
      if (has(/^!?bg-/) && /^bg-/.test(cls)) return false
      if (has(/^!?text-/) && /^text-/.test(cls)) return false
      if (has(/^!?shadow/) && /^shadow/.test(cls)) return false
      if (has(/^!?border-[^0-9]/) && /^border-[^0-9]/.test(cls)) return false
      if (has(/^hover:!?bg-/) && /^hover:bg-/.test(cls)) return false
      if (has(/^hover:!?text-/) && /^hover:text-/.test(cls)) return false
      if (has(/^hover:!?shadow/) && /^hover:shadow/.test(cls)) return false
      return true
    })
    .join(' ')
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, arrow, children, className = '', onClick, type = 'button', disabled }, ref) => {
    const filteredVariant = mergeVariant(variants[variant], className)
    const classes = `${baseStyles} ${filteredVariant} ${sizes[size]} ${className}`

    const content = (
      <>
        {children}
        {arrow && <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />}
      </>
    )

    if (href) {
      return (
        <Link href={href} className={`group ${classes}`}>
          {content}
        </Link>
      )
    }

    return (
      <button ref={ref} type={type} onClick={onClick} disabled={disabled} className={`group ${classes} disabled:opacity-50 disabled:cursor-not-allowed`}>
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'
