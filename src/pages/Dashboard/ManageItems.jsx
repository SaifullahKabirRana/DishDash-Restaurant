import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../../components/Dashboard/Title";
import { faEdit, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import useMenu from "../../hooks/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
    const [menu, refetch] = useMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D1A054",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted!`,
                        icon: "success"
                    });
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong!",
                    });
                }

            }
        });
    }

    return (
        <div className=" min-h-screen bg-[#F3F3F3]">
            <div className="px-3 md:ml-5 lg:ml-0 lg:px-10 xl:px-24 2xl:px-28 pb-8 md:pb-12 xl:pb-16 2xl:pb-20">
                <Title
                    subHeading={'---Hurry Up!---'}
                    heading={'MANAGE ALL ITEMS'}
                ></Title>
                <div className="bg-white">
                    <div className="p-3 md:p-4 lg:p-6 xl:p-10 2xl:xl:p-14">
                        <div className=" uppercase cinzel">
                            <h2 className="text-[#151515] text-sm md:text-base lg:text-xl xl:text-2xl font-bold">Total Items: {menu.length}</h2>
                        </div>
                        {/* table */}
                        <div className="pt-2 md:pt-3 xl:pt-4 ">
                            <div className="overflow-x-auto rounded-t-[15px]">
                                <table className="table rounded-3xl">
                                    {/* head */}
                                    <thead className=" bg-[#D1A054]">
                                        <tr className="uppercase text-white text-xs lg:text-sm">
                                            <th>
                                                #
                                            </th>
                                            <th>Item Image</th>
                                            <th>Item Name</th>
                                            <th>Price</th>
                                            <th>Update</th>
                                            <th>Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            menu.map((item, index) => <tr key={item._id} className="inter text-xs lg:text-sm">
                                                <th>
                                                    {index + 1}
                                                </th>
                                                <td>
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle h-12 lg:h-14 xl:h-18  w-12 lg:w-14 xl:w-18  ">
                                                            <img
                                                                className="object-center"
                                                                src={item.image}
                                                                alt="item image" />
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-[#737373]">
                                                    {item.name}
                                                </td>
                                                <td className="text-[#737373]">${item.price}</td>
                                                <th>
                                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                                        <button
                                                            className="btn btn-sm rounded-lg lg:py-4 xl:py-5 bg-[#D1A054]">
                                                            <FontAwesomeIcon className="text-sm lg:text-base xl:text-lg text-[#FFFFFF]" icon={faEdit} />
                                                        </button>
                                                    </Link>
                                                </th>
                                                <th>
                                                    <button
                                                        onClick={() => handleDeleteItem(item)}
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

export default ManageItems;