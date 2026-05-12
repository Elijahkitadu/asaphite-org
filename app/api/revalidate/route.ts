import { type NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

// Map Sanity document types to cache tags
const TYPE_TAG_MAP: Record<string, string[]> = {
  story:         ['story'],
  campaign:      ['campaign'],
  blogPost:      ['blogPost'],
  impactStat:    ['impactStat'],
  teamMember:    ['teamMember'],
  churchPartner: ['churchPartner'],
}

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  // Validate secret
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const { _type, slug } = body

    if (!_type) {
      return NextResponse.json({ message: 'Missing _type' }, { status: 400 })
    }

    // Revalidate the type-level tag
    const tags = TYPE_TAG_MAP[_type] ?? [_type]
    for (const tag of tags) {
      revalidateTag(tag)
    }

    // Also revalidate the slug-specific tag if present
    if (slug?.current) {
      revalidateTag(`${_type}-${slug.current}`)
    }

    return NextResponse.json({
      revalidated: true,
      tags,
      slug: slug?.current ?? null,
    })
  } catch (err) {
    return NextResponse.json(
      { message: 'Error revalidating', error: String(err) },
      { status: 500 }
    )
  }
}
