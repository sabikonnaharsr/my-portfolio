import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  
  
    return (
        <div>
           <header aria-label="Site Header" className="border-b border-gray-100">
            <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
            <div className="flex items-center">
          <div class="dropdown">
         <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
 

        <ul tabindex="1" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/myReview'>My Review</Link></li>
            <li><Link to='/appointment'>Appointments</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </div>               
    {/* dropdown end*/}
    
    <form class="mb-0 hidden lg:flex">
        <div class="relative">
          <h1 className='text-cyan-600 font-bold text-3xl'>Sabikonnahar</h1>
        </div>
      </form>
          </div>
            <div className="flex flex-1 items-center justify-end">
            <nav aria-label="Site Nav"
              className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500">
                <Link
                to="/about"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
               About
                </Link>

                <Link
                to="/resume"
                className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                Resume
                </Link>

                <Link
                    to="/projects"
                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                    Projects
                </Link>

                <Link
                    to="/contact"
                    className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                    Contact
                </Link>
               
            </nav>

          <div className="ml-8 flex items-center">
           

        {/* sidebar */}
           <label htmlFor="dashboard-drawer" tabindex="2" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>  
        {/* sidebar end */}
     </div> 
    </div>
  </div>
</header>
</div>
);
};

export default Navbar;