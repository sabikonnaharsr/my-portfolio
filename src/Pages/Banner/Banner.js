import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div>
          <section>
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div
                    class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                >
                    <img
                    alt="Party"
                    src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    class="absolute inset-0 h-full w-full object-cover"
                    />
                </div>

                <div class="lg:py-24">
                    <h2 class="text-3xl font-bold sm:text-4xl">Sabikonnahar</h2>
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
      wrapper="div"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em' }}
    />
                   
                </div>
             </div>
            </div>
          </section>
        </div>
    );
};

export default Banner;