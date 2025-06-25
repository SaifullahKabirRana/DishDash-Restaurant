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
import UpdateItem from "../pages/Dashboard/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import ContactUs from "../pages/Contact/ContactUs";
import AllPayments from "../pages/Dashboard/AllPayments/AllPayments";
import AllOrders from "../pages/Dashboard/AllOrders/AllOrders";
import MyOrders from "../pages/Dashboard/MyOrders.jsx/MyOrders";




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
                path: '/contact',
                element: <ContactUs></ContactUs>
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
                path: 'userHome',
                element: <UserHome></UserHome>,
            },
            {
                path: 'myOrders',
                element: <MyOrders />,
            },
            {
                path: 'cart',
                element: <Cart></Cart>,
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },

            // admin routes
            {
                path: 'adminHome',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
            },
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>,
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>,
            },
            {
                path: 'allPayments',
                element: <AdminRoute><AllPayments></AllPayments></AdminRoute>,
            },
            {
                path: 'allOrders',
                element: <AdminRoute><AllOrders /></AdminRoute>,
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/menu/${params.id}`)
            },
            {
                path: 'allUsers',
                element: <AdminRoute><AllUser></AllUser></AdminRoute>,
            },
        ]
    },
]);

