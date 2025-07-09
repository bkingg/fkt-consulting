import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'team_members',
  type: 'object',
  title: 'Notre Equipe',
  fields: [
    defineField({
      title: 'Titre',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'team',
      title: 'Notre Equipe',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'team'}],
        },
      ],
    }),
    defineField({
      title: 'CTA Texte',
      name: 'ctaText',
      type: 'string',
    }),
    defineField({
      title: 'CTA URL',
      name: 'ctaUrl',
      type: 'url',
      initialValue: '#',
      validation: (rule) =>
        rule.required().uri({
          allowRelative: true,
        }),
    }),
  ],
  initialValue: {
    title: 'Notre Equipe',
    description: 'Découvrez les membres de notre Equipe',
  },
})
