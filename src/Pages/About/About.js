import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'
const About = () => {
    return (
        <div>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 lg:py-16 sm:px-6 sm:py-24 lg:px-8">

                <div class="mx-auto max-w-screen-xl px-4 sm:px-6 sm:py-24 lg:px-8">
                    

                    <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div class="relative h-64 overflow-hidden sm:h-80 lg:h-full">
                            <img
                                alt="Party"
                                src="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                                class="absolute inset-0 h-full w-full object-cover"
                            />
                        </div>

                        <div class="lg:py-16">
                            <h2 className="text-3xl mb-5 text-slate-900 font-bold sm:text-4xl">
                                About Me
                            </h2>
                            <article class="space-y-4 text-gray-900">
                                <p className='mb-10'>
                                    A programmer is someone who writes/creates Web Developer or applications by providing a specific programming language to the computer. Most programmers have extensive computing and coding experience in many varieties of programming languages and platforms, such as Structured Query Language, Extensible Markup Language XML, HTML
                                </p>
                                <div className='flex flex-col lg:flex-row gap-y-4 items-center justify-between lg:mr-14'>
                                    <a target="_blank" href="https://drive.google.com/file/d/1SA_Hev8EHVhEQKdwu1ZT08c8Dgn6uzUO/view?usp=share_link"><button className='btn bg-slate-700 rounded-full'>Download Resume</button></a>
                                    <div className='flex gap-x-8'>
                                        <a target="_blank" className='text-2xl hover:text-[#171515]' href="https://github.com/sabikonnaharsr"><FaGithub></FaGithub>
                                        </a>
                                        <a target="_blank" className='text-2xl hover:text-[#0072b1]' href="https://www.linkedin.com/in/sabikon-nahar-7002591b3/"><FaLinkedinIn></FaLinkedinIn></a>
                                        <a target="_blank" className='text-2xl hover:text-[#3b5998] ' href="https://www.facebook.com/sabikon.nahar.792/"><FaFacebook></FaFacebook></a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>  
        </div>
    );
};

export default About;