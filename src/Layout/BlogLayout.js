import { parseISO, format } from 'date-fns';
import { arSA } from 'date-fns/locale'

import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from './Layout';
import Head from 'src/components/Head';
import ScrollBar from 'src/components/ScrollBar';
import ahmed from "../../public/ahmed.png"

export default function BlogLayout({ children, frontMatter }) {
  const router = useRouter()
  const { locale: activeLocale, query } = router

  const dateFormat = activeLocale === 'ar' ? 'MMMM, dd, yyyy' : 'MMM, dd, yyyy'

  const frontMatterSlug = frontMatter?.find((slug) => slug.slug == query.slug)
  const hero = frontMatterSlug.hero
  let classes = '';
  hero == 'indigo'
    ? (classes += 'from-indigo-400 via-indigo-30 to-blue-300 ')
    : hero == 'blue'
      ? (classes += 'from-blue-100 to-indigo-100 via-red-100 ')
      : hero == 'yellow'
        ? (classes +=
          ' from-yellow-50 via-yellow-50 to-yellow-50 dark:text-gray-700')
        : hero == 'green'
          ? (classes += ' from-green-100 via-indigo-100 to-blue-100')
          : hero == 'gray'
            ? (classes += 'from-gray-100 via-gray-100 to-gray-100 dark:text-gray-700')
            : '';

  return (
    <>
      <ScrollBar bgClassNames={frontMatterSlug?.hero} />
      <Head
        image={`https://www.ahmedjadan.dev/${frontMatterSlug?.banner}`}
        title={frontMatterSlug?.title}
        description={frontMatterSlug?.summary}
        date={frontMatterSlug?.publishedAt}
        keywords={frontMatterSlug.keywords}
      />
      <Layout>
        <div className="grid grid-cols-1 max-w-5xl mx-auto "  >
          <div

            className={`w-full  my-4 py-4 px-2 bg-gradient-to-r  mx-auto ${classes} dark:text-gray-100 dark:from-gray-900 dark:to-gray-900 dark:via-gray-800  `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`h-8 w-8  cursor-pointer ${classes}`}
              onClick={() => router.back()}
            >
              {activeLocale === 'ar' ? (
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                  className="cursor-pointer"
                />
              ) : (
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clipRule="evenodd" />
              )}
            </svg>
            <article className=" px-2 py-12">
              <div className="flex justify-center  items-center pb-2">
                <h1
                  className={` font-bold text-3xl  md:text-4xl ${activeLocale === 'ar' ? 'text-right' : 'text-left'}`}
                  style={{ lineHeight: '1.6em' }}
                >
                  {frontMatterSlug?.title}
                </h1>
              </div>
              <div className="flex  items-center justify-center space-x-4 ">
                <div className="flex items-center px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4  ${activeLocale === 'ar' ? ' ml-1' : 'order-2 ml-2'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p
                    className="text-gray-600 dark:text-gray-300 text-sm">
                    {Math.ceil(frontMatterSlug?.frontData?.readingTime.minutes.toFixed(2))} {activeLocale === 'ar' ? 'دقيقة قراءة' : 'min read'}
                  </p>
                </div>

                <div className="flex items-center px-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4  ${activeLocale === 'ar' ? ' order-0 ml-2' : 'mr-2'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <dl>
                      <dt className="sr-only"> نشر في :</dt>
                      <dd className="text-gray-600 dark:text-gray-300  text-sm">
                        <time>
                          {format(
                            parseISO(frontMatterSlug.publishedAt), dateFormat, { locale: activeLocale === 'ar' ? arSA : '' }
                          )}
                        </time>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center my-4">
                <div className="flex items-center justify-center">
                  <div className="rounded-full ring-1 ml-2 ring-indigo-300 w-[46px] h-[46px]">
                    <Image
                      alt="Ahmed jadan"
                      height={46}
                      width={46}
                      objectFit="cover"
                      layout="responsive"
                      src={ahmed}
                      className="inline-block w-8 h-8 bg-contain rounded-full"
                      placeholder="blur"
                    />
                  </div>
                  <p className={`${activeLocale === 'ar' ? 'mr-1 font-cairo' : 'ml-1 font-Inter'} text-gray-600 dark:text-gray-300 `}>
                    {frontMatterSlug?.name}{' '}
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="prose  dark:prose-dark  mt-5 max-w-4xl w-full text-gray-600  mx-auto dark:text-gray-200 md:text-lg ">
            {children}
          </div>

        </div>
      </Layout>
    </>
  );
}
