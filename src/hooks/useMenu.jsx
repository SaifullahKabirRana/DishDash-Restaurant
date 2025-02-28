
import { useEffect, useState } from "react";
import useAxiosCommon from "./useAxiosCommon";

const useMenu = () => {
    const axiosCommon = useAxiosCommon();
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axiosCommon(`/menu`);
                setMenu(Array.isArray(data)? data: []);
                setLoading(false);
            }
            catch (err) {
                console.log('use menu hook:', err);
            }
        }
        getData();

    }, [axiosCommon])
    return [menu, loading]

};

export default useMenu;