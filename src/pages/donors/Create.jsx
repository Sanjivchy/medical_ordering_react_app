import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import server from '../../lib/server'

function DonorCreate(props) {
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
        if(!name || !email || !pradeshName || !districtName || !gaupalikaName || !wardNumber || !phoneNumber || !mobileNumber || !relatedPerson || !document) {
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
        const res = await server.post('donar/list', formData)
        if(res.status != 200) {
            setError('Error occured.')
        } 
        navigate('/donors')
    }
  return (
    <div className='flex h-screen w-screen'>
        <div className=' flex-1 flex justify-center items-center'>
            <div className='px-[48px] border border-[##E2E5E9] rounded-md m-auto'>
                <div className='space-y-6 py-[118px] px-[75px]'>
                    <div className='space-y-6'>
                        <h1 className="text-3xl">Create Doner</h1>
                        <form className='space-y-8' onSubmit={handleSubmit}>
                            <div className='space-y-6'>
                                {error && <p className=" text-red-500">{error}</p>}
                                <div className='form-group flex flex-col'>
                                    <label className='form-label'>Name</label>
                                    <input className='form-control' type="text" placeholder='Enter your email' value={name} onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className='form-group flex flex-col'>
                                    <label className='form-label'>Email Address</label>
                                    <input className='form-control' type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className='form-group flex flex-col'>
                                    <label className='form-label'>Pradesh Name</label>
                                    <input className='form-control' type="text" placeholder='Enter your email' value={pradeshName} onChange={(e) => setPradeshName(e.target.value)} />
                                </div>
                                <div className='form-group flex flex-col'>
                                    <label className='form-label'>District Name</label>
                                    <input className='form-control' type="text" placeholder='Enter your email' value={districtName} onChange={(e) => setDistrictName(e.target.value)} />
                                </div>
                                <div className='form-group flex flex-col'>
                                    <label className='form-label'>Gaupalika Name</label>
                                    <input className='form-control' type="text" placeholder='Enter your email' value={gaupalikaName} onChange={(e) => setGaupalikaName(e.target.value)} />
                                </div>
                                <div className='form-group flex flex-col'>
                                    <label className='form-label'>Ward Number</label>
                                    <input className='form-control' type="number" placeholder='Enter your email' value={wardNumber} onChange={(e) => setWardNumber(e.target.value)} />
                                </div>
                                <div className='form-group flex flex-col'>
                                    <label className='form-label'>Phone Number</label>
                                    <input className='form-control' type="number" placeholder='Enter your email' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                                </div>
                                <div className='form-group flex flex-col'>
                                    <label className='form-label'>Mobile Number</label>
                                    <input className='form-control' type="number" placeholder='Enter your email' value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                                </div>
                                <div className='form-group flex flex-col'>
                                    <label className='form-label'>Related Person</label>
                                    <input className='form-control' type="text" placeholder='Enter your email' value={relatedPerson} onChange={(e) => setRelatedPerson(e.target.value)} />
                                </div>
                                <div className='form-group flex flex-col'>
                                    <label className='form-label'>Document</label>
                                    <input className='form-control' type="file" placeholder='Enter your email' onChange={(e) => setDocument(e.target.files[0])} />
                                </div>

                            </div>
                            <button type='submit' className='bg-primary  text-base leading-6 font-medium text-white w-full py-[14px] rounded-lg'>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DonorCreate