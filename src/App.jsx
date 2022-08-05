import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ChangePassword from "./pages/auth/ChangePassword";
import Dashboard from './pages/dashboard/Index'

import MemberCreate from './pages/members/Create'
import MemberEdit from './pages/members/Edit'
import MemberList from './pages/members/List'

import DonorCreate from './pages/donors/Create'
import DonorEdit from './pages/donors/Edit'
import DonorList from './pages/donors/List'

import RequestCreate from './pages/requests/Create'
import RequestEdit from './pages/requests/Edit'
import RequestList from './pages/requests/List'

import MedicineCreate from './pages/medicines/Create'
import MedicineEdit from './pages/medicines/Edit'
import MedicineList from './pages/medicines/List'

import Page404 from './pages/Page404'

function App() {
  return (
    <>
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route exact path="/login" element={<Login />}  />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/change-password" element={<ChangePassword />} />

      <Route exact path="/members" element={<MemberList />} />
      <Route exact path="/members/create" element={<MemberCreate />} />
      <Route exact path="/members/:Id/edit" element={<MemberEdit />} />

      <Route exact path="/donors" element={<DonorList />} />
      <Route exact path="/donors/create" element={<DonorCreate />} />
      <Route exact path="/donors/:Id/edit" element={<DonorEdit />} />

      <Route exact path="/requests" element={<RequestList />} />
      <Route exact path="/requests/create" element={<RequestCreate />} />
      <Route exact path="/requests/:Id/edit" element={<RequestEdit />} />
      
      <Route exact path="/medicines" element={<MedicineList />} />
      <Route exact path="/medicines/create" element={<MedicineCreate />} />
      <Route exact path="/medicines/:Id/edit" element={<MedicineEdit />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
    </>
  );
}

export default App;
