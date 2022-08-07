import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import YourSvg from '../../assets/images/logo.svg';
import server from '../../lib/server';
import { useSelector, useDispatch } from 'react-redux'
import { login, setUser } from '../../store/auth/authSlice';

function index(props) {
    const navigate = useNavigate();
    const {token} = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    
    const fetchUserData = async () => {
        console.log('fetch data');
        const res = await server.get('userprofile/', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        console.log(res.data, 'user');
        dispatch(setUser(res.data))
      }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!username || !password) {
            setError('Fill all the fields.')
            return
        }
        const res = await server.post('api/token/', {username, password})
        console.log(res);
        if(res?.data) {
            dispatch(login({username: username, token: res.data.access, refresh: res.data.refresh}))
            fetchUserData()
            navigate('/')
        }
    }
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
                                <Link to="/register" ><u>Register</u></Link>
                            </div>
                        </div>
                        <div className='space-y-6'>
                            <div className='before:content-[] h-px w-full bg-[#E6E3E3] relative'>
                                <span className='absolute left-[calc(50%-10px)] text-[#E6E3E3] inline-block -top-4 bg-white p-1'>OR</span>
                            </div>
                            <form className='space-y-8' onSubmit={handleSubmit}>
                                <div className='space-y-6'>
                                    {error && <p className=" text-red-500">{error}</p>}
                                    <div className='form-group flex flex-col'>
                                        <label className='form-label'>Username</label>
                                        <input className='form-control' type="text" placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} />
                                    </div>
                                    <div className='form-group flex flex-col'>
                                        <label className='form-label'>Password</label>
                                        <input className='forn-control ' type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </div>

                                </div>
                                <button type='submit' className='bg-primary  text-base leading-6 font-medium text-white w-full py-[14px] rounded-lg'>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index