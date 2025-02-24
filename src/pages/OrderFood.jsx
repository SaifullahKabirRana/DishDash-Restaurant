import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import orderBg from '../assets/assets/shop/banner2.jpg';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import '../index.css';

const OrderFood = () => {
    const [tabIndex, setTabIndex] = useState(0);


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
            <div className=" flex justify-center px-6 md:px-0  mt-8 md:mt-10 lg:mt-12 xl:mt-20">
                <div className="flex overflow-x-auto overflow-y-hidden whitespace-nowrap font-inter ">
                    <button onClick={() => setTabIndex(0)} className={`inline-flex items-center h-10 px-3 lg:px-4 text-sm text-center  sm:text-base  whitespace-nowrap focus:outline-none uppercase text-[#151515] font-medium hover:text-[#bb850669]
                        ${tabIndex === 0 && 'text-[#BB8506] bg-transparent border-b-3 border-[#BB8506] font-bold'}
                        `}>
                        Salad 

                    </button>
                    <button onClick={() => setTabIndex(1)} className={`inline-flex items-center h-10 px-3 lg:px-4 text-sm text-center  sm:text-base  whitespace-nowrap focus:outline-none uppercase text-[#151515] font-medium hover:text-[#bb850669]
                        ${tabIndex === 1 && 'text-[#BB8506] bg-transparent border-b-3 border-[#BB8506] font-bold'}`}>
                        pizza
                    </button>
                    <button onClick={() => setTabIndex(2)} className={`inline-flex items-center h-10 px-3 lg:px-4 text-sm text-center  sm:text-base  whitespace-nowrap focus:outline-none uppercase text-[#151515] font-medium hover:text-[#bb850669]
                        ${tabIndex === 2 && 'text-[#BB8506] bg-transparent border-b-3 border-[#BB8506] font-bold'}
                        `}>
                        soups
                    </button>
                    <button onClick={() => setTabIndex(3)} className={`inline-flex items-center h-10 px-3 lg:px-4 text-sm text-center  sm:text-base  whitespace-nowrap focus:outline-none uppercase text-[#151515] font-medium hover:text-[#bb850669]
                        ${tabIndex === 3 && 'text-[#BB8506] bg-transparent border-b-3 border-[#BB8506] font-bold'}
                        `}>
                        desserts
                    </button>
                    <button onClick={() => setTabIndex(4)} className={`inline-flex items-center h-10 px-3 lg:px-4 text-sm text-center  sm:text-base  whitespace-nowrap focus:outline-none uppercase text-[#151515] font-medium hover:text-[#bb850669]
                        ${tabIndex === 4 && 'text-[#BB8506] bg-transparent border-b-3 border-[#BB8506] font-bold'}
                        `}>
                        drinks
                    </button>
                </div>
            </div>
            <div className="mt-10 flex justify-center items-center">
                <div>
                    {
                        tabIndex === 0 ? <div>hi profile</div> : ''
                    }
                </div>
                <div>
                    {
                        tabIndex === 1 ? <div>hi account</div> : ''
                    }
                </div>
                <div>
                    {
                        tabIndex === 2 ? <div>hi Notification</div> : ''
                    }
                </div>
                <div>
                    {
                        tabIndex === 3 ? <div>hi Notification</div> : ''
                    }
                </div>
                <div>
                    {
                        tabIndex === 4 ? <div>hi Notification</div> : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default OrderFood;
