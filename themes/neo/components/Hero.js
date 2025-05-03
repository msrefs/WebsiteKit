import { siteConfig } from '@/lib/config'
import CONFIG from '../config'

const Hero = () => {
  return (
    <div className='w-full select-none mb-8'>
      {/* 桌面端版本 */}
      <div className='max-w-[86rem] w-full mx-auto px-5'>
        <div className={`
          rounded-3xl w-full hidden md:block h-80
          bg-gradient-to-br from-white to-gray-50 dark:from-[#1a1a1a] dark:to-[#2a2a2a]
          border border-gray-200 dark:border-gray-700
          relative overflow-hidden mb-6
          shadow-lg hover:shadow-xl transition-shadow duration-300
        `}>
          {/* 内容区域 - 添加渐变遮罩使过渡更自然 */}
          <div className='z-20 flex flex-col absolute top-12 left-12 max-w-lg animate-slide-up'>
            <div className='relative'>
              <div className='absolute -right-20 -top-10 -bottom-10 w-40 bg-gradient-to-r from-white/80 to-transparent dark:from-[#1a1a1a]/80 pointer-events-none'></div>
              <h1 className='text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 relative'>
                {siteConfig('HEO_HERO_TITLE_1', null, CONFIG)}
                <br />
                <span className='text-4xl'>{siteConfig('HEO_HERO_TITLE_2', null, CONFIG)}</span>
              </h1>
              <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed relative'>
                {siteConfig('HEO_HERO_TITLE_3', null, CONFIG)}
              </p>
            </div>
          </div>

          {/* 桌面端装饰元素 - 扩大光晕范围 */}
          <div className="absolute right-0 top-0 h-full w-2/5 overflow-hidden">
            <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
              <div className="relative animate-scale-in" style={{ animationDelay: '0.3s' }}>
                <div className="w-36 h-36 rounded-xl bg-gradient-to-br from-[#00e599] to-[#00af92] rotate-6 shadow-2xl"></div>
                <div className="absolute -bottom-5 -right-5 w-24 h-24 rounded-xl bg-gradient-to-br from-[#00af92] to-[#007a6e] -rotate-6 shadow-xl"></div>
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#00e599] shadow-md animate-pulse"></div>
              </div>
            </div>
            {/* 扩大光晕并降低对比度 */}
            <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-gradient-to-br from-[#00e599] to-[#00af92] opacity-[8%] blur-[100px] animate-fade-in" 
                 style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>

      {/* 移动端版本 - 同样优化过渡效果 */}
      <div className='md:hidden w-full px-4'>
        <div className={`
          w-full h-56 overflow-hidden
          bg-gradient-to-br from-white to-gray-50 dark:from-[#1a1a1a] dark:to-[#2a2a2a]
          border border-gray-200 dark:border-gray-700
          rounded-3xl
          relative
          shadow-md hover:shadow-lg transition-shadow duration-300
          animate-fade-in-up
        `}>
          <div className='z-20 flex flex-col absolute top-8 left-6 right-6'>
            <div className='relative'>
              <div className='absolute -right-16 -top-6 -bottom-6 w-32 bg-gradient-to-r from-white/80 to-transparent dark:from-[#1a1a1a]/80 pointer-events-none'></div>
              <h1 className='text-4xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 relative'>
                {siteConfig('HEO_HERO_TITLE_1', null, CONFIG)}
              </h1>
              <p className='text-sm text-gray-500 dark:text-gray-400 leading-relaxed relative'>
                {siteConfig('HEO_HERO_TITLE_3', null, CONFIG)}
              </p>
            </div>
          </div>
          
          {/* 移动端装饰元素 */}
          <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
              <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-[#00e599] to-[#00af92] rotate-3 shadow-xl"></div>
                <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-lg bg-gradient-to-br from-[#00af92] to-[#007a6e] -rotate-3 shadow-lg"></div>
              </div>
            </div>
            {/* 移动端光晕优化 */}
            <div className="absolute -right-16 top-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-[#00e599] to-[#00af92] opacity-[8%] blur-[70px] animate-fade-in" 
                 style={{ animationDelay: '0.3s' }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero