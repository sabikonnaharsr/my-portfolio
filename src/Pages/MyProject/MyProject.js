import React from 'react';
import { Link } from 'react-router-dom';

const MyProject = ({ projectData }) => {
  const { img, liveLink, gitHubLink, serverLink, route, id, projectName } = projectData;

  return (
    <div>
      <a href="" class="group relative block h-96">
        <span class="absolute inset-0 border-2 border-dashed border-black"></span>
        <div
          class="relative flex h-full transform items-center border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2"
        >

          <img className='object-cover object-center w-full h-96 bg-gray-500' src={img} alt="" />


          <div
            className="absolute left-24 p-8 opacity-0 transition-opacity  group-hover:opacity-100 text-center"
          >
            <div className='text-center'>
              <h2 class="mt-6 text-3xl text-white font-bold hover:text-slate-500">{projectName}</h2>
              <div>
                <Link to='/liveLink' className="mt-4 mb-4 hover:text-pink-700 font font-medium text-xl text-white ">
                  Live Link
                </Link>
              </div>
              <div>
                <Link to="/gitHubLink" className="mt-4 mb-4 hover:text-pink-700 text-white text-xl">
                  Github Link
                </Link>
              </div>
              <div>
                <Link to="/serverLink" className="mt-4 mb-4 hover:text-pink-700 text-white text-xl">
                  Server Link
                </Link>
              </div>

            </div>
            <Link to={route} class="mt-4 text-center font-medium">Details</Link>
          </div>
        </div>
      </a>
    </div>
  );
};

export default MyProject;