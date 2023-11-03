import { playfair } from "@/fonts";

const AuthSubText = ({ page }) => {
    return (
        <h3 className="font-300 text-6 max-md:text-4 max-md:font-400">
            {page} to continue to
            <span className={`${playfair.className} font-400`}>
                Medi<span className="text-8 max-md:text-4">Q</span>uest
            </span>
        </h3>
    );
};

export default AuthSubText;
