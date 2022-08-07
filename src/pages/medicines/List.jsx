import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import server from '../../lib/server'

function MedicineList() {
    const {token} = useSelector(state => state.auth)
    const [medicines, setMedicines] = useState([])

    const listRequest = async () => {
        const res = await server.get('medicine/list', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res);
        setMedicines(res.data);
    }

    useEffect(() => {
        listRequest();
    }, [])

    const handleDelete = async (id) => {
        const res = await server.delete(`medicine/crud/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        listRequest();
    }
    
    const handleApprove = async (id) => {
        const res = await server.post(`approve-medicine/`, {
            id: id
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        listRequest();
    }

    return (
        <>
            <div className='ml-[255px] p-10 max-w-5xl'>
                <h1 className="text-2xl">Medicine Requests</h1>
                <Link to={`/medicines/create`} className="border bg-blue-500 text-white mr-1 px-4 py-1" >
                    Create
                </Link>
                <div className='grid lg:grid-cols-2 gap-10 pt-10'>
                    {medicines && medicines.map((medicine, key) => {
                        return (
                            <div key={key}>
                                <div className='bg-white shadow-lg p-4 rounded-lg'>
                                    <div className='flex justify-between items-center'>
                                        <p className='bg-[#FFC107] py-[5px] px-[10px] rounded-full text-[10px] uppercase text-white'>urgent</p>
                                        <p className='text-sm text-[#4F4F4F]' >{medicine.request_date}</p>
                                    </div>
                                    <p className='text-center text-2xl font-bold capitalize'>{medicine.medicine_name}</p>
                                    <p className='text-center text-sm text-[#4F4F4F] pt-1'>{medicine.quantity}medicine</p>
                                    <div className='flex justify-between items-center'>
                                        <p className='font-bold text-[#4F4F4F]'>Requested By:{medicine.request_id}</p>
                                        <p className='text'>
                                            <Link to={`/medicines/${medicine.id}/`} className="flex items-center">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 20C18.2091 20 20 18.2091 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2091 13.7909 20 16 20Z" fill="#313131" />
                                                    <path d="M30.9396 15.66C29.7634 12.6176 27.7216 9.98662 25.0664 8.09209C22.4112 6.19756 19.2591 5.12257 15.9996 5C12.7401 5.12257 9.58796 6.19756 6.93278 8.09209C4.27759 9.98662 2.23574 12.6176 1.05957 15.66C0.980142 15.8797 0.980142 16.1203 1.05957 16.34C2.23574 19.3824 4.27759 22.0134 6.93278 23.9079C9.58796 25.8024 12.7401 26.8774 15.9996 27C19.2591 26.8774 22.4112 25.8024 25.0664 23.9079C27.7216 22.0134 29.7634 19.3824 30.9396 16.34C31.019 16.1203 31.019 15.8797 30.9396 15.66ZM15.9996 22.5C14.714 22.5 13.4573 22.1188 12.3884 21.4046C11.3194 20.6903 10.4863 19.6752 9.99436 18.4874C9.50239 17.2997 9.37367 15.9928 9.62447 14.7319C9.87527 13.471 10.4943 12.3128 11.4034 11.4038C12.3124 10.4948 13.4706 9.8757 14.7315 9.6249C15.9924 9.37409 17.2993 9.50281 18.487 9.99478C19.6747 10.4868 20.6899 11.3199 21.4041 12.3888C22.1184 13.4577 22.4996 14.7144 22.4996 16C22.4969 17.7231 21.8113 19.3749 20.5928 20.5933C19.3744 21.8117 17.7227 22.4974 15.9996 22.5Z" fill="#313131" />
                                                </svg>
                                                <span>view Detail</span>
                                            </Link>
                                        </p>
                                    </div>
                                    <div className='flex justify-between items-center text-sm pt-10'>
                                        <button className="border rounded-lg bg-white border-[#D9D9D9] text-black text-sm mr-1 px-4 py-1" onClick={() => handleDelete(medicine.id)}>
                                            Reject Request
                                        </button>
                                        <Link className='px-4 py-1 rounded-lg text-white bg-primary' to={`/medicines/${medicine.id}/edit`}  >
                                            Edit
                                        </Link>
                                        <button onClick={() => handleApprove(medicine.id)} className='px-4 py-1 rounded-lg text-white bg-[#3B8B6F]'>Accept Request</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MedicineList