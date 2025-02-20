import bgImg from '../assets/assets/home/chef-service.jpg'
const Description = () => {
    return (
        <div className='w-full flex justify-center '>
            <div className='max-w-full sm:max-w-[550px] md:max-w-[650px] lg:max-w-[820px] xl:max-w-[1020px] 2xl:max-w-[1320px] px-6 md:px-0'>
                <div
                style={{backgroundImage: `url(${bgImg})`}}
                className="h-[260px] md:h-[360px] lg:h-[420px] xl:h-[500px] 2xl:h-[550px] bg-cover bg-center">
                    <div className='px-6 md:px-14 lg:px-16 xl:px-20 2xl:px-24 py-10 md:py-14 lg:py-16 xl:py-20 2xl:py-24'>
                        <div className='flex justify-center items-center'>
                        <div className='bg-[#FFFFFF] px-4 md:px-14 lg:px-24 xl:px-36 2xl:px-40 py-6 md:py-16 lg:py-20 xl:py-24 2xl:py-28 text-center'>
                            <h2 className='font-cinzel text-xl md:text-2xl xl:text-3xl text-[#151515] uppercase pb-1 lg:pb-2'>DishDash</h2>
                            <p className='font-inter opacity-95 text-[#151515] text-xs md:text-sm xl:text-base 2xl:text-lg'>Our chef service offers expertly crafted dishes made with fresh, high-quality ingredients. Our skilled chefs bring creativity and passion to every plate, ensuring a delicious and memorable dining experience. Enjoy a perfect blend of taste and presentation with every meal we serve.</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;