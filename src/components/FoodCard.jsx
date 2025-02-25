import { Link } from "react-router-dom";

const FoodCard = ({ items }) => {
    return (
        <div>
            <div className="w-full flex justify-center">
                <div className="max-w-full sm:max-w-[550px] md:max-w-[650px] lg:max-w-[820px] xl:max-w-[1020px] 2xl:max-w-[1320px] px-6 md:px-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-3 xl:gap-6">
                        {
                            items.map(menu =>
                                <div key={menu._id}>
                                    <div className="">
                                        <div>
                                            <div className="absolute bg-[#111827] text-white inter text-xs md:text-sm xl:text-base font-semibold py-2 px-3">${menu.price}</div>
                                            <img className="w-full  h-[220px] xl:h-[250px] 2xl:h-[290px]" src={menu.image} alt="" />
                                        </div>
                                        <div className="bg-[#F3F3F3] md:min-h-[200px] xl:min-h-[220px]">
                                            <div className="flex flex-col inter text-center py-5 md:py-6 xl:py-7 2xl:py-8 ">
                                                <h2 className="text-[#151515] text-base md:text-base xl:text-xl font-semibold ">{menu.name}</h2>
                                                <p className="text-[#151515] text-xs xl:text-sm mt-1 xl:mt-2 mb-4 xl:mb-5 px-4 lg:px-2 xl:px-4 2xl:px-6">{menu.recipe}</p>
                                                <div>
                                                    <Link>
                                                        <button className=" btn btn-sm md:btn-md border-t-0 border-l-0 border-r-0  bg-[#E8E8E8] text-[#BB8506] inter text-sm md:text-base border-b-2 border-[#1F2937] rounded-xl uppercase  hover:bg-[#1F2937] hover:border-none focus:bg-[#1F2937] focus:border-none mt-1">add to cart</button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;