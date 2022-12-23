import React, { useState } from 'react';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { AiFillHome, AiOutlineUser } from 'react-icons/ai';
import { FaHeartbeat, FaBriefcase, FaBloggerB } from 'react-icons/fa';
import { TiContacts } from 'react-icons/ti';
import { NavLink } from 'react-router-dom';


const SideBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className={`${open ? 'w-48' : 'w-20'} h-screen bg-gray-100 relative p-5 pt-8 duration-300 hidden lg:block`}>
                <div onClick={() => setOpen(!open)} className='bg-gray-500 -right-4 rounded-full top-9 z-50 w-7 h-7 flex items-center justify-center absolute cursor-pointer'>
                    <MdOutlineKeyboardArrowLeft
                        className={`text-xl text-white ${!open && 'rotate-180'}`}
                    ></MdOutlineKeyboardArrowLeft>
                </div>
                <div className=''>
                    <NavLink to='/' className='group flex gap-x-4 items-center'>
                        <div className='flex rounded-full'>
                            <AiFillHome className={`text-xl text-black cursor-pointer duration-500`}></AiFillHome>
                        </div>
                        <h1 className={`text-2xl duration-300 font-semibold origin-left text-black ${!open && 'scale-0'}`}>Portfolio</h1>
                    </NavLink>
                </div>
                <ul className='flex flex-col gap-x-4 items-center mt-5'>
                    <li className='group w-full hover:bg-gray-50 py-1 mt-3 hover:translate-x-1  duration-300'>
                        <NavLink to='/about' className={({ isActive }) => isActive ? "flex items-center gap-x-4 border-b-4 border-green-500" : 'flex items-center gap-x-4 hover:border-b-4 border-green-500'}>
                            <div>
                                <AiOutlineUser className='text-xl text-black cursor-pointer duration-500 group-hover:text-black'></AiOutlineUser>
                            </div>
                            <h1 className={`text-xl text-black duration-300 font-semibold origin-left group-hover:text-black ${!open && 'scale-0'}`}>About</h1>
                        </NavLink>
                    </li>
                    <li className='group w-full hover:bg-gray-200 py-1 mt-3 hover:translate-x-1 duration-300'>
                        <NavLink to='/resume' className={({ isActive }) => isActive ? "flex items-center gap-x-4 border-b-4 border-green-500" : 'flex items-center gap-x-4 hover:border-b-4 border-green-500'}>
                            <div>
                                <FaHeartbeat className='text-xl text-black cursor-pointer duration-500 group-hover:text-black'></FaHeartbeat>
                            </div>
                            <h1 className={`text-xl duration-300 font-semibold origin-left text-black group-hover:text-black ${!open && 'scale-0'}`}>Resume</h1>
                        </NavLink>
                    </li>
                    <li className='group w-full hover:bg-gray-200 py-1 mt-3 hover:translate-x-1 duration-300'>
                        <NavLink to='/projects' className={({ isActive }) => isActive ? "flex items-center gap-x-4 border-b-4 border-green-500" : 'flex items-center gap-x-4 hover:border-b-4 border-green-500'}>
                            <div>
                                <FaBriefcase className='text-xl text-black cursor-pointer duration-500 group-hover:text-black'></FaBriefcase>
                            </div>
                            <h1 className={`text-xl duration-300 font-semibold origin-left text-black group-hover:text-black ${!open && 'scale-0'}`}>Protfolio</h1>
                        </NavLink>
                    </li>
                    <li className='group w-full hover:bg-gray-300 py-1 mt-3 hover:translate-x-1 duration-300'>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? "flex items-center gap-x-4 border-b-4 border-green-500" : 'flex items-center gap-x-4 hover:border-b-4 border-green-500'}>
                            <div>
                                <TiContacts className='text-xl text-black cursor-pointer duration-500 rounded-full group-hover:text-black'></TiContacts>
                            </div>
                            <h1 className={`text-xl duration-300 font-semibold origin-left text-black group-hover:text-black ${!open && 'scale-0'}`}>Contact</h1>
                        </NavLink>
                    </li>
                    <li className='group w-full hover:bg-gray-300 py-1 mt-3 hover:translate-x-1 duration-300'>
                        <NavLink to='/blog' className={({ isActive }) => isActive ? "flex items-center gap-x-4 border-b-4 border-green-500" : 'flex items-center gap-x-4 hover:border-b-4 border-green-500'}>
                            <div>
                                <FaBloggerB className='text-xl text-black cursor-pointer duration-500 rounded-full group-hover:text-black'></FaBloggerB>
                            </div>
                            <h1 className={`text-xl duration-300 font-semibold origin-left text-black group-hover:text-black ${!open && 'scale-0'}`}>Blogs</h1>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;