import Image from 'next/image';

export default function PortfolioBanner({
    title,
    image,
    description,
    link,
    hashBlur,
    children,
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
                    width={464}
                    height={230}
                    objectFit="cover"
                    objectPosition="top center"
                    className="rounded-lg   "
                    title={title}
                />
            </div>
        </div>
    );
}
