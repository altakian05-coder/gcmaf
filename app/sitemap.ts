import type { MetadataRoute } from "next";

const baseUrl = "https://gcmaf.net";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`, changeFrequency: "weekly", priority: 0.8 },
    {
      url: `${baseUrl}/blog/autistic-in-japan`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/where-to-get-gcmaf-treatment`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/where-to-buy-gcmaf-clinical-channels`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog/g3p-and-gcmaf-similarities`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clinical-applications`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/clinical-applications/autoimmune`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/clinical-applications/cancer`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/clinical-applications/chronic-infections`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/clinical-applications/immune-enhancement`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/clinical-applications/neurological`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    { url: `${baseUrl}/contact`, changeFrequency: "monthly", priority: 0.5 },
    {
      url: `${baseUrl}/gcmaf-for-sale`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gcmaf-for-sale/questions-and-answers`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gcmaf-for-sale/what-is-gcmaf`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gcmaf-for-sale/gcmaf-supplement`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gcmaf-for-sale/gcmaf-buy`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gcmaf-for-sale/gcmaf-treatment`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gcmaf-for-sale/gcmaf-therapy`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gcmaf-for-sale/gcmaf-injections`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gcmaf-for-sale/gcmaf-storage`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gcmaf-for-sale/product-inquiry`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: `${baseUrl}/product`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/research`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
