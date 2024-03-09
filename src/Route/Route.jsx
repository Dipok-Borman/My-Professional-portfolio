import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import AboutPage from "../Pages/AboutPage/AboutPage";
import Project from "../Pages/Project/Project";
import Skill from "../Pages/Skill/Skill";
import ContactPage from "../Pages/ContactPage/ContactPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <AboutPage></AboutPage>
            },
            {
                path: '/project',
                element: <Project></Project>
            },
            {
                path: '/skill',
                element: <Skill></Skill>
            },
            {
                path: '/contact',
                element: <ContactPage></ContactPage>
            }
        ]
    },
]);