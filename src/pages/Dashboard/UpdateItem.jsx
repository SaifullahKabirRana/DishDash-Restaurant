import { useForm } from "react-hook-form";
import Title from "../../components/Dashboard/Title";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const UpdateItem = () => {
    const { name, price, recipe, category, _id } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosCommon = useAxiosCommon();
    const axiosSecure = useAxiosSecure();

    const onSubmit = async (data) => {
        console.log(data);

        // img upload to imgbb and then get an url
        const imageFile = { image: data.image[0] };

        try {
            const res = await axiosCommon.post(image_hosting_api, imageFile, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });

            if (res.data.success) {
                const menuItem = {
                    name: data.name,
                    recipe: data.recipe,
                    image: res.data.data.display_url,
                    category: data.category,
                    price: parseFloat(data.price)

                }
                const menusRes = await axiosSecure.post(`/menu`, menuItem)

                if (menusRes.data.insertedId) {
                    reset();
                    toast.success(`${data.name} is added to the menu.`)
                }
                else {
                    toast.error("Something error! Please try again")
                }
            }
        }
        catch (err) {
            toast.error(err.code);
        }
    };

    return (
        <div className="mx-4 md:mx-10 lg:mx-16 xl:mx-36 2xl:mx-44 pb-8 md:pb-12 xl:pb-16 2xl:pb-20">
            <Title
                subHeading={"---What's new?---"}
                heading={"UPDATE AN ITEM"}
            ></Title>
            <div className="">
                <div className="bg-[#F3F3F3] px-4 md:px-6 lg:px-10 xl:px-14 2xl:px-16 py-6 lg:py-8 xl:py-10 2xl:py-12">
                    <section className="w-full">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="">
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-700 font-semibold" htmlFor="name">
                                        Recipe name*
                                    </label>
                                    <input
                                        defaultValue={name}
                                        {...register("name", { required: true })}
                                        type="text"
                                        placeholder="Recipe name"
                                        className="block w-full px-4 py-3  opacity-90  border border-gray-200 rounded-md  focus:border-gray-200 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 items-center">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-gray-700 font-semibold" htmlFor="category">
                                            Category*
                                        </label>
                                        <select
                                            {...register("category", { required: true })}
                                            type='text'
                                            defaultValue={category}
                                            className='block w-full px-4 py-3  opacity-90  border border-gray-200 rounded-md  focus:border-gray-200 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                        >
                                            <option disabled value='default'>Select a Category</option>
                                            <option value='salad'>Salad</option>
                                            <option value='pizza'>Pizza</option>
                                            <option value='soup'>Soup</option>
                                            <option value='dessert'>Dessert</option>
                                            <option value='drinks'>Drinks</option>
                                            <option value='popular'>Popular</option>
                                            <option value='offered'>Offered</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="text-gray-700 font-semibold"
                                            htmlFor="price"
                                        >
                                            Price*
                                        </label>
                                        <input
                                            defaultValue={price}
                                            {...register("price", { required: true })}
                                            type="number"
                                            placeholder="Price"
                                            className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-gray-200 focus:ring-gray-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 mt-4">
                                    <label className="text-gray-700 font-semibold" htmlFor="recipe">
                                        Recipe Details*
                                    </label>
                                    <textarea
                                        defaultValue={recipe}
                                        {...register("recipe", { required: true })}
                                        type='text'
                                        placeholder="Recipe Details"
                                        className='block w-full h-[80px] md:h-[100px] xl:h-[150px] 2xl:h-[200px] px-4 py-2 mt-2 opacity-90 border border-gray-200 rounded-md  focus:border-gray-200 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                    ></textarea>
                                </div>
                                <div className="mt-4 ">
                                    <input
                                        {...register("image", { required: true })}
                                        type="file"
                                        className="file-input file-input-ghost  text-sm lg:text-base" />
                                </div>
                            </div>
                            <button className="mt-6 btn font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
                                Update Item
                            </button>
                        </form>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default UpdateItem;