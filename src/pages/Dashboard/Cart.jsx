import { Link } from "react-router-dom";
import Title from "../../components/Dashboard/Title";
import useCart from '../../hooks/useCart'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = parseFloat(cart.reduce((total, item) => total + item.price, 0).toFixed(2));
    const axiosSecure = useAxiosSecure();

    const handleDelete = (id) => {
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

                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res?.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Cart item has been deleted.",
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
            <div className="px-3 md:px-10 lg:px-16 xl:px-24 2xl:px-28">
                <Title
                    subHeading={'---My Cart---'}
                    heading={'WANNA ADD MORE?'}
                ></Title>
                <div className="bg-white">
                    <div className="p-3 md:p-6 lg:p-8 xl:p-10 2xl:xl:p-14">
                        <div className="flex justify-between items-center uppercase cinzel">
                            <h2 className="text-[#151515] text-sm md:text-base lg:text-xl xl:text-2xl font-bold">Total Orders: {cart.length}</h2>
                            <h3 className="text-[#151515] text-sm md:text-base lg:text-xl xl:text-2xl font-bold">total price: ${totalPrice}</h3>
                            <Link>
                                <button className="btn btn-sm lg:btn-md bg-[#D1A054] text-white font-bold text-sm md:text-base lg:text-xl xl:text-2xl">Pay</button>
                            </Link>
                        </div>
                        {/* table */}
                        <div className="pt-4 md:pt-6 xl:pt-8 ">
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map((item, index) => <tr key={item._id} className="inter text-xs lg:text-sm">
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
                                                <th className="">
                                                    <button
                                                        onClick={() => handleDelete(item._id)}
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

export default Cart;