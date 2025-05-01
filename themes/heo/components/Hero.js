import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='w-full select-none mb-4'>
      {/* PC端 */}
      <div className='max-w-[86rem] w-full mx-auto px-5 font-bold'>
        <div 
          className={`
            animate__animated animate__fadeIn animate__fast
            rounded-[24px] w-full hidden md:block h-64 
            bg-white dark:bg-[#1e1e1e] 
            border dark:border-gray-700 
            relative overflow-hidden mb-4
            transition-colors duration-200
          `}>
          <div className='z-10 flex flex-col absolute top-10 left-10'>
            <div className='text-4xl font-bold mb-3 dark:text-white transition-colors duration-200'>
              {siteConfig('HEO_HERO_TITLE_1', null, CONFIG)}
              <br />
              {siteConfig('HEO_HERO_TITLE_2', null, CONFIG)}
            </div>
            <div className='text-xs text-gray-600 dark:text-gray-200 transition-colors duration-200'>
              {siteConfig('HEO_HERO_TITLE_3', null, CONFIG)}
            </div>
          </div>

          {/* PC端装饰元素 - 新设计 */}
          <div className="absolute right-0 top-0 h-full w-1/3 overflow-hidden">
            {/* 背景光晕 */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-64 h-64 rounded-full bg-[#4ade80] opacity-10 blur-[80px]"></div>
            
            {/* 主装饰元素 */}
            <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
              <div className="relative">
                {/* 大圆环 */}
                <div className="w-32 h-32 rounded-full border-[12px] border-[#4ade80]/30 animate-spin-slow"></div>
                {/* 内圆 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-[#4ade80] to-[#22c55e] shadow-lg"></div>
                {/* 浮动小圆点 */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#22c55e] animate-float"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-[#4ade80] animate-float-delay"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 移动端 */}
      <div className='md:hidden w-full px-5'>
        <div className='relative'>
          <div className={`
            w-full h-48 overflow-hidden
            bg-white dark:bg-[#1e1e1e]
            border dark:border-gray-700
            transition-colors duration-200
            rounded-t-[24px] border-b-0
            relative
          `}>
            <div className='z-10 flex flex-col absolute top-6 left-6 right-6'>
              <div className='text-4xl font-bold mb-1 dark:text-white transition-colors duration-200'>
                {siteConfig('HEO_HERO_TITLE_1', null, CONFIG)}
              </div>
              <div className='text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200'>
                {siteConfig('HEO_HERO_TITLE_3', null, CONFIG)}
              </div>
            </div>
            
            {/* 移动端简化装饰元素 - 新设计 */}
            <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-40 h-40 rounded-full bg-[#4ade80] opacity-10 blur-[60px]"></div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-8 border-[#4ade80]/20 animate-spin-slow"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#4ade80] to-[#22c55e] shadow"></div>
                </div>
              </div>
            </div>
          </div>
          
          <Link 
            href="https://status.neotec.uk/" 
            target="_blank"
            className={`
              block w-full
              bg-gradient-to-r from-[#4ade80] to-[#22c55e]
              hover:from-[#3ad076] hover:to-[#1fb955]
              text-white font-bold
              py-3 px-6 rounded-b-[24px]
              text-left
              transition-all duration-200
              shadow-md
              border-t-0
            `}
          >
            查看服务状态
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero