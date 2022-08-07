import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import server from '../../lib/server'

function DonorList() {
    const {token} = useSelector(state => state.auth)
    const [donors, setDonors] = useState([])

    const listDonors = async () => {
        const res = await server.get('donar/list', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        // console.log(res);
        setDonors(res.data);
    }

    useEffect(() => {
        listDonors();
    }, [])

    const handleDelete = async (id) => {
        const res = await server.delete(`donar/crud/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        listDonors();
    }
    
    const handleApprove = async (id, name, email) => {
        const res = await server.post(`approve-donar-email/`, {
            id:id,
            name:name,
            email: email
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        listDonors();
    }

    return (
        <>
            <div className='max-w-5xl ml-[255px] p-10  space-y-6'>
                <h1 className="text-2xl">List Donor</h1>
                <Link to={`/donors/create`} className="border bg-blue-500 text-white mr-1 px-4 py-1" >
                    Create
                </Link>
                <table className='custom-table table-fixed w-full'>
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Organization Name</th>
                            <th>Status</th>
                            <th>Mobile no</th>
                            <th>Email</th>
                            <th>Location</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donors && donors.map((donor, key) => {
                            return (
                                <tr key={key}>
                                    <td>{key + 1}</td>
                                    <td>{donor.name}</td>
                                    <td>{donor.accepted ? 'Accepted': 'Waiting Approval'}</td>
                                    <td>{donor.mobile_no}</td>
                                    <td>{donor.email}</td>
                                    <td>{donor.district_name},{donor.gaupalika_name}</td>
                                    <td>
                                        <div className=' group relative'>
                                            <div className='border border-gray-10 rounded-full w-9 h-9 flex items-center justify-center'>
                                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7.90036 7.80488C8.82917 7.80488 9.57221 8.78049 9.57221 10C9.57221 11.2195 8.82917 12.1951 7.90036 12.1951C6.97156 12.1951 6.22852 11.2195 6.22852 10C6.22852 8.78049 6.97156 7.80488 7.90036 7.80488ZM6.22852 2.19512C6.22852 3.41463 6.97156 4.39024 7.90036 4.39024C8.82917 4.39024 9.57221 3.41463 9.57221 2.19512C9.57221 0.97561 8.82917 0 7.90036 0C6.97156 0 6.22852 0.97561 6.22852 2.19512ZM6.22852 17.8049C6.22852 19.0244 6.97156 20 7.90036 20C8.82917 20 9.57221 19.0244 9.57221 17.8049C9.57221 16.5854 8.82917 15.6098 7.90036 15.6098C6.97156 15.6098 6.22852 16.5854 6.22852 17.8049Z" fill="#8B83BA" />
                                                </svg>
                                            </div>
                                            <div className='invisible opacity-0 z-20 absolute -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-transform duration-300 '>
                                                <div className='flex flex-col bg-white shadow-lg rounded-lg'>
                                                    <Link to={`/donors/${donor.id}/`} className='text-sm text-primary px-6 py-3 hover:bg-gray-50'>View Detail</Link>
                                                    <button className='text-sm text-primary px-6 py-3 text-left hover:bg-gray-50' onClick={() => handleApprove(donor.id, donor.name, donor.email)} >Approve</button>
                                                    <Link to={`/donors/${donor.id}/edit`} className='text-sm text-primary px-6 py-3 hover:bg-gray-50' >
                                                        Edit
                                                    </Link>
                                                    <button className='text-sm text-[#D30000] px-6 py-3 text-left hover:bg-gray-50' onClick={() => handleDelete(donor.id)}>Reject</button>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default DonorList