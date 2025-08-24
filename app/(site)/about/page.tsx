import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className="container max-w-screen-xl px-4 py-16 md:px-8">
      <h1 className="text-4xl font-bold">About Me</h1>
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Image
            src="https://placehold.co/400x500/0B0B0C/F5F6F7?text=Portrait"
            alt="Portrait of Jules"
            width={400}
            height={500}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="md:col-span-2">
          <p className="text-lg text-muted">
            This is a placeholder for the about section. It will contain a short bio, skills stack badges, and a downloadable CV button.
          </p>
        </div>
      </div>
    </main>
  );
}
