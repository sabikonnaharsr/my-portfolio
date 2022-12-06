import React from 'react';

const Education = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:px-24 mb-10 mt-20'>
            <div className='shadow-xl hover:shadow-2xl rounded-md p-10'>
                <h1 className='text-cyan-400 font-bold text-3xl mb-4'>Educational Qualification</h1>
                <div className=''>
                    <h3 className='text-xl font-semibold'>Higher Secondary Certificate</h3>
                    <p>Brahmanbaria Govt College</p>
                    <p>From 2017 to 2019</p>
                </div>
            </div>
            <div className='shadow-xl hover:shadow-2xl rounded-md p-10'>
                <h1 className='text-cyan-400 font-bold text-3xl mb-4'>Experience</h1>
                <div className=''>
                    <h3 className='text-xl font-semibold'>Web Developer</h3>
                    <p>Complete Web Development Course</p>
                    <p>Programming Hero</p>
                </div>
            </div>
        </div>
    );
};

export default Education;