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

          {/* PC端装饰元素 - 基于logo风格 */}
          <div className="absolute right-0 top-0 h-full w-1/3 overflow-hidden">
            {/* 主装饰元素 - 模仿logo的层叠设计 */}
            <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
              <div className="relative">
                {/* 大块绿色渐变层 - 类似logo中的主形状 */}
                <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-[#00e599] to-[#00af92] rotate-6 shadow-lg"></div>
                {/* 小块深绿色层 - 类似logo中的第二层 */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-lg bg-gradient-to-br from-[#00af92] to-[#007a6e] -rotate-6 shadow-lg"></div>
                {/* 装饰小点 - 增强细节 */}
                <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-[#00e599] shadow"></div>
              </div>
            </div>
            
            {/* 背景光晕 - 使用logo中的绿色 */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-[#00e599] opacity-10 blur-[80px]"></div>
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
            
            {/* 移动端简化装饰元素 */}
            <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="relative">
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[#00e599] to-[#00af92] rotate-3 shadow"></div>
                  <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-lg bg-gradient-to-br from-[#00af92] to-[#007a6e] -rotate-3 shadow"></div>
                </div>
              </div>
              <div className="absolute -right-10 top-1/4 w-40 h-40 rounded-full bg-[#00e599] opacity-10 blur-[60px]"></div>
            </div>
          </div>
          
          <Link 
            href="https://status.neotec.uk/" 
            target="_blank"
            className={`
              block w-full
              bg-gradient-to-r from-[#00e599] to-[#00af92]
              hover:from-[#00d18c] hover:to-[#009a80]
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