import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/css/pagination';

const Projects = () => {
    const projectData = [
        {
            id: 1,
            img: "https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8302.jpg?w=360&t=st=1670317557~exp=1670318157~hmac=1cb126d3da35f6cadec71878061bb06eb5d851218825af4e005a5bc05d7cf192",
            projectName: "Yoit",
            projectDetails: "Dressdkglgtl;hky;'d jrs",
            link: 'https://bytecode-velocity-client.web.app/'

        },
        {
            id: 2,
            img: "https://images.unsplash.com/photo-1481980235850-66e47651e431?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZyUyMHBob3Rvc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
            projectName: "Motion Times",
            projectDetails: "Wedding organization",
            link: "https://sequel-extract.web.app/"

        },
        {
            id: 3,
            img: "https://images.unsplash.com/photo-1615540732322-4ae8deb97091?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGJvb2tzJTIwcGhvdG9zfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
            projectName: "Explore Knowledge",
            projectDetails: "How can we enhance our knowledge by reading books",
            link: "https://router-firebase-assignme-518f8.firebaseapp.com/"
        },
    ]


    return (
        <div className='lg:px-24 mb-10'>
            <h1 className='text-slate-500 font-bold text-3xl my-20 text-center'>Here are my some of my projects</h1>
            <div className='mb-10'>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false

                    }}
                    pagination={{ clickable: true }}
                    modules={[Navigation,Pagination, Autoplay]}
                    spaceBetween={50}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                   
                    {
                        projectData.map(project=> <SwiperSlide><a target="_blank" href={project.link} class="group rounded-sm pb-10 relative block bg-black">
                        <img
                          alt="Developer"
                          src={project.img}
                          class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                        />
                      
                        <div class="relative p-8">
                          {/* <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                            DFGH
                          </p>
                       */}
                          <p class="text-2xl font-bold text-white">{project.projectName}</p>
                      
                          <div class="mt-64">
                            <div
                              class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                              <p class="text-sm text-white">
                                {project.projectDetails}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                      </SwiperSlide>)
                    }
                  </Swiper>
               
            </div>
        </div>
    );
};

export default Projects;