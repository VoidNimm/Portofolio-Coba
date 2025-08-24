import { groq } from 'next-sanity'

export const projectsQuery = groq`
  *[_type == "project" && status == "published"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    summary,
    "imageUrl": heroImage.asset->url,
    role,
    stack
  }
`

export const awardsQuery = groq`
  *[_type == "award"] | order(year desc) {
    _id,
    name,
    issuer,
    year,
    url
  }
`

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    summary,
    "heroImage": heroImage.asset->{
      url,
      "lqip": metadata.lqip
    },
    gallery[] {
      "url": asset->url,
      "lqip": asset->metadata.lqip,
      "alt": alt
    },
    role,
    stack,
    duration,
    links,
    caseStudy,
    seoTitle,
    seoDescription
  }
`

export const projectPathsQuery = groq`
  *[_type == "project" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }
`
