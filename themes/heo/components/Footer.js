import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import CopyRightDate from '@/components/CopyRightDate'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'
import SocialButton from './SocialButton'

const Footer = () => {
  const BEI_AN = siteConfig('BEI_AN')
  const beianLink = siteConfig('BEI_AN_LINK')
  const BIO = siteConfig('BIO')
  return (
    <footer className='relative flex-shrink-0 bg-white dark:bg-[#1a191d] justify-center text-center m-auto w-full leading-6 text-gray-600 dark:text-gray-100 text-sm'>
      {/* 颜色过度区 */}
      <div
        id='color-transition'
        className='h-32 bg-gradient-to-b from-[#f7f9fe] to-white dark:bg-[#1a191d] dark:from-inherit dark:to-inherit'
      />

      {/* 社交按钮 */}
      <div className='w-full h-24'>
        <SocialButton />
      </div>

      <br />

      {/* 底部页面信息 - 修改为蓝色渐变 */}
      <div
        id='footer-bottom'
        className='w-full h-21 flex flex-col p-3 lg:flex-row justify-between px-6 items-center bg-gradient-to-r from-blue-500 to-blue-400 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-400 text-white'>
        <div id='footer-bottom-left' className='text-center lg:text-start font-sans font-bold'>
          <PoweredBy className='text-white' />
          <div className='flex gap-x-1 items-center'>
            <CopyRightDate className='text-white' />
            <a
              href={'/about'}
              className='underline font-bold hover:text-white/80'>
              {siteConfig('AUTHOR')}
            </a>
            {BIO && <span className='mx-1 font-medium'> | {BIO}</span>}
          </div>
        </div>

        <div id='footer-bottom-right' className='font-sans font-bold'>
          {BEI_AN && (
            <>
              <i className='fas fa-shield-alt text-white' />{' '}
              <a href={beianLink} className='mr-2 hover:text-white/80'>
                {siteConfig('BEI_AN')}
              </a>
            </>
          )}
          <BeiAnGongAn className='text-white' />

          <span className='hidden busuanzi_container_site_pv'>
            <i className='fas fa-eye text-white' />
            <span className='px-1 busuanzi_value_site_pv'> </span>{' '}
          </span>
          <span className='pl-2 hidden busuanzi_container_site_uv'>
            <i className='fas fa-users text-white' />{' '}
            <span className='px-1 busuanzi_value_site_uv'> </span>{' '}
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer