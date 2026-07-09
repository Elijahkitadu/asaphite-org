'use client'

import { useState, useEffect, useRef, useCallback } from 'react'

export function useScrolled(threshold = 80) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > threshold)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [threshold])
  return scrolled
}

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(query)
    setMatches(mq.matches)
    const fn = (e: MediaQueryListEvent) => setMatches(e.matches)
    mq.addEventListener('change', fn)
    return () => mq.removeEventListener('change', fn)
  }, [query])
  return matches
}

export function useMobile() { return useMediaQuery('(max-width: 768px)') }

export function useClickOutside<T extends HTMLElement>(callback: () => void) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const fn = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) callback() }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [callback])
  return ref
}

export function useLockBodyScroll(lock: boolean) {
  useEffect(() => {
    if (!lock) return
    const orig = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = orig }
  }, [lock])
}
