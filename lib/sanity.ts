import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type { SanityImage } from '@/types'

export const sanityClient = createClient({
  projectId:  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'placeholder',
  dataset:    process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01',
  useCdn:     process.env.NODE_ENV === 'production',
  token:      process.env.SANITY_API_READ_TOKEN,
})

const builder = imageUrlBuilder(sanityClient)
export function urlFor(source: SanityImage) { return builder.image(source) }
export function urlForImage(source: SanityImage, width = 800): string {
  return builder.image(source).width(width).auto('format').quality(80).url()
}
