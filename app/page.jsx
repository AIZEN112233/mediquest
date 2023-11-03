import PageWrapepr from "@/components/containers/PageWrapepr";
import { playfair, inter } from "@/fonts";
import LinkButton from "@/components/LinkButton";

export default function Home() {
    return (
        <PageWrapepr
            image="/home-bg.png"
            dark={true}>
            <div className="cont flex flex-col gap-21 items-center justify-center text-center page-wrapper">
                <h1 className={`${playfair.className} text-21 font-600 max-lg:text-17 max-md:text-14 max-sm:text-12`}>
                    Improve your skills with Medi<span className="text-primary">Q</span>uest
                </h1>
                <p className={`${inter.className}  max-w-170 text-4 font-600 max-md:text-3.25 max-sm:font-100`}>we are small team that aims to end your problems in searching for what concerns you by providing a large amount of tools that will make you advance in your future studies</p>
                <LinkButton
                    title="START LEARNING"
                    path="/years"
                />
            </div>
        </PageWrapepr>
    );
}
