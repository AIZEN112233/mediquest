import Image from "next/image";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Card = ({ title }) => {
    return (
        <div className="max-w-200px min-h-300px bg-#0D0D0D rounded-xl border-1 border-white text-center">
            <div className="flex flex-col gap-43px border-b-1 border-1 rounded-xl">
                <Image
                    src="/ex.png"
                    width={160}
                    height={160}
                    alt="exams bg"
                    className="mx-a pt-30px"
                />
                <div className="px-4 text-13px font-600 py-5px">{title}</div>
            </div>
            <div className="flex items-center justify-start px-20px py-1">
                <AiOutlineHeart
                    className="text-primary"
                    size={25}
                />
            </div>
        </div>
    );
};

export default Card;
