import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Particle from '../Home/Particles/Particle';
import SideBar from '../Home/SideBar/SideBar';


const Banner = () => {
  return (
    <section>
      <Particle></Particle>
      <div className='fixed left-0 top-0 z-50'>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 lg:py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div
            className="relative h-96 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
          >
            <img
              alt="Party"
              src="https://images.unsplash.com/photo-1621903570450-b6750dce9350?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24 text-center">
            <h2 className="text-2xl lg:text-5xl font-bold text-white mb-3">Sabikonnahar</h2>
            <TypeAnimation
              sequence={[
                'I am a Web Developer', // Types 'One'
                1000, // Waits 1s
                // 'Two', // Deletes 'One' and types 'Two'
                // 2000, // Waits 2s
                'I am a Front End Developer', // Types 'Three' without deleting 'Two'
                () => {
                  console.log('Done typing!'); // Place optional callbacks anywhere in the array
                }
              ]}
              wrapper="p"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '24px', fontWeight: 500, color: 'gray' }}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;