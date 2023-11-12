"use client";
import Image from "next/image";
import Link from "next/link";
import { AiFillHeart } from "react-icons/ai";
import { BsFillCollectionFill } from "react-icons/bs";
import { RiAccountCircleFill } from "react-icons/ri";

export default function Layout({ children }) {
    return (
        <div className="flex gap-30px mt-10vh bg-#161616">
            <div className="h-screen w-100 z-10 border-r  flex flex-col justify-around items-center">
                <div>
                    <Image
                        src="/profile-big-icon.svg"
                        width={100}
                        height={100}
                        alt="prifile icon"
                    />
                    <span className="text-center text-8 font-500">Person</span>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex gap-4">
                        <AiFillHeart size={32} />
                        <Link
                            href="/profile/liked"
                            className="text-5 text-400">
                            Liked
                        </Link>
                    </div>
                    <div className="flex gap-4">
                        <BsFillCollectionFill size={32} />
                        <span className="text-5 text-400">Collections</span>
                    </div>
                    <div className="flex gap-4">
                        <RiAccountCircleFill size={32} />
                        <Link
                            href="/profile/liked"
                            className="text-5 text-400">
                            Liked
                        </Link>
                    </div>
                </div>
                <div />
            </div>
            {children}
        </div>
    );
}
