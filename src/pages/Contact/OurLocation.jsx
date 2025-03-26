import SectionTitle from "../../components/SectionTitle";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoTime } from "react-icons/io5";

const OurLocation = () => {
    return (
        <div>
            <SectionTitle
                subHeading={"---Visit Us---"}
                heading={"OUR LOCATION"}
            ></SectionTitle>
            <div className="w-full flex justify-center">
                <div className="max-w-full sm:max-w-[550px] md:max-w-[650px] lg:max-w-[820px] xl:max-w-[1020px] 2xl:max-w-[1320px] px-6 md:px-0">
                    <div className="grid md:grid-cols-3 gap-4 2xl:gap-7">
                        {/* phone */}
                        <div className="w-[280px] md:w-[210px] lg:w-[260px] xl:w-[320px] 2xl:w-[420px]">
                            <div className="w-full">
                                <div className="bg-[#D1A054] w-full py-2 lg:py-3 xl:py-5 flex justify-center ">
                                    <MdPhoneInTalk className="text-white text-2xl xl:text-3xl" />
                                </div>
                                <div className="border border-t-0 border-[#E8E8E8]">
                                    <div className="bg-[#F3F3F3] mx-4 md:mx-3 lg:mx-4 xl:mx-6 mb-4 md:mb-3 lg:mb-4 xl:mb-6 py-5 lg:py-6  2xl:py-10 pb-6 md:pb-8 lg:pb-10 xl:pb-14 inter text-center ">
                                        <h2 className=" text-[#151515] text-xl xl:text-2xl uppercase font-medium">PHONE</h2>
                                        <p className="text-[#444444] text-sm xl:text-base pt-2 xl:pt-4">+38 (012) 34 56 789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* location */}
                        <div className="w-[280px] md:w-[210px] lg:w-[260px] xl:w-[320px] 2xl:w-[420px]">
                            <div className="w-full">
                                <div className="bg-[#D1A054] w-full py-2 lg:py-3 xl:py-5 flex justify-center ">
                                    <FaLocationDot className="text-white text-2xl xl:text-3xl" />
                                </div>
                                <div className="border border-t-0 border-[#E8E8E8]">
                                    <div className="bg-[#F3F3F3] mx-4 md:mx-3 lg:mx-4 xl:mx-6 mb-4 md:mb-3 lg:mb-4 xl:mb-6 py-5 lg:py-6  2xl:py-10 pb-6 md:pb-8 lg:pb-10 xl:pb-14 inter text-center ">
                                        <h2 className=" text-[#151515] text-xl xl:text-2xl uppercase font-medium">ADDRESS</h2>
                                        <p className="text-[#444444] text-sm xl:text-base pt-2 xl:pt-4">Savor Road, Downtown</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* WORKING */}
                        <div className="w-[280px] md:w-[210px] lg:w-[260px] xl:w-[320px] 2xl:w-[420px]">
                            <div className="w-full">
                                <div className="bg-[#D1A054] w-full py-2 lg:py-3 xl:py-5 flex justify-center ">
                                    <IoTime className="text-white text-2xl xl:text-3xl" />
                                </div>
                                <div className="border border-t-0 border-[#E8E8E8]">
                                    <div className="bg-[#F3F3F3] mx-4 md:mx-3 lg:mx-4 xl:mx-6 mb-4 md:mb-3 lg:mb-4 xl:mb-6 py-4 lg:py-6 2xl:py-8 xl:pb-10    inter text-center ">
                                        <h2 className=" text-[#151515] text-xl md:text-lg lg:text-xl xl:text-2xl uppercase font-medium">WORKING HOURS</h2>
                                        <p className="text-[#444444] text-sm xl:text-base pt-1 xl:pt-2">Mon - Fri: 08:00 - 22:00</p>
                                        <p className="text-[#444444] text-sm xl:text-base">Sat - Sun: 10:00 - 23:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurLocation;