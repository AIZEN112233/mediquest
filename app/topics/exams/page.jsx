"use client";
import Card from "@/components/Card";
import CheckBox from "@/components/inputs/CheckBox";

const page = () => {
    return (
        <div className="flex min-h-screen bg-#161616">
            <div className="w-400px sticky top-9vh max-h-90vh overflow-auto mt-10vh text-center pt-100px">
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
                    </div>
                </div>
                <div className="grid grid-cols-6 gap-30px max-lg:grid-cols-5 max-md:grid-cols-4 max-sm:grid-cols-2">
                    <Card title="Exam medicine et cours." />
                </div>
            </div>
        </div>
    );
};

export default page;
