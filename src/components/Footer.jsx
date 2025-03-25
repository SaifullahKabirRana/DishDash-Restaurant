import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";

const Footer = () => {
    const { loading } = useAuth();
    if (loading) {
        return;
    }
    return (
        <div className="">
            <div className="flex inter">
                <div className="bg-[#1F2937] w-full ">
                    <div className="py-14 md:py-16 lg:py-24  text-center">
                        <h3 className="text-white text-lg md:text-2xl xl:text-3xl font-medium ">CONTACT US</h3>
                        <div className="text-white opacity-95 text-sm md:text-base xl:text-lg mt-3 md:mt-4 xl:mt-6 ">
                            <p className=" ">123 ABS Street, Uni 21, Bangladesh</p>
                            <p>+88 123456789</p>
                            <p>Mon - Fri: 08:00 - 22:00</p>
                            <p>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#111827] w-full">
                    <div className="py-14 md:py-16 lg:py-24 text-center">
                        <h3 className="text-white text-lg md:text-2xl xl:text-3xl  font-medium">Follow US</h3>
                        <div className="">
                            <p className="text-white opacity-95 text-sm md:text-base xl:text-lg mt-3 md:mt-4 xl:mt-6">Join us on social media</p>
                            <div className="flex gap-3 md:gap-4 text-white text-lg md:text-xl lg:text-2xl justify-center mt-4 xl:mt-6">
                                <a href="https://www.facebook.com">
                                    <FaFacebookF />
                                </a>
                                <a href="https://www.instagram.com">
                                    <FaInstagram />
                                </a>
                                <a href="https://x.com">
                                    <FaXTwitter />
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#151515]">
                <p className="text-center text-[#FFFFFF] py-2 md:py-3 xl:py-4 text-sm lg:text-base">Copyright © CulinaryCloud. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;