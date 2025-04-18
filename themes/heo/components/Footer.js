import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import CopyRightDate from '@/components/CopyRightDate'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'
import Image from 'next/image'

const Footer = () => {
  const BEI_AN = siteConfig('BEI_AN')
  const beianLink = siteConfig('BEI_AN_LINK')
  const BIO = siteConfig('BIO')
  return (
    <footer className='relative flex-shrink-0 bg-gray-100 dark:bg-gray-800 justify-center text-center m-auto w-full leading-6 text-gray-600 dark:text-gray-100 text-sm'>
      {/* 颜色过度区 */}
      <div
        id='color-transition'
        className='h-32 bg-gradient-to-b from-[#f7f9fe] to-gray-100 dark:bg-gray-800 dark:from-inherit dark:to-inherit'
      />

      {/* 社交按钮 */}
      <div className='w-full h-24'>
        <SocialButton />
      </div>

      <br />

      {/* 底部页面信息 */}
      <div
        id='footer-bottom'
        className='w-full h-21 flex flex-col p-3 lg:flex-row justify-between px-6 items-center bg-gray-200 dark:bg-gray-700'>
        <div id='footer-bottom-left' className='flex items-center'>
          <div className='mr-4'>
            <Image 
              src="/logo.png" 
              alt="Site Logo" 
              width={40} 
              height={40} 
              className='object-contain'
            />
          </div>
          <div className='text-start font-sans'>
            <PoweredBy className='text-gray-800 dark:text-gray-200' />
          </div>
        </div>

        <div id='footer-bottom-right' className='font-sans text-right'>
          <div className='flex gap-x-1 items-center justify-end'>
            <CopyRightDate className='text-gray-800 dark:text-gray-200' />
            <a
              href={'/about'}
              className='underline font-bold hover:text-gray-600 dark:hover:text-gray-300'>
              {siteConfig('AUTHOR')}
            </a>
            {BIO && <span className='mx-1 font-medium'> | {BIO}</span>}
          </div>
          
          <div className='flex justify-end items-center mt-1'>
            {BEI_AN && (
              <>
                <i className='fas fa-shield-alt text-gray-800 dark:text-gray-200' />{' '}
                <a href={beianLink} className='mr-2 hover:text-gray-600 dark:hover:text-gray-300'>
                  {siteConfig('BEI_AN')}
                </a>
              </>
            )}
            <BeiAnGongAn className='text-gray-800 dark:text-gray-200' />

            <span className='hidden busuanzi_container_site_pv'>
              <i className='fas fa-eye text-gray-800 dark:text-gray-200' />
              <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
            </span>
            <span className='pl-2 hidden busuanzi_container_site_uv'>
              <i className='fas fa-users text-gray-800 dark:text-gray-200' />{' '}
              <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer