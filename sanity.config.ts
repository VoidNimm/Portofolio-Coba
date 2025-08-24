import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  basePath: '/admin', // The URL path for the studio
  name: 'portfolio_studio',
  title: 'Portfolio Studio',

  projectId: 'YOUR_PROJECT_ID', // Replace with your actual project ID
  dataset: 'production',      // Replace with your actual dataset name

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
