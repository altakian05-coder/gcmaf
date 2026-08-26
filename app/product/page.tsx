import type { Metadata } from "next";
import { ProductHero } from "@/components/sections/ProductHero";
import { ProductVariants } from "@/components/sections/ProductVariants";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { ProductFeatures } from "@/components/sections/ProductFeatures";
import { ProductBenefits } from "@/components/sections/ProductBenefits";
import { MechanismSection } from "@/components/sections/MechanismSection";
import { SafetySection } from "@/components/sections/SafetySection";
import { IngredientsSection } from "@/components/sections/IngredientsSection";
import { FAQSection } from "@/components/sections/FAQSection";

export const metadata: Metadata = {
  title: "GcMAF Immune Therapy Product",
  description:
    "Clinical-grade GcMAF available in two formulations: ready-to-use liquid and lyophilized powder. Distributed exclusively to licensed physicians and medical institutions.",
};

export default function ProductPage() {
  return (
    <>
      <ProductHero />
      <ProductVariants />
      <ProductShowcase />
      <MechanismSection />
      <ProductFeatures />
      <ProductBenefits />
      <SafetySection />
      <IngredientsSection />
      <FAQSection />
    </>
  );
}
