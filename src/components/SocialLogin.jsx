import { FaFacebook, FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosCommon from "../hooks/useAxiosCommon";

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth();
    const axiosCommon = useAxiosCommon();
    const navigate = useNavigate();
    const location = useLocation();
    const handleSocialLogin = async (socialProvider) => {
        try {
            const result = await socialProvider();
            const userInfo = {
                name: result.user.displayName,
                email: result.user.email,
                photo: result.user.photoURL
            }
            const { data } = await axiosCommon.post(`/users`, userInfo);
            console.log(data);

            toast.success('Login Successfully!');
            navigate(location?.state?.from?.pathname || "/", { replace: true });
        }
        catch (err) {
            toast.error(err.code);
        }
    }
    return (
        <div className="mt-3 xl:mt-4">
            <div className="flex gap-6 md:gap-8 xl:gap-10 text-[#444444]">
                {/* <div className="border-2 hover:bg-[#444444] active:bg-[#444444] active:text-white hover:text-white border-[#444444] bg-[#F1F2F4] rounded-full p-1 xl:p-2">
                    <FaFacebook className="text-lg xl:text-xl" />
                </div> */}
                <div
                    onClick={() => handleSocialLogin(signInWithGoogle)}
                    className="flex gap-4 items-center w-full border-2 hover:bg-[#444444] active:bg-[#444444] active:text-white hover:text-white bg-[#F1F2F4] border-[#444444] font-x rounded-full p-1 xl:p-2 font-bold">
                    <FaGoogle className="text-lg xl:text-xl" /> <span>Continue With Google</span>
                </div>
                {/* <div className="border-2 hover:bg-[#444444] active:bg-[#444444] active:text-white hover:text-white border-[#444444] bg-[#F1F2F4] rounded-full p-1 xl:p-2">
                    <FaGithub className="text-lg xl:text-xl" />
                </div> */}
            </div>
        </div>
    );
};

export default SocialLogin;