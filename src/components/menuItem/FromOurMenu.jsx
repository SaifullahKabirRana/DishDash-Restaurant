

import MenuItem from "./MenuItem";
import SectionTitle from "../SectionTitle";
import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";

const FromOurMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

  
    return (
        <div>
            <div>
                <SectionTitle
                    subHeading={'---Check it out---'}
                    heading={'FROM OUR MENU'}
                ></SectionTitle>
            </div>
            <div className="w-full flex justify-center">
                <div className="max-w-full sm:max-w-[550px] md:max-w-[650px] lg:max-w-[820px] xl:max-w-[1020px] 2xl:max-w-[1320px] px-6 md:px-0">
                    <div className="grid lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5 xl:gap-10">
                        {
                            popular.map(item => <MenuItem
                                key={item._id}
                                item={item}
                            ></MenuItem>)
                        }
                    </div>
                    <div className="flex justify-center mt-5 md:mt-6 lg:mt-8 xl:mt-10">
                        <Link to='/menu'>
                            <button className=" btn btn-sm md:btn-md border-t-0 border-l-0 border-r-0 lg:px-6 bg-white text-[#1F2937] font-inter text-sm md:text-base lg:text-lg xl:tex-xl border-b-2 border-[#1F2937] rounded-xl uppercase  hover:opacity-85 ">View Full Menu</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromOurMenu;