import { IoWallet } from "react-icons/io5";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query'
import { FaTruck, FaUsers } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats = [] } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/admin-stats`);
            return data || [];
        }
    });

    const { data: chartData = [] } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/order-stats');
            return data || [];
        }
    });

    // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

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
                                    <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-4xl font-extrabold">${stats.revenue}</h2>
                                    <p className="text-base md:text-lg lg:text-base xl:text-xl ">Revenue</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] rounded-lg ">
                            <div className="flex items-center justify-center gap-3 xl:gap-4 text-white inter py-4 md:py-6 lg:py-7 xl:py-10">
                                <FaUsers className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl" />
                                <div>
                                    <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-4xl font-extrabold">{stats.users}</h2>
                                    <p className="text-base md:text-lg lg:text-base xl:text-xl ">Customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded-lg ">
                            <div className="flex items-center justify-center gap-3 xl:gap-4 text-white inter py-4 md:py-6 lg:py-7 xl:py-10">
                                <MdMenuBook className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl" />
                                <div>
                                    <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-4xl font-extrabold">{stats.menuItems}</h2>
                                    <p className="text-base md:text-lg lg:text-base xl:text-xl ">Menus</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] rounded-lg ">
                            <div className="flex items-center justify-center gap-3 xl:gap-4 text-white inter py-4 md:py-6 lg:py-7 xl:py-10">
                                <FaTruck className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl" />
                                <div>
                                    <h2 className="text-2xl md:text-3xl lg:text-2xl xl:text-4xl font-extrabold">{stats.orders}</h2>
                                    <p className="text-base md:text-lg lg:text-base xl:text-xl ">Orders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bar chart */}
            <div className="flex">
                <div className="w-1/2">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;