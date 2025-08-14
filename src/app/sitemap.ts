import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // IMPORTANT: Change this to your actual production domain
  const baseUrl = "https://selam-cleaning-service.vercel.app";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // Add other pages here if you create them
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'yearly',
    //   priority: 0.8,
    // },
  ];
}
