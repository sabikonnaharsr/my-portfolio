import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../Pages/Home/SideBar/SideBar';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <div className='fixed left-0 top-0 z-50 hidden lg:block'>
                <SideBar></SideBar>
            </div>
            <div className='block lg:hidden'>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
        </div>

    );
};

export default Main;