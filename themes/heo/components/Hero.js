import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='w-full select-none mb-4'>
      {/* PC端 - 修复文字显示 */}
      <div className='max-w-[86rem] w-full mx-auto px-5 font-bold'>
        <div 
          id='hero-pc'
          className={`
            animate__animated animate__fadeIn animate__fast
            rounded-[12px] w-full hidden md:block h-64 
            bg-white dark:bg-[#1e1e1e] 
            border dark:border-gray-700 
            relative overflow-hidden mb-4
            transition-colors duration-200
          `}>
          {/* 修复：确保PC端文字内容存在 */}
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
        </div>
      </div>

      {/* 移动端 - 修复圆角问题 */}
      <div className='md:hidden w-full px-5'>
        <div className='relative'>
          {/* 主卡片 - 移除底部圆角 */}
          <div className={`
            w-full h-64 overflow-hidden 
            bg-white dark:bg-[#1e1e1e]
            border dark:border-gray-700
            transition-colors duration-200
            rounded-t-xl border-b-0  /* 移除底部边框和圆角 */
          `}>
            {/* 移动端内容 */}
            <div className='z-10 flex flex-col absolute top-6 left-6 right-6'>
              <div className='text-2xl font-bold mb-1 dark:text-white transition-colors duration-200'>
                {siteConfig('HEO_HERO_TITLE_1', null, CONFIG)}
              </div>
              <div className='text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200'>
                {siteConfig('HEO_HERO_TITLE_3', null, CONFIG)}
              </div>
            </div>
          </div>
          
          {/* 按钮 - 完美衔接 */}
          <Link 
            href="https://status.neotec.uk/" 
            target="_blank"
            className={`
              block w-full
              bg-green-400 hover:bg-green-500
              text-white font-bold
              py-3 px-6 rounded-b-xl
              text-left
              transition-colors duration-200
              shadow-md
              border-t-0  /* 移除顶部边框 */
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