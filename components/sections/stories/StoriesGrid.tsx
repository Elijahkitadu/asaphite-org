'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, ArrowRight, Play } from 'lucide-react'
import CategoryBadge from '@/components/shared/CategoryBadge'
import { staggerContainer, fadeInUp, viewport } from '@/lib/animations'
import { UNSPLASH_IMAGES } from '@/lib/constants'
import { cn } from '@/lib/utils'

const CATEGORIES = [
  { id: 'all',        label: 'All Stories' },
  { id: 'water',      label: 'Water'       },
  { id: 'education',  label: 'Education'   },
  { id: 'healthcare', label: 'Healthcare'  },
  { id: 'churches',   label: 'Churches'    },
  { id: 'community',  label: 'Community'   },
]

const STORIES = [
  {
    id: 'village-walks-for-water',
    title: 'The Village That Walks for Water',
    category: 'water',
    location: 'Dodoma, Tanzania',
    readTime: 5,
    excerpt: 'Every morning before sunrise, families in this village begin a two-hour walk for water that is not even clean. This was our first film.',
    image: UNSPLASH_IMAGES.water1,
    featured: true,
    hasVideo: true,
  },
  {
    id: 'classroom-without-walls',
    title: 'A Classroom Without Walls',
    category: 'education',
    location: 'Dodoma Region, Tanzania',
    readTime: 4,
    excerpt: 'Sixty children, twelve desks, and a teacher who has not been paid in three months. A short film about what learning looks like here.',
    image: UNSPLASH_IMAGES.education1,
    featured: false,
    hasVideo: false,
  },
  {
    id: 'church-that-stays',
    title: 'The Church That Stays',
    category: 'churches',
    location: 'Dar es Salaam, Tanzania',
    readTime: 4,
    excerpt: 'In a neighbourhood most people have given up on, one small church has quietly been feeding, teaching, and sheltering its community for years.',
    image: UNSPLASH_IMAGES.church1,
    featured: false,
    hasVideo: true,
  },
  {
    id: 'mothers-who-wait',
    title: 'Mothers Who Wait',
    category: 'healthcare',
    location: 'Morogoro, Tanzania',
    readTime: 6,
    excerpt: 'The nearest clinic is four hours away. When a baby comes early, you wait and you pray. A film about maternal health in rural Tanzania.',
    image: UNSPLASH_IMAGES.healthcare1,
    featured: false,
    hasVideo: false,
  },
  {
    id: 'young-builders',
    title: 'The Young Builders of Mwanza',
    category: 'community',
    location: 'Mwanza, Tanzania',
    readTime: 5,
    excerpt: 'A group of young people in Mwanza decided not to wait for someone else to fix their neighbourhood. This is what they built.',
    image: UNSPLASH_IMAGES.community1,
    featured: false,
    hasVideo: true,
  },
  {
    id: 'women-of-the-well',
    title: 'Women of the Well',
    category: 'water',
    location: 'Singida, Tanzania',
    readTime: 5,
    excerpt: 'In Singida, it has always been the women who carry the water. This film follows three of them through one ordinary, exhausting day.',
    image: UNSPLASH_IMAGES.water2,
    featured: false,
    hasVideo: true,
  },
]

function StoryCard({ story, featured = false }: { story: typeof STORIES[0]; featured?: boolean }) {
  if (featured) {
    return (
      <motion.article variants={fadeInUp}
        className="group sm:col-span-2 relative rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-400">
        <Link href={`/stories/${story.id}`} className="block">
          <div className="relative aspect-[16/7] overflow-hidden">
            <Image src={story.image} alt={story.title} fill priority
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width:640px) 100vw, 66vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-800/95 via-navy-800/40 to-transparent" />
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-gold-400 text-navy-800 text-xs font-bold font-heading uppercase tracking-wider">Our First Film</span>
              <CategoryBadge category={story.category} />
            </div>
            {story.hasVideo && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-white/15 border-2 border-white/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Play size={20} className="fill-white text-white ml-1" />
              </div>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <div className="flex items-center gap-3 mb-3 text-white/60 text-xs">
                <span className="flex items-center gap-1"><MapPin size={11} />{story.location}</span>
                <span className="flex items-center gap-1"><Clock size={11} />{story.readTime} min read</span>
              </div>
              <h2 className="font-heading font-bold text-white text-xl sm:text-2xl leading-tight mb-2 group-hover:text-gold-300 transition-colors">{story.title}</h2>
              <p className="text-white/65 text-sm leading-relaxed max-w-xl">{story.excerpt}</p>
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
    <motion.article variants={fadeInUp}
      className="group flex flex-col rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-400">
      <Link href={`/stories/${story.id}`} className="relative aspect-[4/3] overflow-hidden block">
        <Image src={story.image} alt={story.title} fill
          className="object-cover group-hover:scale-105 transition-transform duration-600"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
        <div className="absolute inset-0 bg-card-overlay" />
        <div className="absolute top-3 left-3"><CategoryBadge category={story.category} /></div>
        {story.hasVideo && (
          <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-navy-800/70 backdrop-blur-sm text-white text-[10px] font-semibold font-heading border border-white/10">
            <Play size={9} className="fill-white" /> Video
          </div>
        )}
      </Link>
      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center gap-3 text-gray-400 text-xs">
          <span className="flex items-center gap-1"><MapPin size={11} />{story.location}</span>
          <span className="flex items-center gap-1"><Clock size={11} />{story.readTime} min</span>
        </div>
        <Link href={`/stories/${story.id}`}>
          <h3 className="font-heading font-semibold text-navy-800 text-base leading-snug hover:text-gold-400 transition-colors">{story.title}</h3>
        </Link>
        <p className="text-gray-500 text-sm leading-relaxed flex-1">{story.excerpt}</p>
        <Link href={`/stories/${story.id}`} className="flex items-center gap-2 text-gold-400 text-sm font-semibold font-heading mt-auto hover:gap-3 transition-all duration-200">
          Read More <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  )
}

export default function StoriesGrid() {
  const [activeCategory, setActiveCategory] = useState('all')
  const filtered = activeCategory === 'all' ? STORIES : STORIES.filter(s => s.category === activeCategory)

  return (
    <section className="section-py bg-background" aria-label="Stories grid">
      <div className="container-site">
        <div className="flex flex-col gap-10">
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
            className="flex flex-wrap items-center justify-center gap-2" role="group" aria-label="Filter stories">
            {CATEGORIES.map((cat) => (
              <motion.button key={cat.id} variants={fadeInUp} onClick={() => setActiveCategory(cat.id)}
                className={cn('px-4 py-2 rounded-full text-sm font-semibold font-heading transition-all duration-200 border',
                  activeCategory === cat.id
                    ? 'bg-navy-800 text-white border-navy-800'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-navy-800 hover:text-navy-800')}
                aria-pressed={activeCategory === cat.id}>
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-live="polite">
            <AnimatePresence mode="popLayout">
              {filtered.map((story, i) => (
                <StoryCard key={story.id} story={story} featured={i === 0 && activeCategory === 'all'} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <p className="font-heading text-lg">No stories in this category yet.</p>
              <p className="text-sm mt-2">We are working on it — check back soon.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
