'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { submitContactForm } from '@/app/actions'

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? 'Sending...' : 'Send Message'}
    </button>
  )
}

export default function ContactPage() {
  const initialState = { message: '', issues: [] }
  const [state, formAction] = useFormState(submitContactForm, initialState)

  return (
    <main className="container max-w-screen-xl px-4 py-16 md:px-8">
      <h1 className="text-4xl font-bold">Contact</h1>
      <p className="mt-4 text-muted max-w-2xl">
        Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon as possible.
      </p>

      <form action={formAction} className="mt-8 max-w-2xl space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">Name</label>
          <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md bg-card border-border shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">Email</label>
          <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md bg-card border-border shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground">Message</label>
          <textarea id="message" name="message" rows={4} required className="mt-1 block w-full rounded-md bg-card border-border shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-50"></textarea>
        </div>

        {state.message && (
          <p className={state.issues && state.issues.length > 0 ? 'text-red-500' : 'text-green-500'}>
            {state.message}
          </p>
        )}
        {state.issues && state.issues.length > 0 && (
          <ul className="list-disc list-inside text-red-500">
            {state.issues.map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
          </ul>
        )}

        <div>
          <SubmitButton />
        </div>
      </form>
    </main>
  );
}
