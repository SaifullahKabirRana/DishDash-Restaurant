import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './swiper.css'

import slide1 from '../../assets/assets/home/slide1.jpg'
import slide2 from '../../assets/assets/home/slide2.jpg'
import slide3 from '../../assets/assets/home/slide3.jpg'
import slide4 from '../../assets/assets/home/slide4.jpg'
import slide5 from '../../assets/assets/menu/Burger.png'
import slide6 from '../../assets/assets/home/biriyani.png'
import slide7 from '../../assets/assets/home/chicken.png'
import slide8 from '../../assets/assets/home/meat.png'

import SectionTitle from '../SectionTitle';

const Category = () => {
    return (
        <div>
            <div>
                <SectionTitle
                    subHeading={'---From 11:00am to 10:00pm---'}
                    heading={'ORDER ONLINE'}
                ></SectionTitle>
            </div>
            <div className=' pb-8 md:pb-12 lg:pb-14 xl:pb-20'>
                <div className='w-full flex justify-center px-6 md:px-0'>
                    <div className='max-h-[300px] md:max-h-[350px] lg:max-h-full max-w-full sm:max-w-[550px] md:max-w-[650px] lg:max-w-[820px] xl:max-w-[1020px] 2xl:max-w-[1320px] cinzel uppercase text-white'>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={10}
                            pagination={{
                                clickable: true,
                            }}
                            breakpoints={{
                                '@0.00': {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                '@0.75': {
                                    slidesPerView: 3,
                                    spaceBetween: 20,
                                },
                                '@1.00': {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                '@1.50': {
                                    slidesPerView: 4,
                                    spaceBetween: 50,
                                },
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide className='flex flex-col '>
                                <img src={slide1} alt="" />
                                <h2 className='relative -top-10 lg:-top-15 text-lg md:text-xl lg:text-2xl '>Salads</h2>
                            </SwiperSlide>

                            <SwiperSlide className='flex flex-col'>
                                <img src={slide2} alt="" />
                                <h2 className='relative -top-10 lg:-top-15 text-lg md:text-xl lg:text-2xl '>Pizzas</h2>
                            </SwiperSlide>

                            <SwiperSlide className='flex flex-col'>
                                <img src={slide3} alt="" />
                                <h2 className='relative -top-10 lg:-top-15 text-lg md:text-xl lg:text-2xl '>Soups</h2>
                            </SwiperSlide>

                            <SwiperSlide className='flex flex-col'>
                                <img src={slide4} alt="" />
                                <h2 className='relative -top-10 lg:-top-15 text-lg md:text-xl lg:text-2xl '>desserts</h2>
                            </SwiperSlide>

                            <SwiperSlide className='flex flex-col'>
                                <img src={slide5} alt="" />
                                <h2 className='relative -top-10 lg:-top-15 text-lg md:text-xl lg:text-2xl '>Burgers</h2>
                            </SwiperSlide>
                            <SwiperSlide className='flex flex-col'>
                                <img src={slide6} alt="" />
                                <h2 className='relative -top-10 lg:-top-15 text-lg md:text-xl lg:text-2xl '>Biryani</h2>
                            </SwiperSlide>
                            <SwiperSlide className='flex flex-col'>
                                <img src={slide7} alt="" />
                                <h2 className='relative -top-10 lg:-top-15 text-lg md:text-xl lg:text-2xl '>Chickens</h2>
                            </SwiperSlide>
                            <SwiperSlide className='flex flex-col'>
                                <img src={slide8} alt="" />
                                <h2 className='relative -top-10 lg:-top-15 text-lg md:text-xl lg:text-2xl '>Beefs</h2>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;