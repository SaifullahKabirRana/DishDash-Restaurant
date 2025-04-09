import { MdMenuBook } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { IoWallet } from "react-icons/io5";
import { FaBook, FaTruck } from "react-icons/fa6";

const UserHome = () => {
    const { user } = useAuth();
    console.log(user, 'userhome');
    return (
        <div className=" min-h-screen bg-[#F3F3F3]">
            <div className="px-4 md:px-10 lg:px-6 pt-5 md:pt-6 xl:pt-10">
                <h2 className="text-[#151515] uppercase cinzel text-xl lg:text-2xl font-semibold">
                    Hi, Welcome {user?.displayName ? user.displayName : 'Back'}!
                </h2>
                {/*user stats info */}
                <div className="mt-4 lg:mt-5 xl:mt-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-3 xl:gap-6">
                        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDFFF] rounded-lg ">
                            <div className="flex items-center justify-center gap-3 xl:gap-4 text-white inter py-4 md:py-6 lg:py-7 xl:py-10">
                                <IoWallet className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl" />
                                <div>
                                    <h2 className="text-xl md:text-2xl  xl:text-3xl font-extrabold">0</h2>
                                    <p className="text-sm md:text-base  xl:text-lg ">Payments</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] rounded-lg ">
                            <div className="flex items-center justify-center gap-3 xl:gap-4 text-white inter py-4 md:py-6 lg:py-7 xl:py-10">
                                <FaBook className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl" />
                                <div>
                                    <h2 className="text-xl md:text-2xl  xl:text-3xl font-extrabold">0</h2>
                                    <p className="text-sm md:text-base  xl:text-lg">Bookings</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded-lg ">
                            <div className="flex items-center justify-center gap-3 xl:gap-4 text-white inter py-4 md:py-6 lg:py-7 xl:py-10">
                                <MdMenuBook className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl" />
                                <div>
                                    <h2 className="text-xl md:text-2xl  xl:text-3xl font-extrabold">0</h2>
                                    <p className="text-sm md:text-base  xl:text-lg ">Menus</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] rounded-lg ">
                            <div className="flex items-center justify-center gap-3 xl:gap-4 text-white inter py-4 md:py-6 lg:py-7 xl:py-10">
                                <FaTruck className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl" />
                                <div>
                                    <h2 className="text-xl md:text-2xl  xl:text-3xl font-extrabold">0</h2>
                                    <p className="text-sm md:text-base  xl:text-lg ">Orders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* user info */}
                <div className="py-8 md:py-10 lg:py-12 xl:py-16 2xl:py-20 ">
                    <div className="flex justify-center items-center ">
                        <div className="flex flex-col items-center justify-center bg-[#e6e6e6b2] w-full md:w-3/4 lg:w-1/2  py-6 md:py-10 xl:py-12">
                            <img
                                referrerPolicy='no-referrer'
                                className="w-[150px] xl:w-[200px] h-[150px] xl:h-[200px] rounded-full border-2 border-[#bebebe] "
                                src={user?.photoURL || "https://i.ibb.co.com/TMD7HPzq/abstract-user-flat-4.webp"}
                                alt="User Profile Photo"
                            />

                            <p className="cinzel text-xl xl:text-2xl font-semibold uppercase mt-3 lg:mt-5 text-[#151515]">{user?.displayName}</p>
                            <p className="text-[#737373] inter text-sm lg:test-base">{user?.email}</p>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default UserHome;