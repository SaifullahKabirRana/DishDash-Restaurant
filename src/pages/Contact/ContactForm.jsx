import SectionTitle from "../../components/SectionTitle";
import { RiSendPlaneFill } from "react-icons/ri";

const ContactForm = () => {
    return (
        <div className="mb-10 md:mb-14 lg:pb-16 xl:mb-20">
            <SectionTitle
                subHeading={"---Send Us a Message---"}
                heading={"CONTACT FORM"}
            ></SectionTitle>
            <div className="w-full flex justify-center">
                <div className="min-w-full sm:min-w-[550px] md:min-w-[650px] lg:min-w-[820px] xl:min-w-[1020px] 2xl:min-w-[1320px] px-6 md:px-0">
                    <div className="bg-[#F3F3F3] px-4 md:px-6 lg:px-10 xl:px-14 2xl:px-16 py-6 lg:py-8 xl:py-10 2xl:py-12">

                        <form>
                            <div className="">
                                <div className="grid grid-cols-1 gap-2 lg:gap-6 mt-2 xl:mt-4 md:grid-cols-2 items-center">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-gray-700 font-semibold" htmlFor="category">
                                            Name*
                                        </label>
                                        <input

                                            type="text"
                                            placeholder="Enter your name"
                                            className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-gray-200 focus:ring-gray-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                        />

                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="text-gray-700 font-semibold"
                                            htmlFor="price"
                                        >
                                            Email*
                                        </label>
                                        <input

                                            type="email"
                                            placeholder="Enter your email"
                                            className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-gray-200 focus:ring-gray-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 mt-2 lg:mt-4">
                                    <label className="text-gray-700 font-semibold" htmlFor="name">
                                    Phone*
                                    </label>
                                    <input

                                        type="number"
                                        placeholder="Enter your phone number"
                                        className="block w-full px-4 py-3  opacity-90  border border-gray-200 rounded-md  focus:border-gray-200 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                    />
                                </div>


                                <div className="flex flex-col gap-2 mt-2 lg:mt-4">
                                    <label className="text-gray-700 font-semibold" htmlFor="recipe">
                                    Message*
                                    </label>
                                    <textarea
                                        type='text'
                                        placeholder="Write your message here"
                                        className='block w-full h-[100px] md:h-[120px] xl:h-[170px] 2xl:h-[220px] px-4 py-2 opacity-90 border border-gray-200 rounded-md  focus:border-gray-200 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    ></textarea>
                                </div>
                            </div>
                           <div className="flex justify-center mt-6 md:mt-8 xl:mt-10">
                           <button className=" btn btn-sm md:btn-md font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] text-white ">
                                Send Message <RiSendPlaneFill className="text-base md:text-xl" />
                            </button>
                            
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;