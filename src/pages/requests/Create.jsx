import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import server from '../../lib/server'
import { useSelector } from 'react-redux';
import RequestMedicine from '../../layouts/main.js/requestMedicine/Index'

function MemberCreate(props) {
    const [inputList, setInputList] = useState([{ medicineName: "", medicineQuantity: "" }]);
    const {token} = useSelector(state => state.auth)
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [members, setMembers] = useState([])
    const [urgency, setUrgency] = useState('')
    const [memberId, setMemberId] = useState('')
    const [document, setDocument] = useState()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!urgency || !memberId || !document) {
            setError('All fields are mendatory.')
            return
        }
        // const sl = []
        // const formData2 = new FormData()
        // inputList.forEach(input => {
            
        // });
        // inputList.map(input => {
        //     return formData2.append()
        // })
        const formData = new FormData()
        formData.append('urgency', urgency)
        formData.append('member_id', memberId)
        formData.append('document', document, document.name)
        formData.append('medicines', JSON.stringify(inputList))
        // const res = await server.post('request/list', formData, {
        //     headers: {
        //         Authorization: `Bearer ${token}`
        //     }
        // })
        // if (res.status != 200) {
        //     setError('Error occured.')
        // }
        const res = await server.post(
            "apply-medicine-request/", formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
        navigate('/requests')
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
    }, [])

    return (
        <div>
            <div className='space-y-6 ml-[255px] p-20'>
                <div className=' w-9/12 space-y-10'>
                    <h1 className='text-3xl'>Request Medicine Section </h1>
                    <form className='space-y-8' onSubmit={handleSubmit}>
                        
                        <RequestMedicine inputList={inputList} setInputList={setInputList} />
                        <div className='space-y-6'>
                            {error && <p className=" text-red-500">{error}</p>}
                            <div className='grid grid-cols-2 gap-6'>
                                <div className="form-group flex flex-col">
                                    <label className='form-label' htmlFor="Urgency">Urgancy</label>
                                    <select name="urgency" id="urgency" value={urgency} onChange={(e) => setUrgency(e.target.value)}>
                                        <option>Select an Option</option>
                                        <option value="1">Urgent</option>
                                        <option value="0">Less Urgent</option>
                                    </select>
                                </div>
                                <div className="form-group flex flex-col">
                                    <label className='form-label' htmlFor="Urgency">Urgancy</label>
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
                            <button type='submit' className='bg-success text-white py-[6px] px-4 hover:bg-opacity-75 flex items-center space-x-2'>
                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_147_2643)">
                                        <rect width="14" height="14" transform="translate(0 0.400391)" fill="white" fillOpacity="0.01" />
                                        <path d="M7.46838 1.77539H6.53088C6.44755 1.77539 6.40588 1.81706 6.40588 1.90039V6.80664H1.75C1.66667 6.80664 1.625 6.84831 1.625 6.93164V7.86914C1.625 7.95248 1.66667 7.99414 1.75 7.99414H6.40588V12.9004C6.40588 12.9837 6.44755 13.0254 6.53088 13.0254H7.46838C7.55172 13.0254 7.59338 12.9837 7.59338 12.9004V7.99414H12.25C12.3333 7.99414 12.375 7.95248 12.375 7.86914V6.93164C12.375 6.84831 12.3333 6.80664 12.25 6.80664H7.59338V1.90039C7.59338 1.81706 7.55172 1.77539 7.46838 1.77539Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_147_2643">
                                            <rect width="14" height="14" fill="white" transform="translate(0 0.400391)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span>
                                    Request Medicine
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default MemberCreate