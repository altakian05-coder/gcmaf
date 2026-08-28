import type { ReactNode } from "react";

export default function G3pGcmafArticleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{`
        main article figure figcaption,
        main article .space-y-7 > .mt-10.rounded-2xl.border.border-border.bg-surface.p-6 {
          display: none !important;
        }
      `}</style>
      {children}
    </>
  );
}
