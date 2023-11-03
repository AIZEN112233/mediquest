import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const CheckBox = ({ label, onChange }) => {
    return (
        <label className="block ml-16 my-3">
            <div className="relative inline">
                <input
                    type="checkbox"
                    className="accent-primary appearance-none w-4 aspect-1 border-1 border-primary checked:bg-primary"
                />
                <AiOutlineCheck className="absolute left-0 top-0 text-black" />
            </div>
            <span className="ml-2 text-4 font-300">{label}</span>
        </label>
    );
};

export default CheckBox;
