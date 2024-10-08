import { createBrowserRouter } from "react-router-dom";

import Erorr from "../Pages/Erorr";
import App from "../Layouts/App";
import About from "../Pages/About";
import SignIn from "../Pages/SignIn";
import Home from "../Pages/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement:<Erorr></Erorr>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            }

        ]
      
    },
]);
export default router;