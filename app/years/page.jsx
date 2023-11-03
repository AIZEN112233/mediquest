import YearButton from "@/components/YearButton";
import PageWrapepr from "@/components/containers/PageWrapepr";
import { years } from "@/constants";
import { playfair } from "@/fonts";

const page = () => {
    return (
        <PageWrapepr
            image="/years-bg.png"
            dark={false}>
            <div className="pg">
                <div className="min-h-full max-w-1/2 place-items-center bg-gray-trans flex justify-center flex-col gap-12 max-md:max-w-screen max-md:px-50px">
                    <h1 className={`${playfair.className} text-16 font-500   max-md:text-10 max-md:self-center`}>Choose the year</h1>
                    <ul className="grid gap-15 grid-cols-3 max-md:grid-cols-2 max-md:gap-y-11 max-md:gap-x-8">
                        {years.map((item) => (
                            <li key={item}>
                                <YearButton item={item} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </PageWrapepr>
    );
};

export default page;
