import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import server from '../../lib/server'

function RequestList() {
    const [requests, setRequests] = useState([])

    const listRequest = async () => {
        const res = await server.get('request/list')
        console.log(res);
        setRequests(res.data);
    }

    useEffect(() => {
        listRequest();
    }, [])

    const handleDelete = async (id) => {
        const res = await server.delete(`request/crud/${id}`)
        listRequest();
    }
    
  return (
    <>
    <h1 className="text-3xl">List Requests</h1>
        <Link to={`/requests/create`} className="border bg-blue-500 text-white mr-1 px-4 py-1" >
            Create
        </Link>
        <table className='table'>
            <thead>
                <tr className='font-semibold'>
                    <td>Urgency</td>
                    <td>MemberId</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {requests && requests.map((request, key) => {
                    return (
                    <tr key={key}>
                        <td>{request.urgency}</td>
                        <td>{request.member_id}</td>
                        <td>
                            <Link to={`/requests/${request.id}/edit`} className="border bg-yellow-500 text-white mr-1 px-4 py-1" >
                                Edit
                            </Link>
                            <button className="border bg-red-500 text-white px-4 py-1" onClick={() => handleDelete(request.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </>
  )
}

export default RequestList