import Link from 'next/link';
import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import Tags from '/src/components/Tags';

export default function FeaturedPost({ posts }) {
    const featuredPost = posts?.find((post) => post.featured !== false);

    return (
        <>
            <Link href={`/blog/${featuredPost?.slug}`}>
                <a className="grid col-span-3 group dark:bg-[#242731a1] rounded-md">
                    <div className="grid col-span-2 ">
                        <div className=" bg-cover bg-center h-full w-full object-cover   overflow-hidden">
                            <Image
                                src={featuredPost?.banner}
                                // placeholder="blur"
                                //blurDataURL={blur}
                                layout="responsive"
                                width={464}
                                height={260}
                                objectFit="cover"
                                objectPosition="bottom center"
                                alt={featuredPost?.title}
                                className="object-cover bg-center  bg-contain rounded-t-md min-w-full overflow-hidden  "
                            />
                        </div>
                        <div className="mt-4 px-2">
                            <Tags tag1={featuredPost?.tag1} tag2={featuredPost?.tag2} />
                            <div className="py-1">
                                <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 group-hover:text-indigo-500 transition duration-300 ease-in-out">
                                    {' '}
                                    {featuredPost?.title}{' '}
                                </h1>
                            </div>
                            <dl>
                                <dt className="sr-only"> نشر في :</dt>
                                <dd className="text-gray-500 dark:text-gray-500 text-sm">
                                    <time>
                                        {format(
                                            parseISO(featuredPost?.publishedAt),
                                            'MMM, dd, yyyy'
                                        )}
                                    </time>
                                </dd>
                            </dl>
                            <div className="py-2">
                                <p className="text-gray-600 dark:text-gray-300">
                                    {' '}
                                    {featuredPost?.summary}{' '}
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    );
}
