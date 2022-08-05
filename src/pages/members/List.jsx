import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import server from '../../lib/server'

function MemberList() {
    const [members, setMembers] = useState([])

    const listMembers = async () => {
        const res = await server.get('member/list')
        console.log(res);
        setMembers(res.data);
    }

    useEffect(() => {
        listMembers();
    }, [])

    const handleDelete = async (id) => {
        const res = await server.delete(`member/crud/${id}`)
        listMembers();
    }
    
  return (
    <>
    <h1 className="text-3xl">List Member</h1>
        <Link to={`/members/create`} className="border bg-blue-500 text-white mr-1 px-4 py-1" >
            Create
        </Link>
        <table className='table'>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {members && members.map((member, key) => {
                    return (
                    <tr key={key}>
                        <td>{member.name}</td>
                        <td>{member.email}</td>
                        <td>
                            <Link to={`/members/${member.id}/edit`} className="border bg-yellow-500 text-white mr-1 px-4 py-1" >
                                Edit
                            </Link>
                            <button className="border bg-red-500 text-white px-4 py-1" onClick={() => handleDelete(member.id)}>
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

export default MemberList