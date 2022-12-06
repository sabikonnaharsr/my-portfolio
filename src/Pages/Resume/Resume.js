import React from 'react';

const Resume = () => {
    return (
        <div className='mb-10'>
            <h1 className='text-center mb-10 font-bold text-4xl'>Skills</h1>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 px-24'>
          <div>
                <div className='flex justify-between'>
                    <p>HTML CSS</p>
                    <p>75%</p>
                </div>
               <progress className="progress progress-primary" value="75" max="100"></progress>
            </div>
            <div>
                <div className='flex justify-between'>
                    <p>Tailwind</p>
                    <p>75%</p>
                </div>
               <progress className="progress progress-primary" value="75" max="100"></progress>
            </div>
            <div>
                <div className='flex justify-between'>
                    <p>Bootstrap</p>
                    <p>75%</p>
                </div>
               <progress className="progress progress-primary" value="75" max="100"></progress>
            </div>
            <div>
                <div className='flex justify-between'>
                    <p>Java Script</p>
                    <p>50%</p>
                </div>
               <progress className="progress progress-primary " value="50" max="100"></progress>
            </div>
            <div>
                <div className='flex justify-between'>
                    <p>React</p>
                    <p>50%</p>
                </div>
               <progress className="progress progress-primary" value="50" max="100"></progress>
            </div>
            <div>
                <div className='flex justify-between'>
                    <p>Node Js</p>
                    <p>50%</p>
                </div>
               <progress className="progress progress-primary " value="50" max="100"></progress>
            </div>
            <div>
                <div className='flex justify-between'>
                    <p>Mongo Db</p>
                    <p>50%</p>
                </div>
               <progress className="progress progress-primary" value="50" max="100"></progress>
            </div>     
          </div>
        </div>
    );
};

export default Resume;