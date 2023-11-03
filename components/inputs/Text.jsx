import { AiOutlineEye } from "react-icons/ai";
import { useState } from "react";

const Text = ({ placeholder, isPassword, value, setValue }) => {
    const [isText, setIsText] = useState(true);

    return (
        <div className="relative">
            <input
                type={isText ? "text" : "password"}
                placeholder={placeholder}
                onChange={(e) => setValue(e.target.value)}
                value={value}
                className="bg-transparent text-5 font-300 py-4 px-5 border-white border-1 rounded-2 w-full max-md:text-4 max-md:py-3 max-md:px-4"
            />
            {isPassword && (
                <AiOutlineEye
                    size={32}
                    onClick={() => {
                        setIsText((prev) => !prev);
                    }}
                    className="absolute top-0 right-10 translate-y-50% hover:text-primary duration-400 max-md:right-5 max-md:w-8 max-md:translate-y-25%"
                />
            )}
        </div>
    );
};

export default Text;

// color: #FFF;

// font-family: Poppins;
// font-size: 15px;
// font-style: normal;
// font-weight: 300;
// line-height: normal;
