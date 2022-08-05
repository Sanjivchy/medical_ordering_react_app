import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import server from '../../lib/server'

function MemberEdit(props) {
    const {Id} = useParams()
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [requests, setRequests] = useState([])
    const [doners, setDoners] = useState([])
    const [status, setStatus] = useState('')
    const [medicineName, setMedicineName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [requestId, setRequestId] = useState('')
    const [donerId, setDonerId] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!status || !medicineName || !quantity || !requestId) {
            setError('All fields are mendatory except Intrested.')
            return
        }
        const res = await server.put(`medicine/crud/${Id}`, {
            status,
            medicine_name: medicineName,
            quantity,
            request_id: requestId,
            interested: donerId
        })
        if(res.status != 200) {
            setError('Error occured.')
            return
        } 
        navigate('/medicines')
    }

    const fetchRequest = async () => {
        const {data} = await server.get(`medicine/crud/${Id}`)
        setStatus(data.status)
        setMedicineName(data.medicine_name)
        setQuantity(data.quantity)
        setRequestId(data.request_id)
        setDonerId(data.interested)
    }
    const listDoners = async () => {
        const res = await server.get('donar/list')
        console.log(res);
        setDoners(res.data);
    }
    const listRequests = async () => {
        const res = await server.get('request/list')
        console.log(res);
        setRequests(res.data);
    }
    
    useEffect(() => {        
        listDoners()
        listRequests()
        fetchRequest()
    }, [])
    
  return (
    <div className='flex h-screen w-screen'>
        <div className=' flex-1 flex justify-center items-center'>
            <div className='px-[48px] border border-[##E2E5E9] rounded-md m-auto'>
                <div className='space-y-6 py-[118px] px-[75px]'>
                    <div className='space-y-6'>
                        <h1 className='text-3xl'>Edit Medicine</h1>
                        <form className='space-y-8' onSubmit={handleSubmit}>
                            <div className='space-y-6'>
                                {error && <p className=" text-red-500">{error}</p>}
                                <div className='form-group flex flex-col'>
                                    <label className='form-label'>Status</label>
                                    <input className='form-control' type="text" value={status} onChange={(e) => setStatus(e.target.files[0])} />
                                </div>
                                <div className='form-group flex flex-col'>
                                    <label className='form-label'>Medicine Name</label>
                                    <input className='form-control' type="text" value={medicineName} onChange={(e) => setMedicineName(e.target.files[0])} />
                                </div>
                                <div className='form-group flex flex-col'>
                                    <label className='form-label'>Quantity</label>
                                    <input className='form-control' type="number" value={quantity} onChange={(e) => setQuantity(e.target.files[0])} />
                                </div>
                                <div className="form-group flex flex-col">
                                    <label htmlFor="request">Request</label>
                                    <select name="request" id="request" value={requestId} onChange={(e) => setRequestId(e.target.value)}>
                                        <option>Select an Option</option>
                                        {requests && requests.map((request) => {
                                            return (
                                                <option key={request.id} value={request.id}>{request.id}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="form-group flex flex-col">
                                    <label htmlFor="interested">Interested</label>
                                    <select name="interested" id="interested" value={donerId} onChange={(e) => setDonerId(e.target.value)}>
                                        <option>Select an Option</option>
                                        {doners && doners.map((doner) => {
                                            return (
                                                <option key={doner.id} value={doner.id}>{doner.name}</option>
                                            )
                                        })}
                                    </select>
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

export default MemberEdit