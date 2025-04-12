import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../assets/assets/home/01.webp'
import img2 from '../assets/assets/home/02.webp'
import img3 from '../assets/assets/home/03.webp'
import img4 from '../assets/assets/home/04.webp'
import img5 from '../assets/assets/home/05.webp'
import img6 from '../assets/assets/home/06.webp'
const Banner = () => {
    return (
        <div className="-mb-4 lg:-mb-6 xl:-mb-8">
            <Carousel autoPlay interval={3000} infiniteLoop showArrows={true}>
                <div className="">
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <div></div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
                <div>
                    <img src={img5} />
                </div>
                <div>
                    <img src={img6} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;