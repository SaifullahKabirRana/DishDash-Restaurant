import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import OurMenu from "../pages/OurMenu";
import OrderFood from "../pages/OrderFood";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import Dashboard from "../layouts/Dashboard";
import Cart from "../pages/Dashboard/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUser from "../pages/Dashboard/AllUser";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/Dashboard/AddItems";
import ManageItems from "../pages/Dashboard/ManageItems";



export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
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
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // user routes
            {
                path: 'cart',
                element: <Cart></Cart>,
            },

            // admin routes
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>,
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>,
            },
            {
                path: 'allUsers',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>,
            },
        ]
    },
]);

