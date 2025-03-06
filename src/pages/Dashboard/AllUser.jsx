import { useQuery } from "@tanstack/react-query";
import Title from "../../components/Dashboard/Title";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUser = () => {
    const axiosSecure = useAxiosSecure();
    const { data: allUsers = [] , refetch} = useQuery({
        queryKey: ['allUsers'],
        queryFn: async () => {
            const { data } = await axiosSecure(`/users`);
            return data;
        }
    });

    const handleDeleteUser = id => {
        Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#D1A054",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
        
                        axiosSecure.delete(`/users/${id}`)
                            .then(res => {
                                if (res?.data.deletedCount > 0) {
                                    refetch();
                                    Swal.fire({
                                        title: "Deleted!",
                                        text: "User has been deleted.",
                                        icon: "success"
                                    });
                                }
                            })
                            .catch()
                    }
                });
    }
    return (
        <div className=" min-h-screen bg-[#F3F3F3]">
            <div className="px-3 md:px-4 lg:px-10 xl:px-24 2xl:px-28">
                <Title
                    subHeading={'---How many??---'}
                    heading={'MANAGE ALL USERS'}
                ></Title>
                <div className="bg-white">
                    <div className="p-3 md:p-4 lg:p-6 xl:p-10 2xl:xl:p-14">
                        <div className=" uppercase cinzel">
                            <h2 className="text-[#151515] text-sm md:text-base lg:text-xl xl:text-2xl font-bold">Total Users: {allUsers.length}</h2>

                        </div>
                        {/* table */}
                        <div className="pt-5 md:pt-6 lg:mt-6 xl:mt-8">
                            <div className="overflow-x-auto rounded-t-[15px]">
                                <table className="table rounded-3xl">
                                    {/* head */}
                                    <thead className=" bg-[#D1A054]">
                                        <tr className="uppercase text-white text-xs lg:text-sm">
                                            <th>
                                                
                                            </th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Role</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            allUsers.map((user, index) => <tr key={user._id} className="inter text-xs lg:text-sm">
                                                <th>
                                                    {index + 1}
                                                </th>
                                                <td className="text-[#737373]">
                                                    {user.name}
                                                </td>
                                                <td className="text-[#737373]">
                                                    {user.email}
                                                </td>
                                                <th className="">
                                                    <button
                                                        className="btn btn-sm rounded-lg lg:py-4 xl:py-5 bg-[#D1A054]">
                                                        <FaUsers className="text-base lg:text-lg xl:text-xl text-[#FFFFFF]" />
                                                    </button>
                                                </th>
                                                <th className="">
                                                    <button
                                                        onClick={() => handleDeleteUser(user._id)}
                                                        className="btn btn-sm rounded-lg lg:py-4 xl:py-5 bg-[#B91C1C]">
                                                        <FontAwesomeIcon className="text-sm lg:text-base xl:text-lg text-[#FFFFFF]" icon={faTrashCan} />
                                                    </button>
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

export default AllUser;