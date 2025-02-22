import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import bgImg from '../assets/assets/menu/banner3.jpg'
import useMenu from "../hooks/useMenu";
import SectionTitle from "../components/SectionTitle";
import MenuCategory from "../components/OurMenu/MenuCategory";
const OurMenu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const offered = menu.filter(item => item.category === 'offered');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    return (
        <div>
            <Helmet>
                <title>DishDash - Menu</title>
            </Helmet>
            {/*  */}
            <div>
                <Cover
                    bgImg={bgImg}
                    height={'h-[280px] md:h-[420px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'}
                    paddingY={'py-20 md:py-28 lg:py-36 xl:py-44 2xl:py-48'}
                    heading={'OUR MENU'}
                    subHeading={'Would you like to try a dish?'}
                    upperWord={'uppercase'}
                ></Cover>
            </div>
            {/* offer section */}
            <div>
                <SectionTitle subHeading={"---Don't miss---"} heading={"TODAY'S OFFER"}></SectionTitle>
                <MenuCategory desserts=></MenuCategory>
            </div>

        </div>
    );
};

export default OurMenu;