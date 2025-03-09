import Title from "../../components/Dashboard/Title";

const AddItems = () => {
    return (
        <div className="mx-4 md:mx-10 lg:mx-16 xl:mx-36 2xl:mx-44">
            <Title
                subHeading={"---What's new?---"}
                heading={"ADD AN ITEM"}
            ></Title>
            <div className="mt-6 md:mt-8 lg:mt-10 xl:mt-12 inter">
                <div className="bg-[#F3F3F3] px-4 md:px-8 lg:px-10 xl:px-14 2xl:px-16 py-6 lg:py-8 xl:py-10 2xl:py-12">
                    <section className="w-full">
                        <form>
                            <div className="">
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-700 font-semibold" htmlFor="name">
                                        Recipe name*
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
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
                                            name='category'
                                            id='category'
                                            
                                            className='block w-full px-4 py-3  opacity-90  border border-gray-200 rounded-md  focus:border-gray-200 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                        >
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
                                            id="price"
                                            name="price"
                                            type="number"
                                            placeholder="Price"
                                            className="block w-full px-4 py-3 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-gray-200 focus:ring-gray-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 mt-4">
                                    <label className="text-gray-700 font-semibold" htmlFor="details">
                                        Recipe Details*
                                    </label>
                                    <textarea
                                        placeholder="Recipe Details"
                                        className='block w-full h-[80px] md:h-[100px] xl:h-[150px] 2xl:h-[200px] px-4 py-2 mt-2 opacity-90 border border-gray-200 rounded-md  focus:border-gray-200 focus:ring-gray-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                        name='details'
                                        id='details'
                                        required
                                    ></textarea>
                                </div>
                            </div>
                            <div className="flex justify-center mt-6">
                                <input type="submit" value="Update Recipe Details"
                                className="btn font-semibold bg-gradient-to-r from-[#835D23] to-[#B58130] text-white"
                                />
                            </div>
                        </form>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default AddItems;