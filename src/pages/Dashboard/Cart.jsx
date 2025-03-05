import { Link } from "react-router-dom";
import Title from "../../components/Dashboard/Title";
import useCart from '../../hooks/useCart'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const Cart = () => {
    const [cart] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    return (
        <div className=" md:min-h-screen md:bg-[#F3F3F3]">
            <div className="px-5 md:px-10 lg:px-16 xl:px-24 2xl:px-28">
                <Title
                    subHeading={'---My Cart---'}
                    heading={'WANNA ADD MORE?'}
                ></Title>
                <div className="bg-white">
                    <div className=" md:p-6 lg:p-8 xl:p-10 2xl:xl:p-14">
                        <div className="flex justify-between items-center uppercase cinzel">
                            <h2 className="text-[#151515] text-sm md:text-base lg:text-xl xl:text-2xl font-bold">Total Orders: {cart.length}</h2>
                            <h3 className="text-[#151515] text-sm md:text-base lg:text-xl xl:text-2xl font-bold">total price: ${totalPrice}</h3>
                            <Link>
                                <button className="btn btn-sm lg:btn-md bg-[#D1A054] text-white font-bold text-sm md:text-base lg:text-xl xl:text-2xl">Pay</button>
                            </Link>
                        </div>
                        {/* table */}
                        <div className="pt-5 md:pt-6 lg:mt-6 xl:mt-8">
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
                                                    <button className="btn btn-sm rounded-lg lg:py-4 xl:py-5 bg-[#B91C1C]">
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