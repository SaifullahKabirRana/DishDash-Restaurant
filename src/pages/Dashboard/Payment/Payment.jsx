import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe('');

const Payment = () => {
    return (
        <div className="px-3 md:ml-5 lg:ml-0 lg:px-10 xl:px-24 2xl:px-28 py-56">
            <h2 className="uppercase text-[#151515] text-xl md:text-2xl xl:text-3xl text-center">Payment</h2>
            <div>
                <Elements stripe={stripePromise}>

                </Elements>
            </div>
        </div>
    );
};

export default Payment;