import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Title from "../../../components/Dashboard/Title";


const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/payments/${user?.email}`);
            return (Array.isArray(data) ? data : []);
        }
    })
    return (
        <div className=" min-h-screen bg-[#F3F3F3]">
            <div className="px-3 md:ml-5 lg:ml-0 lg:px-10 xl:px-24 2xl:px-28 pb-8 md:pb-12 xl:pb-16 2xl:pb-20">
                <Title
                    subHeading={'---At a Glance!---'}
                    heading={'PAYMENT HISTORY'}
                ></Title>
                <div className="bg-white">
                    <div className="p-3 md:p-2 lg:p-6 xl:p-10 2xl:xl:p-14">
                        <div className=" uppercase cinzel">
                            <h2 className="text-[#151515] text-sm md:text-base lg:text-xl xl:text-2xl font-bold">Total Payments: {payments.length}</h2>
                        </div>
                        {/* table */}
                        <div className="pt-2 md:pt-3 xl:pt-4 ">
                            <div className="overflow-x-auto rounded-t-[15px]">
                                <table className="table rounded-3xl">
                                    {/* head */}
                                    <thead className=" bg-[#D1A054]">
                                        <tr className="uppercase text-white inter text-xs lg:text-sm">
                                            <th>

                                            </th>
                                            <th>Price</th>
                                            <th>Transaction Id</th>
                                            <th>Payment Date</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="">
                                        {
                                            payments.map((payment, index) => <tr key={payment._id} className="inter text-xs lg:text-sm">
                                                <th>
                                                    {index + 1}
                                                </th>
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
                                                <th className={` rounded-3xl text-center btn btn-sm xl:btn-md  my-3 lg:my-2 ${payment.status === 'pending' && 'bg-[#ffd176ad]'}`}>
                                                    {payment.status}
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

export default PaymentHistory;