import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams, Link } from 'react-router-dom'
import server from '../../lib/server'

function MedicineView(props) {
  const { token } = useSelector(state => state.auth)
  const { Id } = useParams()
  const navigate = useNavigate();
  const [medicine, setMedicine] = useState({})
  const getdata = async () => {
    const { data } = await server.get(`medicine/crud/${Id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(data, 'data');
    setMedicine(data)
  }

  useEffect(() => {
    getdata();
  }, [])

  return (
    <>
      <div className='ml-[255px] p-10'>
        <Link to="/medicine" className="flex items-center  space-x-2">
          <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.75 5.25095H3.81045L7.7802 1.2812L6.7197 0.220703L0.939453 6.00095L6.7197 11.7812L7.7802 10.7207L3.81045 6.75095H14.75V5.25095Z" fill="black" />
          </svg>
          <span>back</span>
        </Link>
        <h3 className='text-primary font-bold  text-2xl'>Approve Medicine Request</h3>
        <div className='shadow-xl bg-white m-10 p-10 max-w-4xl mx-auto'>
          {medicine &&
            <div>
              <div className='flex justify-between items-center pb-4'>
                <div className='text-xs flex items-center'>
                  <p>urgency:</p>
                  <p className='bg-[#FFC107] text-white uppercase rounded-full text-[10px] py-[5px] px-[10px]'>Urgent</p>
                </div>
                <p className='text-xs uppercase'>
                  <span>Status: </span>
                  <span>{medicine.status}</span>
                  </p>
                <p className='text-xs uppercase'>{medicine.request_date}</p>
              </div><span>{medicine.status}</span>
              <div className='text-center text-2xl text-primary font-bold'>
                <span>Reuested By: </span>
                <span>{medicine.request_id}</span>
              </div>
              <div className='text-center text-2xl text-primary font-bold pt-2'>
                Request Number
              </div>
              <div className='text-center capitalize text-[#4F4F4F]'>
                <div>
                  <span>Medicine name: </span>
                  <span>{medicine.medicine_name} / ID: {medicine.id}</span>
                </div>
                <div>
                  <span>Medicine Quantity: </span>
                  <span>{medicine.quantity}</span>
                </div>
              </div>

              {/* <div>
                <span>Interested:</span>
                <span>{medicine.interested}</span>
              </div> */}
            </div>
          }

        </div>
      </div>
    </>
  )
}

export default MedicineView