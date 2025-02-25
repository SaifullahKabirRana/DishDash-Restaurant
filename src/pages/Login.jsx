
import { Link } from 'react-router-dom';
import bgImg from '../assets/assets/others/authentication.png'
import loginImg from '../assets/assets/others/authentication2.png'
import SocialLogin from '../components/SocialLogin';
import { useEffect, useState } from 'react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [captchaInput, setCaptchaInput] = useState("");
    const [captchaValid, setCaptchaValid] = useState(null);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const captcha = form.captcha.value;
        console.log(email,password, captcha);
    }

    const handleValidateCaptcha = () =>{
        if(validateCaptcha(captchaInput)){
            setCaptchaValid(true);
        }
        else{
            setCaptchaValid(false);
        }
    }

    return (
        <div
            className='h-screen w-full  flex justify-center items-center px-4 md:px-0 '
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className='shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)] w-full py-8 lg:py-0 md:w-[600px] lg:w-[850px] xl:w-[1200px] 2xl:w-[1400px]  lg:h-[600px] xl:h-[650px] 2xl:h-[700px]'>
                <div className='flex flex-col lg:flex-row justify-center lg:gap-0 xl:gap-16 2xl:gap-24 px-4 md:px-0 lg:px-6 xl:px-24 2xl:px-32 lg:py-12 xl:py-12 2xl:py-16 inter'>
                    <div className='py-2 lg:py-20 xl:py-16 2xl:py-20 flex justify-center '>
                        <img className='w-[270px] md:w-[300px] lg:w-[650px] xl:w-[800px] 2xl:w-[1000px] h-[180px] md:h-[200px] lg:h-[260px] xl:h-[300px] 2xl:h-[350px]' src={loginImg} alt="login" />
                    </div>
                    <div className='w-full md:px-20 lg:px-10 xl:px-14 2xl:px-20'>
                        <h2 className='text-center text-[#151515] font-bold text-2xl'>Login</h2>
                        <form onSubmit={handleLogin}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm xl:text-base  text-[#444444] font-semibold"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    name='email'
                                    placeholder='Type here'
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 font-medium bg-white border-[#D0D0D0] rounded-lg  focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-sm"
                                />
                            </div>
                            <div className="mt-3 xl:mt-4">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm xl:text-base  text-[#444444] font-semibold "
                                    >
                                        Password
                                    </label>
                                    <a
                                        href="#"
                                        className="text-xs text-gray-600  hover:underline"
                                    >
                                        Forget Password?
                                    </a>
                                </div>
                                <div className='relative flex items-center '>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        name='password'
                                        placeholder='Enter your password'
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 font-medium bg-white border-[#D0D0D0] rounded-lg  focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-sm"
                                    />
                                    <span
                                        className="absolute right-5 pt-1 text-lg md:text-xl "
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <VscEyeClosed></VscEyeClosed> : <VscEye></VscEye>}
                                    </span>
                                </div>
                            </div>
                            {/* captcha */}
                            <div className='mt-3 xl:mt-4 block w-full px-4 py-2  text-gray-700 font-medium bg-white border-[#D0D0D0] rounded-lg  focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 text-sm'>
                                <LoadCanvasTemplate  />
                            </div>
                            <div className='mt-3 xl:mt-4'>
                                <input
                                    type="text"
                                    name='captcha'
                                    value={captchaInput}
                                    onChange={(e) => setCaptchaInput(e.target.value)}
                                    onBlur={handleValidateCaptcha}
                                    placeholder='Type here'
                                    className="block w-full px-4 py-2  text-gray-700 font-medium bg-white border-[#D0D0D0] rounded-lg  focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-sm"
                                />
                                {captchaValid === false && <p className="text-red-500 text-xs pl-2 mt-1">Invalid Captcha, please try again.</p>}
                            </div>
                            <div className="mt-5 xl:mt-6">
                                <input type="submit" value="Sign In"
                                    disabled={!captchaValid}
                                    className={`btn w-full text-sm xl:text-base font-bold tracking-wide text-white capitalize rounded-lg ${
                                        captchaValid ? "bg-[#D1A054]" : "bg-[#D1A054B3] cursor-not-allowed"
                                      } focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50`}
                                />
                            </div>
                        </form>

                        <div className='flex flex-col justify-center items-center pt-4 '>
                            <Link to='/register'>
                                <h2 className='xl:pt-6 text-[#D1A054] text-sm xl:text-base text-center inter font-medium  '>New here? <span className='font-bold  hover:underline active:underline'>Create a New Account</span></h2>
                            </Link>
                            <p className='text-[#444444] inter font-medium text-sm xl:text-base pt-3 xl:pt-5 text-center'>Or sign in with</p>
                            <SocialLogin></SocialLogin>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;