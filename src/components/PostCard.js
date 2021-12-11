import Link from 'next/link';
import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { useRouter } from 'next/router';

import { arSA } from 'date-fns/locale';
export default function PostCard({
  title,
  slug,
  summary,
  tag,
  author,
  image,
  data,
}) {
  const router = useRouter();

  const { locale: activeLocale } = router;
  const dateFormat = activeLocale === 'ar' ? 'MMMM, dd, yyyy' : 'MMM, dd, yyyy';
  return (
    <Link href={`/blog/${data?.slug}`} className="group ">
      <a>
        <div className="group grid grid-cols-4 rounded-md  gap-3 relative py-4 md:mt-0 dark:bg-[#24273178]">
          {/* <div className="col-span-1 h-20 w-20 rounded-md">
                        <Image
                            src={data?.banner}
                            alt={data?.title}
                            width={80}
                            height={80}
                            objectFit="cover"
                            objectPosition="bottom center"
                            layout="responsive"
                            className="rounded-md  " />
                    </div> */}

          <div className="col-span-4 ">
            <h1 className="group-hover:text-indigo-500 text-gray-600 dark:text-gray-200 md:text-lg text-base font-bold md:leading-9  transition duration-300 ease-in-out">
              {' '}
              {data?.title}
            </h1>
            <p className="md:text-base text-sm text-gray-600 dark:text-gray-300 py-1 ">
              {' '}
              {data?.summary}{' '}
            </p>
            <dl>
              <dt className="sr-only"> نشر في :</dt>
              <dd className="text-gray-500 dark:text-gray-500 text-sm">
                <time>
                  {format(parseISO(data?.publishedAt), dateFormat, {
                    locale: activeLocale === 'ar' ? arSA : '',
                  })}
                </time>
              </dd>
            </dl>
          </div>
        </div>
      </a>
    </Link>
  );
}
