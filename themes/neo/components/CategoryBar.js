import { ChevronDoubleLeft, ChevronDoubleRight } from '@/components/HeroIcons'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'

/**
 * 博客列表上方嵌入条
 * @param {*} props
 * @returns
 */
export default function CategoryBar(props) {
  const { categoryOptions, border = true } = props
  const { locale } = useGlobal()
  const [scrollRight, setScrollRight] = useState(false)
  const categoryBarItemsRef = useRef(null)

  const handleToggleScroll = () => {
    if (categoryBarItemsRef.current) {
      const { scrollWidth, clientWidth } = categoryBarItemsRef.current
      if (scrollRight) {
        categoryBarItemsRef.current.scrollLeft = 0
      } else {
        categoryBarItemsRef.current.scrollLeft = scrollWidth - clientWidth
      }
      setScrollRight(!scrollRight)
    }
  }

  return (
    <div
      id='category-bar'
      className={`wow fadeInUp flex flex-nowrap justify-between items-center h-12 mb-4 space-x-2 w-full md:max-w-none max-w-[86rem] mx-auto px-4 md:px-5 bg-white dark:bg-[#1e1e1e]  
            ${border ? 'border border-gray-200 dark:border-gray-700' : ''} py-2 px-2 rounded-[24px] shadow-md hover:shadow-lg transition-shadow duration-300`}>
      <div
        id='category-bar-items'
        ref={categoryBarItemsRef}
        className='scroll-smooth max-w-4xl rounded-full scroll-hidden flex justify-start flex-nowrap items-center overflow-x-scroll'>
        <MenuItem href='/' name={locale.NAV.INDEX} />
        {categoryOptions?.map((c, index) => (
          <MenuItem key={index} href={`/category/${c.name}`} name={c.name} />
        ))}
      </div>

      <div id='category-bar-next' className='flex items-center justify-center pr-2'>
        <div
          id='right'
          className='cursor-pointer mx-2 dark:text-gray-300 dark:hover:text-emerald-400 hover:text-emerald-400'
          onClick={handleToggleScroll}>
          {scrollRight ? (
            <ChevronDoubleLeft className={'w-5 h-5'} />
          ) : (
            <ChevronDoubleRight className={'w-5 h-5'} />
          )}
        </div>
        <Link
          href='/category'
          className='whitespace-nowrap font-bold text-gray-900 dark:text-white transition-colors duration-200 hover:text-emerald-400 dark:hover:text-emerald-400'>
          {locale.MENU.CATEGORY}
        </Link>
      </div>
    </div>
  )
}

const MenuItem = ({ href, name }) => {
  const router = useRouter()
  const { category } = router.query
  const selected = category === name
  return (
    <div
      className={`whitespace-nowrap mr-2 duration-200 transition-all font-bold px-2 py-0.5 rounded-full text-gray-900 dark:text-white hover:text-white hover:bg-emerald-400 dark:hover:bg-emerald-400 ${selected ? 'text-white bg-emerald-400 dark:bg-emerald-400' : ''}`}>
      <Link href={href}>{name}</Link>
    </div>
  )
}