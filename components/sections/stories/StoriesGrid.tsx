'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, ArrowRight, Play } from 'lucide-react'
import CategoryBadge from '@/components/shared/CategoryBadge'
import { staggerContainer, fadeInUp, scaleIn, viewport } from '@/lib/animations'
import { UNSPLASH_IMAGES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const CATEGORIES = [
  { id: 'all',        label: 'All Stories' },
  { id: 'water',      label: 'Water' },
  { id: 'education',  label: 'Education' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'churches',   label: 'Churches' },
  { id: 'youth',      label: 'Youth' },
]

const STORIES = [
  {
    id: 'nakuru-clean-water',
    title: 'A Community Waiting for Clean Water',
    category: 'water',
    location: 'Nakuru, Kenya',
    readTime: 8,
    excerpt: 'Three generations have walked four hours daily for water. This is what happened when we arrived with a camera and a question.',
    image: UNSPLASH_IMAGES.water1,
    featured: true,
    hasVideo: true,
  },
  {
    id: 'classrooms-of-hope',
    title: 'Classrooms of Hope in Rural Uganda',
    category: 'education',
    location: 'Gulu, Uganda',
    readTime: 6,
    excerpt: 'Forty children share twelve desks in a building held up by prayer. Meet the teacher who hasn\'t left in twenty years.',
    image: UNSPLASH_IMAGES.education1,
    featured: false,
    hasVideo: false,
  },
  {
    id: 'healing-without-roads',
    title: 'Healing Without Roads',
    category: 'healthcare',
    location: 'Nimule, South Sudan',
    readTime: 10,
    excerpt: 'The nearest hospital is 200km away. Our mobile clinic covered that distance — and found 340 patients in one day.',
    image: UNSPLASH_IMAGES.healthcare1,
    featured: false,
    hasVideo: true,
  },
  {
    id: 'church-that-feeds-a-village',
    title: 'The Church That Feeds a Village',
    category: 'churches',
    location: 'Kigali, Rwanda',
    readTime: 7,
    excerpt: 'Pastor Emmanuel has fed 200 people every Sunday for eleven years with nothing but faith and a broken roof above him.',
    image: UNSPLASH_IMAGES.church1,
    featured: false,
    hasVideo: false,
  },
  {
    id: 'generation-of-builders',
    title: 'A Generation of Builders',
    category: 'youth',
    location: 'Nairobi, Kenya',
    readTime: 5,
    excerpt: 'Seventeen teenagers from Mathare slum built a community library from scrap metal and discarded wood.',
    image: UNSPLASH_IMAGES.community1,
    featured: false,
    hasVideo: true,
  },
  {
    id: 'water-women',
    title: 'The Women Who Carry the River',
    category: 'water',
    location: 'Turkana, Kenya',
    readTime: 9,
    excerpt: 'In Turkana, it is always the women who walk. This film follows three of them across one brutal, ordinary day.',
    image: UNSPLASH_IMAGES.water2,
    featured: false,
    hasVideo: true,
  },
  {
    id: 'school-under-tree',
    title: 'School Under a Tree',
    category: 'education',
    location: 'Karamoja, Uganda',
    readTime: 6,
    excerpt: 'No classroom. No desks. No shade past 9am. But 34 students show up every single day.',
    image: UNSPLASH_IMAGES.education2,
    featured: false,
    hasVideo: false,
  },
  {
    id: 'the-last-midwife',
    title: 'The Last Midwife',
    category: 'healthcare',
    location: 'Juba, South Sudan',
    readTime: 11,
    excerpt: 'In a region where maternal mortality is among the world\'s highest, one woman has delivered over 4,000 babies with no formal training.',
    image: UNSPLASH_IMAGES.community2,
    featured: false,
    hasVideo: true,
  },
]

function StoryCard({ story, featured = false }: { story: typeof STORIES[0]; featured?: boolean }) {
  if (featured) {
    return (
      <motion.article
        variants={fadeInUp}
        className="group sm:col-span-2 relative rounded-2xl overflow-hidden
                   shadow-card hover:shadow-card-hover transition-all duration-400"
      >
        <Link href={`/stories/${story.id}`} className="block">
          <div className="relative aspect-[16/7] overflow-hidden">
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, 66vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t
                            from-navy-800/95 via-navy-800/40 to-transparent" />

            {/* Featured badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-gold-400 text-navy-800
                               text-xs font-bold font-heading uppercase tracking-wider">
                Featured
              </span>
              <CategoryBadge category={story.category} />
            </div>

            {story.hasVideo && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                              flex items-center justify-center w-16 h-16 rounded-full
                              bg-white/15 border-2 border-white/40 backdrop-blur-sm
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play size={22} className="fill-white text-white ml-1" />
              </div>
            )}

            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-3 text-white/60 text-xs">
                <MapPin size={11} aria-hidden="true" />
                {story.location}
                <span className="ml-2 flex items-center gap-1">
                  <Clock size={11} aria-hidden="true" />
                  {story.readTime} min read
                </span>
              </div>
              <h2 className="font-heading font-bold text-white text-xl sm:text-2xl
                             leading-tight mb-2 group-hover:text-gold-300 transition-colors">
                {story.title}
              </h2>
              <p className="text-white/65 text-sm leading-relaxed max-w-xl">
                {story.excerpt}
              </p>
              <div className="flex items-center gap-2 mt-4 text-gold-400 text-sm font-semibold font-heading">
                Read Story <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </motion.article>
    )
  }

  return (
    <motion.article
      variants={fadeInUp}
      className="group flex flex-col rounded-2xl bg-white border border-gray-100
                 overflow-hidden shadow-card hover:shadow-card-hover
                 hover:-translate-y-1.5 transition-all duration-400"
    >
      <Link href={`/stories/${story.id}`} className="relative aspect-[4/3] overflow-hidden block">
        <Image
          src={story.image}
          alt={story.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-600"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-card-overlay" />
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <CategoryBadge category={story.category} />
        </div>
        {story.hasVideo && (
          <div className="absolute bottom-3 right-3">
            <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full
                            bg-navy-800/70 backdrop-blur-sm text-white text-[10px]
                            font-semibold font-heading border border-white/10">
              <Play size={9} className="fill-white" />
              Video
            </div>
          </div>
        )}
      </Link>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center gap-3 text-gray-400 text-xs">
          <span className="flex items-center gap-1">
            <MapPin size={11} aria-hidden="true" /> {story.location}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} aria-hidden="true" /> {story.readTime} min
          </span>
        </div>
        <Link href={`/stories/${story.id}`}>
          <h3 className="font-heading font-semibold text-navy-800 text-base leading-snug
                         hover:text-gold-400 transition-colors">
            {story.title}
          </h3>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{story.excerpt}</p>
        <Link
          href={`/stories/${story.id}`}
          className="flex items-center gap-2 text-gold-400 text-sm font-semibold
                     font-heading mt-auto hover:gap-3 transition-all duration-200"
        >
          Read More <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  )
}

export default function StoriesGrid() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? STORIES
    : STORIES.filter(s => s.category === activeCategory)

  return (
    <section className="section-py bg-background" aria-label="Stories grid">
      <div className="container-site">
        <div className="flex flex-col gap-10">

          {/* Category filter */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex flex-wrap items-center justify-center gap-2"
            role="group"
            aria-label="Filter stories by category"
          >
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                variants={fadeInUp}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-semibold font-heading',
                  'transition-all duration-200 border',
                  activeCategory === cat.id
                    ? 'bg-navy-800 text-white border-navy-800'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-navy-800 hover:text-navy-800'
                )}
                aria-pressed={activeCategory === cat.id}
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            aria-live="polite"
            aria-label={`Showing ${filtered.length} stories`}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((story, i) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  featured={i === 0 && activeCategory === 'all'}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="font-heading text-lg">No stories in this category yet.</p>
              <p className="text-sm mt-2">Check back soon — we're always in the field.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
