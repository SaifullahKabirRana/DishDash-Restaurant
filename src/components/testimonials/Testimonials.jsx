
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import './swiper.css'
import vector from '../../assets/assets/vector.png'
import SectionTitle from '../SectionTitle';
const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios('/reviews.json');
                setReviews(Array.isArray(data) ? data : []);
            }
            catch (err) {
                console.log(err);
            }
        }
        getData();
    }, []);
   
    return (
        <div className='mb-8 md:mb-12 lg:mb-14 xl:mb-16 2xl:mb-20'>
            <SectionTitle
                subHeading={'---What Our Clients Say---'}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <div className="flex justify-center w-full">
                <div className="max-w-full sm:max-w-[550px] md:max-w-[650px] lg:max-w-[820px] xl:max-w-[1020px] 2xl:max-w-[1320px] px-3 md:px-0">
                    <div>
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            navigation={true}
                            modules={[Navigation]}
                            className="mySwiper"
                        >
                            {
                                reviews.map(review =>
                                    <SwiperSlide
                                        key={review._id}
                                        className='px-6 md:px-12 lg:px-14 xl:px-20 2xl:px-24'
                                    >
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="w-[100px] md:w-[120px] lg:w-[130px] xl:w-[150px]">
                                                <Rating

                                                    style={{ maxWidth: 180 }}
                                                    value={review.rating}
                                                    readOnly
                                                />
                                            </div>
                                            <div className="flex gap-1 xl:gap-2 w-[16px] md:w-[20px] xl:w-[25px] 2xl:w-[30px] mt-4 md:mt-6 xl:mt-8">
                                                <img src={vector} alt="" />
                                                <img src={vector} alt="" />
                                            </div>
                                            <div>
                                                <p className="text-[#444444] text-sm md:text-base xl:text-lg  inter mt-3 md:mt-4 xl:mt-6 mb-1 xl:mb-2 px-4 md:px-0">{review.details}</p>
                                                <h2 className="uppercase text-[#CD9003] text-lg md:text-xl xl:text-2xl font-medium">{review.name}</h2>
                                            </div>
                                        </div>
                                    </SwiperSlide>)
                            }

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;