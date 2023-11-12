"use client";
import Card from "@/components/Card";
import CheckBox from "@/components/inputs/CheckBox";
import { useState } from "react";

const page = () => {
    const [active, setActive] = useState(false);
    return (
        <div className="flex min-h-screen bg-#161616">
            <div className={`w-400px sticky top-9vh max-h-90vh overflow-auto mt-10vh text-center pt-100px max-md:fixed max-md:top-0 max-md:bg-black z-100 duration-400 ${active ? "max-md:translate-x-0%" : "max-md:-translate-x-100%"}`}>
                <span
                    onClick={() => setActive(false)}
                    className="absolute top-2 left-3 p-2 bg-primary text-black rounded-xl text-5 hidden max-md:block">
                    close filter
                </span>
                <div className="text-32px font-500">Filters</div>
                <div className="mt-50px">
                    <div className="text-20px font-400">option 1</div>
                    <div className="flex flex-col">
                        <CheckBox label="option 1" />
                        <CheckBox label="option 1" />
                        <CheckBox label="option 1" />
                    </div>
                </div>
                <div className="mt-50px">
                    <div className="text-20px font-400">option 1</div>
                    <div className="flex flex-col">
                        <CheckBox label="option 1" />
                        <CheckBox label="option 1" />
                        <CheckBox label="option 1" />
                    </div>
                </div>
                <div className="mt-50px">
                    <div className="text-20px font-400">option 1</div>
                    <div className="flex flex-col">
                        <CheckBox label="option 1" />
                        <CheckBox label="option 1" />
                        <CheckBox label="option 1" />
                    </div>
                </div>
            </div>
            <div className="w-full pt-10vh px-70px max-md:px-4">
                <div className="flex justify-between items-center py-80px">
                    <div className="text-32px font-500">Result</div>
                    <div className="text-5 font-300">
                        <span>16 </span>
                        <span>exams</span>
                        <span
                            onClick={() => setActive(true)}
                            className="absolute top-11vh left-3 z-1 p-2 bg-primary text-black rounded-xl hidden max-md:block">
                            open filter
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-30px max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-2">
                    <Card title="Exam medicine et cours." />
                    <Card title="Exam medicine et cours." />
                    <Card title="Exam medicine et cours." />
                    <Card title="Exam medicine et cours." />
                </div>
            </div>
        </div>
    );
};

export default page;
