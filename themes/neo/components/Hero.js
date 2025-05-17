import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='w-full select-none mb-8 relative z-0'>
      {/* PC端版本 - 保持不变 */}
      <div className='max-w-[86rem] w-full mx-auto px-5'>
        <div className={`
          rounded-3xl w-full hidden md:block h-80
          bg-gradient-to-br from-white to-gray-50 dark:from-[#1a1a1a] dark:to-[#2a2a2a]
          border border-gray-200 dark:border-gray-700
          relative overflow-hidden mb-6
          shadow-lg hover:shadow-xl transition-shadow duration-300
          wow fadeInUp
        `} data-wow-delay="0.1s">
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent dark:from-[#1a1a1a]/80 dark:via-[#1a1a1a]/20 pointer-events-none"></div>

          <div className='z-20 flex flex-col absolute top-12 left-12 max-w-lg'>
            <h1 className='text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300'>
              {siteConfig('HEO_HERO_TITLE_1', null, CONFIG)}
              <br />
              <span className='text-3xl'>{siteConfig('HEO_HERO_TITLE_2', null, CONFIG)}</span>
            </h1>
            <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed'>
              {siteConfig('HEO_HERO_TITLE_3', null, CONFIG)}
            </p>
          </div>

          <div className="absolute right-12 top-1/2 transform -translate-y-1/2 z-10">
            <div className="relative">
              <div className="w-36 h-36 rounded-xl bg-gradient-to-br from-[#00e599] to-[#00af92] rotate-6 shadow-2xl"></div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-xl bg-gradient-to-br from-[#00af92] to-[#007a6e] -rotate-6 shadow-xl"></div>
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#00e599] shadow-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 移动端版本 - 更新版 */}
      <div className='md:hidden w-full px-5'>
        <div className={`
          w-full h-64 overflow-hidden
          bg-[#FFFFFF] dark:bg-[#1e1e1e]
          border border-gray-200 dark:border-gray-700
          rounded-3xl
          relative
          shadow-md hover:shadow-lg transition-shadow duration-300
          wow fadeInUp
        `} data-wow-delay="0.1s">
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent dark:from-[#1a1a1a]/80 dark:via-[#1a1a1a]/20 pointer-events-none"></div>

          <div className='z-20 flex flex-col absolute top-8 left-6 right-6'>
            <h1 className='text-4xl font-extrabold mb-3 text-gray-800 dark:text-gray-100'>
              {siteConfig('HEO_HERO_TITLE_1', null, CONFIG)}
            </h1>

            {/* 简约装饰线 */}
            <div className="w-12 h-1 bg-gradient-to-r from-[#00e599] to-[#00af92] mb-4 rounded-full"></div>

            <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4'>
              {siteConfig('HEO_HERO_TITLE_3', null, CONFIG)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero