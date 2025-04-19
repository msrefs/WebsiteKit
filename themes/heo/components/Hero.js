import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='w-full select-none mb-4'>
      {/* PC端保持不变 */}
      <div className='max-w-[86rem] w-full mx-auto px-5 font-bold'>
        {/* ... PC端内容保持不变 ... */}
      </div>

      {/* 移动端 - 调整高度 */}
      <div className='md:hidden w-full px-5'>
        <div className='relative'>
          {/* 主卡片 - 高度调整为 h-48 (192px) */}
          <div className={`
            w-full h-48 overflow-hidden  /* 原h-64改为h-48 */
            bg-white dark:bg-[#1e1e1e]
            border dark:border-gray-700
            transition-colors duration-200
            rounded-t-xl border-b-0
          `}>
            <div className='z-10 flex flex-col absolute top-6 left-6 right-6'>
              <div className='text-2xl font-bold mb-1 dark:text-white transition-colors duration-200'>
                {siteConfig('HEO_HERO_TITLE_1', null, CONFIG)}
              </div>
              <div className='text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200'>
                {siteConfig('HEO_HERO_TITLE_3', null, CONFIG)}
              </div>
            </div>
          </div>
          
          {/* 按钮保持不变 */}
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