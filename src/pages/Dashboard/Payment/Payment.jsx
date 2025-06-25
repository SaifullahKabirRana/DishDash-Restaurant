import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    const location = useLocation();
    const address = location.state?.address || "";
    const phone = location.state?.phone || "";

    return (
        <div className="px-3 md:ml-5 lg:ml-0 lg:px-10 xl:px-24 2xl:px-28 py-56">
            <h2 className="uppercase text-[#151515] text-xl md:text-2xl xl:text-3xl text-center">Payment</h2>
            <div className="mt-16">
                <Elements stripe={stripePromise}>
                    <CheckoutForm address={address} phone={phone}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;