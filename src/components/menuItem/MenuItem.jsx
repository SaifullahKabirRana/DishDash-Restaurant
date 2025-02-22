
const MenuItem = ({ item }) => {
    const { name, image, recipe, price } = item;
    return (
        <div>
            <div className="flex justify-center items-center gap-3 md:gap-5 lg:gap-3 xl:gap-7">
                <div>
                    <img className="h-[75px] md:h-[80px] lg:h-[90px] xl:h-[100px] 2xl:h-[105px] max-w-[60px] md:max-w-[70px] lg:max-w-[80px] xl:max-w-[100px] 2xl:max-w-[90px] rounded-tl-[0px] rounded-tr-[200px] rounded-br-[200px] rounded-bl-[200px] object-cover object-right" src={image} alt="" />
                </div>
                <div className="flex gap-1 xl:gap-2">
                    <div  className="flex flex-col gap-1 xl:gap-2">
                        <h2 className="text-[#151515] font-cinzel text-base md:text-lg xl:text-xl uppercase">{name} -------</h2>
                        <p className="text-[#737373] font-inter text-xs md:text-base lg:text-sm xl:text-base">{recipe}</p>
                    </div>
                    <div>
                        <p className="text-[#BB8506] font-inter text-base md:text-lg lg:text-lg xl:text-xl">${price}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MenuItem;