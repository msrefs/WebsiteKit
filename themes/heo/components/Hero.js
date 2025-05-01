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

          {/* PC端装饰元素 */}
          <div className="absolute right-0 top-0 h-full w-1/3 overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-20 dark:opacity-10"></div>
            <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
              <div className="flex flex-col space-y-4">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 rotate-12 shadow-lg dark:from-blue-600 dark:to-indigo-700"></div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 -rotate-12 shadow-lg dark:from-purple-600 dark:to-pink-600"></div>
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-400 to-teal-500 rotate-6 shadow-lg dark:from-green-500 dark:to-teal-600"></div>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-20 dark:opacity-10"></div>
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
              <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-15 dark:opacity-10"></div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <div className="flex space-x-2">
                  <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-indigo-600 rotate-12 shadow dark:from-blue-600 dark:to-indigo-700"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 -rotate-12 shadow dark:from-purple-600 dark:to-pink-600"></div>
                </div>
              </div>
              <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-15 dark:opacity-10"></div>
            </div>
          </div>
          
          <Link 
            href="https://status.neotec.uk/" 
            target="_blank"
            className={`
              block w-full
              bg-green-400 hover:bg-green-500
              text-white font-bold
              py-3 px-6 rounded-b-[24px]
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