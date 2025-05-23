import LazyImage from '@/components/LazyImage'
import NotionIcon from './NotionIcon'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import CONFIG from '../config'
import TagItemMini from './TagItemMini'

const BlogPostCard = ({ index, post, showSummary, siteInfo }) => {
  const showPreview =
    siteConfig('HEO_POST_LIST_PREVIEW', null, CONFIG) && post.blockMap
  
  if (
    post &&
    !post.pageCoverThumbnail &&
    siteConfig('HEO_POST_LIST_COVER_DEFAULT', null, CONFIG)
  ) {
    post.pageCoverThumbnail = siteInfo?.pageCover
  }

  const showPageCover =
    siteConfig('HEO_POST_LIST_COVER', null, CONFIG) &&
    post?.pageCoverThumbnail &&
    !showPreview

  const POST_TWO_COLS = siteConfig('HEO_HOME_POST_TWO_COLS', true, CONFIG)
  const COVER_HOVER_ENLARGE = siteConfig(
    'HEO_POST_LIST_COVER_HOVER_ENLARGE',
    true,
    CONFIG
  )

  return (
    <article className={`${COVER_HOVER_ENLARGE ? 'hover:transition-all duration-150' : ''}`}>
      <div
        data-wow-delay=".2s"
        className={
          (POST_TWO_COLS ? '2xl:h-96 2xl:flex-col' : '') +
          ' wow fadeInUp border bg-white dark:bg-[#1e1e1e] flex mb-4 flex-col h-[23rem] md:h-52 md:flex-row group w-full dark:border-gray-600 justify-between overflow-hidden rounded-[24px] shadow-md hover:shadow-lg dark:shadow-neutral-800/70 transition-all duration-300'
        }
      >
        {showPageCover && (
          <Link href={post?.href} passHref legacyBehavior>
            <div
              className={
                (POST_TWO_COLS ? '2xl:w-full' : '') +
                ' w-full md:w-5/12 overflow-hidden cursor-pointer select-none'
              }
            >
              <LazyImage
                priority={index === 0}
                src={post?.pageCoverThumbnail}
                alt={post?.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
              />
            </div>
          </Link>
        )}

        <div
          className={
            (POST_TWO_COLS ? '2xl:p-4 2xl:h-48 2xl:w-full' : '') +
            ' flex p-6 flex-col justify-between h-48 md:h-full w-full md:w-7/12'
          }
        >
          <header>
            {post?.category && (
              <div
                className={`flex mb-1 items-center ${
                  showPreview ? 'justify-center' : 'justify-start'
                } hidden md:block flex-wrap dark:text-gray-300 text-gray-600 dark:hover:text-emerald-400`}
              >
                <Link
                  passHref
                  href={`/category/${post.category}`}
                  className="cursor-pointer text-xs font-normal menu-link hover:text-gray-800 dark:hover:text-emerald-400"
                >
                  {post.category}
                </Link>
              </div>
            )}

            <Link
              href={post?.href}
              passHref
              className="dark:hover:text-emerald-400 text-black dark:text-gray-100 line-clamp-2 replace cursor-pointer text-xl font-extrabold leading-tight"
            >
              {siteConfig('POST_TITLE_ICON') && (
                <NotionIcon
                  icon={post.pageIcon}
                  className="heo-icon w-6 h-6 mr-1 align-middle transform translate-y-[-8%]"
                />
              )}
              <span className="menu-link hover:text-gray-800 dark:hover:text-emerald-400">
                {post.title}
              </span>
            </Link>
          </header>

          {(!showPreview || showSummary) && (
            <main className="line-clamp-2 replace text-gray-700 dark:text-gray-300 text-sm font-light leading-tight">
              {post.summary}
            </main>
          )}

          <div className="md:flex-nowrap flex-wrap md:justify-start inline-block">
            <div>
              {post.tagItems?.map((tag) => (
                <TagItemMini key={tag.name} tag={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogPostCard