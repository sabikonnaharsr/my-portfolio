import React from 'react';
import { FaBars } from 'react-icons/fa';
import {IoMdClose} from 'react-icons/io'
import {BsFillShareFill} from 'react-icons/bs'

const SocialMediaControler = ({open, setOpen}) => {
    return (
        <div>
            <div onClick={()=> setOpen(!open)} className='w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 border-2 hover:border-orange-500 duration-500 shadow-inner cursor-pointer'>
                {
                    open ? <IoMdClose className='text-xl text-black'></IoMdClose> : <BsFillShareFill className='text-lg text-black'></BsFillShareFill>
                }
            </div>
        </div>
    );
};

export default SocialMediaControler;