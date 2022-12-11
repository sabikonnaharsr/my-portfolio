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
      projectDetails: "A dress (also known as a frock or a gown) is a garment traditionally worn by women or girls consisting of a skirt with an attached bodice (or a matching bodice giving the effect of a one-piece garment). It consists of a top piece that covers the torso and hangs down over the legs.",
      link: 'https://bytecode-velocity-client.web.app/'

    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1481980235850-66e47651e431?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d2VkZGluZyUyMHBob3Rvc3xlbnwwfDF8MHx8&auto=format&fit=crop&w=500&q=60",
      projectName: "Motion Times",
      projectDetails: "Also known as bridal or wedding consultants, wedding planners are responsible for assisting clients in planning entire weddings or specific wedding activities. They discuss wedding logistics with clients, negotiate vendor contracts, and ensure that wedding-day activities run smoothly.",
      link: "https://sequel-extract.web.app/"

    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1615540732322-4ae8deb97091?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjZ8fGJvb2tzJTIwcGhvdG9zfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      projectName: "Explore Knowledge",
      projectDetails: "As an intellectual object, a book is prototypically a composition of such great length that it takes a considerable investment of time to compose and still considered as an investment of time to read. In a restricted sense, a book is a self-sufficient section or part of a longer composition, a usage reflecting that, in antiquity, long works had to be written on several scrolls and each scroll had to be identified by the book it contained.",
      link: "https://router-firebase-assignme-518f8.firebaseapp.com/"
    },
  ]


  return (

    <div className='px-4 lg:px-24 my-20'>
      <h1 className='text-slate-500 font-bold text-3xl my-20 text-center'>Here are my some of my projects</h1>
      <div className='mb-10'>
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false

          }}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          // slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          {
            projectData.map(project => <SwiperSlide><a target="_blank" href={project.link} className="group rounded-sm pb-10 relative block bg-black h-[450px]">
              <img
                alt="Developer"
                src={project.img}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-8">
                {/* <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                            DFGH
                          </p>
                       */}
                <p className="text-2xl font-bold text-white">{project.projectName}</p>

                <div className="mt-64">
                  <div
                    className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <p className="text-sm text-white">
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