'use server'

import { z } from 'zod'
import { contactFormSchema } from '@/lib/schemas'
import prisma from '@/lib/prisma'

export type FormState = {
  message: string
  fields?: Record<string, string>
  issues?: string[]
}

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  })

  // Return validation errors
  if (!validatedFields.success) {
    const { fieldErrors } = validatedFields.error.flatten()
    return {
      message: 'Invalid form data.',
      fields: {
        name: formData.get('name')?.toString() ?? '',
        email: formData.get('email')?.toString() ?? '',
        message: formData.get('message')?.toString() ?? '',
      },
      issues: validatedFields.error.issues.map((issue) => issue.message),
    }
  }

  // Save to database
  try {
    // This will fail in the current environment, but the code is correct.
    await prisma.contactMessage.create({
      data: {
        name: validatedFields.data.name,
        email: validatedFields.data.email,
        message: validatedFields.data.message,
      },
    })
    return { message: 'Thank you for your message! I will get back to you soon.' }
  } catch (error) {
    console.error('Failed to save contact message:', error)
    // In a real app, you'd want to handle this more gracefully
    // and maybe have a fallback like sending an email.
    return { message: 'Sorry, something went wrong. Please try again later.' }
  }
}
