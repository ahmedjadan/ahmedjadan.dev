import { getAllFilesFrontMatter } from '../lib/mdx';
import Layout from '/src/Layout/Layout';
import BlogPost from '/src/components/BlogPost';
import Head from '/src/components/Head'
import useTranslation from 'next-translate/useTranslation'
import React from 'react';


function Blog({ posts }) {
  // const [searchValue, setSearchValue] = useState('');
  const { t } = useTranslation()
  const sortedPosts = posts?.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  );
  // .filter((frontMatter) =>
  //   frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
  // );


  return (
    <>
      <Head title={t('common:blog')} />
      <Layout>
        <div className="my-10">
          <div className=" py-6 px-1 max-w-4xl mx-auto ">
            <div className="flex items-center justify-center flex-col space-y-6">
              <div className="rounded-full w-20 h-20  bg-gray-200/50 dark:bg-[#242731] text-4xl text-center  flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold  text-indigo-600 dark:text-gray-200">
                {' '}
                {t('common:blog')}
              </h1>
              <p className=" px-10 text-gray-600 dark:text-gray-200 text-center">
                {t('common:blogSub')} 🙂
              </p>
              <span className="text-gray-500 text-sm dark:text-gray-400"> {t('common:currently')} <span className="font-bold">({sortedPosts.length})</span> {t('common:posts')} </span>
            </div>
          </div>
        </div>
        <div className="px-2">
          {sortedPosts?.map((frontMatter, idx) => (
            <BlogPost key={idx} {...frontMatter} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default React.memo(Blog)

export async function getStaticProps({ locale, defaultLocale, locales }) {
  const otherLocale = locale !== defaultLocale ? locale : 'en'
  const posts = await getAllFilesFrontMatter('blog', otherLocale)


  return {
    props: { posts, locale, availableLocales: locales },
  }
}
