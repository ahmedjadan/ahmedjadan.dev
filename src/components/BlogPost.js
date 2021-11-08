import Link from 'next/link';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation'
import { parseISO, format } from 'date-fns';
import { arSA } from 'date-fns/locale'

import Head from './Head';

export default function BlogPost({
  slug,
  title,
  summary,
  publishedAt,
  ogImage,

}) {

  const router = useRouter()
  const { locale: activeLocale } = router
  const { t } = useTranslation()

  const dateFormat = activeLocale === 'ar' ? 'MMMM, dd, yyyy' : 'MMM, dd, yyyy'
  return (
    <>
      <Head
        title={t('common:blog')}
        description={t('common:bio')}
        image={`https://www.ahmedjadan.dev/${ogImage}`}
        keywords="جافاسكربت، رياكت، HTML, CSS, JS, JavaScript, Reactjs, tailwindcss, Nextjs, Nodejs"
      />
      <div className=" group mx-auto max-w-4xl flex rounded-md flex-col py-2 px-3 bg-gray-100/50 dark:bg-[#24273167] mt-[5px] md:grid md:grid-cols-6 ">
        <div className=" md:grid md:col-span-1 order-2 md:order-none ml-2 ">
          <div className={`flex  items-center md:flex-col  justify-between md:justify-center flex-row md:border-l-[1px] dark:border-gray-600 ${activeLocale === 'ar' ? 'md:border-l-[1px]' : 'md:border-r-[1px] md:border-l-0 mr-2'}`}>
            <dl>
              <dt className="sr-only"> نشر في :</dt>
              <dd className=" p-0  dark:text-gray-400 text-gray-600 items-center flex ">
                <time>
                  {format(parseISO(publishedAt), dateFormat, { locale: activeLocale === 'ar' ? arSA : '' })}
                </time>
              </dd>
            </dl>
          </div>
        </div>
        <div className="md:grid md:col-span-5 rounded-lg  px-2  order-0 md:order-none">
          <Link href={`/blog/${slug}`} className="hover:text-indigo-500 ">
            <a>
              <h4 className="text-2xl text-gray-600 group-hover:text-indigo-500  dark:group-hover:text-indigo-400 leading-10 font-bold dark:text-gray-200 transition ease-in-out">
                {title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 py-1 font-light text-sm">
                {summary}
              </p>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
