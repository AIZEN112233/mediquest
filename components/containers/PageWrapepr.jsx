import Image from "next/image";

const PageWrapepr = ({ children, image, dark }) => {
    return (
        <main className="mt-20 -z-11">
            {image && (
                <Image
                    src={image}
                    fill
                    className="-z-200 max-md:bg-right"
                    objectFit="cover"
                    objectPosition="right"
                    alt="bg image"
                />
            )}
            {dark && (
                <Image
                    src="/rg.png"
                    alt="black bg"
                    fill
                    className="-z-200"
                />
            )}
            <section>{children}</section>
        </main>
    );
};

export default PageWrapepr;
