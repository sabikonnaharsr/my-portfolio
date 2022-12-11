import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ExploreKnowledgeDetails from '../ExploreKnowledgeDetails/ExploreKnowledgeDetails';
import MotionTimesDetails from '../MotionTimesDetails/MotionTimesDetails';
import MyProjects from '../MyProjects/MyProjects';
import Projects from '../Projects/Projects';
import YoitDetails from '../YoitDetails/YoitDetails';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects> 
            <MyProjects></MyProjects>
            <YoitDetails></YoitDetails>
            <ExploreKnowledgeDetails></ExploreKnowledgeDetails>
            <MotionTimesDetails></MotionTimesDetails>
        </div>
    );
};

export default Home;