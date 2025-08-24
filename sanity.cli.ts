import { defineCliConfig } from 'sanity/cli'

const projectId = '74sn78pu' // Replace with your actual project ID
const dataset = 'production'      // Replace with your actual dataset name

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
})
