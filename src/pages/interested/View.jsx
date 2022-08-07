import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import server from '../../lib/server'

function InterestedView(props) {
  const {token} = useSelector(state => state.auth)
    const {Id} = useParams()
    const navigate = useNavigate();
    const [interested, setInterested] = useState({})


    useEffect(() => {
        const {data} = server.get(`interest/crud/${Id}`, {
          headers: {
              Authorization: `Bearer ${token}`
          }
      })
        // console.log(data, 'data');
        setInterested(data)
    }, [])
    
  return (
    <>
    {interested && interested.id}
    </>
  )
}

export default InterestedView