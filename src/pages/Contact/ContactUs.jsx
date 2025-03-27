import { Helmet } from "react-helmet-async";
import Cover from "../../components/shared/Cover";
import contactBg from '../../assets/assets/contact/banner.jpg'
import OurLocation from "./OurLocation";
import ContactForm from "./ContactForm";

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>DishDash - Contact Us</title>
            </Helmet>
            <Cover
                bgImg={contactBg}
                height={'h-[280px] md:h-[420px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'}
                paddingY={'py-20 md:py-28 lg:py-36 xl:py-44 2xl:py-48'}
                heading={'CONTACT US'}
                subHeading={'Would you like to try a dish?'}
                upperWord={'uppercase'}
            ></Cover>
            <div>
                <OurLocation></OurLocation>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default ContactUs;