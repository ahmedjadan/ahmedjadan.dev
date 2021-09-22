import Layout from './Layout';
import { parseISO, format } from 'date-fns';
import Image from 'next/image';
import { BiTime } from 'react-icons/bi';
import Head from '@/components/Head';
import ScrollBar from '@/components/ScrollBar';

export default function BlogLayout({ children, frontMatter }) {
  //const baseUrl = process.env.BASE_URL;

  return (
    <>
      <ScrollBar />
      <Head
        image={`https://i18next.vercel.app${frontMatter.banner}`}
        title={frontMatter.title}
        description={frontMatter.summary}
        date={frontMatter.publishedAt}
      />
      <Layout>
        <div className="grid grid-cols-1 max-w-6xl mx-auto">
          <article className="">
            <h1
              className="font-bold text-4xl  pt-10 md:px-6 text-center md:text-5xl md:max-w-3xl mx-auto mb-8 dark:text-gray-100"
              style={{ lineHeight: '1.6em' }}
            >
              {frontMatter.title}
            </h1>
            <div className="flex mb-4 flex-col md:flex-row mx-auto max-w-[30rem] justify-evenly  items-center">
              <div className="flex items-center md:mt-0">
                <p className="ml-2 text-gray-600 dark:text-gray-500 font-cairo">
                  {' '}
                  {frontMatter.name}{' '}
                </p>
                <div className="rounded-full ring-1 ring-indigo-300 w-[46px] h-[46px]">
                  <Image
                    alt="Ahmed jadan"
                    height={46}
                    width={46}
                    objectFit="cover"
                    layout="responsive"
                    src="/ahmed.jpg"
                    className="inline-block w-8 h-8 bg-contain rounded-full   "
                  />
                </div>
              </div>
              <div className="flex font-sans items-center mt-4 md:mt-0  justify-between">
                <div className="flex items-center px-2">
                  <p
                    className=" font-sans text-gray-600 dark:text-gray-500 ml-1 text-sm"
                    style={{ direction: 'ltr' }}
                  >
                    {frontMatter.readingTime.text}
                  </p>
                  <BiTime className="text-gray-600 dark:text-gray-500" />
                </div>
                {' • '}

                <div>
                  <p className=" text-gray-600 dark:text-gray-500 px-2 text-sm">
                    {format(
                      parseISO(frontMatter.publishedAt.toUpperCase()),
                      'MMMM dd, yyyy'
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-[1000px]  rounded-lg">
              <Image
                src={frontMatter.banner}
                layout="intrinsic"
                objectFit="fill"
                width={1000}
                height={430}
                alt={frontMatter.title}
                className="shadow-sm dark:rounded-lg rounded-lg dark:shadow-sm   "
              />
            </div>
          </article>
          <div className="prose dark:prose-dark mx-auto mt-5 max-w-3xl w-full text-gray-700 dark:text-gray-200 text-justify ">
            {children}
          </div>
        </div>
      </Layout>
    </>
  );
}

// export async function getStaticProps({ params }) {
//   const baseUrl = process.env.BASE_URL;
//   const ogImage = await getOgImage(
//     `/ahmedjadan-dev.vercel.app/blog?url=${process.env.BASE_URL}`
//   );

//   return { props:  ogImage, baseUrl  };
// }
