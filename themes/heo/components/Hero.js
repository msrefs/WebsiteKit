import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

const Hero = () => {
  return (
    <div id='hero-wrapper' className='w-full select-none mb-4 px-5 lg:px-20'>
      {/* PC端 - 简化后的banner */}
      <div 
        id='hero-pc'
        className='recent-post-top rounded-[12px] w-full hidden md:block h-64 bg-white dark:bg-[#1e1e1e] border dark:border-gray-700 relative overflow-hidden'>
        <div className='z-10 flex flex-col absolute top-10 left-10'>
          <div className='text-4xl font-bold mb-3 dark:text-white'>
            {siteConfig('HEO_HERO_TITLE_1', null, CONFIG)}
            <br />
            {siteConfig('HEO_HERO_TITLE_2', null, CONFIG)}
          </div>
          <div className='text-xs text-gray-600 dark:text-gray-200'>
            {siteConfig('HEO_HERO_TITLE_3', null, CONFIG)}
          </div>
        </div>
      </div>

      {/* 移动端 - 简化后的banner */}
      <div className='md:hidden w-full'>
        <div className="w-full h-64 rounded-xl overflow-hidden relative bg-white dark:bg-[#1e1e1e] border dark:border-gray-700">
          <div className='z-10 flex flex-col absolute top-6 left-6 right-6'>
            <div className='text-2xl font-bold mb-1 dark:text-white'>
              {siteConfig('HEO_HERO_TITLE_1', null, CONFIG)}
            </div>
            <div className='text-sm text-gray-600 dark:text-gray-300'>
              {siteConfig('HEO_HERO_TITLE_3', null, CONFIG)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero