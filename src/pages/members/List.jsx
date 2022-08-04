import React from 'react'
import { useState, useEffect } from 'react'
import server from '../../lib/server'

function MemberList() {
    const [members, setMembers] = useState([])

    const listMembers = () => {
        const res = server.get('member/list')
        console.log(res.data);
        setMembers(res.data);
    }

    useEffect(() => {
        listMembers();
    }, [])

    const handleDelete = (id) => {
        const res = server.delete(`member/crud/${id}`)
        listMembers();
    }
    
  return (
    <>
        <table className='text-white'>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {members && members.map((member, key) => {
                    <tr key={key}>
                        <td>{member.name}</td>
                        <td>{member.email}</td>
                        <td>
                            <button className="border bg-red" onClick={handleDelete(member.id)}>
                                Delete
                            </button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
    </>
  )
}

export default MemberList