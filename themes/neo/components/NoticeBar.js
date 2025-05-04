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
    <div className='max-w-[86rem] w-full mx-auto flex h-12 mb-4 px-5 md:px-5 font-bold'>
      <div className='
        animate__animated animate__fadeIn animate__fast 
        group cursor-pointer 
        bg-white dark:bg-[#1e1e1e] 
        border border-gray-200 dark:border-gray-700
        hover:shadow-lg transition-shadow duration-300
        rounded-[24px] w-full h-full flex items-center justify-between px-5
        shadow-md
      '>
        <span className='whitespace-nowrap text-gray-800 dark:text-gray-200'>{locale.COMMON.NOW}</span>
        <div className='w-full h-full flex justify-center items-center text-gray-700 dark:text-gray-300'>
          <Swipe items={notices} />
        </div>
        <div className='text-gray-600 dark:text-gray-400'>
          <ArrowRightCircle className='w-5 h-5' />
        </div>
      </div>
    </div>
  )
}