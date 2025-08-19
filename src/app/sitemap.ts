import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // IMPORTANT: Change this to your actual production domain
  // const baseUrl = "https://selam-cleaning.com";

  return [
    {
      url: "https://selam-cleaning.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    // Add other pages here if you create them
    {
      url: `https://www.selam-cleaning.com`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 2,
    },
  ];
}
