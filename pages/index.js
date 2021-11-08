import dynamic from 'next/dynamic'
import useSWR from 'swr';
import axios from 'axios';
import useTranslation from 'next-translate/useTranslation';
import { getAllFilesFrontMatter } from '../lib/mdx';
import InfoCard from '/src/components/InfoCard';
import Layout from '/src/Layout/Layout';

const Head = dynamic(() => import('/src/components/Head'))
const FeaturedPost = dynamic(() => import('/src/components/FeaturedPost'))
const Repos = dynamic(() => import('/src/components/Repos'))
const FeaturedProjects = dynamic(() => import('/src/components/FeaturedProjects'))
const PostCard = dynamic(() => import('/src/components/PostCard'))


const fetcher = url => axios.get(url).then(res => res.data)

export default function Home({ posts }) {

  const { data } = useSWR('/api/github/repos', fetcher);
  const pinnedItems = data?.viewer?.pinnedItems?.edges?.map(({ node }) => node)

  const { t } = useTranslation();

  //fillter posts based on date and only render 3 od them THAT NOT FEATURED post
  const sortedBlogs = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))
    .filter((p) => p.featured === false)
    .slice(0, 4);

  return (
    <Layout>
      <Head
        image="https://www.ahmedjadan.dev/static/meta.png"
        description={t('common:bio')}
      />
      <InfoCard />

      <div className="max-w-7xl mx-auto py-5 px-4">
        <div className="py-4 ">
        <h1 className="text-lg md:text-3xl pb-2 font-bold text-gray-700 dark:text-gray-200">
        {t('common:featured_posts')}
        </h1>
      </div>
        <div className="mx-auto grid md:grid-cols-6 grid-cols-1 gap-x-6 bg-gray-100/50 dark:bg-[#242731a1] rounded-md ">
          <div className="col-span-3">
            <FeaturedPost posts={posts} />
          </div>
          <div className=" col-span-3 p-4">
            {sortedBlogs &&
              sortedBlogs.map((data, idx) => (
                <PostCard data={data} key={idx} />
              ))}
          </div>
        </div>
      </div>
      <FeaturedProjects />
      <div className="mx-auto px-4  max-w-7xl md:py-16 py-8">
        <div className="py-6 ">
          <h1 className="text-lg md:text-3xl font-bold text-gray-700 dark:text-gray-200" >{t('common:repoTitle')} </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
          {pinnedItems?.map((item, idx) => (
            <Repos item={item} key={idx} />
          ))}
        </div>
      </div>
    </Layout>
  );
}



export async function getStaticProps({ locale, defaultLocale, locales }) {

  const otherLocale = locale !== defaultLocale ? locale : 'en';
  const posts = await getAllFilesFrontMatter('blog', otherLocale);

  return {
    props: {
      posts
    },
  };
}
