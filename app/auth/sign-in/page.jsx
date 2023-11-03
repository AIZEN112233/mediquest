"use client";
import AuthHeader from "@/components/AuthHeader";
import AuthSubText from "@/components/AuthSubText";
import Button from "@/components/Button";
import Text from "@/components/inputs/Text";
import { BsGoogle } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";

import Link from "next/link";

import { useState, useEffect } from "react";

const page = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // these two useEffects will be transformed to a hook
    useEffect(() => {
        if (localStorage.getItem("email")) {
            setEmail(localStorage.getItem("email"));
            setPassword(localStorage.getItem("password"));
            setUserName(localStorage.getItem("userName"));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("userName", userName);
    }, [email, password, userName]);

    return (
        <div className=" flex flex-col gap-50px text-center  w-full">
            <div>
                <AuthHeader />
                <AuthSubText page="Sign up" />
            </div>
            <form className="flex flex-col gap-5">
                <Text
                    placeholder="User name"
                    value={userName}
                    setValue={setUserName}
                />
                <Text
                    placeholder="Email address"
                    value={email}
                    setValue={setEmail}
                />
                <Text
                    placeholder="Password"
                    value={password}
                    setValue={setPassword}
                    isPassword={true}
                />
                <Link
                    href="/forget"
                    className="text-primary underline font-300 text-5">
                    Forgot password?
                </Link>
            </form>
            <div>
                <Button title="START LEARNINGS" />
                <p className="text-5 font-300 mt-7 max-md:text-4">
                    Don't have an account?
                    <Link
                        href="/auth/login"
                        className="underline text-primary max-md:block">
                        Create Account.
                    </Link>
                </p>
            </div>
            <div className="flex gap-12 justify-center items-center max-md:gap-7">
                <BsGoogle
                    size={57}
                    className="text-primary hover:text-white max-md:w-8 duration-400"
                />
                <BiLogoFacebook
                    size={66}
                    className="text-primary hover:text-white max-md:w-9.7 duration-400"
                />
            </div>
        </div>
    );
};

export default page;
