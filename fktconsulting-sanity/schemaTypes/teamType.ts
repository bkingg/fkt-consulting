import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team',
  type: 'document',
  title: 'Equipe',
  fields: [
    defineField({
      title: 'Nom',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      title: 'Role',
      name: 'position',
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'social',
      title: 'Social',
      type: 'array',
      of: [
        defineField({
          title: 'Facebook URL',
          name: 'facebook',
          type: 'url',
          validation: (rule) => rule.required(),
        }),
        defineField({
          title: 'LinkedIn URL',
          name: 'linkedin',
          type: 'url',
          validation: (rule) => rule.required(),
        }),
        defineField({
          title: 'X (Twitter) URL',
          name: 'x',
          type: 'url',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
  ],
})
