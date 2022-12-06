import React from 'react';
import {FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn} from 'react-icons/fa'
const About = () => {
    return (
        <div>
            <section>
                <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                    <div class="max-w-3xl">
                    <h2 class="text-3xl text-center font-bold sm:text-4xl">
                       About Me
                    </h2>
                    </div>

                    <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                        <img
                        alt="Party"
                        src="https://images.unsplash.com/photo-1496843916299-590492c751f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
                        class="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div class="lg:py-16">
                        <article class="space-y-4 text-gray-600">
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
                            hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
                            minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
                            explicabo quidem voluptatum voluptas illo accusantium ipsam quis,
                            vel mollitia? Vel provident culpa dignissimos possimus, perferendis
                            consectetur odit accusantium dolorem amet voluptates aliquid,
                            ducimus tempore incidunt quas. Veritatis molestias tempora
                            distinctio voluptates sint! Itaque quasi corrupti, sequi quo odit
                            illum impedit!
                        </p>
                         <div className='flex items-center justify-between'>
                          <a target="_blank" href="https://drive.google.com/file/d/1lBFRM7SXJutRups90e6q2ZDFDHHH9ti1/view?usp=share_link"><button className='btn btn-primary rounded-full'>Download Resume</button></a>
                         <div className='flex gap-x-8'>
                            <a target="_blank" className='text-3xl hover:text-[#171515]' href="https://github.com/sabikonnaharsr"><FaGithub></FaGithub>
                            </a>
                            <a  target="_blank" className='text-3xl hover:text-[#0072b1]' href="https://www.linkedin.com/in/sabikon-nahar-7002591b3/"><FaLinkedinIn></FaLinkedinIn></a>
                            <a target="_blank" className='text-3xl hover:text-[#3b5998] ' href="https://www.facebook.com/sabikon.nahar.792/"><FaFacebook></FaFacebook></a>
                         </div>
                         </div>
                      </article>
                    </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;