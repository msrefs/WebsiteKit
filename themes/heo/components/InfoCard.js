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
    <Card className='wow fadeInUp bg-gradient-to-r from-blue-500 to-blue-400 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-400 text-white flex flex-col w-72 overflow-hidden relative border border-[#E5E7EB] hover:border-[#4F65F0] transition-colors duration-300'>
      {/* 信息卡牌第一行 */}
      <div className='flex justify-between'>
        {/* 问候语 */}
        <GreetingsWords />
        {/* 头像 */}
        <div className={`${isSlugPage ? 'absolute right-0 -mt-8 -mr-6 hover:opacity-0 hover:scale-150 blur' : 'cursor-pointer'} justify-center items-center flex transform transitaion-all duration-200`}>
          <LazyImage
            src={siteInfo?.icon}
            width={isSlugPage ? 100 : 28}
            alt={siteConfig('AUTHOR')}
          />
        </div>
      </div>

      <h2 className='text-3xl font-extrabold mt-3'>{siteConfig('AUTHOR')}</h2>

      {/* 公告栏 */}
      <Announcement post={notice} style={{ color: 'white !important' }} />

      <div className='flex justify-between'>
        <div className='flex space-x-3'>
          {/* 社交按钮 */}
          {url1 && (
            <div className='w-10 text-center bg-white/20 backdrop-blur-sm p-2 rounded-full transition-all duration-200 hover:bg-white/40 hover:scale-105 border border-white/30'>
              <Link href={url1}>
                <i className={`${icon1} text-white`} />
              </Link>
            </div>
          )}
          {url2 && (
            <div className='w-10 text-center bg-white/20 backdrop-blur-sm p-2 rounded-full transition-all duration-200 hover:bg-white/40 hover:scale-105 border border-white/30'>
              <Link href={url2}>
                <i className={`${icon2} text-white`} />
              </Link>
            </div>
          )}
        </div>
        {/* 了解更多按钮 */}
        <MoreButton />
      </div>
    </Card>
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
      <div className='group bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/60 text-white flex items-center transition-all duration-200 py-2 px-3 rounded-full space-x-1 hover:bg-white/40 hover:scale-[1.02]'>
        <ArrowRightCircle className='group-hover:stroke-white w-6 h-6 transition-all duration-100' />
        <div className='font-bold'>{text3}</div>
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
      className='select-none cursor-pointer py-1 px-2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-sm rounded-lg transition-all duration-200 border border-white/30'>
      {greeting}
    </div>
  )
}