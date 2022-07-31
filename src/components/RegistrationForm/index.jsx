import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import YourSvg from '../../assets/images/logo.svg';
import server from '../../lib/server';

function index(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!email || !password || !password) {
            setError('Fill all the fields.')
            return
        }
        if(password !== password2){
            setError('Password and Password Confirm doesnot match.')
            return
        }
        const res = await server.post('register/', {
            first_name: firstName,
            last_name: lastName,
            email,
            password,
            password2
        })
        console.log(res);
        if(res.status == 200)
            props.history.push('/login')
    }
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
                            <form className='space-y-8' onSubmit={handleSubmit}>
                                <div className='space-y-6'>
                                    <div className='grid grid-cols-2 gap-6'>
                                        <div className='form-group flex flex-col'>
                                            <label className='form-label'>First Name</label>
                                            <input className='form-control' type="text" placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                                        </div>
                                        <div className='form-group flex flex-col'>
                                            <label className='form-label'>Last Name</label>
                                            <input className='form-control' type="text" placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} />
                                        </div>
                                        <div className='form-group flex flex-col'>
                                            <label className='form-label'>Email</label>
                                            <input className='form-control' type="email" placeholder='Email' required value={email} onChange={e => setEmail(e.target.value)} />
                                        </div>
                                        <div className='form-group flex flex-col'>
                                            <label className='form-label'>Password</label>
                                            <input className='form-control' type="text" placeholder='Password' required value={password} onChange={e => setPassword(e.target.value)} />
                                        </div>
                                        <div className='form-group flex flex-col'>
                                            <label className='form-label'>Confirm Password</label>
                                            <input className='form-control' type="text" placeholder='Confirm Password' required value={password2} onChange={e => setPassword2(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2 gap-6'>
                                        {/* <div className='form-group flex flex-col'>
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
                                        </div> */}
                                        <button type='submit' className='bg-primary  text-base leading-6 font-medium text-white w-full py-[14px] rounded-lg'>Register</button>

                                    </div>
                                </div>
                            </form>

                            <p className='mt-5'>Already have an account? <Link to="/login"><u>Login</u></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index