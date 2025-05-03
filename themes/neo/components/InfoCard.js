import { ArrowRightCircle } from '@/components/HeroIcons'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import CONFIG from '../config'
import Card from './Card'

export function InfoCard(props) {
  const url1 = siteConfig('HEO_INFO_CARD_URL1', null, CONFIG)
  const icon1 = siteConfig('HEO_INFO_CARD_ICON1', null, CONFIG)
  const url2 = siteConfig('HEO_INFO_CARD_URL2', null, CONFIG)
  const icon2 = siteConfig('HEO_INFO_CARD_ICON2', null, CONFIG)
  const url3 = siteConfig('HEO_INFO_CARD_URL3', null, CONFIG)
  const text3 = siteConfig('HEO_INFO_CARD_TEXT3', null, CONFIG)

  return (
    <Card className='wow fadeInUp bg-white dark:bg-[#1e1e1e] flex w-72 relative border border-gray-200 dark:border-gray-700 transition-colors duration-300 rounded-[24px] px-4 py-4 shadow-sm'>
      <div className='flex justify-between items-center w-full gap-3'>
        {/* 社交按钮1 - 方形按钮 */}
        {url1 && (
          <Link href={url1} target="_blank" rel="noopener noreferrer" className='flex-none'>
            <div className='w-12 h-12 bg-emerald-400 hover:bg-emerald-500 text-white flex items-center justify-center transition-all duration-300 rounded-full hover:scale-[1.02] shadow-md hover:shadow-lg'>
              <i className={`${icon1} text-white text-lg`} />
            </div>
          </Link>
        )}
        
        {/* 社交按钮2 - 方形按钮 */}
        {url2 && (
          <Link href={url2} target="_blank" rel="noopener noreferrer" className='flex-none'>
            <div className='w-12 h-12 bg-emerald-400 hover:bg-emerald-500 text-white flex items-center justify-center transition-all duration-300 rounded-full hover:scale-[1.02] shadow-md hover:shadow-lg'>
              <i className={`${icon2} text-white text-lg`} />
            </div>
          </Link>
        )}
        
        {/* 了解更多按钮 - 长方形按钮(相同高度) */}
        {url3 && (
          <Link href={url3} className='flex-1 min-w-0 h-12'>
            <div className='w-full h-full bg-emerald-400 hover:bg-emerald-500 text-white flex items-center justify-center transition-all duration-300 px-4 rounded-full hover:scale-[1.02] shadow-md hover:shadow-lg whitespace-nowrap'>
              <ArrowRightCircle className='w-5 h-5 mr-2' />
              {text3 && <span className='font-medium text-sm truncate'>{text3}</span>}
            </div>
          </Link>
        )}
      </div>
    </Card>
  )
}