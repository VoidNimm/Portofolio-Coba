import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ProjectCardProps {
  slug: string
  title: string
  role: string
  stack: string
  imageUrl: string
  className?: string
}

export function ProjectCard({
  slug,
  title,
  role,
  stack,
  imageUrl,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className={cn(
        'group block overflow-hidden rounded-lg bg-card shadow-md transition-all duration-300 ease-gentle hover:shadow-xl hover:-translate-y-2',
        className
      )}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={500}
          className="h-full w-full object-cover transition-transform duration-300 ease-gentle group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="mt-2 text-sm text-muted">
          <span className="font-semibold text-foreground/80">{role}</span>
          <span className="mx-2 text-muted">|</span>
          {stack}
        </p>
      </div>
    </Link>
  )
}
