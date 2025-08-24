import { MetadataRoute } from 'next'
import { client } from '@/lib/sanity.client'
import { projectPathsQuery } from '@/lib/sanity.queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // In a real project, you would get this from an environment variable
  const siteUrl = 'https://your-domain.com'

  const staticRoutes = [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/work`, lastModified: new Date() },
    { url: `${siteUrl}/about`, lastModified: new Date() },
    { url: `${siteUrl}/contact`, lastModified: new Date() },
  ]

  const projects = await client.fetch<{ params: { slug: string } }[]>(projectPathsQuery)

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/work/${project.params.slug}`,
    lastModified: new Date(), // In a real app, you might use a `_updatedAt` field from Sanity
  }))

  return [...staticRoutes, ...projectRoutes]
}
