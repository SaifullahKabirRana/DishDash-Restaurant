import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();
    const { user, logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [cart] = useCart();

    // Click outside to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const navLinks = <>
        <li><NavLink to='/' onClick={() => setIsOpen(false)}>Home</NavLink></li>
        <li><NavLink to='/menu' onClick={() => setIsOpen(false)}>Our Menu</NavLink></li>
        <li><NavLink to='/order/salad' onClick={() => setIsOpen(false)}>Order Food</NavLink></li>
        <li><NavLink to='/contact' onClick={() => setIsOpen(false)}>Contact Us</NavLink></li>
        {
            user && isAdmin && <li><NavLink to='/dashboard/adminHome' onClick={() => setIsOpen(false)}>Dashboard</NavLink></li>
        }
        {
            user && !isAdmin && <li><NavLink to='/dashboard/userHome' onClick={() => setIsOpen(false)}>Dashboard</NavLink></li>
        }
        {
            user ?
                <li><button className="uppercase" onClick={() => { logOut(); setIsOpen(false); }}>Sign Out</button></li>
                :
                <li><NavLink to='/login' onClick={() => setIsOpen(false)}>Sign In</NavLink></li>
        }
    </>;

    return (
        <nav className="text-white fixed z-50 w-full bg-[#15151580] uppercase">
            <div className="max-w-[2560px] px-6 md:px-8 lg:px-10 xl:px-14 p-1 lg:py-2 lg:flex lg:justify-between lg:items-center">
                {/* Logo */}
                <div className="flex items-center justify-between">
                    <Link to='/'>
                        <div className="flex flex-col cinzel">
                            <h2 className="text-xl md:text-2xl xl:text-3xl font-extrabold">DishDash</h2>
                            <p className="text-xs md:text-sm xl:text-lg tracking-[3px] md:tracking-[4px] font-semibold">Restaurant</p>
                        </div>
                    </Link>

                    {/* Mobile Menu Button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="text-white hover:opacity-80 focus:outline-none"
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Menu Items */}
                <div
                    ref={menuRef}
                    className={`absolute bg-[#15151580] inset-x-0 z-50 w-full px-6 md:px-8 my-1 py-3 transition-all duration-300 ease-in-out lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${isOpen
                        ? "translate-x-0 opacity-100"
                        : "opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0"
                        }`}
                >
                    <div className="lg:mx-6">
                        <ul id="nav" className="flex flex-col lg:flex-row gap-2 lg:gap-3 xl:gap-4 my-2 text-white transition-colors duration-300 transform lg:mx-6 xl:mx-8 lg:my-0 inter font-semibold text-sm xl:text-base">
                            {navLinks}
                        </ul>
                    </div>

                    {/* Cart & Profile */}
                    <div className="flex justify-center items-center gap-3">
                        <Link to={'/dashboard/cart'} className="relative text-white hover:opacity-80">
                            <svg className="min-w-8 min-h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.707 15.293C4.077 15.923 4.523 17 5.414 17H17M17 17C15.895 17 15 17.895 15 19C15 20.105 15.895 21 17 21C18.105 21 19 20.105 19 19C19 17.895 18.105 17 17 17ZM9 19C9 20.105 8.105 21 7 21C5.895 21 5 20.105 5 19C5 17.895 5.895 17 7 17C8.105 17 9 17.895 9 19Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <span className="absolute min-w-[18px] min-h-4 -top-1 -left-1 text-center text-[11px] text-black bg-red-500 rounded-full font-bold">{cart.length}</span>
                        </Link>

                        {/* User profile photo */}
                        {
                            user &&
                            <Link to={isAdmin ? '/dashboard/adminHome' : '/dashboard/userHome'}>
                                <img
                                    referrerPolicy='no-referrer'
                                    className="w-9 h-9 rounded-full border border-[#bebebe]"
                                    src={user?.photoURL || "https://i.ibb.co.com/TMD7HPzq/abstract-user-flat-4.webp"}
                                    alt="User"
                                />
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}
