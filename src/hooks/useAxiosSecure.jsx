import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    // request interceptors to add authorization headers for every secure call to the api
    axiosSecure.interceptors.request.use(config => {
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`;
console.log('interceptors token: ',token);
        return config;
    }, error => {
        return Promise.reject(error);
    });

    // interceptors 401 and 403 status
    axiosSecure.interceptors.response.use(res => {
        return res;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }

        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxiosSecure;