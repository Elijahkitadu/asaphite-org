'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Clock, ArrowRight, Calendar } from 'lucide-react'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { UNSPLASH_IMAGES } from '@/lib/constants'
import { formatDateShort, truncate } from '@/lib/utils'

const POSTS = [
  {
    id: 'why-we-started',
    title: 'Why We Started the Asaphites Foundation',
    excerpt: 'It began with a single visit to a village outside Dodoma. We had a camera, a few hours, and no plan. By the time we left, we knew we had to keep going.',
    image: UNSPLASH_IMAGES.blog1,
    publishedAt: '2024-03-10',
    readTime: 5,
    featured: true,
  },
  {
    id: 'first-film-what-we-learned',
    title: 'What We Learned Making Our First Film',
    excerpt: 'Nobody warned us how hard it would be to ask someone to share their suffering on camera. And nobody warned us how willing people would be to do it, if you treat them with respect.',
    image: UNSPLASH_IMAGES.community1,
    publishedAt: '2024-05-22',
    readTime: 7,
    featured: false,
  },
  {
    id: 'storytelling-changes-things',
    title: 'Does Storytelling Actually Change Anything?',
    excerpt: 'We get asked this a lot. The honest answer is: sometimes yes, sometimes no. Here is what we have seen so far — and why we still believe in it.',
    image: UNSPLASH_IMAGES.blog2,
    publishedAt: '2024-07-14',
    readTime: 6,
    featured: false,
  },
  {
    id: 'dodoma-water-update',
    title: 'Field Notes: Dodoma Water Visit',
    excerpt: 'We spent three days in four villages outside Dodoma filming stories about water access. Here is what we found — and what surprised us.',
    image: UNSPLASH_IMAGES.water1,
    publishedAt: '2024-09-03',
    readTime: 8,
    featured: false,
  },
  {
    id: 'church-partners-why',
    title: 'Why We Partner With Churches',
    excerpt: 'Churches know their communities in ways that outsiders never will. That is why they are central to everything we do — not as fundraisers, but as collaborators.',
    image: UNSPLASH_IMAGES.church1,
    publishedAt: '2024-10-18',
    readTime: 5,
    featured: false,
  },
  {
    id: 'end-of-year-2024',
    title: 'Our First Full Year: What We Did in 2024',
    excerpt: 'Six stories. Three church partners. Four communities visited. Fifty-three donors. This is what 2024 looked like for us — the honest version.',
    image: UNSPLASH_IMAGES.blog3,
    publishedAt: '2025-01-06',
    readTime: 9,
    featured: false,
  },
]

function FeaturedPost({ post }: { post: typeof POSTS[0] }) {
  return (
    <motion.article variants={fadeInUp}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400">
      <Link href={`/blog/${post.id}`} className="relative aspect-video lg:aspect-auto overflow-hidden block">
        <Image src={post.image} alt={post.title} fill priority
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width:1024px) 100vw, 50vw" />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-gold-400 text-navy-800 text-xs font-bold font-heading">
            Our Story
          </span>
        </div>
      </Link>
      <div className="flex flex-col gap-4 p-7 sm:p-9 justify-center">
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1"><Calendar size={11} />{formatDateShort(post.publishedAt)}</span>
          <span className="flex items-center gap-1"><Clock size={11} />{post.readTime} min read</span>
        </div>
        <Link href={`/blog/${post.id}`}>
          <h2 className="font-heading font-bold text-navy-800 text-2xl sm:text-3xl leading-tight hover:text-gold-400 transition-colors">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-500 leading-relaxed">{post.excerpt}</p>
        <Link href={`/blog/${post.id}`}
          className="flex items-center gap-2 text-gold-400 text-sm font-semibold font-heading hover:gap-3 transition-all duration-200">
          Read Post <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  )
}

function PostCard({ post }: { post: typeof POSTS[0] }) {
  return (
    <motion.article variants={fadeInUp}
      className="group flex flex-col rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-400">
      <Link href={`/blog/${post.id}`} className="relative aspect-video overflow-hidden block">
        <Image src={post.image} alt={post.title} fill
          className="object-cover group-hover:scale-105 transition-transform duration-600"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
        <div className="absolute inset-0 bg-card-overlay" />
      </Link>
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1"><Calendar size={10} />{formatDateShort(post.publishedAt)}</span>
          <span className="flex items-center gap-1"><Clock size={10} />{post.readTime} min</span>
        </div>
        <Link href={`/blog/${post.id}`}>
          <h3 className="font-heading font-semibold text-navy-800 text-base leading-snug hover:text-gold-400 transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{truncate(post.excerpt, 120)}</p>
        <Link href={`/blog/${post.id}`}
          className="flex items-center gap-1.5 text-gold-400 text-xs font-semibold font-heading hover:gap-2.5 transition-all duration-200 mt-auto">
          Read <ArrowRight size={12} />
        </Link>
      </div>
    </motion.article>
  )
}

export default function BlogGrid() {
  const [search, setSearch] = useState('')

  const filtered = POSTS.filter(p =>
    search === '' ||
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.excerpt.toLowerCase().includes(search.toLowerCase())
  )

  const featured    = search === '' ? filtered.find(p => p.featured) : undefined
  const nonFeatured = filtered.filter(p => !p.featured || search !== '')

  return (
    <section className="section-py bg-background" aria-label="Blog posts">
      <div className="container-site">
        <div className="flex flex-col gap-10">

          {/* Search only — no category filters */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search posts…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border-2 border-gray-200 text-sm text-navy-800 placeholder:text-gray-400 focus:outline-none focus:border-gold-400 transition-colors"
              />
            </div>
          </div>

          {/* Featured post */}
          {featured && (
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}>
              <FeaturedPost post={featured} />
            </motion.div>
          )}

          {/* Grid */}
          {nonFeatured.length > 0 ? (
            <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {nonFeatured.map(post => <PostCard key={post.id} post={post} />)}
            </motion.div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <p className="font-heading text-lg">No posts found.</p>
              <button onClick={() => setSearch('')} className="mt-3 text-gold-400 text-sm font-semibold underline">
                Clear search
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}
