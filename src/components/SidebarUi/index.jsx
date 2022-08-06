import React from 'react'
import RequestIcon from '../../assets/images/icons/request_icon.svg';
import HomeIcon from '../../assets/images/icons/home_icon.svg'
import { Link } from 'react-router-dom'

function index() {
 
    return (
        <div>
            <div className='w-[255px] bg-primary h-screen fixed inset-0 text-white'>
                <div className='flex py-2 justify-between flex-col h-full'>
                    <div className=' divide-y divide-[#646464]'>
                        <div className=' pl-[30px] pb-[10px] p pt-16 flex items-center text-white space-x-4'>
                            {/* <img src="" alt="" /> */}
                            <div className='h-10 w-10 rounded-full bg-gray-400 '>
                            </div>
                            <div>
                                <h3 className='text-xs font-bold'>Orgainization Name</h3>
                                <a className='text-xs font-normal' href="mailto:orz@gmail.com">orz@gmail.com</a>
                            </div>
                        </div>
                        <div className='pt-[10px]'>
                            <ul>
                                <li>
                                    <Link to='/' className='flex items-center group space-x-5 text-white text-base leading-5 pl-[30px] py-[18px] transition-all duration-500   cursor-pointer hover:bg-[#3B8B6F]'>
                                        <img src={HomeIcon} alt="settig icons" className=' group-hover:rotate-90 transition-all duration-500' />
                                        <span>Home</span>
                                    </Link>
                                </li>
                                <li>
                                    <a href="" className='flex items-center group space-x-5 text-white text-base leading-5 pl-[30px] py-[18px] transition-all duration-500   cursor-pointer hover:bg-[#3B8B6F]'>
                                        <img src={HomeIcon} alt="settig icons" className=' group-hover:rotate-90 transition-all duration-500' />
                                        <span>Explore Request</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className='flex items-center group space-x-5 text-white text-base leading-5 pl-[30px] py-[18px] transition-all duration-500   cursor-pointer hover:bg-[#3B8B6F]'>
                                        <img src={HomeIcon} alt="settig icons" className=' group-hover:rotate-90 transition-all duration-500' />
                                        <span>My Interest</span>
                                    </a>
                                </li>
                                
                                <li>
                                    <a href="" className='flex items-center group space-x-5 text-white text-base leading-5 pl-[30px] py-[18px] transition-all duration-500   cursor-pointer hover:bg-[#3B8B6F]'>
                                        <img src={RequestIcon} alt="settig icons" className=' group-hover:rotate-90 transition-all duration-500' />
                                        <span>Request Medicine</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className='flex items-center group space-x-5 text-white text-base leading-5 pl-[30px] py-[18px] transition-all duration-500   cursor-pointer hover:bg-[#3B8B6F]'>
                                        <img src={RequestIcon} alt="settig icons" className=' group-hover:rotate-90 transition-all duration-500' />
                                        <span>My Request</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className='flex items-center group space-x-5 text-white text-base leading-5 pl-[30px] py-[18px] transition-all duration-500   cursor-pointer hover:bg-[#3B8B6F]'>
                                        <img src={HomeIcon} alt="settig icons" className=' group-hover:rotate-90 transition-all duration-500' />
                                        <span>Donar Request</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className='flex items-center group space-x-5 text-white text-base leading-5 pl-[30px] py-[18px] transition-all duration-500   cursor-pointer hover:bg-[#3B8B6F]'>
                                        <img src={HomeIcon} alt="settig icons" className=' group-hover:rotate-90 transition-all duration-500' />
                                        <span>Member Request</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className='flex items-center group space-x-5 text-white text-base leading-5 pl-[30px] py-[18px] transition-all duration-500   cursor-pointer hover:bg-[#3B8B6F]'>
                                        <img src={HomeIcon} alt="settig icons" className=' group-hover:rotate-90 transition-all duration-500' />
                                        <span>Medicine Requests</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="" className='flex items-center group space-x-5 text-white text-base leading-5 pl-[30px] py-[18px] transition-all duration-500   cursor-pointer hover:bg-[#3B8B6F]'>
                                        <img src={HomeIcon} alt="settig icons" className=' group-hover:rotate-90 transition-all duration-500' />
                                        <span>Request Status</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div>
                        <a href="" className='flex items-center group space-x-5 text-white text-base leading-5 pl-[30px] py-[18px] transition-all duration-500   cursor-pointer hover:bg-[#3B8B6F]'>
                            <img src={SettingIcon} alt="settig icons" className=' group-hover:rotate-90 transition-all duration-500' />
                            <span>Setting</span>
                        </a>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default index