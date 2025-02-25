
import bgImg from '../assets/assets/others/authentication.png'
import loginImg from '../assets/assets/others/authentication2.png'
const Login = () => {
    return (
        <div
            className='h-screen w-full  flex justify-center items-center '
            style={{ backgroundImage: `url(${bgImg})` }}
        >
            <div className='shadow-[10px_10px_10px_10px_rgba(0,0,0,0.25)] w-[1400px] h-[700px]'>
                <div className='flex flex-col lg:flex-row justify-center  gap-24 px-32 py-20 inter'>
                    <div className='py-20'>
                        <img className='w-[1000px] h-[350px]' src={loginImg} alt="login" />
                    </div>
                    <div className='w-full px-20'>
                        <h2 className='text-center text-[#151515] font-bold text-2xl'>Login</h2>
                        <form className="">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm text-gray-800"
                                >
                                    Email
                                </label>
                                <input
                                    type="text"
                                    placeholder='Type here'
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border-[#D0D0D0] rounded-lg   focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mt-4">
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm text-gray-800 "
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
                                <input
                                    type="password"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg  focus:border-blue-400focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            <div className="mt-6">
                                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize   rounded-lg bg-[#D1A054B3] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                                    Sign In
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;