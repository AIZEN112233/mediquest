import { inter } from "@/fonts";
import { BsArrowRight } from "react-icons/bs";

const Button = ({ click, title }) => {
    return (
        <button
            onClick={click}
            className={`${inter.className} mx-auto font-500 bg-primary text-5 flex items-center py-5 px-11 text-black  duration-400 gap-2 rounded-2 hover:text-primary hover:bg-white hover:scale-110 max-md:text-3 max-md:px-7 max-md:py-3 max-md:font-500`}>
            <span>{title}</span>
            <span>
                <BsArrowRight
                    size={32}
                    className="max-md:w-5"
                />
            </span>
        </button>
    );
};

export default Button;
