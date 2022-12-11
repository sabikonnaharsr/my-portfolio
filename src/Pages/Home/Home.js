import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Education from '../Education/Education';
import MyProjects from '../MyProjects/MyProjects';
import ProjectDetails from '../ProjectDetails/ProjectDetails';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import YoitDetails from '../YoitDetails/YoitDetails';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects> 
            <MyProjects></MyProjects>
            <YoitDetails></YoitDetails>
        </div>
    );
};

export default Home;