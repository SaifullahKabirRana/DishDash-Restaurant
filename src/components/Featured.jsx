import { Link } from 'react-router-dom';
import bgImg from '../assets/assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className=' mt-8 md:mt-12 lg:mt-14 xl:mt-16 2xl:mt-20'>
            <div
                style={{ backgroundImage: `url(${bgImg})` }}
                className='bg-fixed bg-cover bg-center bg-no-repeat '
            >
                <div className='w-full flex justify-center pb-6 md:pb-12 lg:pb-16 xl:pb-20 2xl:pb-24 bg-[#151515B3]'>
                    <div className='max-w-full sm:max-w-[550px] md:max-w-[650px] lg:max-w-[820px] xl:max-w-[1020px] 2xl:max-w-[1320px] px-6 md:px-0 '>
                        {/* title section */}
                        <div>
                            <div className="mt-6 md:mt-10 lg:mt-12 xl:mt-14 2xl:mt-16 pb-6 md:pb-7 lg:pb-8 xl:pb-12">
                                <div className="mx-auto w-6/10 md:w-4/10  lg:w-3/10 xl:w-3/10 2xl:w-2/10 text-center ">
                                    <p className="inter italic text-sm md:text-base xl:text-xl text-[#D99904] pb-1 md:pb-2 xl:mb-3">---Check it out---</p>
                                    <h2 className="inter text-white text-xl md:text-2xl xl:text-3xl border-y-2 border-[#E8E8E8] py-2 md:py-3 xl:py-4">FROM OUR MENU</h2>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-6 lg:gap-10 xl:gap-14 2xl:gap-16'>
                            <div>
                                <img className='w-full sm:w-[500px] md:w-[550px] lg:w-[700px] xl:w-[950px] 2xl:w-[1000px] h-[200px] sm:h-[250px] md:h-[180px] lg:h-[250px] xl:h-[300px] 2xl:h-[350px]' src={bgImg} alt="" />
                            </div>
                            <div className='text-white inter'>
                                <h2 className='uppercase text-sm md:text-base lg:text-lg xl:text-xl'>Feb 28, 2025</h2>
                                <p className='uppercase text-sm md:text-base lg:text-lg xl:text-xl'>Where can i get some</p>
                                <p className='text-xs md:text-sm xl:text-base  mt-1 inter opacity-90 '>From farm-fresh ingredients to masterful cooking, every bite of our food is packed with authentic flavors. Whether it’s a hearty meal or a quick snack, we serve only the best. Order now and satisfy your cravings!</p>
                                <Link className=''>
                                    <button className="mt-2 md:mt-3 xl:mt-4 btn btn-sm md:btn-md border-t-0 border-l-0 border-r-0  bg-transparent bg-none btn-ghost text-white inter text-sm md:text-base  border-b-2 border-white rounded-xl uppercase  hover:opacity-85 ">Order Now</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;