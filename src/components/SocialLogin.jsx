import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const SocialLogin = () => {
    return (
        <div className="mt-2 xl:mt-3">
            <div className="flex gap-6 md:gap-8 xl:gap-10 text-[#444444]">
            <div className="border-2 border-[#444444] bg-[#F1F2F4] rounded-full p-1 xl:p-2">
            <FaFacebook className="text-lg xl:text-xl" />
            </div>
            <div className="border-2 bg-[#F1F2F4] border-[#444444] rounded-full p-1 xl:p-2">
            <FaGoogle className="text-lg xl:text-xl" />
            </div>
            <div className="border-2 border-[#444444] bg-[#F1F2F4] rounded-full p-1 xl:p-2">
            <FaGithub className="text-lg xl:text-xl" />
            </div>
            </div>
        </div>
    );
};

export default SocialLogin;