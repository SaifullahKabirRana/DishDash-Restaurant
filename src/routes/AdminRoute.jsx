import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="flex justify-center mt-60 md:mt-72 xl:mt-96">
            <span className="loader"></span>
        </div>
    }
    if (user && isAdmin) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace={true}></Navigate>
};

export default AdminRoute;