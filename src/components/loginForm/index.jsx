import React from 'react';
import YourSvg from '../../assets/images/logo.svg';

function index() {
    return (
        <div className='flex h-screen w-screen'>
            <div className='bg-primary flex-1 '>
            </div>
            <div className=' flex-1 flex justify-center items-center'>
                <div className='px-[48px] border border-[##E2E5E9] rounded-md m-auto'>
                    <div className='space-y-6 py-[118px] px-[75px]'>
                        <div className='flex items-center space-x-3'>
                            <img src={YourSvg} alt="aswini logo" />
                            <h1 className='text-[60px] font-extrabold text-primary'>Ashwini </h1>
                        </div>
                        <div className='space-y-6'>
                            <h2 className='text-[32px] leading-10 text-primary font-bold'>Login</h2>
                            <div className=' space-x-1 text-black text-base'>
                                <p className='inline-block'>Don’t have an account? </p>
                                <a href=""><u>Register</u></a>
                            </div>
                        </div>
                        <div className='space-y-6'>
                            <div className='before:content-[] h-px w-full bg-[#E6E3E3] relative'>
                                <span className='absolute left-[calc(50%-10px)] text-[#E6E3E3] inline-block -top-4 bg-white p-1'>OR</span>
                            </div>
                            <form className='space-y-8'>
                                <div className='space-y-6'>
                                    <div className='form-group flex flex-col'>
                                        <label className='form-label'>Email Address</label>
                                        <input className='form-control' type="text" placeholder='Enter your email' />
                                    </div>
                                    <div className='form-group flex flex-col'>
                                        <label className='form-label'>Password</label>
                                        <input className='forn-control ' type="text" placeholder='Enter your password' />
                                    </div>

                                </div>
                                <button className='bg-primary  text-base leading-6 font-medium text-white w-full py-[14px] rounded-lg'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index