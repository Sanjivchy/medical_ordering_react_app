import React from 'react';
import AvatarLogo from '../../assets/images/Avatar.svg'
import NotificationIcon from '../../assets/images/icons/Notification.svg'
function Index() {
  return (
    <div>
      <div className='border-b border-[#E2E5E9] py-4 flex items-center  px-10 justify-end space-x-6 '>
        {/* <div>
          <img src={NotificationIcon} alt="" />
        </div> */}

        <div className='group relative'>
          <img height='48px' width='48px' src={AvatarLogo} alt="avatar log" />
          <div className='absolute top-[3.5rem] -left-[60px] opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 -translate-y-5 '>
            <div className='border border-gray-200 rounded-lg'>
              <a className='flex items-center text-primary space-x-2 p-2 bg-white rounded-lg' href="">
                <figure>
                  <svg className='w-[1em] text-lg ' fill='currentColor' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64c17.67 0 32-14.33 32-32S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256c0 53.02 42.98 96 96 96h64c17.67 0 32-14.33 32-32S177.7 416 160 416zM502.6 233.4l-128-128c-12.51-12.51-32.76-12.49-45.25 0c-12.5 12.5-12.5 32.75 0 45.25L402.8 224H192C174.3 224 160 238.3 160 256s14.31 32 32 32h210.8l-73.38 73.38c-12.5 12.5-12.5 32.75 0 45.25s32.75 12.5 45.25 0l128-128C515.1 266.1 515.1 245.9 502.6 233.4z" /></svg>
                </figure>
                <span>Logout</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index