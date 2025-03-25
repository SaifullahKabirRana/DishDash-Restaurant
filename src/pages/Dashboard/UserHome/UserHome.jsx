import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div className=" min-h-screen bg-[#F3F3F3]">
            <div className="px-6">
                <h2 className="text-[#151515] uppercase cinzel text-xl lg:text-2xlx">
                    Hi, Welcome {user?.displayName ? user.displayName : 'Back'}!
                </h2>
            </div>
        </div>
    );
};

export default UserHome;