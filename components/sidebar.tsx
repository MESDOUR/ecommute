'use client'

import { Map, House, MapIcon, ArrowRight } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import axios from 'axios'

interface HistoryItem {
  id: number;
  prompt: string;
  feedback: string;
  variant: 'success' | 'info' | 'error'
}

const Sidebar = () => {

  const [prompt, setPrompt] = useState('')
  const [history, setHistory] = useState<HistoryItem[]>([])

  const handlePromptSubmit = async () => {

    const original = prompt.trim()
    const response = await axios.post('http://localhost:8000/chat', { 'message': original, 'thread_id': 'ecommute_front_app_user_1' }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log(response.data)

    history.push({
      id: 1,
      prompt: original,
      feedback: response.data.response,
      variant: 'success'
    })

    setHistory(history)
    setPrompt('')

  }

  return (
    <div className='w-full md:w-[400px] h-full border-l  flex flex-col shadow-xl z-10 relative bg-slate-950'>
      {/* Header */}
      <div className='p-6'>
        <div className='flex items-center justify-between gap-3 mb-3'>
          <div className='flex items-center gap-3 min-w-0'>
            <div className='p-2.5 bg-slate-900 text-white rounded-xl shadow-sm shrink-0'>
              <Map className='w-5 h-5 text-primary-50' />
            </div>
            <div className='min-w-0'>
              <h1 className='text-lg font-bold text-slate-9000 leading-tight text-white'>
                eCommute
              </h1>
              <p className='text-xs text-slate-400 truncate'>HQ Paris Relocalisation</p>
            </div>
          </div>
          <button className='p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-200/60 rounded-lg transition-colors shrink-0'>
            <House className='w-5 h-5 text-white' />
          </button>
        </div>
      </div>

      {/* History */}
      <div className='flex-1 overflow-y-auto p-5 space-y-3'>
        {history.length == 0 ?
          <div className='h-full flex flex-col items-center justify-center text-center px-4'>
            <div className='w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-4 border border-white/10'>
              <MapIcon className='w-6 h-6 text-primary-50' />

            </div>

            <h3 className='text-sm font-semibold text-white mb-1'>Commencer à discuter</h3>
          </div> :
          <AnimatePresence
            initial={false}>
            {history.map((item) =>
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 8
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={
                  {
                    opacity: 0
                  }
                }
                transition={{
                  duration: 0.2
                }}
                className='space-y-1.5'
              >
                {/* User prompt*/}
                <div className='flex justify-end'>
                  <div className='max-w-[85%] bg-white/[0.08] border border-white/10 rounded-2xl rounded-br-md px-3.5 py-2 text-xs text-slate-200'>
                    {item.prompt}
                  </div>
                </div>
                <div className='flex justify-start'>
                  <div className='max-w-[85%] rounded-2xl rounded-bl-md px-3.5 py-2 text-xs border bg-primary-100/10 text-primary-100 border-primary-100/20 '>
                    {item.feedback}
                  </div>
                </div>

              </motion.div>
            )

            }
          </AnimatePresence>
        }

      </div>

      {/* Input */}
      <div className='p-5 border-t border-white/10 bg-slate-950'>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handlePromptSubmit()

          }}
          className='relative'>
          <div className='relative bg-white[0.06] border border-white/15 focus-within:border-primary-100/50 focus-within:bg-white/[0.08] focus-within:ring-2 focus-within:ring-primary-100/20 rounded-xl transition-all'>
            <input
              type='text'
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder='message'
              className='w-full bg-transparent px-4 py-3 pr-11 text-sm text-white placeholder-slate-500 focus:outline-none' />
            <button
              type="submit"
              disabled={prompt.trim().length == 0}
              className='absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-primary-100 hover:bg-primary-50 disabled:bg-white/10 disabled:text-slate-600 text-white rounded-lg transition-colors'>
              <ArrowRight className='w-4 h-4' />
            </button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
