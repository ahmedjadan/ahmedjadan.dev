import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { arSA } from 'date-fns/locale';
import Tags from '/src/components/Tags';

export default function FeaturedPost({ posts }) {

    const router = useRouter();
    const { locale: activeLocale } = router;
    const dateFormat = activeLocale === 'ar' ? 'MMMM, dd, yyyy' : 'MMM, dd, yyyy';


    const featuredPost = posts?.find((post) => post.featured !== false);
    return (
        <>
            <Link href={`/blog/${featuredPost?.slug}`}>
                <a className="grid col-span-3 group  rounded-md">
                    <div className="grid col-span-2 ">
                        <div className=" bg-cover bg-center  object-cover   overflow-hidden">
                            <Image
                                src={featuredPost?.banner}
                                blurDataURL="VA7AsKPCwte[jgfzbpjXWGbKjUjVj^fmj=n@WIj;j;af"
                                placeholder="blur"
                                layout="responsive"
                                width={1200}
                                height={630}
                                objectFit="cover"
                                objectPosition="bottom center"
                                alt={featuredPost?.title}
                                className="object-cover bg-center  bg-contain rounded-t-md min-w-full overflow-hidden  "
                            />
                        </div>
                        <div className="mt-4 px-2 pb-4 h-full">
                            <Tags tag1={featuredPost?.tag1} tag2={featuredPost?.tag2} />
                            <div className="py-1">
                                <h1 className="text-2xl font-bold text-gray-700 dark:text-gray-200 group-hover:text-indigo-500 transition duration-300 ease-in-out">
                                    {' '}
                                    {featuredPost?.title}{' '}
                                </h1>
                            </div>

                            <div className="py-2">
                                <p className="text-gray-600 dark:text-gray-300">
                                    {' '}
                                    {featuredPost?.summary}{' '}
                                </p>
                            </div>
                            <div className="flex  items-center  space-x-2 pt-4 ">
                                <div className="flex items-center ">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-4 w-4  ${activeLocale === 'ar' ? ' ml-1' : 'order-2 ml-2'
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <p className="text-gray-600 dark:text-gray-500 text-sm">
                                        {Math.ceil(
                                            featuredPost?.frontData?.readingTime.minutes.toFixed(2)
                                        )}{' '}
                                        {activeLocale === 'ar' ? 'دقيقة قراءة' : 'min read'}
                                    </p>
                                </div>

                                <div className="flex items-center px-2">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className={`h-4 w-4  ${activeLocale === 'ar' ? ' order-0 ml-2' : 'mr-2'
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <div>
                                        <dl>
                                            <dt className="sr-only"> نشر في :</dt>
                                            <dd className="text-gray-600 dark:text-gray-500 text-sm">
                                                <time>
                                                    {format(
                                                        parseISO(featuredPost.publishedAt),
                                                        dateFormat,
                                                        { locale: activeLocale === 'ar' ? arSA : '' }
                                                    )}
                                                </time>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </a>
            </Link>
        </>
    );
}
