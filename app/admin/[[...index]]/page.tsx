import { Studio } from '@/components/studio'

// Makes the `/admin` route static
export const dynamic = 'force-static'

// A Studio page is a client component so it can render the Studio
export default function StudioPage() {
  return <Studio />
}
