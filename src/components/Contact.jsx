import { FaFacebookMessenger, FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
    return (
        <div className="w-full flex justify-center mt-8 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20">
            <div className="min-w-full sm:min-w-[550px] md:min-w-[650px] lg:min-w-[820px] xl:min-w-[1020px] 2xl:min-w-[1320px] px-6 md:px-0">
                <div className="bg-[#151515]">
                    <div className="text-center py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 2xl:py-24">
                        <h3 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl cinzel font-semibold">Call Us: +880192345678910</h3>
                        <div className="flex justify-center gap-3 md:gap-5 xl:gap-6 text-white text-xl md:text-2xl xl:text-3xl mt-3 md:mt-5 xl:mt-8">
                        <IoLogoWhatsapp className="" />
                        <FaFacebookMessenger />
                        <FaInstagram />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;