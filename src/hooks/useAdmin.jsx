import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user, loading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            if (!user?.email) return false; 
            const { data } = await axiosSecure(`/users/admin/${user?.email}`);
            console.log(data);
            return data?.admin;
        }
    })

    return [isAdmin, isAdminLoading];
};

export default useAdmin;