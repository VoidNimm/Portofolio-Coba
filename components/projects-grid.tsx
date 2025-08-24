import { ProjectCard } from './project-card'

// Define the type for a project based on the GROQ query
export interface Project {
  _id: string
  title: string
  slug: string
  summary: string
  imageUrl: string
  role: string
  stack: string
}

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className="py-20 sm:py-32 bg-card/50">
      <div className="container max-w-screen-xl px-4 md:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Selected Work
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project._id} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
