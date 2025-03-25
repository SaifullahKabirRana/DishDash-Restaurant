import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Category from "../components/category/Category";
import Contact from "../components/Contact";
import Description from "../components/Description";
import Featured from "../components/Featured";
import FromOurMenu from "../components/menuItem/FromOurMenu";
import Recommends from "../components/Recommends";
import Testimonials from "../components/testimonials/Testimonials";
import useAuth from "../hooks/useAuth";
import loaderImg from '../assets/assets/others/cupcake.gif'


const Home = () => {
    const { loading } = useAuth();
    if (loading) {
        return <div className="flex justify-center items-center">
            <div className="">
                <img className="" src={loaderImg} alt="" />
                <h2 className="cinzel text-[#151515] text-2xl lg:text-3xl uppercase text-center font-semibold">Welcome to DishDash <br /> <span className="text-center">Restaurant</span></h2>
            </div>
        </div>
    }

    return (
        <div >
            <Helmet>
                <title>DishDash - Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Description></Description>
            <FromOurMenu></FromOurMenu>
            <Contact></Contact>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;