import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import MyProjects from '../MyProjects/MyProjects';
import Projects from '../Projects/Projects';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            {/* <About></About> */}
            <Projects></Projects> 
            <MyProjects></MyProjects>    
        </div>
    );
};

export default Home;