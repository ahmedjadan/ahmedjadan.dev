import Image from 'next/image';

export default function PortfolioBanner({
    title,
    image,
    description,
    link,
    hashBlur,
    children,
    longDescription,
    useCase
}) {
    return (
        <div className="max-w-6xl mx-auto px-2">
            <div className="py-8">
                <h1 className="text-gray-600 dark:text-gray-200 text-center font-bold text-3xl">
                    {title}
                </h1>
            </div>
            <div className="dark:border-gray-400 overflow-hidden dark:border rounded-lg shadow-indigo">
                <Image
                    src={image}
                    className="rouneded-lg"
                    blurDataURL={hashBlur}
                    placeholder="blur"
                    layout="responsive"
                    width={1230}
                    height={630}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    className="rounded-lg   "
                    title={title}
                />
            </div>
            <div className="pt-8 mt-12 grid grid-rows-4 grid-cols-4 gap-4 outline-black
            
            
            
            
            
            
            ">
                <div className="col-start-2 col-span-2 bg-gray-300 p-4 outline-black">responsive</div>
                <div className=" row-span-2 row-start-1 row-end-4 col-start-1 col-end-1 bg-purple-300 ">welcome</div>
                <div className="col-start-2 col-end-5 bg-indigo-300 p-4 row-start-2 row-end-4"> hello</div>
                <div className="col-start-4 col-end-5 bg-red-300 ">four</div>
            </div>
            
        </div>
    );
}
