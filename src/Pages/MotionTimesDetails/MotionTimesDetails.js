import React from 'react';
import { Link } from 'react-router-dom';


const MotionTimesDetails = () => {

    const projectImg = [
        {
            id: 1,
            img: 'https://i.ibb.co/cLFqJyz/screencapture-sequel-extract-web-app-2022-12-11-21-11-32.png'
        },
        {
            id: 2,
            img: 'https://i.ibb.co/JF2X58P/screencapture-sequel-extract-web-app-all-Services-2022-12-11-21-11-57.png'
        },
        {
            id: 3,
            img: 'https://i.ibb.co/vD1NvW0/screencapture-sequel-extract-web-app-services-636e29d84885c740285516f7-2022-12-11-21-12-34.png'
        },
    ]

    return (
        <div className='px-4 lg:px-24'>
             <h1 className='text-4xl font-semibold text-slate-600 text-center'>Motion Times</h1>
            <h1 className='text-3xl font-semibold text-slate-600 text-center mt-10 my-8'>I am going to little bit describe about my project.</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mt-20'>
                {
                    projectImg.map(image => <div
                        key={image.id}
                        className='max-h-[230px] overflow-auto'
                    >
                        <div className='h-auto w-full snap-start' >
                            <img src={image.img} />
                        </div>
                    </div>
                    )
                }
            </div>
            <div className='mt-20'>
                <ul className='lg:w-3/5 text-slate-700'>
                    <li>
                        <span className='text-2xl font-bold text-slate-500'>Technologies:-</span> React, React-router-dom, Tailwind,
                        Daisy Ui, firebase, jsonwebtoken (JWT) for backed Nodejs, Express,
                        MongoDB.
                    </li>
                    <li className='list-disc text-slate-700'>
                        Designed processes for books and performance improvement this site
                        and user friendly.
                    </li>
                    <li className='list-disc text-slate-700'>
                        Usage technologies React, React-router-dom, Tailwind,
                        Daisy Ui, firebase, jsonwebtoken (JWT) for backed Nodejs, Express,
                        MongoDB.
                    </li>
                    <li className='list-disc text-slate-700'>
                        Deployed in firebase and server site hoisting in vercel.
                        Fixed bugs from existing websites and implemented enhancements that
                        significantly improved web functionality and speed
                    </li>
                </ul>
                <div>
                    <ul className='flex gap-x-5 my-8 '>
                        <li className=' hover:text-slate-700 text-2xl text-slate-600 font-semibold'>
                            <a href='https://sequel-extract.web.app/' target='_blank'>Live Link</a>
                        </li>
                        <li className='text-2xl hover:text-slate-700 text-slate-600 font-semibold'>
                            <a href='https://github.com/sabikonnaharsr/Motion-Times-Client' target='_blank'>GitHub Client Link</a>
                        </li>
                        <li className='text-2xl hover:text-slate-700 font-semibold text-slate-600'>
                            <a href='https://github.com/sabikonnaharsr' target='_blank'>GitHub Link</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="fixed right-5 top-5">
                <Link to='/'>
                    <button className="btn btn-square btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default MotionTimesDetails;