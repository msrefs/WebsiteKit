import { ArrowRightCircle } from '@/components/HeroIcons'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import CONFIG from '../config'
import Swipe from './Swipe'

/**
 * 通知横幅
 */
export function NoticeBar() {
  let notices = siteConfig('HEO_NOTICE_BAR', null, CONFIG)
  const { locale } = useGlobal()
  if (typeof notices === 'string') {
    notices = JSON.parse(notices)
  }
  if (!notices || notices?.length === 0) {
    return <></>
  }

  return (
    <div className='max-w-[86rem] w-full mx-auto flex h-12 mb-4 px-5 font-bold'>
      <div className='animate__animated animate__fadeIn animate__fast group cursor-pointer 
        bg-gradient-to-br from-white to-gray-50 dark:from-[#1a1a1a] dark:to-[#2a2a2a]
        border border-gray-200 dark:border-gray-700
        hover:shadow-lg transition-shadow duration-300
        rounded-[24px] w-full h-full flex items-center justify-between px-5 relative overflow-hidden'>
        
        {/* 背景光晕效果 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-1/4 -top-1/4 w-[150%] h-[150%] bg-gradient-to-r from-transparent via-[#00e599]/10 to-[#00e599]/20 blur-[80px]"></div>
        </div>

        {/* 内容遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/20 to-transparent dark:from-[#1a1a1a]/80 dark:via-[#1a1a1a]/20 pointer-events-none"></div>

        <span className='whitespace-nowrap z-10'>{locale.COMMON.NOW}</span>
        <div className='w-full h-full flex justify-center items-center z-10'>
          <Swipe items={notices} />
        </div>
        <div className='z-10'>
          <ArrowRightCircle className={'w-5 h-5'} />
        </div>
      </div>
    </div>
  )
}