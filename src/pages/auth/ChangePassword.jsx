import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import server from '../../lib/server'

function ChangePassword(props) {
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const handleSubmit = async () => {
        if(!password && !password2) {
            setError('All fields are required.')
            return
        }
        const res = await server.post('changepassword', {
            password,
            password2
        })
        if(res.status != 200) {
            setError('Error Occured')
            return
        }
        navigate('/login')
    }
  return (
    <div className='flex h-screen w-screen'>
            <div className='bg-primary flex-1 '>
            </div>
            <div className=' flex-1 flex justify-center items-center'>
                <div className='px-[48px] border border-[##E2E5E9] rounded-md m-auto'>
                    <div className='space-y-6 py-[118px] px-[75px]'>
                        <div className='space-y-6'>
                            <form className='space-y-8' onSubmit={handleSubmit}>
                                <div className='space-y-6'>
                                    {error && <p className=" text-red-500">{error}</p>}
                                    <div className='form-group flex flex-col'>
                                        <label className='form-label'>Password</label>
                                        <input className='forn-control ' type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                    <div className='form-group flex flex-col'>
                                        <label className='form-label'>Password Conformation</label>
                                        <input className='forn-control ' type="password" placeholder='Enter your password' value={password2} onChange={(e) => setPassword2(e.target.value)} />
                                    </div>
                                </div>
                                <button type='submit' className='bg-primary  text-base leading-6 font-medium text-white w-full py-[14px] rounded-lg'>Change</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ChangePassword