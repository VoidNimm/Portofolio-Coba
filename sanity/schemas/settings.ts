import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'socialLink' }],
    }),
    defineField({
      name: 'cv',
      title: 'CV (PDF File)',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    }),
  ],
  // This makes it a singleton document
  __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
})
