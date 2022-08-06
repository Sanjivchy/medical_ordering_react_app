import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import server from '../../lib/server'

function InterestedView(props) {
    const {Id} = useParams()
    const navigate = useNavigate();
    const [interested, setInterested] = useState({})


    useEffect(() => {
        const {data} = server.get(`donar/crud/${Id}`)
        console.log(data, 'data');
        setInterested(data)
    }, [])
    
  return (
    <>
    {interested && interested.id}
    </>
  )
}

export default InterestedView