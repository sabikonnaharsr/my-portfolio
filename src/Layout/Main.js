import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from '../Pages/Home/SideBar/SideBar';
import SocialMediaControler from '../Pages/Home/SocialMediaControler/SocialMediaControler';
import SocialMediaIcon from '../Pages/Home/SocialMediaIcon/SocialMediaIcon';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className='fixed left-0 top-0 z-50 hidden lg:block'>
                <SideBar></SideBar>
            </div>
            <div className='block lg:hidden'>
                <Navbar></Navbar>
            </div>
            <div className={`fixed bottom-5 left-1/2 z-50 ${!open && 'hidden'}`}>
                <SocialMediaIcon></SocialMediaIcon>
            </div>
            <div className='fixed top-10 right-10 z-50'>
                <SocialMediaControler
                    open={open}
                    setOpen={setOpen}
                ></SocialMediaControler>
            </div>
            <Outlet></Outlet>
        </div>

    );
};

export default Main;