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

    return (
        <>
            <div className='ml-[225px] p-10'>
                <h1 className="text-2xl">Medicine Requests</h1>
                <Link to={`/medicines/create`} className="border bg-blue-500 text-white mr-1 px-4 py-1" >
                    Create
                </Link>
                <table className='table'>
                    <thead>
                        <tr className='font-semibold'>
                            <td>Medicine name</td>
                            <td>Status</td>
                            <td>Quantity</td>
                            <td>Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {medicines && medicines.map((medicine, key) => {
                            return (
                                <tr key={key}>
                                    <td>{medicine.medicine_name}</td>
                                    <td>{medicine.status}</td>
                                    <td>{medicine.quantity}</td>
                                    <td>
                                        <Link to={`/medicines/${medicine.id}/`} className="border bg-yellow-500 text-white mr-1 px-4 py-1" >
                                            Details
                                        </Link>
                                        <Link to={`/medicines/${medicine.id}/edit`} className="border bg-yellow-500 text-white mr-1 px-4 py-1" >
                                            Edit
                                        </Link>
                                        <button className="border bg-red-500 text-white px-4 py-1" onClick={() => handleDelete(medicine.id)}>
                                            Delete
                                        </button>
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

export default MedicineList