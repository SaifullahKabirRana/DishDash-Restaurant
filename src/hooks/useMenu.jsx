import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "./useAxiosCommon";

const useMenu = () => {
    const axiosCommon = useAxiosCommon();


    const { data: menu = [], refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/menu');
            return data || [];
        }
    })

    return [menu, refetch]

};

export default useMenu;