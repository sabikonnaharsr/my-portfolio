import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/About/About";
import ContactForm from "../../Pages/ContactForm/ContactForm";
import Home from "../../Pages/Home/Home";
import Projects from "../../Pages/Projects/Projects";
import Resume from "../../Pages/Resume/Resume";


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
            }
          

        ]
    }
])