import React, { useState } from 'react'
import DonorCreate from '../donors/Create'
import MemberCreate from '../members/Create'

function Register() {
    const [form, setForm] = useState('')
  return (
    
    <>
        {form == '' &&
        <>
        <button onClick={() => setForm('member')}>Register as Member</button>
        <button onClick={() => setForm('donor')}>Register as Donor</button>
        </>}
        {form == 'member' && <MemberCreate />}
        {form == 'donor' && <DonorCreate />}
    </>
  )
}

export default Register