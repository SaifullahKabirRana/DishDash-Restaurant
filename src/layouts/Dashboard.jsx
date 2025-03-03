import { NavLink, Outlet } from "react-router-dom";
import 'flowbite';
import { useState } from "react";

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="flex">
            <div>
                {/* Button to open the sidebar */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    data-drawer-target="default-sidebar"
                    data-drawer-toggle="default-sidebar"
                    aria-controls="default-sidebar"
                    type="button"
                    className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   "
                >
                    <span className="sr-only">Open sidebar</span>
                    <svg
                        className="w-6 h-6"
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
                    className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                        } sm:translate-x-0`}
                    aria-label="Sidebar"
                >
                    <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 ">
                        <ul className="space-y-2 font-medium">
                            <li>
                                <NavLink
                                    to='cart'
                                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 21"
                                    >
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span className="ms-3">cart</span>
                                </NavLink>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M10 1.25A8.75 8.75 0 1010 18.75A8.75 8.75 0 0010 1.25zM10 16.25A6.25 6.25 0 1110 3.75A6.25 6.25 0 0110 16.25z"
                                        ></path>
                                    </svg>
                                    <span className="ms-3">Analytics</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M9.5 2A7.5 7.5 0 1116.5 9.5A7.5 7.5 0 019.5 2zM9.5 14A4.5 4.5 0 1114 9.5A4.5 4.5 0 019.5 14z"
                                        ></path>
                                    </svg>
                                    <span className="ms-3">Reports</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100  group"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M4 4.25A.75.75 0 014.75 4h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 4.25zM4 9.25A.75.75 0 014.75 9h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 9.25zM4 14.25A.75.75 0 014.75 14h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 14.25z"
                                        ></path>
                                    </svg>
                                    <span className="ms-3">Settings</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-gray-100  group"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-gray-900 "
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12.293 9.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L14.586 12H6.5a1 1 0 010-2h8.086l-2.293-2.293a1 1 0 010-1.414z"
                                        ></path>
                                    </svg>
                                    <span className="ms-3">Log Out</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content */}
                <div
                    onClick={() => setIsSidebarOpen(false)}
                    className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${isSidebarOpen ? "block" : "hidden"
                        }`}>

                </div>

            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;