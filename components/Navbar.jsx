"use client";

import { navLinks } from "@/constants";
import { RiAccountCircleFill } from "react-icons/ri";
import { BsArrowLeft } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
    //  for getting the path name (usefull for adding active class to links)
    const path = usePathname();
    //  toggle the menu
    const [isActive, setIsActive] = useState(false);

    return (
        <header className={`w-full fixed top-0 z-1000 ${path.includes("topics") && "backdrop-blur bg-black/60 border-b border-b-warmGray"}`}>
            <nav className="cont flex items-center justify-between h-20">
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={136}
                        height={32}
                    />
                </Link>
                <ul className={`flex gap-50px max-md:absolute translate-y-3px max-md:w-screen max-md:h-screen max-md:items-center max-md:justify-center max-md:flex-col max-md:inset-0 max-md:bg-black/70 max-md:backdrop-blur duration-400 ${isActive || "max-md:-translate-x-100%"}`}>
                    {navLinks.map((item) => (
                        <li
                            key={item.title}
                            className={`${item.styles} inline-block text-4 font-300 max-md:text-6 max-md:font-600 ${path === item.path && "text-primary"} hover:text-primary duration-400`}>
                            <Link href={item.path}>{item.title}</Link>
                        </li>
                    ))}
                    <li
                        className="hidden max-md:block"
                        onClick={() => setIsActive(false)}>
                        <BsArrowLeft
                            size={32}
                            className="hover:text-primary"
                        />
                    </li>
                </ul>
                <div>
                    <Link href="/auth/login">
                        <RiAccountCircleFill
                            size={33}
                            className="hover:text-primary duration-400 max-md:hidden"
                        />
                    </Link>
                </div>
                <div
                    onClick={() => setIsActive(true)}
                    className="hidden max-md:block">
                    <RxHamburgerMenu
                        size={32}
                        className="text-primary hover:text-white duration-400"
                    />
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
