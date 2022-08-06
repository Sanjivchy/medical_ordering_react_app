import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import server from '../../lib/server'

function DonorView(props) {
  const {token} = useSelector(state => state.auth)
    const {Id} = useParams()
    const navigate = useNavigate();
    const [donor, setDonor] = useState()


    useEffect(() => {
        const {data} = server.get(`donar/crud/${Id}`,{
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
        console.log(data, 'data');
        setDonor(data)
    }, [])
    
  return (
    <>
    {donor && donor.name}
    </>
  )
}

export default DonorView