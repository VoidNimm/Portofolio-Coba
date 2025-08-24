import { client } from '@/lib/sanity.client'
import { projectBySlugQuery, projectPathsQuery } from '@/lib/sanity.queries'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

// Define the type for a single project, extending what we had before
interface Project {
  _id: string
  title: string
  slug: string
  summary: string
  heroImage: {
    url: string
    lqip: string
  }
  gallery?: {
    url: string
    lqip: string
    alt?: string
  }[]
  role?: string
  stack?: string
  duration?: string
  links?: {
    live?: string
    github?: string
  }
  caseStudy?: any[] // Type for Portable Text
  seoTitle?: string
  seoDescription?: string
  ogImage?: {
    asset?: {
      url: string
    }
  }
}

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project: Project = await client.fetch(projectBySlugQuery, { slug: params.slug })
  if (!project) {
    return {}
  }
  return {
    title: project.seoTitle || project.title,
    description: project.seoDescription || project.summary,
    openGraph: {
      title: project.seoTitle || project.title,
      description: project.seoDescription || project.summary,
      images: [
        {
          url: project.ogImage?.asset?.url || project.heroImage.url,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  }
}

// Prepare the page for static generation
export async function generateStaticParams() {
  const projects = await client.fetch<{ params: { slug: string } }[]>(projectPathsQuery)
  return projects.map((project) => ({ slug: project.params.slug }))
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project: Project = await client.fetch(projectBySlugQuery, { slug: params.slug })

  if (!project) {
    // This can be enhanced with a proper 404 page
    return <div>Project not found</div>
  }

  return (
    <main className="container max-w-screen-xl px-4 py-16 md:px-8">
      <article>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg text-muted">{project.summary}</p>

        <div className="mt-8 aspect-[16/9] relative overflow-hidden rounded-lg">
          <Image
            src={project.heroImage.url}
            alt={project.title}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL={project.heroImage.lqip}
          />
        </div>

        <div className="mt-12 prose prose-invert prose-lg max-w-none">
          {project.caseStudy && <PortableText value={project.caseStudy} />}
        </div>

        {/* You can add more sections here like gallery, next/prev project nav, etc. */}
      </article>
    </main>
  )
}
