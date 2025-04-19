import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import CopyRightDate from '@/components/CopyRightDate'
import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'
import Image from 'next/image'

const Footer = () => {
  const BEI_AN = siteConfig('BEI_AN')
  const beianLink = siteConfig('BEI_AN_LINK')
  const BIO = siteConfig('BIO')
  return (
    <footer className='relative flex-shrink-0 bg-white dark:bg-[#18171D] justify-center text-center m-auto w-full leading-6 text-gray-600 dark:text-gray-100 text-sm'>
      {/* 颜色过度区 */}
      <div
        id='color-transition'
        className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white dark:bg-[#18171D] dark:from-inherit dark:to-inherit'
      />

      {/* 社交按钮 - 更新暗色背景为#18171D */}
      <div className='w-full h-24 bg-white dark:bg-[#18171D]'>
        <SocialButton />
      </div>

      <br />

      {/* 底部页面信息 */}
      <div
        id='footer-bottom'
        className='w-full min-h-[5rem] flex flex-col lg:flex-row justify-between items-center p-4 bg-gray-100 dark:bg-gray-800'>
        
        {/* Logo 部分 */}
        <div className='mb-3 lg:mb-0 lg:mr-4 flex-shrink-0 self-start'>
          <Image 
            src="/logo.png" 
            alt="Site Logo" 
            width={60} 
            height={60} 
            className='object-contain h-12 w-auto'
          />
        </div>

        {/* 文字信息部分 */}
        <div className='w-full flex flex-col items-start lg:items-end'>
          <div className='flex flex-wrap justify-start lg:justify-end items-center gap-x-2'>
            <CopyRightDate className='text-gray-700 dark:text-gray-200' />
            <a
              href={'/about'}
              className='underline font-bold hover:text-gray-600 dark:hover:text-gray-300'>
              {siteConfig('AUTHOR')}
            </a>
            {BIO && <span className='font-medium'>| {BIO}</span>}
          </div>
          
          <div className='flex flex-wrap justify-start lg:justify-end items-center mt-2 gap-x-2'>
            {BEI_AN && (
              <>
                <i className='fas fa-shield-alt text-gray-700 dark:text-gray-200' />
                <a href={beianLink} className='hover:text-gray-600 dark:hover:text-gray-300'>
                  {siteConfig('BEI_AN')}
                </a>
              </>
            )}
            <BeiAnGongAn className='text-gray-700 dark:text-gray-200' />

            <span className='hidden busuanzi_container_site_pv'>
              <i className='fas fa-eye text-gray-700 dark:text-gray-200' />
              <span className='px-1 busuanzi_value_site_pv'> </span>
            </span>
            <span className='hidden busuanzi_container_site_uv'>
              <i className='fas fa-users text-gray-700 dark:text-gray-200' />
              <span className='px-1 busuanzi_value_site_uv'> </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer