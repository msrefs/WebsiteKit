import { ArrowRightCircle } from '@/components/HeroIcons'
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import CONFIG from '../config'
import Announcement from './Announcement'
import Card from './Card'

export function InfoCard(props) {
  const { siteInfo, notice } = props
  const router = useRouter()
  const isSlugPage = router.pathname.indexOf('/[prefix]') === 0
  const url1 = siteConfig('HEO_INFO_CARD_URL1', null, CONFIG)
  const icon1 = siteConfig('HEO_INFO_CARD_ICON1', null, CONFIG)
  const url2 = siteConfig('HEO_INFO_CARD_URL2', null, CONFIG)
  const icon2 = siteConfig('HEO_INFO_CARD_ICON2', null, CONFIG)

  return (
    <Card className='wow fadeInUp bg-white dark:bg-[#1e1e1e] flex flex-col w-72 overflow-hidden relative border border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 transition-colors duration-300 rounded-lg p-5 shadow-sm'>
      {/* 信息卡牌第一行 */}
      <div className='flex justify-between items-start mb-4'>
        {/* 问候语 */}
        <GreetingsWords />
        {/* 头像 */}
        <div className={`${isSlugPage ? 'absolute right-0 -mt-8 -mr-6 hover:opacity-0 hover:scale-150 blur' : 'cursor-pointer'} justify-center items-center flex transform transition-all duration-300 hover:scale-110`}>
          <LazyImage
            src={siteInfo?.icon}
            width={isSlugPage ? 100 : 32}
            height={isSlugPage ? 100 : 32}
            className="rounded-full border-2 border-gray-200 dark:border-gray-600 hover:border-green-400 dark:hover:border-green-500 transition-all duration-300"
            alt={siteConfig('AUTHOR')}
          />
        </div>
      </div>

      <h2 className='text-3xl font-bold mt-2 mb-3 text-gray-800 dark:text-gray-100'>{siteConfig('AUTHOR')}</h2>

      {/* 公告栏 */}
      <Announcement 
        post={notice} 
        className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 mb-4 border border-gray-200 dark:border-gray-700 hover:border-green-400 dark:hover:border-green-500 transition-colors duration-300" 
      />

      <div className='flex justify-between items-center mt-auto'>
        <div className='flex space-x-2'>
          {/* 社交按钮 */}
          {url1 && (
            <SocialButton url={url1} icon={icon1} />
          )}
          {url2 && (
            <SocialButton url={url2} icon={icon2} />
          )}
        </div>
        {/* 了解更多按钮 */}
        <MoreButton />
      </div>
    </Card>
  )
}

/**
 * 社交按钮组件
 */
function SocialButton({ url, icon }) {
  return (
    <Link href={url} target="_blank" rel="noopener noreferrer">
      <div className='w-9 h-9 flex items-center justify-center bg-green-500 hover:bg-green-600 rounded-full transition-all duration-300 hover:scale-110 border border-green-600 hover:border-green-700 shadow-sm'>
        <i className={`${icon} text-white text-lg`} />
      </div>
    </Link>
  )
}

/**
 * 了解更多按钮
 */
function MoreButton() {
  const url3 = siteConfig('HEO_INFO_CARD_URL3', null, CONFIG)
  const text3 = siteConfig('HEO_INFO_CARD_TEXT3', null, CONFIG)
  if (!url3) {
    return <></>
  }
  return (
    <Link href={url3}>
      <div className='group bg-green-500 hover:bg-green-600 text-white flex items-center transition-all duration-300 py-2 px-4 rounded-full space-x-2 hover:scale-105 shadow-sm'>
        <ArrowRightCircle className='w-5 h-5 transition-all duration-300' />
        <div className='font-semibold text-sm'>{text3}</div>
      </div>
    </Link>
  )
}

/**
 * 欢迎语
 */
function GreetingsWords() {
  const greetings = siteConfig('HEO_INFOCARD_GREETINGS', null, CONFIG)
  const [greeting, setGreeting] = useState(greetings[0])
  const handleChangeGreeting = () => {
    const randomIndex = Math.floor(Math.random() * greetings.length)
    setGreeting(greetings[randomIndex])
  }

  return (
    <div
      onClick={handleChangeGreeting}
      className='select-none cursor-pointer py-1.5 px-3 bg-green-500 hover:bg-green-600 text-white text-sm rounded-md transition-all duration-300 border border-green-600 hover:border-green-700 shadow-sm'>
      {greeting}
    </div>
  )
}