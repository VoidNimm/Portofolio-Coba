import { Hero } from "@/components/hero";
import { Benefits } from "@/components/benefits";
import { ProjectsGrid, Project } from "@/components/projects-grid";
import { AwardsStrip, Award } from "@/components/awards-strip";
import { FadeIn } from "@/components/fade-in";

import { client } from "@/lib/sanity.client";
import { projectsQuery, awardsQuery } from "@/lib/sanity.queries";

export default async function Home() {
  // Fetch data from Sanity
  const projects: Project[] = await client.fetch(projectsQuery)
  const awards: Award[] = await client.fetch(awardsQuery)

  return (
    <>
      <Hero />
      <FadeIn>
        <Benefits />
      </FadeIn>

      {projects && projects.length > 0 && (
        <FadeIn>
          <ProjectsGrid projects={projects} />
        </FadeIn>
      )}

      {awards && awards.length > 0 && (
        <FadeIn>
          <AwardsStrip awards={awards} />
        </FadeIn>
      )}

      {/* Adding some temporary space to allow for scrolling to test the sticky navbar */}
      <div className="h-[200vh]"></div>
    </>
  );
}
