import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { absolute: "Contact GcMAF | Professional & Clinical Inquiries" },
  description:
    "Contact the GcMAF team for professional product, clinical, procurement, research collaboration, and general inquiries.",
  alternates: {
    canonical: "https://gcmaf.net/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact GcMAF | Professional & Clinical Inquiries",
    description:
      "Contact the GcMAF team for professional product, clinical, procurement, research collaboration, and general inquiries.",
    url: "https://gcmaf.net/contact",
    siteName: "GcMAF",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
