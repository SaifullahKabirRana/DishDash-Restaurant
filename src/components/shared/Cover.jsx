import { Parallax } from 'react-parallax';

const Cover = ({ bgImg, height, paddingY, heading, subHeading, upperWord }) => {
    const strengthValue =
        window.innerWidth <= 650 ? 0 :
            window.innerWidth <= 1450 ? -80 :
                -150;

    return (
        <div>
            <div className=" -ml-[1px]">
                <Parallax
                    blur={{ min: -30, max: 30 }}
                    bgImage={bgImg}
                    bgImageAlt="the cat"
                    strength={strengthValue}
                    style={{ backgroundPosition: 'center center', backgroundSize: 'cover' }}
                >
                    <div className='w-full flex justify-center '>
                        <div className='min-w-full '>
                            <div

                                className={`${height} bg-cover bg-center`}>
                                <div className={`px-[30px] md:px-[120px] lg:px-[180px] xl:px-[250px] 2xl:px-[800px] ${paddingY}`}>
                                    <div className='flex justify-center items-center'>
                                        <div className='bg-[#15151599] min-w-full sm:min-w-[550px] md:min-w-[650px] lg:min-w-[820px] xl:min-w-[1020px] 2xl:min-w-[1320px] px-6 md:px-12 lg:px-16 xl:px-20 2xl:px-28 min-h-[160px] md:min-h-[250px] lg:min-h-[300px] xl:min-h-[350px] 2xl:min-h-[400px] text-center flex flex-col justify-center items-center '>
                                            <h2 className='cinzel text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white uppercase pb-1 lg:pb-2'>{heading}</h2>
                                            <p className={`${upperWord} inter opacity-95 text-white text-xs md:text-sm xl:text-base`}>{subHeading}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Parallax>

            </div>
        </div>
    );
};

export default Cover;