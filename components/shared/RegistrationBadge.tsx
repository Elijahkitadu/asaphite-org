'use client'

import { ShieldCheck } from 'lucide-react'

export default function RegistrationBadge() {
  return (
    <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl bg-hope-500/10 border border-hope-500/25">
      <div className="flex items-center justify-center w-9 h-9 rounded-full bg-hope-500/15 shrink-0">
        <ShieldCheck size={18} className="text-hope-400" />
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-xs font-bold text-hope-400 uppercase tracking-wider font-heading">
          Officially Registered NGO
        </span>
        <span className="text-white/60 text-xs font-mono">
          Reg. No. 00NGO/R/10116 · Tanzania
        </span>
      </div>
    </div>
  )
}