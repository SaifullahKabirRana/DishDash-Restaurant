import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../../components/Dashboard/Title";
import { faEdit, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const ManageItems = () => {

    return (
        <div className=" min-h-screen bg-[#F3F3F3]">
            <div className="px-3 md:px-10 lg:px-16 xl:px-24 2xl:px-28">
                <Title
                    subHeading={'---Hurry Up!---'}
                    heading={'MANAGE ALL ITEMS'}
                ></Title>
                <div className="bg-white">
                    <div className="p-3 md:p-6 lg:p-8 xl:p-10 2xl:xl:p-14">
                        <div className=" uppercase cinzel">
                            <h2 className="text-[#151515] text-sm md:text-base lg:text-xl xl:text-2xl font-bold">Total Items: 0</h2>
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
                                            <th>Action</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="inter text-xs lg:text-sm">
                                            <th>
                                                1
                                            </th>
                                            <td>
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 lg:h-14 xl:h-18  w-12 lg:w-14 xl:w-18  ">
                                                        <img
                                                            className="object-center"
                                                            src=''
                                                            alt="item image" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-[#737373]">
                                                hiisssssssssssssssssssssssssssss
                                            </td>
                                            <td className="text-[#737373]">$10</td>
                                            <th>
                                                <button

                                                    className="btn btn-sm rounded-lg lg:py-4 xl:py-5 bg-[#D1A054]">
                                                    <FontAwesomeIcon className="text-sm lg:text-base xl:text-lg text-[#FFFFFF]" icon={faEdit} />
                                                </button>
                                            </th>
                                            <th>
                                                <button

                                                    className="btn btn-sm rounded-lg lg:py-4 xl:py-5 bg-[#B91C1C]">
                                                    <FontAwesomeIcon className="text-sm lg:text-base xl:text-lg text-[#FFFFFF]" icon={faTrashCan} />
                                                </button>
                                            </th>
                                        </tr>
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