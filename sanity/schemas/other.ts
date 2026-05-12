import { defineField, defineType } from 'sanity'

// ─── Impact Stat ──────────────────────────────────────

export const impactStatSchema = defineType({
  name: 'impactStat',
  title: 'Impact Statistic',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'e.g. "Communities Reached"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'value',
      title: 'Numeric value',
      type: 'number',
      validation: Rule => Rule.required().positive(),
    }),
    defineField({
      name: 'suffix',
      title: 'Suffix',
      type: 'string',
      description: 'e.g. "+" or "K"',
    }),
    defineField({
      name: 'prefix',
      title: 'Prefix',
      type: 'string',
      description: 'e.g. "$"',
    }),
    defineField({
      name: 'description',
      title: 'Sub-description',
      type: 'string',
      description: 'e.g. "Across 14 countries"',
    }),
    defineField({
      name: 'icon',
      title: 'Icon name',
      type: 'string',
      description: 'Lucide icon key: map-pin | film | heart | building | users | globe | droplets',
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      validation: Rule => Rule.required().integer().positive(),
    }),
  ],
  preview: {
    select: { title: 'label', subtitle: 'value' },
  },
  orderings: [
    { title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})

// ─── Team Member ──────────────────────────────────────

export const teamMemberSchema = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Member type',
      type: 'string',
      options: {
        list: [
          { title: 'Leadership', value: 'leadership' },
          { title: 'Board',      value: 'board'      },
          { title: 'Staff',      value: 'staff'      },
          { title: 'Volunteer',  value: 'volunteer'  },
        ],
      },
      initialValue: 'staff',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', type: 'string', title: 'Alt text' }),
      ],
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter handle',
      type: 'string',
    }),
    defineField({
      name: 'order',
      title: 'Display order',
      type: 'number',
      initialValue: 99,
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
  orderings: [
    { title: 'Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})

// ─── Church Partner ───────────────────────────────────

export const churchPartnerSchema = defineType({
  name: 'churchPartner',
  title: 'Church Partner',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Church name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'denomination',
      title: 'Denomination',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'City',
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
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'tier',
      title: 'Partnership tier',
      type: 'string',
      options: {
        list: [
          { title: 'Advocate',  value: 'advocate'  },
          { title: 'Mission',   value: 'mission'   },
          { title: 'Founding',  value: 'founding'  },
        ],
      },
      initialValue: 'advocate',
    }),
    defineField({
      name: 'partnerSince',
      title: 'Partner since',
      type: 'date',
    }),
    defineField({
      name: 'contactName',
      title: 'Contact person',
      type: 'string',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'featured',
      title: 'Show on website',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'impactSummary',
      title: 'Impact summary',
      type: 'string',
      description: 'e.g. "$14,000 raised in 48 hours"',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'location', media: 'logo' },
  },
})
