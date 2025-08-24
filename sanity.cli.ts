import { defineCliConfig } from 'sanity/cli'

const projectId = 'YOUR_PROJECT_ID' // Replace with your actual project ID
const dataset = 'production'      // Replace with your actual dataset name

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
})
