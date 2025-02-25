import { Link } from "react-router-dom";
import MenuItem from "../menuItem/MenuItem";

const MenuCategory = ({items, category}) => {
    return (
        <div>
            <div className="w-full flex justify-center">
                <div className="max-w-full sm:max-w-[550px] md:max-w-[650px] lg:max-w-[820px] xl:max-w-[1020px] 2xl:max-w-[1320px] px-6 md:px-0">
                    <div className="grid lg:grid-cols-2 gap-3 md:gap-4 lg:gap-5 xl:gap-10">
                        {
                            items.map(item => <MenuItem
                                key={item._id}
                                item={item}
                            ></MenuItem>)
                        }
                    </div>
                    <div className="flex justify-center mt-5 md:mt-6 lg:mt-8 xl:mt-10">
                        <Link to={`/order/${category}`}>
                            <button className=" btn btn-sm md:btn-md border-t-0 border-l-0 border-r-0 bg-white text-[#1F2937] inter text-sm md:text-base  border-b-2 border-[#1F2937] rounded-xl uppercase  hover:opacity-85  ">ORDER YOUR FAVOURITE FOOD</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MenuCategory;