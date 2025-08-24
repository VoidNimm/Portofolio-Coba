import { createClient } from 'next-sanity'

// --- IMPORTANT ---
// 1. Replace 'YOUR_PROJECT_ID' with your actual Sanity project ID.
// 2. It's highly recommended to use environment variables for these values.
//    See: https://nextjs.org/docs/app/building-your-application/configuring/environment-variables
// -----------------
export const projectId = '74sn78pu'
export const dataset = 'production'
export const apiVersion = '2023-05-03' // Use a recent API version

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // `false` if you want to ensure fresh data
})
