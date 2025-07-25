import Title from "../../../components/Dashboard/Title";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { LuClipboardList } from "react-icons/lu";
import { MdLocationPin, MdEmail, MdPhone, MdOutlinePayment } from "react-icons/md";
import { IoCheckmarkDoneCircle, IoCalendarOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const AllOrders = () => {
    const axiosSecure = useAxiosSecure();

    const { data: allPayments = [], refetch } = useQuery({
        queryKey: ["allPayments"],
        queryFn: async () => {
            const { data } = await axiosSecure.get("/allPayments");
            return Array.isArray(data) ? data : [];
        },
    });

    const handleSuccess = async (id) => {
        try {
            await axiosSecure.patch(`/allPayments/${id}`, { status: "success" });
            toast.success("Payment accepted successfully!");
            refetch();
        } catch (err) {
            toast.error(err.code);
        }
    };

    const sortedPayments = [...allPayments].sort((a, b) => {
        if (a.status === "pending" && b.status !== "pending") return -1;
        if (a.status !== "pending" && b.status === "pending") return 1;
        return 0;
    });


    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-[#F3F3F3] py-8 md:py-12">
            <div className="px-4 md:px-8 lg:px-12 xl:px-20 2xl:px-28">
                <Title
                    subHeading="---Manage Orders---"
                    heading="ALL ORDERS"
                />


                {allPayments.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No orders found</p>
                    </div>
                ) : (

                    <div>
                        <div className=" uppercase cinzel">
                            <h2 className="text-[#151515] text-sm md:text-base lg:text-xl xl:text-2xl font-bold">Total Orders: {allPayments.length}</h2>
                        </div>
                        <motion.div
                            className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 mt-10"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                visible: {
                                    transition: {
                                        staggerChildren: 0.1
                                    }
                                }
                            }}
                        >

                            {sortedPayments.map((payment) => (
                                <motion.div
                                    key={payment._id}
                                    variants={cardVariants}
                                    transition={{ duration: 0.3 }}
                                    className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 space-y-4 border border-gray-100 hover:border-[#D1A054]/20"
                                >
                                    {/* User Info Section */}
                                    <div className="space-y-2 border-b pb-3 border-gray-100">
                                        <div className="flex items-center gap-3">
                                            <div >
                                                {
                                                    payment?.photo ?
                                                        <img referrerPolicy='no-referrer' className="rounded-full w-[34px]" src={payment.photo} alt="" />
                                                        :
                                                        <div className="bg-[#D1A054]/10 p-2 rounded-full">
                                                            <FaUser className="text-[#D1A054] text-lg" />
                                                        </div>
                                                }
                                            </div>
                                            <div>
                                                <p className="text-lg font-semibold text-gray-800">{payment.name}</p>
                                                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1">
                                                    <p className="text-sm text-gray-600 flex items-center gap-1">
                                                        <MdEmail className="text-blue-500" /> {payment.email}
                                                    </p>
                                                    {payment.phone && (
                                                        <p className="text-sm text-gray-600 flex items-center gap-1">
                                                            <MdPhone className="text-green-500" /> {payment.phone}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Ordered Items Section */}
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-base font-medium text-[#D1A054]">
                                            <div className="bg-[#D1A054]/10 p-1.5 rounded-lg">
                                                <LuClipboardList className="text-[#D1A054]" />
                                            </div>
                                            Ordered Items
                                        </div>
                                        <ul className="text-sm text-gray-700 space-y-1 mt-1 pl-1">
                                            {payment.itemName?.map((item, index) => (
                                                <li key={index} className="flex items-start">
                                                    <span className="text-[#D1A054] mr-1">•</span>
                                                    <div>
                                                        <span className="font-medium">{item}</span>
                                                        {payment.category?.[index] && (
                                                            <span className="text-xs text-gray-500 ml-1">({payment.category[index]})</span>
                                                        )}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Order Details Section */}
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <div className="flex items-start gap-2">
                                            <MdLocationPin className="text-red-500 mt-0.5 flex-shrink-0" />
                                            <span>{payment.address}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MdOutlinePayment className="text-purple-500" />
                                            <span>
                                                Transaction ID: <span className="font-mono font-medium">{payment.transactionId}</span>
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <IoCalendarOutline className="text-blue-500" />
                                            <span>
                                                Date: <span className="font-medium">{new Date(payment.date).toLocaleDateString()}</span>
                                            </span>
                                        </div>
                                    </div>

                                    {/* Price and Status Section */}
                                    <div className="pt-2 border-t border-gray-100">
                                        <div className="flex justify-between items-center">
                                            <p className="font-semibold text-gray-700">
                                                Total: <span className="text-[#D1A054] text-lg">${payment.price}</span>
                                            </p>

                                            {payment.status === "pending" ? (
                                                <motion.button
                                                    whileHover={{ scale: 1.03 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    onClick={() => handleSuccess(payment._id)}
                                                    className="bg-gradient-to-r from-[#D1A054] to-[#f3c26a] text-white font-semibold py-2 px-4 rounded-lg transition-all shadow-md hover:shadow-lg"
                                                >
                                                    Accept Order
                                                </motion.button>
                                            ) : (
                                                <span className="bg-green-50 text-green-700 py-2 px-4 rounded-lg font-semibold text-sm flex items-center gap-2">
                                                    <IoCheckmarkDoneCircle className="text-lg" />
                                                    Accepted
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllOrders;