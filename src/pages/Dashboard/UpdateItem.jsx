import { useForm } from "react-hook-form";
import Title from "../../components/Dashboard/Title";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const { name, price, recipe, category, _id, image } = useLoaderData();
    const [loading, setLoading] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name,
            price,
            recipe,
            category
        }
    });
    const axiosCommon = useAxiosCommon();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        setLoading(true);
        try {
            let imageUrl = image; // Default to existing image

            // Only upload new image if one was provided
            if (data.image && data.image.length > 0) {
                const imageFile = { image: data.image[0] };
                const res = await axiosCommon.post(image_hosting_api, imageFile, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                });

                if (res.data.success) {
                    imageUrl = res.data.data.display_url;
                } else {
                    toast.error("Image upload failed");
                    return;
                }
            }

            const menuItem = {
                name: data.name,
                recipe: data.recipe,
                image: imageUrl, // Use new image if uploaded, otherwise keep existing
                category: data.category,
                price: parseFloat(data.price)
            };

            const menusRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);

            if (menusRes.data.modifiedCount > 0) {
                toast.success(`${data.name} is updated in the menu.`);
                setLoading(false);
                navigate('/dashboard/manageItems');
            } else {
                toast.error("No changes were made or something went wrong");
                setLoading(false);
            }
        } catch (err) {
            toast.error(err.message || "An error occurred");
            setLoading(false);
        }
    };

    return (
        <div className="mx-4 md:mx-10 lg:mx-16 xl:mx-36 2xl:mx-44 pb-8 md:pb-12 xl:pb-16 2xl:pb-20">
            <Title
                subHeading={"---What's new?---"}
                heading={"UPDATE AN ITEM"}
            />
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
                                        {...register("name", { required: "Recipe name is required" })}
                                        type="text"
                                        placeholder="Recipe name"
                                        className="block w-full px-4 py-3 opacity-90 border border-gray-200 rounded-md focus:border-gray-200 focus:ring-gray-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                                </div>

                                <div className="grid grid-cols-1 gap-6 mt-4 md:grid-cols-2 items-center">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-gray-700 font-semibold" htmlFor="category">
                                            Category*
                                        </label>
                                        <select
                                            {...register("category", { required: "Please select a category" })}
                                            className='block w-full px-4 py-3 opacity-90 border border-gray-200 rounded-md focus:border-gray-200 focus:ring-gray-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                                        >
                                            <option value=''>Select a Category</option>
                                            <option value='salad'>Salad</option>
                                            <option value='pizza'>Pizza</option>
                                            <option value='soup'>Soup</option>
                                            <option value='dessert'>Dessert</option>
                                            <option value='drinks'>Drinks</option>
                                            <option value='popular'>Popular</option>
                                            <option value='offered'>Offered</option>
                                        </select>
                                        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label
                                            className="text-gray-700 font-semibold"
                                            htmlFor="price"
                                        >
                                            Price*
                                        </label>
                                        <input
                                            {...register("price", {
                                                required: "Price is required",
                                                min: { value: 0.01, message: "Price must be greater than 0" }
                                            })}
                                            type="number"
                                            step="0.01"
                                            placeholder="Price"
                                            className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-gray-200 focus:ring-gray-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                        />
                                        {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 mt-4">
                                    <label className="text-gray-700 font-semibold" htmlFor="recipe">
                                        Recipe Details*
                                    </label>
                                    <textarea
                                        {...register("recipe", { required: "Recipe details are required" })}
                                        placeholder="Recipe Details"
                                        className='block w-full h-[80px] md:h-[100px] xl:h-[150px] 2xl:h-[200px] px-4 py-2 mt-2 opacity-90 border border-gray-200 rounded-md focus:border-gray-200 focus:ring-gray-300 focus:ring-opacity-40 focus:outline-none focus:ring'
                                    />
                                    {errors.recipe && <p className="text-red-500 text-sm mt-1">{errors.recipe.message}</p>}
                                </div>
                                <div className="mt-4 flex flex-col gap-2">
                                    <label className="text-gray-700 font-semibold" htmlFor="image">
                                        Image (Leave empty to keep current image)
                                    </label>
                                    <input
                                        {...register("image")}
                                        type="file"
                                        className="file-input file-input-ghost text-sm lg:text-base"
                                    />
                                    <div className="text-sm text-gray-500">
                                        Current image: <a href={image} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">View</a>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="mt-6 btn font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] text-white"

                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <span className="loading loading-spinner loading-sm"></span> Updating...
                                    </span>
                                ) : (
                                    <>
                                        Update Item
                                    </>
                                )}
                            </button>

                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default UpdateItem;