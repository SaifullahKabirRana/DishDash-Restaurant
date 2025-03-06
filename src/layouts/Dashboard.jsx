import { Link, NavLink, Outlet } from "react-router-dom";
import 'flowbite';
import { useState } from "react";
import { HiHome } from "react-icons/hi2";
import { FaCalendarDays } from "react-icons/fa6";
import { IoWallet } from "react-icons/io5";
import { FaBook, FaListUl, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { PiListStarFill } from "react-icons/pi";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { IoMailSharp } from "react-icons/io5";
const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const isAdmin = true;

    return (
        <div className="md:flex">
            <div className="md:w-[200px] lg:w-[240px] xl:w-[270px] bg-[#D1A054]">
                {/* Button to open the sidebar */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    data-drawer-target="default-sidebar"
                    data-drawer-toggle="default-sidebar"
                    aria-controls="default-sidebar"
                    type="button"
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
                >
                    <span className="sr-only">Open sidebar</span>
                    <svg
                        className="w-6 h-6 text-black"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                        ></path>
                    </svg>
                </button>

                {/* Sidebar */}
                <aside
                    id="default-sidebar"
                    className={`fixed top-0 left-0 z-40 w-56 md:w-[220px] lg:w-[240px] xl:w-[270px] h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        } md:translate-x-0`}
                    aria-label="Sidebar"
                >
                    <div className="h-full px-3 py-4 overflow-y-auto bg-[#D1A054] ">
                        <div className="pl-[10px] md:pl-[10px] lg:pl-[15px] xl:pl-[20px] pt-2 xl:pt-4">
                            <Link to='/'>
                                <div className="flex flex-col cinzel ">
                                    <h2 className="text-2xl xl:text-3xl font-extrabold ">DishDash</h2>
                                    <p className="text-sm xl:text-lg tracking-[4px] font-semibold">Restaurant</p>
                                </div>
                            </Link>
                            {/* top list */}
                            <div className="mt-[55px] ">
                                <ul
                                    id="nav2"
                                    className="text-sm xl:text-base  space-y-4 xl:space-y-5  font-medium text-[#151515] cinzel  uppercase">
                                    {
                                        isAdmin ?
                                            <>
                                                <li>
                                                    <NavLink to='/dashboard/adminHome' className={`flex items-center gap-2`}>
                                                        <HiHome className="text-lg xl:text-xl" />
                                                        <span className="">Admin Home</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/dashboard/addItems' className={`flex items-center gap-2`}>
                                                        <FaUtensils className="text-lg xl:text-xl" />
                                                        <span className="">Add Items</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/dashboard/manageItems' className={`flex items-center gap-2`}>
                                                        <FaListUl className="text-lg xl:text-xl" />
                                                        <span className="">Manage Items</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/dashboard/manageBookings' className={`flex items-center gap-2`}>
                                                        <FaBook className="text-lg xl:text-xl" />
                                                        <span className="">Manage Bookings</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/dashboard/allUsers' className={`flex items-center gap-2`}>
                                                        <FaUsers className="text-lg xl:text-xl" />
                                                        <span className="">All Users</span>
                                                    </NavLink>
                                                </li>
                                            </>
                                            :
                                            <>
                                                <li>
                                                    <NavLink to='/dashboard/userHome' className={`flex items-center gap-2`}>
                                                        <HiHome className="text-lg xl:text-xl" />
                                                        <span className="">User Home</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/dashboard/reservation' className={`flex items-center gap-2`}>
                                                        <FaCalendarDays className="text-lg xl:text-xl" />
                                                        <span className="">Reservation</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/dashboard/paymentHistory' className={`flex items-center gap-2`}>
                                                        <IoWallet className="text-lg xl:text-xl" />
                                                        <span className="">Payment History</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/dashboard/cart' className={`flex items-center gap-2`}>
                                                        <FaShoppingCart className="text-lg xl:text-xl" />
                                                        <span className="">My Cart</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/dashboard/review' className={`flex items-center gap-2`}>
                                                        <PiListStarFill className="text-lg xl:text-xl" />
                                                        <span className="">Add Review</span>
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to='/dashboard/bookings' className={`flex items-center  gap-2`}>
                                                        <BsCalendar2CheckFill className="text-lg xl:text-xl" />
                                                        <span className="">My Booking</span>
                                                    </NavLink>
                                                </li>
                                            </>
                                    }


                                </ul>
                            </div>
                            {/* shared navLinks*/}
                            <div className="mt-[35px]">
                                <hr className="text-[#FFFFFF] -ml-2 mr-5" />
                                <ul id="nav2"
                                    className="mt-[35px] text-sm xl:text-base  space-y-4 xl:space-y-5  font-medium text-[#151515] cinzel  uppercase">
                                    <li>
                                        <NavLink to='/' className={`flex items-center gap-2`}>
                                            <HiHome className="text-lg xl:text-xl" />
                                            <span className="">Home</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/menu' className={`flex items-center gap-2`}>
                                            <GiHamburgerMenu className="text-lg xl:text-xl" />
                                            <span className="">Menu</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/order/salad' className={`flex items-center gap-2`}>
                                            <FaShoppingBag className="text-lg xl:text-xl" />
                                            <span className="">Order</span>
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/contact' className={`flex items-center gap-2`}>
                                            <IoMailSharp className="text-lg xl:text-xl" />
                                            <span className="">Contact</span>
                                        </NavLink>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content */}
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-200/60 transition-colors md:hidden ${isSidebarOpen ? "block" : "hidden"
                        }`}>

                </div>

            </div>
            <div className="md:flex-1 ">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;