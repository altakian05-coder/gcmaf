'use client'

import { useState, useEffect, useSyncExternalStore } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, ArrowRight, Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import { NAV_LINKS } from '@/lib/constants'

const CONTACT_URL = '/contact'

const subscribeToHydration = () => () => {}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const mounted = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  )

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeNavigation = () => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }

  const isActive = (href: string) => {
    const hrefPath = href.startsWith('http')
      ? new URL(href).pathname
      : href.split(/[?#]/)[0]
    if (hrefPath === '/') return pathname === '/'
    return pathname.startsWith(hrefPath.replace(/\/$/, ''))
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-surface ${
        scrolled ? 'shadow-sm border-b border-border' : ''
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" onClick={closeNavigation} className="group" aria-label="GcMAF home">
          <motion.span
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.92, rotate: -3 }}
            transition={{ type: 'spring', stiffness: 420, damping: 18 }}
            className="flex items-center gap-2"
          >
            <span className="relative flex h-11 w-11 items-center justify-center rounded-full">
              <motion.span
                aria-hidden="true"
                className="absolute inset-1 rounded-full bg-accent/15"
                animate={{ scale: [0.9, 1.12, 0.9], opacity: [0.2, 0.45, 0.2] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <Image
                src="/images/logo-transparent-bg.png"
                alt="GcMAF DNA logo"
                unoptimized
                width={44}
                height={44}
                priority
                className="relative z-10 h-11 w-11 object-contain drop-shadow-sm"
              />
            </span>
            <span className="font-display text-2xl font-semibold text-brand tracking-wide">
              GcMAF
            </span>
          </motion.span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            if (link.children) {
              const isOpen = activeDropdown === link.label;
              return (
                <div 
                  key={link.label} 
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    onClick={closeNavigation}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-body font-medium transition-colors text-ink hover:text-brand ${isActive(link.href) ? 'text-brand' : ''}`}
                  >
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-surface rounded-xl shadow-xl border border-border overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={closeNavigation}
                            className="flex items-center gap-2 px-4 py-3 text-sm font-body text-ink-muted hover:text-brand hover:bg-brand/5 transition-colors border-b border-border/50 last:border-0"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand/40 shrink-0" />
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            }
            if (link.label === 'Blog') {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeNavigation}
                  className={`px-3 py-2 rounded-lg text-sm font-body font-medium transition-colors text-ink hover:text-brand ${isActive(link.href) ? 'text-brand' : ''}`}
                >
                  {link.label}
                </a>
              )
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeNavigation}
                className={`px-3 py-2 rounded-lg text-sm font-body font-medium transition-colors text-ink hover:text-brand ${isActive(link.href) ? 'text-brand' : ''}`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* CTA + theme toggle */}
        <div className="hidden lg:flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg text-ink-muted hover:text-brand transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <Link
            href={CONTACT_URL}
            onClick={closeNavigation}
            className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full text-sm font-body font-medium hover:bg-brand transition-all duration-300 shadow-md hover:shadow-lg group"
          >
            Get In Touch
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex lg:hidden items-center gap-1">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg text-ink-muted hover:text-brand transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg transition-colors text-ink"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-surface border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.label}>
                  {link.label === 'Blog' ? (
                    <a
                      href={link.href}
                      onClick={closeNavigation}
                      className={`block px-3 py-2.5 rounded-lg text-sm font-body font-medium transition-colors ${
                        isActive(link.href) ? 'text-brand bg-brand/5' : 'text-ink hover:text-brand hover:bg-brand/5'
                      }`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeNavigation}
                      className={`block px-3 py-2.5 rounded-lg text-sm font-body font-medium transition-colors ${
                        isActive(link.href) ? 'text-brand bg-brand/5' : 'text-ink hover:text-brand hover:bg-brand/5'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )}
                  {link.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={closeNavigation}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-ink-muted hover:text-brand transition-colors"
                        >
                          <span className="w-1 h-1 rounded-full bg-brand/40" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-border">
                <Link
                  href={CONTACT_URL}
                  onClick={closeNavigation}
                  className="flex items-center justify-center gap-2 w-full bg-accent text-white py-3 rounded-full text-sm font-body font-medium hover:bg-brand transition-colors"
                >
                  Get In Touch <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
