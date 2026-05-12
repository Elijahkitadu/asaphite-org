import { defineField, defineType } from 'sanity'

export const campaignSchema = defineType({
  name: 'campaign',
  title: 'Campaign',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Active',    value: 'active'    },
          { title: 'Completed', value: 'completed' },
          { title: 'Upcoming',  value: 'upcoming'  },
          { title: 'Paused',    value: 'paused'    },
        ],
        layout: 'radio',
      },
      initialValue: 'active',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Water',      value: 'water'      },
          { title: 'Education',  value: 'education'  },
          { title: 'Healthcare', value: 'healthcare' },
          { title: 'Churches',   value: 'churches'   },
          { title: 'Community',  value: 'community'  },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured campaign',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', type: 'string', title: 'Alt text', validation: Rule => Rule.required() }),
      ],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(250),
    }),
    defineField({
      name: 'description',
      title: 'Full description',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    }),
    defineField({
      name: 'goalAmount',
      title: 'Goal amount (USD)',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: 'raisedAmount',
      title: 'Amount raised (USD)',
      type: 'number',
      validation: Rule => Rule.required().min(0),
      initialValue: 0,
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End date',
      type: 'date',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
    }),
    defineField({
      name: 'updates',
      title: 'Campaign updates',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'date',    type: 'date',   title: 'Date'    }),
            defineField({ name: 'title',   type: 'string', title: 'Title'   }),
            defineField({ name: 'content', type: 'text',   title: 'Content' }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'date' },
          },
        },
      ],
    }),
    defineField({
      name: 'impactStatement',
      title: 'Impact statement',
      type: 'string',
      description: 'e.g. "800 families served"',
    }),
    defineField({
      name: 'donorCount',
      title: 'Number of donors',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'stripeProductId',
      title: 'Stripe Product ID',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title:    'title',
      status:   'status',
      raised:   'raisedAmount',
      goal:     'goalAmount',
      media:    'coverImage',
    },
    prepare({ title, status, raised, goal, media }) {
      const pct = goal ? Math.round((raised / goal) * 100) : 0
      return {
        title,
        subtitle: `${status} · $${raised?.toLocaleString() ?? 0} / $${goal?.toLocaleString() ?? 0} (${pct}%)`,
        media,
      }
    },
  },
})
