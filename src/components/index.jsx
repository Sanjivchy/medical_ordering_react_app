import { useLocation } from "react-router-dom";
import React from 'react'
import Sidebar from '../components/SidebarUi/index'
import Navbar from '../components/navBar/Index'
function index() {
    const location = useLocation();
    console.log(location.pathname)
    let sidebar , navbar;
    if(location.pathname === '/'){
        sidebar = null
        navbar =null

    }else if(location.pathname === '/login'){
        sidebar = null
        navbar =null

    }else if(location.pathname === '/register'){
        sidebar = null
        navbar =null

    }
    else{
        sidebar= <Sidebar/> 
        navbar =<Navbar/>

    }
  return (
    <div>
        {sidebar}
        {navbar}
    </div>
  )
}

export default index