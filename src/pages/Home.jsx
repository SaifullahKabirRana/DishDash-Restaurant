import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Category from "../components/category/Category";
import Contact from "../components/Contact";
import Description from "../components/Description";
import Featured from "../components/Featured";
import FromOurMenu from "../components/menuItem/FromOurMenu";
import Recommends from "../components/Recommends";
import Testimonials from "../components/testimonials/Testimonials";



const Home = () => {
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