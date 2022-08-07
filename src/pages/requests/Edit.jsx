import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import server from '../../lib/server'

function MemberEdit(props) {
    const {token} = useSelector(state => state.auth)
    const { Id } = useParams()
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [members, setMembers] = useState([])
    const [urgency, setUrgency] = useState('')
    const [memberId, setMemberId] = useState('')
    const [document, setDocument] = useState()
    let tempDocument;

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!urgency || !memberId || !document) {
            setError('All fields are mendatory.')
            return
        }
        const formData = new FormData()
        formData.append('urgency', urgency)
        formData.append('member_id', memberId)
        if (document)
            formData.append('document', document, document.name)
        const res = await server.put(`request/crud/${Id}`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if (res.status != 200) {
            setError('Error occured.')
            return
        }
        navigate('/requests')
    }

    const fetchRequest = async () => {
        const { data } = await server.get(`request/crud/${Id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setUrgency(data.urgency)
        setMemberId(data.member_id)
        tempDocument = data.document
    }

    const listMembers = async () => {
        const res = await server.get('member/list', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        // console.log(res);
        setMembers(res.data);
    }

    useEffect(() => {
        listMembers()
        fetchRequest()
    }, [])

    return (
        <div className='p-6 ml-[255px] max-w-lg'>
            <div className='space-y-6'>
                <h1 className='text-3xl'>Edit Request</h1>
                <form className='space-y-8' onSubmit={handleSubmit}>
                    <div className='space-y-6'>
                        {error && <p className=" text-red-500">{error}</p>}
                        <div className="form-group flex flex-col">
                            <label htmlFor="Urgency">Urgancy</label>
                            <select name="urgency" id="urgency" value={urgency} onChange={(e) => setUrgency(e.target.value)}>
                                <option>Select an Option</option>
                                <option value="1">Urgent</option>
                                <option value="0">Less Urgent</option>
                            </select>
                        </div>
                        <div className="form-group flex flex-col">
                            <label htmlFor="Urgency">Urgancy</label>
                            <select name="urgency" id="urgency" value={memberId} onChange={(e) => setMemberId(e.target.value)}>
                                <option>Select an Option</option>
                                {members && members.map((member) => {
                                    return (
                                        <option key={member.id} value={member.id}>{member.name}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className='form-group flex flex-col'>
                            <label className='form-label text-inherit'>Document</label>
                            <input className='form-control' type="file" onChange={(e) => setDocument(e.target.files[0])} />
                        </div>

                    </div>
                    <button type='submit' className='bg-primary  text-base leading-6 font-medium text-white w-full py-[14px] rounded-lg'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default MemberEdit