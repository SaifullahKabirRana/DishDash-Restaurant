import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import 'flowbite';
import ScrollToTop from "../components/ScrollToTop";
const Main = () => {
    const location = useLocation();
    const noNavbarFooter = location.pathname.includes('login') || location.pathname.includes('register');
    return (
        <div>
            <ScrollToTop></ScrollToTop>
            {noNavbarFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;