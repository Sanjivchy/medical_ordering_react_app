import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/dashboard/Index'
import MemberCreate from './pages/members/Create'
import MemberEdit from './pages/members/Edit'
import MemberList from './pages/members/List'
import DonorCreate from './pages/donors/Create'
import DonorEdit from './pages/donors/Edit'
import DonorList from './pages/donors/List'
import Page404 from './pages/Page404'

function App() {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<Dashboard />} />
    <Route exact path="/login" element={<Login />}  />
    <Route exact path="/register" element={<Register />} />
    <Route exact path="/members" element={<MemberList />} />
    <Route exact path="/members/create" element={<MemberCreate />} />
    <Route exact path="/members/:Id/edit" element={<MemberEdit />} />
    <Route exact path="/donors" element={<DonorList />} />
    <Route exact path="/donors/create" element={<DonorCreate />} />
    <Route exact path="/donors/:Id/edit" element={<DonorEdit />} />

    <Route element={<Page404 />} />
  </Routes>
    </>
  );
}

export default App;
