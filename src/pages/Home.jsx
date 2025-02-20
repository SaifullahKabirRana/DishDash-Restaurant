import Banner from "../components/Banner";
import Category from "../components/category/Category";
import Contact from "../components/Contact";
import Description from "../components/Description";
import FromOurMenu from "../components/menuItem/FromOurMenu";
import Recommends from "../components/Recommends";


const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Category></Category>
            <Description></Description>
            <FromOurMenu></FromOurMenu>
            <Contact></Contact>
            <Recommends></Recommends>
        </div>
    );
};

export default Home;