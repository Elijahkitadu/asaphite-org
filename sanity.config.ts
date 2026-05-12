import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'asaphites-foundation',
  title: 'The Asaphites Foundation',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Stories')
              .schemaType('story')
              .child(S.documentTypeList('story').title('All Stories')),
            S.listItem()
              .title('Campaigns')
              .schemaType('campaign')
              .child(S.documentTypeList('campaign').title('All Campaigns')),
            S.listItem()
              .title('Blog Posts')
              .schemaType('blogPost')
              .child(S.documentTypeList('blogPost').title('All Posts')),
            S.divider(),
            S.listItem()
              .title('Impact Statistics')
              .schemaType('impactStat')
              .child(S.documentTypeList('impactStat').title('Stats')),
            S.listItem()
              .title('Team Members')
              .schemaType('teamMember')
              .child(S.documentTypeList('teamMember').title('Team')),
            S.listItem()
              .title('Church Partners')
              .schemaType('churchPartner')
              .child(S.documentTypeList('churchPartner').title('Partners')),
          ]),
    }),
    // visionTool available after: pnpm add @sanity/vision
  ],

  schema: {
    types: schemaTypes,
  },
})