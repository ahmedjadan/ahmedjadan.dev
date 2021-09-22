import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { client, query } from '/lib/ApolloClient';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { getAllFilesFrontMatter } from '../lib/mdx';
import Head from 'src/components/Head';
import InfoCard from '/src/components/InfoCard';
import Layout from '/src/Layout/Layout';
import PostCard from '/src/components/PostCard';
import ProjectCard from '/src/components/ProjectCard';
import FeaturedPost from '/src/components/FeaturedPost';
import Repos from '/src/components/Repos';
export default function Home({ posts, pinnedItems }) {
  console.log("Home ~ pinnedItems", pinnedItems)
  const { t } = useTranslation();

  const router = useRouter();
  const { locale } = router;
  //fillter posts based on date and only render 3 od them THAT NOT FEATURED post
  const sortedBlogs = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((p) => p.featured === false)
    .slice(0, 3);

  //getting the featured post
  return (
    <Layout>
      <Head
        image="https://i18next.vercel.app/static/meta.png"
        description={t('common:bio')}
      />
      <InfoCard />

      <div className="mx-auto lg:max-w-5xl sm:max-w-4xl">
        <h1 className="dark:text-gray-200 p-3 text-xl font-bold">
          {' '}
          {t('common:featured_posts')}
        </h1>
      </div>
      <div className="max-w-5xl mx-auto  rounded-md ">
        <div className="mx-auto grid md:grid-cols-6 grid-cols-1 gap-x-10  px-2">
          <FeaturedPost posts={posts} />
          <div className="w-full col-span-3  ">
            {sortedBlogs &&
              sortedBlogs.map((data, idx) => (
                <PostCard data={data} key={idx} />
              ))}
          </div>
        </div>
      </div>
      {/* <div className="mx-auto px-2 py-10 max-w-5xl ">
        <div className="py-3 ">
          <h1 className="text-lg font-bold text-indigo-500" >{t('common:repoTitle')} </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
          {pinnedItems.map((item, idx) => (
            <Repos item={item} key={idx} />
          ))}
        </div>
      </div> */}
      <ProjectCard />
    </Layout>
  );
}



export async function getStaticProps({ locale, defaultLocale, locales }) {

  // const { data } = await client.query({
  //   query: query
  // })
  // const { viewer } = data
  // const pinnedItems = viewer?.pinnedItems.edges.map(({ node }) => node)
  // console.log("getStaticProps ~ pinnedItems", pinnedItems)
  const otherLocale = locale !== defaultLocale ? locale : 'en';
  const posts = await getAllFilesFrontMatter('blog', otherLocale);

  return {
    props: {
      posts,
      pinnedItems
    },
    revalidate: 2
  };
}
