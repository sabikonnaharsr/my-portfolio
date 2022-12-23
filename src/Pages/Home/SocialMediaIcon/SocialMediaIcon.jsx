import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const SocialMediaIcon = () => {
    return (
        <div className='w-full mx-auto bg-gray-300 px-5 py-2 rounded-full drop-shadow-2xl'>
            <ul className='flex'>
                <li className='group w-8 h-8 bg-gray-500 hover:bg-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-[#3b5998] hover:scale-110 duration-500 cursor-pointer mx-1'><a href="##"><FaFacebookF className='text-white group-hover:text-[#3b5998]'></FaFacebookF></a></li>
                <li className='group w-8 h-8 bg-gray-500 hover:bg-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-[#00acee] hover:scale-110 duration-500 cursor-pointer mx-1'><a href="##"><FaTwitter className='text-white group-hover:text-[#00acee]'></FaTwitter></a></li>
                <li className='group w-8 h-8 bg-gray-500 hover:bg-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-[#171515] hover:scale-110 duration-500 cursor-pointer mx-1'><a href="##"><FaGithub className='text-white group-hover:text-[#171515]'></FaGithub></a></li>
                <li className='group w-8 h-8 bg-gray-500 hover:bg-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-[#e95950] hover:scale-110 duration-500 cursor-pointer mx-1'><a href="##"><FaInstagram className='text-white group-hover:text-[#e95950]'></FaInstagram></a></li>
                <li className='group w-8 h-8 bg-gray-500 hover:bg-gray-200 rounded-full flex items-center justify-center shadow-lg hover:shadow-[#FF0000] hover:scale-110 duration-500 cursor-pointer mx-1'><a href="##"><FaYoutube className='text-white group-hover:text-[#FF0000]'></FaYoutube></a></li>
            </ul>
        </div>
    );
};

export default SocialMediaIcon;