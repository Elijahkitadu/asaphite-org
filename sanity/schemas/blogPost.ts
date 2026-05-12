import { defineField, defineType } from 'sanity'

export const blogPostSchema = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required().min(10).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Stories',      value: 'stories'      },
          { title: 'News',         value: 'news'         },
          { title: 'Impact',       value: 'impact'       },
          { title: 'Partnerships', value: 'partnerships' },
          { title: 'Advocacy',     value: 'advocacy'     },
          { title: 'Culture',      value: 'culture'      },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured post',
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
      validation: Rule => Rule.required().max(280),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal',      value: 'normal'      },
            { title: 'Heading 2',   value: 'h2'          },
            { title: 'Heading 3',   value: 'h3'          },
            { title: 'Quote',       value: 'blockquote'  },
          ],
          marks: {
            decorators: [
              { title: 'Bold',      value: 'strong' },
              { title: 'Italic',    value: 'em'     },
              { title: 'Underline', value: 'underline' },
            ],
            annotations: [
              {
                name:  'link',
                type:  'object',
                title: 'Link',
                fields: [
                  defineField({ name: 'href', type: 'url', title: 'URL' }),
                  defineField({ name: 'blank', type: 'boolean', title: 'Open in new tab', initialValue: true }),
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'alt',     type: 'string', title: 'Alt text' },
            { name: 'caption', type: 'string', title: 'Caption'  },
          ],
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read time (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'teamMember' }],
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({ name: 'metaTitle',       type: 'string', title: 'Meta title'       }),
        defineField({ name: 'metaDescription', type: 'text',   title: 'Meta description', rows: 2 }),
        defineField({ name: 'ogImage',         type: 'image',  title: 'OG Image'         }),
      ],
    }),
  ],
  preview: {
    select: {
      title:    'title',
      category: 'category',
      media:    'coverImage',
      featured: 'featured',
    },
    prepare({ title, category, media, featured }) {
      return {
        title,
        subtitle: `${category ?? ''}${featured ? ' · ⭐ Featured' : ''}`,
        media,
      }
    },
  },
  orderings: [
    {
      title: 'Published (newest)',
      name:  'publishedAtDesc',
      by:    [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
