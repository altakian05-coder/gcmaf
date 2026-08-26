"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, ArrowUp, MapPin } from "lucide-react";
import Image from "next/image";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import {
  SITE_NAME,
  SITE_URL,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_ADDRESS,
  MEDICAL_DISCLAIMER,
} from "@/lib/constants";

const quickLinks = [
  { label: "Home", href: `${SITE_URL}/` },
  { label: "About", href: `${SITE_URL}/about` },
  { label: "Product", href: `${SITE_URL}/product` },
  { label: "Clinical Applications", href: `${SITE_URL}/clinical-applications` },
  { label: "Research", href: `${SITE_URL}/research` },
  { label: "Blog", href: `${SITE_URL}/gcmaf-for-sale/` },
  { label: "Contact", href: `${SITE_URL}/contact` },
];

export function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll-to-top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center shadow-lg hover:bg-brand-light transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </button>
      )}

      <footer
        style={{ backgroundColor: "var(--color-footer-bg)" }}
        className="text-white"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-white/10">
            {/* Col 1: Brand Info */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Image src="/images/logo-transparent-bg.png" alt="GcMAF Logo" width={32} height={32} className="w-8 h-8 object-contain" />
                <span className="font-display text-2xl font-bold text-white leading-none">
                  GcMAF
                </span>
              </div>
              <p className="font-body text-sm text-white/60 leading-relaxed max-w-xs">
                Clinical research updates and peer-reviewed insights
                delivered directly to licensed practitioners.
              </p>
            </div>

            {/* Col 2: Quick links */}
            <div>
              <h4 className="font-body text-xs font-semibold text-white/40 uppercase tracking-widest mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-white/60 hover:text-brand transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-brand/40 group-hover:bg-brand transition-colors" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Contact */}
            <div>
              <h4 className="font-body text-xs font-semibold text-white/40 uppercase tracking-widest mb-6">
                Get In Touch
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail size={16} className="text-brand mt-0.5 shrink-0" />
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="font-body text-sm text-white/60 hover:text-brand transition-colors break-all"
                  >
                    {SITE_EMAIL}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <WhatsAppIcon size={16} className="text-brand mt-0.5 shrink-0" />
                  <a
                    href={`https://wa.me/${SITE_PHONE.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-white/60 hover:text-brand transition-colors"
                  >
                    {SITE_PHONE}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-brand mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-white/60">
                    {SITE_ADDRESS}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 space-y-3">
            <p className="medical-disclaimer text-center max-w-3xl mx-auto">
              {MEDICAL_DISCLAIMER}
            </p>
            <p className="font-body text-xs text-white/30 text-center">
              © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
              GcMAF is a prescription-only product.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
