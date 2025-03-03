import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useCart = () => {
    const axiosSecure = useAxiosSecure();

    const { data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const { data } = await axiosSecure('/carts');
            return (data ? data : 0);
        }
    })

    return [cart];
};

export default useCart;