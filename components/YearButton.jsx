"use client";

const YearButton = ({ item }) => {
    const addToStorage = () => {
        window.localStorage.setItem("year", item);
    };

    return (
        <button
            onClick={addToStorage}
            className="w-40 h-40 text-16 font-400 flex items-center justify-center border-1 border-white rounded-2 hover:scale-110 hover:bg-white hover:text-primary duration-400 max-md:h-30 max-md:w-30 max-md:text-12">
            {item}
        </button>
    );
};

export default YearButton;
