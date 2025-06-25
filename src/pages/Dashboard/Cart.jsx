import { useNavigate } from "react-router-dom";
import Title from "../../components/Dashboard/Title";
import useCart from '../../hooks/useCart'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import toast from "react-hot-toast";


const Cart = () => {
    const [cart, refetch] = useCart();
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    const totalPrice = parseFloat(cart.reduce((total, item) => total + item.price, 0).toFixed(2));
    console.log(totalPrice, 'cart');
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

    const handleProceed = () => {
        if (!address) {
            return toast.error("Please enter your address!");
        }

        document.getElementById("checkout_modal").close();
        console.log("Address to send:", address);
        navigate("/dashboard/payment", { state: { address } });
    };

    return (
        <div className=" min-h-screen bg-[#F3F3F3]">
            <div className="px-3 md:px-4 lg:px-16 xl:px-24 2xl:px-28">
                <Title
                    subHeading={'---My Cart---'}
                    heading={'WANNA ADD MORE?'}
                ></Title>
                <div className="bg-white">
                    <div className="p-3 md:p-6 lg:p-8 xl:p-10 2xl:xl:p-14">
                        <div className="flex justify-between items-center uppercase cinzel">
                            <h2 className="text-[#151515] text-sm md:text-base lg:text-xl xl:text-2xl font-bold">Total Orders: {cart.length}</h2>
                            <h3 className="text-[#151515] text-sm md:text-base lg:text-xl xl:text-2xl font-bold">total price: ${totalPrice}</h3>

                            <button
                                onClick={() => document.getElementById('checkout_modal').showModal()}
                                className="btn btn-sm lg:btn-md bg-[#D1A054] text-white font-bold text-sm md:text-base lg:text-xl xl:text-2xl">
                                Order Now
                            </button>

                            <dialog id="checkout_modal" className="modal modal-bottom sm:modal-middle">
                                <div className="modal-box rounded-t-2xl md:rounded-2xl bg-white shadow-xl px-6 py-8 md:px-10 md:py-10 w-full max-w-md">
                                    <h3 className="font-bold text-xl text-center mb-6 text-[#D1A054]">Enter Delivery Address</h3>

                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            handleProceed();
                                        }}
                                        className="flex flex-col gap-4"
                                    >
                                        <textarea
                                            required
                                            placeholder="Your full address here..."
                                            className="border border-gray-200 rounded-md  focus:border-gray-200 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring   h-28 resize-none w-full text-sm md:text-base"
                                            onChange={(e) => setAddress(e.target.value)}
                                        ></textarea>

                                        <div className="flex flex-col-reverse md:flex-row md:justify-end gap-3 mt-4">
                                            <button
                                                type="button"
                                                className="btn btn-outline border-gray-300 text-gray-700 hover:border-red-400 hover:text-red-500"
                                                onClick={() => document.getElementById('checkout_modal').close()}
                                            >
                                                Cancel
                                            </button>

                                            {cart.length ? (
                                                <button
                                                    type="submit"
                                                    className="btn bg-[#D1A054] text-white hover:bg-[#b7863f]"
                                                >
                                                    Proceed to Pay
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn bg-[#D1A054B3] text-white cursor-not-allowed"
                                                    disabled
                                                >
                                                    Proceed to Pay
                                                </button>
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </dialog>


                            {/* {
                                cart.length ? <Link to='/dashboard/payment'>
                                    <button className="btn btn-sm lg:btn-md bg-[#D1A054] text-white font-bold text-sm md:text-base lg:text-xl xl:text-2xl">Pay</button>
                                </Link>
                                    :
                                    <button className="btn btn-sm lg:btn-md bg-[#D1A054B3] text-white font-bold text-sm md:text-base lg:text-xl xl:text-2xl cursor-not-allowed focus:cursor-not-allowed">Pay</button>
                            } */}
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