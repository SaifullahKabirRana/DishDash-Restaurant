import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import bgImg from '../assets/assets/menu/banner3.jpg'
import dessertBg from '../assets/assets/menu/dessert-bg.jpeg'
import pizzaBg from '../assets/assets/menu/pizza-bg.jpg'
import saladBg from '../assets/assets/menu/salad-bg.jpg'
import soupBg from '../assets/assets/menu/soup-bg.jpg'
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
            {/* menu cover */}
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
                <MenuCategory items={offered} btnTitle={'ORDER YOUR FAVOURITE FOOD'}></MenuCategory>
            </div>
            {/* deserts section */}
            <div>
                <div className="py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16">
                    <Cover
                        bgImg={dessertBg}
                        height={'h-[220px] md:h-[370px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]'}
                        paddingY={'py-8 md:py-16 lg:py-20 xl:py-28 2xl:py-32 '}
                        heading={'DESSERTS'}
                        subHeading={'Satisfy your cravings with our heavenly selection of desserts. From rich, creamy cheesecakes to delightful chocolate treats, every bite is a taste of pure joy. Perfectly crafted to end your meal on a sweet note!'}
                        upperWord={'normal-case'}
                    ></Cover>
                </div>
                <div>
                    <MenuCategory items={desserts} btnTitle={'ORDER YOUR FAVOURITE FOOD'}></MenuCategory>
                </div>
            </div>
            {/* pizza section */}
            <div>
                <div className="py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16">
                    <Cover
                        bgImg={pizzaBg}
                        height={'h-[220px] md:h-[370px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]'}
                        paddingY={'py-8 md:py-16 lg:py-20 xl:py-28 2xl:py-32 '}
                        heading={'PIZZA'}
                        subHeading={'Enjoy our freshly baked pizzas loaded with the finest ingredients and bursting with flavor. From classic Margherita to loaded meat feasts, our pizzas are made to perfection with crispy crusts and gooey cheese.'}
                    ></Cover>
                </div>
                <div>
                    <MenuCategory items={pizzas} btnTitle={'ORDER YOUR FAVOURITE FOOD'}></MenuCategory>
                </div>
            </div>
            {/* soups section */}
            <div>
                <div className="py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16">
                    <Cover
                        bgImg={soupBg}
                        height={'h-[220px] md:h-[370px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]'}
                        paddingY={'py-8 md:py-16 lg:py-20 xl:py-28 2xl:py-32 '}
                        heading={'SOUPS'}
                        subHeading={'Savor the rich flavors of our handcrafted soups, made with fresh ingredients and slow-cooked to perfection. From creamy mushroom to classic chicken broth, our soups are perfect for a cozy and satisfying meal.'}
                        upperWord={'normal-case'}
                    ></Cover>
                </div>
                <div>
                    <MenuCategory items={soups} btnTitle={'ORDER YOUR FAVOURITE FOOD'}></MenuCategory>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;