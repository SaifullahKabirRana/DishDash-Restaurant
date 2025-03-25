import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const { user } = useAuth();
    console.log(user, 'from payment');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const totalPrice = parseFloat(cart.reduce((total, item) => total + item.price, 0).toFixed(2));
    const navigate = useNavigate();


    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post(`/create-payment-intent`, { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
                .catch(error => {
                    console.error("Payment Intent Error:", error);
                });
        }
    }, [axiosSecure, totalPrice]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('Payment error', error);
            setError(error.message);
        }
        else {
            console.log('Payment method', paymentMethod);
            setError('');
        }

        //confirm payment 
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || 'anonymous',
                    email: user?.email || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error', confirmError);
        }
        else {
            console.log('successfully payment intent', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in database
                const payment = {
                    name: user?.displayName,
                    email: user?.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), //utc date convert, use moment js to convert
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.menuId),
                    status: 'pending',
                }
                try {
                    const { data } = await axiosSecure.post(`/payments`, payment)
                    refetch();
                    if(data?.paymentResult?.insertedId){
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Payment Successful!",
                            text: "Thank you for your purchase. Your payment has been processed successfully.",
                            showConfirmButton: false,
                            timer: 2000
                          });
                          navigate('/dashboard/paymentHistory')
                    }
                }
                catch (err) {
                    console.log(err);
                }
            }
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <p className="text-red-600 pt-2">{error}</p>
            {transactionId && <p className="text-green-600">Your transaction id: {transactionId}</p>}
            <div className="flex justify-center mt-8">
                <button
                    disabled={!stripe || !clientSecret}
                    className="btn bg-[#570DF8] text-white px-14 rounded-md text-lg peer-disabled:cursor-not-allowed" type="submit" >
                    Pay
                </button>
            </div>
        </form>
    );
};

export default CheckoutForm;