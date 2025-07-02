import SectionTitle from "./SectionTitle";
import useMenu from "../hooks/useMenu";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import Swal from "sweetalert2";

const Recommends = () => {
    const [menu] = useMenu();
    console.log(menu, 'menu home');
    const recommends = menu.filter(item => item.category === 'offered');
    console.log('offered item', recommends);
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useCart();

    const handleAddToCart = async (food) => {
        if (user && user?.email) {
            // send cart item to the database
            const cartItems = {
                menuId: food._id,
                email: user?.email,
                name: food.name,
                image: food.image,
                category: food.category,
                price: food.price
            }
            try {
                await axiosSecure.post(`/carts`, cartItems);
                // refetch cart to update the cart items count
                await refetch();
                toast.success('Item added in the cart');

            }
            catch (err) {
                toast.error(err.code);
            }

        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#D1A054",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

    return (
        <div>
            <SectionTitle
                subHeading={'---Should Try---'}
                heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className="w-full flex justify-center">
                <div className="max-w-full sm:max-w-[550px] md:max-w-[650px] lg:max-w-[820px] xl:max-w-[1020px] 2xl:max-w-[1320px] px-6 md:px-0">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-3 xl:gap-6">
                        {
                            recommends.slice(0,3).map(menu =>
                                <div key={menu._id}>
                                    <div className="">
                                        <div>
                                            
                                            <img className="w-full  h-[220px] xl:h-[250px] 2xl:h-[290px]" src={menu.image} alt="" />
                                        </div>
                                        <div className="bg-[#F3F3F3] md:min-h-[120px] xl:min-h-[160px]">
                                            <div className="flex flex-col inter text-center py-5 md:py-6 xl:py-7 2xl:py-8 ">
                                                <h2 className="text-[#151515] text-base md:text-base xl:text-xl font-semibold ">{menu.name}</h2>
                                                <p className="text-[#151515] text-xs xl:text-sm mt-1 xl:mt-2 mb-4 xl:mb-5 px-4 lg:px-2 xl:px-4 2xl:px-6">{menu.recipe}</p>
                                                
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recommends;