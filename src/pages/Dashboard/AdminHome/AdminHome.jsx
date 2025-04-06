import { IoWallet } from "react-icons/io5";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query'
import { FaTruck, FaUsers } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/admin-stats`);
            return data || [];
        }

    })
    return (
        <div className=" min-h-screen bg-[#F3F3F3]">
            <div className="px-4 md:px-10 lg:px-6 pt-5 md:pt-6 xl:pt-10">
                <h2 className="text-[#151515] uppercase cinzel text-xl lg:text-2xl font-semibold">
                    Hi, Welcome {user?.displayName ? user.displayName : 'Back'}!
                </h2>
                {/* stats info */}
                <div className="mt-4 lg:mt-5 xl:mt-6">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-3 xl:gap-6">
                        <div className="bg-gradient-to-r from-[#BB34F5] to-[#FCDFFF] rounded-lg ">
                            <div className="flex items-center justify-center gap-3 xl:gap-4 text-white inter py-4 md:py-6 lg:py-7 xl:py-10">
                                <IoWallet className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl" />
                                <div>
                                    <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-4xl font-extrabold">450</h2>
                                    <p className="text-base md:text-lg lg:text-base xl:text-xl ">Revenue</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] rounded-lg ">
                            <div className="flex items-center justify-center gap-3 xl:gap-4 text-white inter py-4 md:py-6 lg:py-7 xl:py-10">
                                <FaUsers className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl" />
                                <div>
                                    <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-4xl font-extrabold">450</h2>
                                    <p className="text-base md:text-lg lg:text-base xl:text-xl ">Customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded-lg ">
                            <div className="flex items-center justify-center gap-3 xl:gap-4 text-white inter py-4 md:py-6 lg:py-7 xl:py-10">
                                <MdMenuBook className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl" />
                                <div>
                                    <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-4xl font-extrabold">450</h2>
                                    <p className="text-base md:text-lg lg:text-base xl:text-xl ">Menus</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] rounded-lg ">
                            <div className="flex items-center justify-center gap-3 xl:gap-4 text-white inter py-4 md:py-6 lg:py-7 xl:py-10">
                                <FaTruck className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl" />
                                <div>
                                    <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-4xl font-extrabold">450</h2>
                                    <p className="text-base md:text-lg lg:text-base xl:text-xl ">Orders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;