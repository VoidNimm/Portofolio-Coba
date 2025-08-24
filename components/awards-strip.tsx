// Define the type for an award based on the GROQ query
export interface Award {
  _id: string
  name: string
  issuer: string
  year: number
  url?: string
}

interface AwardsStripProps {
  awards: Award[]
}

export function AwardsStrip({ awards }: AwardsStripProps) {
  return (
    <section className="py-20 sm:py-32">
      <div className="container max-w-screen-xl px-4 md:px-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-center">
          Awards & Recognition
        </h2>
        <div className="mt-12 flow-root">
          <div className="-my-4 divide-y divide-border">
            {awards.map((award) => (
              <div key={award._id} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-bold text-lg">{award.name}</p>
                  <p className="text-sm text-muted">{award.issuer}</p>
                </div>
                <p className="text-sm font-medium text-muted shrink-0">{award.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
