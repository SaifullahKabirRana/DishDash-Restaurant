import { IoWallet } from "react-icons/io5";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from '@tanstack/react-query'
import { FaTruck, FaUsers } from "react-icons/fa6";
import { MdMenuBook } from "react-icons/md";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend, ResponsiveContainer } from 'recharts';

// const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red'];

const categoryColorMap = {
    salad: '#00C49F',
    pizza: '#0088FE',
    soup: '#FFBB28',
    dessert: '#FF8042',
    drinks: 'red',
}

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

    // custom shape fot the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.totalRevenue }
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
                                    <h2 className="text-xl md:text-2xl  xl:text-3xl font-extrabold">${stats.revenue}</h2>
                                    <p className="text-sm md:text-base  xl:text-lg ">Revenue</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] rounded-lg ">
                            <div className="flex items-center justify-center gap-3 xl:gap-4 text-white inter py-4 md:py-6 lg:py-7 xl:py-10">
                                <FaUsers className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl" />
                                <div>
                                    <h2 className="text-xl md:text-2xl  xl:text-3xl font-extrabold">{stats.users}</h2>
                                    <p className="text-sm md:text-base  xl:text-lg">Customers</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded-lg ">
                            <div className="flex items-center justify-center gap-3 xl:gap-4 text-white inter py-4 md:py-6 lg:py-7 xl:py-10">
                                <MdMenuBook className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl" />
                                <div>
                                    <h2 className="text-xl md:text-2xl  xl:text-3xl font-extrabold">{stats.menuItems}</h2>
                                    <p className="text-sm md:text-base  xl:text-lg ">Menus</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] rounded-lg ">
                            <div className="flex items-center justify-center gap-3 xl:gap-4 text-white inter py-4 md:py-6 lg:py-7 xl:py-10">
                                <FaTruck className="text-3xl md:text-4xl lg:text-3xl xl:text-6xl" />
                                <div>
                                    <h2 className="text-xl md:text-2xl  xl:text-3xl font-extrabold">{stats.orders}</h2>
                                    <p className="text-sm md:text-base  xl:text-lg ">Orders</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" bg-white mx-4 md:mx-10 lg:mx-6 mt-6 md:mt-8 lg:mt-10">
                <div className="w-full flex flex-col lg:flex-row lg:gap-4 py-6 md:py-8 lg:py-10">
                    {/* bar chart */}
                    <div className="w-full lg:w-1/2 h-72 -ml-6 lg:-ml-4">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                className=""
                                width={500}
                                height={300}
                                data={chartData}

                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="category" />
                                <YAxis />
                                <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={categoryColorMap[entry.category]} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    {/* pi chart */}
                    <div className="w-full lg:w-1/2 h-72">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={400} height={400}>
                                <Pie
                                    data={pieChartData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieChartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={categoryColorMap[entry.name]} />
                                    ))}
                                </Pie>
                                <Legend></Legend>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;