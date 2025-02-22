import axios from "axios";
import { useEffect, useState } from "react";

const useMenu = () => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios('/menu.json')
                setMenu(data);
                setLoading(false);
            }
            catch (err) {
                console.log('use menu hook:', err);
            }
        }
        getData();

    }, [])
    return [menu, loading]

};

export default useMenu;