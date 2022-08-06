import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import server from '../../lib/server'

function MedicineView(props) {
  const {token} = useSelector(state => state.auth)
    const {Id} = useParams()
    const navigate = useNavigate();
    const [medicine, setMedicine] = useState({})


    useEffect(() => {
        const {data} = server.get(`donar/crud/${Id}`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
        console.log(data, 'data');
        setMedicine(data)
    }, [])
    
  return (
    <>
    {medicine && medicine.id}
    </>
  )
}

export default MedicineView