import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import server from '../../lib/server'

function MemberCreate(props) {
    const {token} = useSelector(state => state.auth)
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const [donors, setDonors] = useState([])
    const [medicines, setMedicines] = useState([])
    const [donorId, setDonorId] = useState('')
    const [medicineId, setmedicineId] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!donorId || !medicineId) {
            setError('All fields are mendatory.')
            return
        }
        const res = await server.post('interest/list', {
            medicine: medicineId,
            interested: donorId
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        if(res.status != 200) {
            setError('Error occured.')
        } 
        navigate('/interested')
    }

    const listMedicines = async () => {
        const res = await server.get('medicine/list', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res);
        setMedicines(res.data);
    }
    const listDonors = async () => {
        const res = await server.get('doner/list', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res);
        setDonors(res.data);
    }

    useEffect(() => {
        listMedicines()
        listDonors()
    }, [])
    
  return (
    <div className='flex h-screen w-screen'>
        <div className=' flex-1 flex justify-center items-center'>
            <div className='px-[48px] border border-[##E2E5E9] rounded-md m-auto'>
                <div className='space-y-6 py-[118px] px-[75px]'>
                    <div className='space-y-6'>
                        <h1 className='text-3xl'>Create Interested</h1>
                        <form className='space-y-8' onSubmit={handleSubmit}>
                            <div className='space-y-6'>
                                {error && <p className=" text-red-500">{error}</p>}
                                <div className="form-group flex flex-col">
                                    <label htmlFor="medicine">Medicine</label>
                                    <select name="medicine" id="medicine" value={medicineId} onChange={(e) => setmedicineId(e.target.value)}>
                                        <option>Select an Option</option>
                                        {medicines && medicines.map((medicine) => {
                                            return (
                                                <option key={medicine.id} value={medicine.id}>{medicine.medicine_name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="form-group flex flex-col">
                                    <label htmlFor="donor">Interest</label>
                                    <select name="donor" id="donor" value={donorId} onChange={(e) => setDonorId(e.target.value)}>
                                        <option>Select an Option</option>
                                        {donors && donors.map((donor) => {
                                            return (
                                                <option key={donor.id} value={donor.id}>{donor.name}</option>
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

export default MemberCreate