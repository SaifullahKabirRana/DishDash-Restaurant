import { useQuery } from "@tanstack/react-query";
import Title from "../../../components/Dashboard/Title";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdDone, MdDoneAll } from "react-icons/md";
import toast from "react-hot-toast";

const AllPayments = () => {
    const axiosSecure = useAxiosSecure();

    const { data: allPayments = [], refetch } = useQuery({
        queryKey: ['allPayments'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/allPayments');
            return (Array.isArray(data) ? data : []);
        }
    });

    // success status
    const handleSuccess = async (id) => {
        try {
            await axiosSecure.patch(`/allPayments/${id}`, { status: 'success' });
            toast.success('Payment accepted successfully!');
            refetch();
        }
        catch (err) {
            toast.error(err.code);
        }
    }
    return (
        <div className=" min-h-screen bg-[#F3F3F3]">
            <div className="px-3 md:ml-5 lg:ml-0 lg:px-10 xl:px-24 2xl:px-28 pb-8 md:pb-12 xl:pb-16 2xl:pb-20">
                <Title
                    subHeading={'---Make Sure!---'}
                    heading={'All Payments'}
                ></Title>
                <div className="bg-white">
                    <div className="p-3 md:p-2 lg:p-6 xl:p-10 2xl:xl:p-14">
                        <div className=" uppercase cinzel">
                            <h2 className="text-[#151515] text-sm md:text-base lg:text-xl xl:text-2xl font-bold">Total Payments: {allPayments.length}</h2>
                        </div>
                        {/* table */}
                        <div className="pt-2 md:pt-3 xl:pt-4 w-full md:max-w-[500px] lg:max-w-[670px] xl:max-w-full">
                            <div className="overflow-x-auto rounded-t-[15px] ">
                                <table className="table rounded-3xl w-full  ">
                                    {/* head */}
                                    <thead className=" bg-[#D1A054]">
                                        <tr className="uppercase text-white inter text-xs lg:text-sm">
                                            <th>

                                            </th>
                                            <th>Email</th>
                                            <th>Price</th>
                                            <th>Transaction Id</th>
                                            <th>Payment Date</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        {
                                            allPayments.map((payment, index) => <tr key={payment._id} className="inter text-xs lg:text-sm">
                                                <th>
                                                    {index + 1}
                                                </th>
                                                <td className="text-[#737373] ">
                                                    {payment.email}
                                                </td>
                                                <td className="text-[#737373]">
                                                    ${payment.price}
                                                </td>
                                                <td className="text-[#737373] ">{payment.transactionId}</td>
                                                <th className="text-[#737373] font-normal">{new Date(payment.date).toLocaleString("en-US", {
                                                    timeZone: "Asia/Dhaka",
                                                    year: "numeric",
                                                    month: "short",
                                                    day: "numeric",
                                                    hour: "2-digit",
                                                    minute: "2-digit",
                                                    second: "2-digit",

                                                })}</th>
                                                <th className={` rounded-3xl text-center btn btn-sm capitalize my-4  ${payment.status === 'pending' && 'bg-[#fcd059b7]'} 
                                                ${payment.status === 'success' && 'bg-[#16a34a]'}`}>
                                                    {payment.status}
                                                </th>
                                                <th className="text-center">
                                                    {
                                                        payment.status === 'success' ?
                                                            <div className="btn btn-sm xl:btn-md btn-circle bg-[#16a34a] text-white">
                                                                <MdDoneAll className="text-xl font-bold" />
                                                            </div>
                                                            :
                                                            <div
                                                                onClick={() => handleSuccess(payment._id)}
                                                                className="btn btn-sm xl:btn-md btn-circle bg-[#80E2B7] text-white">
                                                                <MdDone className="text-xl font-bold" />
                                                            </div>
                                                    }
                                                </th>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default AllPayments;