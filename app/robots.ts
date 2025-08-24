import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // In a real project, you would get this from an environment variable
  const siteUrl = 'https://your-domain.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
