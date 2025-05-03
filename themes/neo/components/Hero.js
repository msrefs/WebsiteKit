import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const heroRef = useRef(null)

  useEffect(() => {
    // 确保Hero区域不会与Header重叠
    const adjustHeroPosition = () => {
      if (heroRef.current) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0
        heroRef.current.style.marginTop = `${headerHeight}px`
      }
    }

    adjustHeroPosition()
    window.addEventListener('resize', adjustHeroPosition)
    return () => window.removeEventListener('resize', adjustHeroPosition)
  }, [])

  return (
    <div className='w-full select-none' ref={heroRef}>
      {/* PC端版本 */}
      <div className='max-w-[86rem] w-full mx-auto px-5'>
        <div className={`
          rounded-3xl w-full hidden md:block h-80
          bg-gradient-to-br from-white to-gray-50 dark:from-[#1a1a1a] dark:to-[#2a2a2a]
          border border-gray-200 dark:border-gray-700
          relative overflow-hidden mb-6
          shadow-lg hover:shadow-xl transition-shadow duration-300
        `}>
          {/* 平滑的背景光晕 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-1/4 -top-1/4 w-[150%] h-[150%] 
              bg-gradient-to-r from-transparent via-[#00e599]/10 to-[#00e599]/20 
              blur-[120px] opacity-0 animate-[fadeIn_1.2s_ease-out_0.3s_forwards]">
            </div>
          </div>

          {/* 内容遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent 
            dark:from-[#1a1a1a]/80 dark:via-[#1a1a1a]/20 pointer-events-none">
          </div>

          {/* 内容区域 - 平滑动画 */}
          <div className='z-20 flex flex-col absolute top-12 left-12 max-w-lg 
            opacity-0 animate-[slideUp_1s_ease-out_0.2s_forwards]'>
            <h1 className='text-5xl font-extrabold mb-4 bg-clip-text text-transparent 
              bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300'>
              {siteConfig('HEO_HERO_TITLE_1', null, CONFIG)}
              <br />
              <span className='text-4xl'>{siteConfig('HEO_HERO_TITLE_2', null, CONFIG)}</span>
            </h1>
            <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed'>
              {siteConfig('HEO_HERO_TITLE_3', null, CONFIG)}
            </p>
          </div>

          {/* 装饰元素 - 平滑缩放 */}
          <div className="absolute right-12 top-1/2 transform -translate-y-1/2 z-10 
            opacity-0 animate-[scaleIn_1s_cubic-bezier(0.175,0.885,0.32,1.275)_0.4s_forwards]">
            <div className="relative">
              <div className="w-36 h-36 rounded-xl bg-gradient-to-br from-[#00e599] to-[#00af92] 
                rotate-6 shadow-2xl"></div>
              <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-xl 
                bg-gradient-to-br from-[#00af92] to-[#007a6e] -rotate-6 shadow-xl"></div>
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#00e599] 
                shadow-md animate-[pulse_2s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 移动端版本 */}
      <div className='md:hidden w-full px-4'>
        <div className={`
          w-full h-56 overflow-hidden
          bg-gradient-to-br from-white to-gray-50 dark:from-[#1a1a1a] dark:to-[#2a2a2a]
          border border-gray-200 dark:border-gray-700
          rounded-3xl
          relative
          shadow-md hover:shadow-lg transition-shadow duration-300
          opacity-0 animate-[fadeInUp_1s_ease-out_0.2s_forwards]
        `}>
          {/* 增强的光晕效果 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-1/4 -top-1/4 w-[150%] h-[150%] 
              bg-gradient-to-r from-transparent via-[#00e599]/15 to-[#00e599]/25 
              blur-[80px] opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/30 to-transparent 
            dark:from-[#1a1a1a]/80 dark:via-[#1a1a1a]/30 pointer-events-none">
          </div>

          <div className='z-20 flex flex-col absolute top-8 left-6 right-6'>
            <h1 className='text-4xl font-extrabold mb-2 bg-clip-text text-transparent 
              bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300'>
              {siteConfig('HEO_HERO_TITLE_1', null, CONFIG)}
            </h1>
            <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed'>
              {siteConfig('HEO_HERO_TITLE_3', null, CONFIG)}
            </p>
          </div>
          
          {/* 移动端装饰元素 */}
          <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 
            opacity-0 animate-[scaleIn_0.8s_cubic-bezier(0.175,0.885,0.32,1.275)_0.4s_forwards]">
            <div className="relative">
              <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-[#00e599] to-[#00af92] 
                rotate-3 shadow-xl"></div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-lg 
                bg-gradient-to-br from-[#00af92] to-[#007a6e] -rotate-3 shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero