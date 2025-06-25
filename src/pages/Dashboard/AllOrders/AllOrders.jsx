import Title from "../../../components/Dashboard/Title";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { LuClipboardList } from "react-icons/lu";
import { MdLocationPin } from "react-icons/md";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const AllOrders = () => {
    const axiosSecure = useAxiosSecure();

    const { data: allPayments = [], refetch } = useQuery({
        queryKey: ["allPayments"],
        queryFn: async () => {
            const { data } = await axiosSecure.get("/allPayments");
            console.log(data);
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

    return (
        <div className="min-h-screen bg-[#F3F3F3]">
            <div className="px-3 md:ml-5 lg:ml-0 lg:px-10 xl:px-24 2xl:px-28 pb-8 md:pb-12 xl:pb-16 2xl:pb-20">
                <Title subHeading={"---Hurry Up!---"} heading={"ALL ORDERS"} />

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-4 xl:gap-6 mt-10">
                    {allPayments.map((payment) => (
                        <div
                            key={payment._id}
                            className="bg-white p-5 rounded-xl shadow-md space-y-4"
                        >
                            <div>
                                <h3 className="font-semibold text-lg text-[#333]">
                                    {payment.name}
                                </h3>
                                <p className="text-sm text-gray-600"> 📧 {payment.email}</p>
                                <p className="text-sm text-gray-600">
                                    📞 <span className="font-medium"></span> {payment.phone || "N/A"}
                                </p>
                            </div>

                            <div className="space-y-1">
                                <p className="font-medium">
                                    <span className="flex items-center gap-1"><LuClipboardList /> Items:</span>
                                    <ul className="list-disc list-inside text-sm mt-1 text-gray-700">
                                        {payment.itemName?.map((item, index) => (
                                            <li key={index}>
                                                {item}{" "}
                                                <span className="text-xs text-gray-500">
                                                    ({payment.category?.[index]})
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </p>

                                <p className="text-sm text-gray-600">
                                    <span className="font-medium  flex items-center gap-1"> <span className="text-red-600 text-xl -ml-1"><MdLocationPin /></span> Location: {" "}
                                        {payment.address}</span>

                                </p>

                                <p className="text-sm text-gray-600">
                                    💳 <span className="font-medium">Transaction ID:</span>{" "}
                                    {payment.transactionId}
                                </p>

                                <p className="text-sm text-gray-600">
                                    🗓️ <span className="font-medium">Date:</span>{" "}
                                    {new Date(payment.date).toLocaleDateString()}
                                </p>

                                <p className="font-bold text-[#D1A054]">
                                    💰 Total Price: ${payment.price}
                                </p>
                            </div>

                            <div className="pt-2">
                                {payment.status === "pending" ? (
                                    <button
                                        onClick={() => handleSuccess(payment._id)}
                                        className="btn bg-[#16a34a] text-white btn-sm hover:bg-green-600 w-full"
                                    >
                                        Accept Order
                                    </button>
                                ) : (
                                    <span className="inline-block text-green-700 bg-green-100 px-3 py-1 rounded-full text-sm font-medium text-center w-full">
                                        <span className="flex items-center justify-center gap-1">
                                            <IoCheckmarkDoneCircle className="text-xl text-[#16a34a]" />
                                            Accepted
                                        </span>
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllOrders;
