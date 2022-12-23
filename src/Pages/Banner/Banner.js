import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Particle from '../Home/Particles/Particle';
import img from '../../assets/images/sabikon.png'

const Banner = () => {
  return (
    <section>
      <Particle></Particle>
      <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2 px-3 mt-4 lg:mt-10">
        <div
          className="relative rounded-lg lg:order-last h-96 bg-slate-50 lg:w-4/5 drop-shadow-2xl"
        >
          <img
            alt="Party"
            src={img}
            className="h-full w-full object-cover rounded-lg hover:scale-95 duration-300"
          />
        </div>

        <div className="lg:py-24 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-3">Sabikonnahar</h2>
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
    </section>
  );
};

export default Banner;