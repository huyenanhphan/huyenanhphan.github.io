"use client";// NavBar.jsx
import React, { useState } from "react";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const NavLinks = [
    {
        title: "Home", path: "#home"
    },
    {
        title: "About", path: "#about"
    },
    {
        title: "Projects", path: "#projects"
    },
    {
        title: "Contact", path: "#contact"
    }
];

const NavBar = () => {
    const [NavBarOpen, setNavBarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212]">
            <div className="flex items-center justify-between mx-auto p-1 px-4">
                <Image
                    src="/images/dp.png"
                    alt="Logo"
                    width={100}
                    height={100}
                />
                <div className="mobile-menu block md:hidden">
                    <button onClick={() => setNavBarOpen(!NavBarOpen)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            {NavBarOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            )}
                        </svg>
                    </button>
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
                        {NavLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink key={index} href={link.path} title={link.title} />

                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {NavBarOpen && <MenuOverlay links={NavLinks} />}
        </nav>
    );
};

export default NavBar;
