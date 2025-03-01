
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bgImg from '../assets/assets/others/authentication.png'
import loginImg from '../assets/assets/others/authentication2.png'

import { useState } from 'react';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import SocialLogin from '../components/SocialLogin';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
const Register = () => {
    const { createUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [registerError, setRegisterError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();


    const handleSignUp = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        // Password Authentication
        if (password.length < 6) {
            return setRegisterError('password should be at least 6 characters or longer')
        }
        else if (!/[A-Z]/.test(password)) {
            return setRegisterError('password should have at least one upper case character')
        }
        else if (!/[a-z]/.test(password)) {
            return setRegisterError('password should have at least one lower case character')
        }

        setRegisterError('');

        try {
            const result = await createUser(email, password);
            console.log(result.user);
            toast.success('SignUp Successfully');
            navigate(location?.state?.from?.pathname || "/", { replace: true });
        }
        catch (err) {
            console.log(err);
            setRegisterError(err.code);
        }
    }
    return (
        <>
            <Helmet>
                <title>DishDash - Sign Up</title>
            </Helmet>
            <div
                className='h-screen w-full  flex justify-center items-center px-4 md:px-0 '
                style={{ backgroundImage: `url(${bgImg})` }}
            >
                <div className='shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)] w-full py-8 lg:py-0 md:w-[600px] lg:w-[850px] xl:w-[1200px] 2xl:w-[1400px]  lg:h-[600px] xl:h-[650px] 2xl:h-[700px]'>
                    <div className='flex flex-col lg:flex-row-reverse justify-center lg:gap-0 xl:gap-16 2xl:gap-24 px-4 md:px-0 lg:px-6 xl:px-24 2xl:px-32 lg:py-14 xl:py-14 2xl:py-20 inter'>
                        <div className='py-2 lg:py-16 xl:py-14 2xl:py-16 flex justify-center '>
                            <img className='w-[270px] md:w-[300px] lg:w-[650px] xl:w-[800px] 2xl:w-[1000px] h-[180px] md:h-[200px] lg:h-[260px] xl:h-[300px] 2xl:h-[350px]' src={loginImg} alt="login" />
                        </div>
                        <div className='w-full md:px-20 lg:px-10 xl:px-14 2xl:px-20'>
                            <h2 className='text-center text-[#151515] font-bold text-2xl'>Sign Up</h2>
                            <form onSubmit={handleSignUp}>
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm xl:text-base  text-[#444444] font-semibold"
                                    >
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name='name'
                                        placeholder='Type here'
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 font-medium bg-white border-[#D0D0D0] rounded-lg  focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-sm placeholder:font-normal"
                                    />
                                </div>
                                <div className='mt-3 xl:mt-4'>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm xl:text-base  text-[#444444] font-semibold"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder='Type here'
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 font-medium bg-white border-[#D0D0D0] rounded-lg  focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-sm placeholder:font-normal"
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
                                    </div>
                                    <div className='relative flex items-center '>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            name='password'
                                            placeholder='Enter your password'
                                            className="block w-full px-4 py-2 mt-2 text-gray-700 font-medium bg-white border-[#D0D0D0] rounded-lg  focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40 placeholder:text-sm placeholder:font-normal"
                                        />
                                        <span
                                            className="absolute right-5 pt-1 text-lg md:text-xl "
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <VscEyeClosed></VscEyeClosed> : <VscEye></VscEye>}
                                        </span>
                                    </div>
                                    <div className='mt-2 ml-2'>
                                        {
                                            registerError && <p className="text-[12px] md:text-[15px] text-red-500">{registerError}</p>
                                        }
                                    </div>
                                </div>
                                <div className="mt-5 xl:mt-6">
                                    <input type="submit" value="Sign Up"
                                        className={`btn w-full text-sm xl:text-base font-bold tracking-wide bg-[#D1A054] text-white capitalize rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50`}
                                    />
                                </div>
                            </form>

                            <div className='flex flex-col justify-center items-center pt-4 '>
                                <Link to='/login'>
                                    <h2 className='xl:pt-6 text-[#D1A054] text-sm xl:text-base text-center inter font-medium  '>Already registered?  <span className='font-bold  hover:underline active:underline'>Go to log in</span></h2>
                                </Link>
                                <p className='text-[#444444] inter font-medium text-sm xl:text-base pt-3 xl:pt-5 text-center'>Or sign up with</p>
                                <SocialLogin></SocialLogin>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;