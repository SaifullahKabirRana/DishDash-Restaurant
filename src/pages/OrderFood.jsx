import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import orderBg from '../assets/assets/shop/banner2.jpg';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../hooks/useMenu";
import FoodCard from "../components/FoodCard";
import { useParams } from "react-router-dom";


const OrderFood = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks', 'offered'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    const tabs = ["Salad", "Pizza", "Soup", "Dessert", "Drinks", 'Offered'];
    const tabContents = [
        <FoodCard key='salad' items={salad}></FoodCard>,
        <FoodCard key='pizza' items={pizza}></FoodCard>,
        <FoodCard key='soup' items={soup}></FoodCard>,
        <FoodCard key='dessert' items={dessert}></FoodCard>,
        <FoodCard key='drinks' items={drinks}></FoodCard>,
        <FoodCard key='offered' items={offered}></FoodCard>,
        
    ];

    return (
        <div>
            <Helmet>
                <title>DishDash - Order</title>
            </Helmet>
            {/* order cover */}
            <div>
                <Cover
                    bgImg={orderBg}
                    height={'h-[280px] md:h-[420px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'}
                    paddingY={'py-20 md:py-28 lg:py-36 xl:py-44 2xl:py-48'}
                    heading={'Order Food'}
                    subHeading={'Would you like to try a dish?'}
                    upperWord={'uppercase'}
                ></Cover>
            </div>

            {/* Tabs */}
            <div className="pb-8 md:pb-12 xl:pb-16 2xl:pb-20">
                <div className=" flex justify-center px-6 md:px-0  mt-8 md:mt-10 lg:mt-12 xl:mt-20">
                    <div className="flex overflow-x-auto  whitespace-nowrap inter ">
                        {
                            tabs.map((tab, index) => (
                                <button
                                    key={index}
                                    onClick={() => setTabIndex(index)}
                                    className={`inline-flex items-center h-10 px-3 lg:px-4 text-sm text-center  lg:text-base whitespace-nowrap focus:outline-none uppercase font-semibold text-[#151515]  hover:text-[#bb850669]
                                    ${tabIndex === index && 'text-[#BB8506] bg-transparent border-b-3 border-[#BB8506] font-bold'}
                                    `}>{tab}</button>
                            ))
                        }
                    </div>
                </div>
                <div className="mt-7 md:mt-8 xl:mt-10 2xl:mt-12 flex justify-center items-center">
                    <div>
                        {tabContents[tabIndex]}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderFood;
