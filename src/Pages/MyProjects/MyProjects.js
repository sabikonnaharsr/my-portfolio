import React from 'react';
import MyProject from '../MyProject/MyProject';

const MyProjects = () => {

    const projectsData = [
        {
            
            id: 1,
            img: "https://img.freepik.com/free-photo/excited-ginger-lady-hat-holding-straw-bag-ecstatic-long-haired-girl-summer-outfit-enjoying-good-day_197531-11080.jpg?w=996&t=st=1670759360~exp=1670759960~hmac=1a5bc224fa86e9946fc91608b08ec7ccc917649ec646130cd245b9f49b8251f0",
            projectName: "Yoit",
            route: "/yoitDetails",
            liveLink: "https://bytecode-velocity-client.web.app/",
            gitHubLink: "https://github.com/sabikonnaharsr/yoit-client-side-repo",
            serverLink: "https://github.com/sabikonnaharsr/yoit-server-side-repo"
        },
        {
            id: 2,
            img: "https://img.freepik.com/free-psd/thick-hardcover-book-cover-mockup_47987-3979.jpg?size=626&ext=jpg&ga=GA1.2.1510053171.1664396538&semt=sph",
            projectName: "Motion Times",
            route: "/motionTimesDetails",
            liveLink: "https://sequel-extract.web.app/",
            gitHubLink: "https://github.com/sabikonnaharsr/Motion-Times-Client",
            serverLink: "https://github.com/sabikonnaharsr/Motion-times-Server"
        },
        {
            id: 3,
            img: "https://img.freepik.com/free-photo/beautiful-bride-white-dress-posing_1328-4132.jpg?w=996&t=st=1670780948~exp=1670781548~hmac=e3ce6a0a8d9d8db4105547366daa879d7afc3e2385c62de16f87ff1a584bba4d",
            projectName: "Explore Knowledge",
            route: "/exploreKnowledgeDetails",
            liveLink: "https://router-firebase-assignme-518f8.firebaseapp.com/",
            gitHubLink: "https://github.com/sabikonnaharsr/Explore-Knowledge-Client",
            serverLink: "https://github.com/sabikonnaharsr/Motion-times-Server"
        }
    ]
    return (
        <div>
             <div className='grid gird-cols-1 lg:gird-cols-2 md:grid-cols-3 gap-4 mb-10'>
                {
                    projectsData.map(projectData => <MyProject
                    key={projectData.id}
                    projectData={projectData}
                    ></MyProject>)
                }
             </div>
        </div>
    );
};

export default MyProjects;