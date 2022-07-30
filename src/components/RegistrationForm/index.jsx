import React from 'react'
import YourSvg from '../../assets/images/logo.svg';

function index() {
    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='max-w-[800px] w-full p-12' >
                <div className='border border-[#E2E5E9] rounded-lg px-16 py-12'>
                    <div className='space-y-4'>
                        <div className='flex items-center space-x-3'>
                            <img src={YourSvg} alt="aswini logo" />
                            <h1 className='text-[50px] font-medium text-primary'>Ashwini </h1>
                        </div>
                        <div>
                            <h3 className='text-2xl text-black leading-10 pb-6'>Member Registration</h3>
                            <form className='space-y-8'>
                                <div className='space-y-6'>
                                    <div className='grid grid-cols-2 gap-6'>
                                        <div className='form-group flex flex-col'>
                                            <label className='form-label'>Name</label>
                                            <input className='form-control' type="text" placeholder='Name' />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-6'>
                                        <div className='form-group flex flex-col'>
                                            <label className='form-label'>Province</label>
                                            <input className='forn-control ' type="text" placeholder='Province' />
                                        </div>
                                        <div className='form-group flex flex-col'>
                                            <label className='form-label'>District</label>
                                            <input className='forn-control ' type="text" placeholder='District' />
                                        </div>
                                        <div className='form-group flex flex-col'>
                                            <label className='form-label'>Muncipality/Gaupalika</label>
                                            <input className='forn-control ' type="text" placeholder='Muncipality/Gaupalika' />
                                        </div>
                                        <div className='form-group flex flex-col'>
                                            <label className='form-label'>Ward No</label>
                                            <input className='forn-control ' type="text" placeholder='Ward No' />
                                        </div>
                                        <div className='form-group flex flex-col'>
                                            <label className='form-label'>Phone number</label>
                                            <input className='forn-control ' type="text" placeholder='Phone number' />
                                        </div>
                                        <div className='form-group flex flex-col'>
                                            <label className='form-label'>Mobile number</label>
                                            <input className='forn-control ' type="text" placeholder='Mobile number' />
                                        </div>
                                        <div className='form-group flex flex-col'>
                                            <label className='form-label'>Supporting Document</label>
                                            <input className='forn-control' type='file' placeholder='Supporting Document' />
                                        </div>
                                        <div className='form-group flex flex-col'>
                                            <label className='form-label'>Related Person</label>
                                            <input className='forn-control ' type="text" placeholder='Supporting Document' />
                                        </div>
                                        <button className='bg-primary  text-base leading-6 font-medium text-white w-full py-[14px] rounded-lg'>Register</button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index