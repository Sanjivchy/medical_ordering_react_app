import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import server from '../../lib/server'

function DonorList() {
    const [donors, setDonors] = useState([])

    const listMembers = async () => {
        const res = await server.get('donar/list')
        console.log(res);
        setDonors(res.data);
    }

    useEffect(() => {
        listMembers();
    }, [])

    const handleDelete = (id) => {
        const res = server.delete(`donar/crud/${id}`)
        listMembers();
    }
    
  return (
    <>
        <h1 className="text-3xl">List Donor</h1>
        <Link to={`/donors/create`} className="border bg-blue-500 text-white mr-1 px-4 py-1" >
            Create
        </Link>
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {donors && donors.map((donor, key) => {
                    return (
                    <tr key={key}>
                        <td>{donor.name}</td>
                        <td>{donor.email}</td>
                        <td>
                            <Link to={`/donors/${donor.id}/edit`} className="border bg-yellow-500 text-white mr-1 px-4 py-1" >
                                Edit
                            </Link>
                            <button className="border bg-red" onClick={() => handleDelete(donor.id)}>
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

export default DonorList