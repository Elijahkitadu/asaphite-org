'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Search, Clock, ArrowRight, Calendar } from 'lucide-react'
import CategoryBadge from '@/components/shared/CategoryBadge'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { UNSPLASH_IMAGES } from '@/lib/constants'
import { formatDateShort, truncate } from '@/lib/utils'
import { cn } from '@/lib/utils'

const BLOG_CATS = [
  { id: 'all',          label: 'All Posts'     },
  { id: 'stories',      label: 'Stories'       },
  { id: 'news',         label: 'News'          },
  { id: 'impact',       label: 'Impact'        },
  { id: 'partnerships', label: 'Partnerships'  },
  { id: 'advocacy',     label: 'Advocacy'      },
]

const POSTS = [
  {
    id: 'why-storytelling-changes-aid',
    title: 'Why Storytelling Changes the Calculus of Aid',
    category: 'advocacy',
    excerpt: 'Traditional aid asks "what do communities need?" Storytelling asks "who are these communities?" The difference is everything.',
    content: 'long form content here...',
    image: UNSPLASH_IMAGES.blog1,
    publishedAt: '2024-11-20',
    readTime: 8,
    author: 'Daniel Asaph',
    featured: true,
  },
  {
    id: 'what-we-learned-from-100-documentaries',
    title: 'What We Learned After 100 Documentary Visits',
    category: 'impact',
    excerpt: 'After 47 films and countless field visits, the pattern is always the same: what communities ask for is never what outsiders assume.',
    image: UNSPLASH_IMAGES.community1,
    publishedAt: '2024-10-14',
    readTime: 11,
    author: 'Grace Mwangi',
    featured: false,
  },
  {
    id: 'church-network-africa-2024',
    title: 'How Our Church Network in Africa Doubled in 2024',
    category: 'partnerships',
    excerpt: 'We set a goal of 150 partner churches. We ended the year with 230. Here is what changed — and what we learned.',
    image: UNSPLASH_IMAGES.church1,
    publishedAt: '2024-09-30',
    readTime: 6,
    author: 'James Okonkwo',
    featured: false,
  },
  {
    id: 'water-crisis-numbers',
    title: 'The Water Crisis in Numbers Nobody Talks About',
    category: 'advocacy',
    excerpt: '2 billion people lack safe water. But the number that haunts us is 3.5 hours — the average daily walk to collect it.',
    image: UNSPLASH_IMAGES.water1,
    publishedAt: '2024-09-05',
    readTime: 7,
    author: 'Amara Diallo',
    featured: false,
  },
  {
    id: 'nakuru-project-update',
    title: 'Nakuru Water Project: Six Months Later',
    category: 'impact',
    excerpt: 'The borehole is running. The school attendance is up 40%. The women no longer walk. This is what a story built.',
    image: UNSPLASH_IMAGES.water2,
    publishedAt: '2024-08-18',
    readTime: 5,
    author: 'Grace Mwangi',
    featured: false,
  },
  {
    id: 'how-to-screen-a-documentary',
    title: 'How to Host a Documentary Screening at Your Church',
    category: 'stories',
    excerpt: 'A step-by-step guide for church leaders who want to use film to move their congregation to action.',
    image: UNSPLASH_IMAGES.community2,
    publishedAt: '2024-07-22',
    readTime: 9,
    author: 'Daniel Asaph',
    featured: false,
  },
  {
    id: 'year-in-review-2023',
    title: '2023 Year in Review: Stories That Changed Everything',
    category: 'news',
    excerpt: 'Communities reached: 98. Documentaries released: 12. Lives changed: 60,000+. Here is the full story.',
    image: UNSPLASH_IMAGES.blog3,
    publishedAt: '2024-01-08',
    readTime: 14,
    author: 'Daniel Asaph',
    featured: false,
  },
]

