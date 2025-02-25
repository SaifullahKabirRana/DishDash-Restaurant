import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";
import OrderFood from "../pages/OrderFood";
import Login from "../pages/Login";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/menu',
                element: <OurMenu></OurMenu>
            },
            {
                path: '/order/:category',
                element: <OrderFood></OrderFood>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
]);

