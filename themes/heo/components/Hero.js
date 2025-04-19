import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='w-full select-none mb-4'>
      {/* PC端 - 保持不变 */}
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
          {/* PC端内容保持不变 */}
        </div>
      </div>

      {/* 移动端 - 添加底部按钮 */}
      <div className='md:hidden w-full px-5 relative'>
        <div className={`
          w-full h-64 rounded-t-xl overflow-hidden 
          relative bg-white dark:bg-[#1e1e1e]
          border dark:border-gray-700
          transition-colors duration-200
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
        
        {/* 新增的绿色按钮 */}
        <Link 
          href="https://status.neotec.uk/" 
          target="_blank"
          className={`
            absolute bottom-0 left-5 right-5
            bg-green-400 hover:bg-green-500
            text-white font-bold
            py-3 px-4 rounded-b-xl
            text-center
            transition-colors duration-200
            shadow-md
          `}
        >
          查看服务状态
        </Link>
      </div>
    </div>
  )
}

export default Hero