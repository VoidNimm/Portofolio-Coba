import { Award, Box, Briefcase, Feather } from 'lucide-react'

const benefits = [
  {
    icon: Feather,
    title: 'Design with Purpose',
    description: 'Creating intuitive and beautiful user interfaces that are both functional and delightful.',
  },
  {
    icon: Box,
    title: 'Creative Excellence',
    description: 'Pushing the boundaries of design and technology to deliver unique and memorable experiences.',
  },
  {
    icon: Briefcase,
    title: 'Collaborative Approach',
    description: 'Working closely with clients to understand their needs and deliver solutions that exceed expectations.',
  },
  {
    icon: Award,
    title: 'On-Time Delivery',
    description: 'A proven track record of delivering high-quality work on time and on budget.',
  },
]

export function Benefits() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group rounded-lg p-6 transition-transform duration-300 ease-gentle hover:-translate-y-2 hover:bg-card"
            >
              <benefit.icon className="h-10 w-10 text-accent" />
              <h3 className="mt-6 font-bold text-lg">{benefit.title}</h3>
              <p className="mt-2 text-muted">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
