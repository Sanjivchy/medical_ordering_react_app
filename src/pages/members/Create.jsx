import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import server from '../../lib/server'
import YourSvg from '../../assets/images/logo.svg'
import { useSelector } from 'react-redux';
function MemberCreate(props) {
    const {token} = useSelector(state => state.auth)
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pradeshName, setPradeshName] = useState('')
    const [districtName, setDistrictName] = useState('')
    const [gaupalikaName, setGaupalikaName] = useState('')
    const [wardNumber, setWardNumber] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [mobileNumber, setMobileNumber] = useState()
    const [document, setDocument] = useState()
    const [relatedPerson, setRelatedPerson] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name || !email || !pradeshName || !districtName || !gaupalikaName || !wardNumber || !phoneNumber || !mobileNumber || !relatedPerson || !document) {
            setError('All fields are mendatory.')
            return
        }
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('pradesh_name', pradeshName)
        formData.append('district_name', districtName)
        formData.append('gaupalika_name', gaupalikaName)
        formData.append('ward_no', wardNumber)
        formData.append('phone_no', phoneNumber)
        formData.append('mobile_no', mobileNumber)
        formData.append('related_person', relatedPerson)
        formData.append('document', document, document.name)
        const res = await server.post('member/list', formData 
        // ,{
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // }
        )
        if (res.status != 200) {
            setError('Error occured.')
        }
        // navigate('/members')
        navigate('/')
    }
    return (
        <div className='max-w-2xl mx-auto border border-gray-300 rounded-lg m-20 p-10 space-y-6'>
            <div className='flex items-center space-x-3'>
                <img src={YourSvg} alt="aswini logo" />
                <h1 className='text-[60px] font-extrabold text-primary'>Ashwini </h1>
            </div>
            <h1 className='text-2xl'>Member Registration</h1>
            <form className='space-y-6' onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-6'>
                    {error && <p className=" text-red-500">{error}</p>}
                    <div className='form-group flex flex-col'>
                        <label className='form-label text-inherit'>Name*</label>
                        <input className='form-control' type="text" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className='form-group flex flex-col'>
                        <label className='form-label text-inherit'>Email</label>
                        <input className='form-control' type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='form-group flex flex-col'>
                        <label className='form-label text-inherit'>Province</label>
                        <input className='form-control' type="text" placeholder='Enter your province' value={pradeshName} onChange={(e) => setPradeshName(e.target.value)} />
                    </div>
                    <div className='form-group flex flex-col'>
                        <label className='form-label text-inherit'>District</label>
                        <input className='form-control' type="text" placeholder='Enter your district' value={districtName} onChange={(e) => setDistrictName(e.target.value)} />
                    </div>
                    <div className='form-group flex flex-col'>
                        <label className='form-label text-inherit'>Muncipality/Gaupalika</label>
                        <input className='form-control' type="text" placeholder='Enter your muncipality/gaupalika' value={gaupalikaName} onChange={(e) => setGaupalikaName(e.target.value)} />
                    </div>
                    <div className='form-group flex flex-col'>
                        <label className='form-label text-inherit'>Ward No</label>
                        <input className='form-control' type="number" placeholder='Enter your ward_no' value={wardNumber} onChange={(e) => setWardNumber(e.target.value)} />
                    </div>
                    <div className='form-group flex flex-col'>
                        <label className='form-label text-inherit'>Phone Number</label>
                        <input className='form-control' type="number" placeholder='Enter your phone_number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div className='form-group flex flex-col'>
                        <label className='form-label text-inherit'>Mobile Number</label>
                        <input className='form-control' type="number" placeholder='Enter your mobile_number' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                    </div>
                    <div className='form-group flex flex-col'>
                        <label className='form-label text-inherit'>Related Person</label>
                        <input className='form-control' type="text" placeholder='Enter your related person' value={relatedPerson} onChange={(e) => setRelatedPerson(e.target.value)} />
                    </div>
                    <div className='form-group flex flex-col'>
                        <label className='form-label text-inherit'>Supporting Document Photo:</label>
                        <input className='form-control' type="file" placeholder='Upload your document here' onChange={(e) => setDocument(e.target.files[0])} />
                    </div>
                    <button type='submit' className='bg-primary  text-base leading-6 font-medium text-white w-full py-[14px] rounded-lg'>Register</button>

                </div>
            </form>
        </div>
    )
}

export default MemberCreate