function FeaturedPost({ post }: { post: typeof POSTS[0] }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="group grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl
                 bg-white border border-gray-100 overflow-hidden shadow-card
                 hover:shadow-card-hover transition-all duration-400"
    >
      <Link href={`/blog/${post.id}`} className="relative aspect-video lg:aspect-auto overflow-hidden block">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-800/20" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-full bg-gold-400 text-navy-800
                           text-xs font-bold font-heading">Featured</span>
          <CategoryBadge category={post.category} />
        </div>
      </Link>

      <div className="flex flex-col gap-4 p-7 sm:p-9 justify-center">
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1"><Calendar size={11} /> {formatDateShort(post.publishedAt)}</span>
          <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime} min read</span>
        </div>
        <Link href={`/blog/${post.id}`}>
          <h2 className="font-heading font-bold text-navy-800 text-2xl sm:text-3xl
                         leading-tight hover:text-gold-400 transition-colors">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-500 leading-relaxed">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-sm text-navy-800 font-medium">By {post.author}</span>
          <Link
            href={`/blog/${post.id}`}
            className="flex items-center gap-2 text-gold-400 text-sm font-semibold
                       font-heading hover:gap-3 transition-all duration-200"
          >
            Read Article <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

function PostCard({ post }: { post: typeof POSTS[0] }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="group flex flex-col rounded-2xl bg-white border border-gray-100
                 overflow-hidden shadow-card hover:shadow-card-hover
                 hover:-translate-y-1.5 transition-all duration-400"
    >
      <Link href={`/blog/${post.id}`} className="relative aspect-[16/9] overflow-hidden block">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-600"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-card-overlay" />
        <div className="absolute top-3 left-3">
          <CategoryBadge category={post.category} />
        </div>
      </Link>
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center gap-3 text-xs text-gray-400">
          <span className="flex items-center gap-1"><Calendar size={10} /> {formatDateShort(post.publishedAt)}</span>
          <span className="flex items-center gap-1"><Clock size={10} /> {post.readTime} min</span>
        </div>
        <Link href={`/blog/${post.id}`}>
          <h3 className="font-heading font-semibold text-navy-800 text-base leading-snug
                         hover:text-gold-400 transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">
          {truncate(post.excerpt, 110)}
        </p>
        <div className="flex items-center justify-between pt-2 mt-auto">
          <span className="text-xs text-gray-400">{post.author}</span>
          <Link
            href={`/blog/${post.id}`}
            className="flex items-center gap-1.5 text-gold-400 text-xs font-semibold
                       font-heading hover:gap-2.5 transition-all duration-200"
          >
            Read <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default function BlogGrid() {
  const [category, setCategory] = useState('all')
  const [search,   setSearch]   = useState('')

  const filtered = POSTS.filter(p => {
    const matchCat    = category === 'all' || p.category === category
    const matchSearch = search === '' ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const featured    = filtered.find(p => p.featured)
  const nonFeatured = filtered.filter(p => !p.featured || category !== 'all' || search !== '')

  return (
    <section className="section-py bg-background" aria-label="Blog posts">
      <div className="container-site">
        <div className="flex flex-col gap-10">

          {/* Search + filter bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Search */}
            <div className="relative w-full sm:w-72">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search articles…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border-2 border-gray-200
                           text-sm text-navy-800 placeholder:text-gray-400
                           focus:outline-none focus:border-gold-400 transition-colors"
                aria-label="Search blog posts"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {BLOG_CATS.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  aria-pressed={category === cat.id}
                  className={cn(
                    'px-4 py-2 rounded-full text-xs font-semibold font-heading border transition-all',
                    category === cat.id
                      ? 'bg-navy-800 text-white border-navy-800'
                      : 'bg-white text-gray-500 border-gray-200 hover:border-navy-800 hover:text-navy-800'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Featured post */}
          {featured && category === 'all' && search === '' && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <FeaturedPost post={featured} />
            </motion.div>
          )}

          {/* Grid */}
          {nonFeatured.length > 0 ? (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              aria-live="polite"
            >
              {nonFeatured.map(post => <PostCard key={post.id} post={post} />)}
            </motion.div>
          ) : (
            <div className="text-center py-20 text-gray-400">
              <p className="font-heading text-lg">No posts found.</p>
              <button
                onClick={() => { setCategory('all'); setSearch('') }}
                className="mt-3 text-gold-400 text-sm font-semibold underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
