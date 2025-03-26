import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

// react icons
import { FaBars, FaDribbble, FaMeta, FaTwitter, FaXmark } from "react-icons/fa6";
import Modal from "./Modal";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    // menu btn toggle
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // navItems
    const navItems = [
        { path: "/", link: "Home" },
        { path: "/services", link: "Services" },
        { path: "/about", link: "About" },
        { path: "/blogs", link: "Blogs" },
        { path: "/contact", link: "Contact" },
    ]

    // for modal for login button
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return (
        <header className="fixed z-[9999] bg-[rgb(137,80,80)] top-0 left-0 right-0 text-white">
            <nav className="px-4 max-w-7xl mx-auto flex justify-between items-center py-4">
                <a href="/" className="text-xl font-bold text-white">
                    Blog<span className="text-orange-500">Deck</span>
                </a>

                {/* navitems */}
                <ul className="md:flex gap-12 text-lg hidden ">
                    {
                        navItems.map(({ link, path }) => <li className="text-white" key={path}>
                            <NavLink to={path} className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }>{link}</NavLink>
                        </li>)
                    }
                </ul>

                {/* menu icons for large devices */}

                <div className="text-white lg:flex gap-4 items-center hidden">
                    <a href="/" className="hover:text-orange-500"> <FaMeta /></a>
                    <a href="/" className="hover:text-orange-500"><FaDribbble /></a>
                    <a href="/" className="hover:text-orange-500"><FaTwitter /></a>
                    <button onClick={openModal} className="bg-orange-500 px-6 py-2 font-medium rounded hover:bg-white hover:text-orange-500 transition-all ease-in duration-200 ml-4">Log in</button>
                </div>
                
                {/* modal component */}
                <Modal isOpen={isModalOpen} onClose={closeModal} />

                {/* mobile menu */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="cursor-pointer">
                        {isMenuOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* moblie menu items only */}
            <div className="">
                <ul className={`md:hidden block space-y-4 px-4 py-6 mt-14 bg-[rgb(137,80,80)] ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                {
                        navItems.map(({ link, path }) => <li className="text-black" key={path}>
                            <NavLink onClick={toggleMenu} to={path} className={({ isActive, isPending }) =>
                                isActive ? "active" : ""
                            }>{link}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
