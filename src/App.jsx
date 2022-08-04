import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/dashboard/Index'
import MemberCreate from './pages/members/Create'
import MemberEdit from './pages/members/Edit'
import MemberList from './pages/members/List'
import DonerCreate from './pages/members/Create'
import DonerEdit from './pages/members/Edit'
import DonerList from './pages/members/List'
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
    <Route exact path="/members/:id/edit" element={<MemberEdit />} />
    <Route exact path="/doners" element={<DonerList />} />
    <Route exact path="/doners/create" element={<DonerCreate />} />
    <Route exact path="/doners/:id/edit" element={<DonerEdit />} />

    <Route path="*">
        <Page404 />
    </Route>
  </Routes>
    </>
  );
}

export default App;
