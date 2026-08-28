import type { ReactNode } from "react";

export default function G3pGcmafArticleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{`
        main article figure figcaption {
          display: none !important;
        }
      `}</style>
      {children}
    </>
  );
}
