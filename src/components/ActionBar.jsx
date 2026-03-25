'use client'
import { MoveLeft, MoveRight } from 'lucide-react'
import React from 'react'
import { useRouter } from 'next/navigation'

const ActionBar = ({ backDisable, nextDisable, nextConfig }) => {
  const router = useRouter();

  const { name, handleClick } = nextConfig;

  const handleGoBack = () => {
    if (backDisable) return;
    router.back();
  }

  const handleGoforward = () => {
    handleClick();
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-t border-stone-100 shadow-[0_-4px_24px_rgba(0,0,0,0.06)] px-4 py-3 md:px-8">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">

        <button
          onClick={handleGoBack}
          disabled={backDisable}
          className="flex items-center gap-2 text-sm font-semibold text-stone-500 hover:text-emerald-700 disabled:opacity-30 disabled:cursor-not-allowed bg-white border border-stone-200 hover:border-emerald-300 hover:bg-emerald-50 px-5 py-2.5 rounded-xl transition-all duration-150 active:scale-95"
        >
          <MoveLeft size={16} />
          Back
        </button>


        <button
          onClick={handleGoforward}
          disabled={nextDisable}
          className="flex items-center gap-2 text-sm font-semibold text-white bg-stone-900 hover:bg-emerald-700 border border-stone-900 hover:border-emerald-700 px-5 py-2.5 rounded-xl shadow-md shadow-stone-900/10 hover:shadow-emerald-700/20 transition-all duration-150 active:scale-95 disabled:bg-stone-200 disabled:text-stone-400 disabled:cursor-not-allowed"
        >
          {name}
          <MoveRight size={16} />
        </button>

      </div>
    </div>
  )
}

export default ActionBar