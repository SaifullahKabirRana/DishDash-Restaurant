import { Helmet } from "react-helmet-async";
import Cover from "../components/shared/Cover";
import bgImg from '../assets/assets/menu/banner3.jpg'
const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>DishDash - Menu</title>
            </Helmet>
            <div>
                <Cover
                bgImg={bgImg}
                height={'h-[300px] md:h-[420px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'}
                paddingY={'py-20 md:py-28 lg:py-36 xl:py-44 2xl:py-48'}
                heading={'OUR MENU'}
                subHeading={'Would you like to try a dish?'}
                upperWord={'uppercase'}
                ></Cover>
            </div>
            <div>
                <Cover
                bgImg={bgImg}
                height={'h-[300px] md:h-[420px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'}
                paddingY={'py-20 md:py-28 lg:py-36 xl:py-44 2xl:py-48'}
                heading={'OUR MENU'}
                subHeading={'Would you like to try a dish?'}
                upperWord={'uppercase'}
                ></Cover>
            </div>
            <div>
                <Cover
                bgImg={bgImg}
                height={'h-[300px] md:h-[420px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'}
                paddingY={'py-20 md:py-28 lg:py-36 xl:py-44 2xl:py-48'}
                heading={'OUR MENU'}
                subHeading={'Would you like to try a dish?'}
                upperWord={'uppercase'}
                ></Cover>
            </div>
            <div>
                <Cover
                bgImg={bgImg}
                height={'h-[300px] md:h-[420px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'}
                paddingY={'py-20 md:py-28 lg:py-36 xl:py-44 2xl:py-48'}
                heading={'OUR MENU'}
                subHeading={'Would you like to try a dish?'}
                upperWord={'uppercase'}
                ></Cover>
            </div>
        </div>
    );
};

export default OurMenu;