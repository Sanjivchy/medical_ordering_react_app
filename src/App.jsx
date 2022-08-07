import React, { useState } from "react";
import { Route, Routes, useLocation } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ChangePassword from "./pages/auth/ChangePassword";
import Dashboard from './pages/dashboard/Index'

import MemberCreate from './pages/members/Create'
import MemberEdit from './pages/members/Edit'
import MemberView from './pages/members/View'
import MemberList from './pages/members/List'

import DonorCreate from './pages/donors/Create'
import DonorEdit from './pages/donors/Edit'
import DonorView from './pages/donors/View'
import DonorList from './pages/donors/List'

import RequestCreate from './pages/requests/Create'
import RequestEdit from './pages/requests/Edit'
import RequestView from './pages/requests/View'
import RequestList from './pages/requests/List'

import MedicineCreate from './pages/medicines/Create'
import MedicineEdit from './pages/medicines/Edit'
import MedicineView from './pages/medicines/View'
import MedicineList from './pages/medicines/List'

import InterestedCreate from './pages/interested/Create'
import InterestedEdit from './pages/interested/Edit'
import InterestedView from './pages/interested/View'
import InterestedList from './pages/interested/List'

import Page404 from './pages/Page404'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import server from "./lib/server";
import { setUser } from "./store/auth/authSlice";

function App() {
  const dispatch = useDispatch()
  const {token} = useSelector(state => state.auth)

  const fetchUserData = async () => {
    console.log('fetch data');
    const res = await server.get('userprofile/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    console.log(res.data, 'user');
    dispatch(setUser(res.data))
  }

  useEffect(() => {
    // if(token) fetchUserData()
    if (token) {
      fetchUserData()
      setInterval(() => {
        fetchUserData()
      },[60000])
    }
  }, [])
  
  useEffect(() => {
    if (token) {
      fetchUserData()
      setInterval(() => {
        fetchUserData()
      },[60000])
    }
  }, [token])
  
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/login" element={<Login />}  />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/change-password" element={<ChangePassword />} />

      {token && (
        <>
          <Route exact path="/members" element={<MemberList />} />
          <Route exact path="/members/create" element={<MemberCreate />} />
          <Route exact path="/members/:Id/" element={<MemberView />} />
          <Route exact path="/members/:Id/edit" element={<MemberEdit />} />

          <Route exact path="/donors" element={<DonorList />} />
          <Route exact path="/donors/create" element={<DonorCreate />} />
          <Route exact path="/donors/:Id/" element={<DonorView />} />
          <Route exact path="/donors/:Id/edit" element={<DonorEdit />} />

          <Route exact path="/requests" element={<RequestList />} />
          <Route exact path="/requests/create" element={<RequestCreate />} />
          <Route exact path="/requests/:Id/" element={<RequestView />} />
          <Route exact path="/requests/:Id/edit" element={<RequestEdit />} />
          
          <Route exact path="/medicines" element={<MedicineList />} />
          <Route exact path="/medicines/create" element={<MedicineCreate />} />
          <Route exact path="/medicines/:Id/" element={<MedicineView />} />
          <Route exact path="/medicines/:Id/edit" element={<MedicineEdit />} />
          
          <Route exact path="/interested" element={<InterestedList />} />
          <Route exact path="/interested/create" element={<InterestedCreate />} />
          <Route exact path="/interested/:Id/" element={<InterestedView />} />
          <Route exact path="/interested/:Id/edit" element={<InterestedEdit />} />
        </>
      )
      }

      <Route path="*" element={<Page404 />} />
    </Routes>
    </>
  );
}

export default App;
