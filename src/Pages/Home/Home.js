import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactForm from '../ContactForm/ContactForm';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Resume></Resume>
            <Education></Education>
            <Projects></Projects> 
            <ContactForm></ContactForm>  
        </div>
    );
};

export default Home;