import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import HireMe from "../pages/HireMe";
import Portfolio from "../pages/Portfolio";
import MainLayout from "../layout/MainLayout";


const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element:
        <MainLayout/>
        ,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/hire-me',
                element:<HireMe/>
            },
            {
                path:'/portfolio',
                element:<Portfolio/>
            },
            
            
            
           
        ]
    

}]);

export default MainRoutes;