import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import ContactForm from "../../Pages/ContactForm/ContactForm";
import ExploreKnowledgeDetails from "../../Pages/ExploreKnowledgeDetails/ExploreKnowledgeDetails";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home";
import MotionTimesDetails from "../../Pages/MotionTimesDetails/MotionTimesDetails";
import Projects from "../../Pages/Projects/Projects";
import Resume from "../../Pages/Resume/Resume";
import YoitDetails from "../../Pages/YoitDetails/YoitDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/resume",
                element: <Resume></Resume>
            },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/contact",
                element: <ContactForm></ContactForm>
            },
            {
                path: "/yoitDetails",
                element: <YoitDetails></YoitDetails>
            },
            {
                path: "/exploreKnowledgeDetails",
                element: <ExploreKnowledgeDetails></ExploreKnowledgeDetails>
            },
            {
                path: "/motionTimesDetails",
                element: <MotionTimesDetails></MotionTimesDetails>
            },
            {
                path: "/projects/:id",
                element: <Projects></Projects>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }


        ]
    }
])