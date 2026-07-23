import type { MetadataRoute } from "next";

const siteUrl = "https://marinhoctbmf.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/galeria`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];
}
