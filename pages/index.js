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
const ProjectCard = dynamic(() => import('/src/components/ProjectCard'))
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
    .slice(0, 3);

  return (
    <Layout>
      <Head
        image="https://ahmedjadan-dev.vercel.app/static/meta.png"
        description={t('common:bio')}
      />
      <InfoCard />

      <div className="mx-auto lg:max-w-5xl sm:max-w-4xl">
        <h1 className="dark:text-gray-200 p-3 text-xl font-bold">
          {' '}
          {t('common:featured_posts')}
        </h1>
      </div>
      <div className="max-w-5xl mx-auto  rounded-md  ">
        <div className="mx-auto grid md:grid-cols-6 grid-cols-1 gap-x-6 dark:bg-[#2427313d] px-2">
          <FeaturedPost posts={posts} />
          <div className="w-full col-span-3  ">
            {sortedBlogs &&
              sortedBlogs.map((data, idx) => (
                <PostCard data={data} key={idx} />
              ))}
          </div>
        </div>
      </div>
      <div className="mx-auto px-2 py-10 max-w-5xl ">
        <div className="py-4 ">
          <h1 className="text-lg font-bold text-indigo-500 dark:text-gray-200" >{t('common:repoTitle')} </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  gap-4">
          {pinnedItems?.map((item, idx) => (
            <Repos item={item} key={idx} />
          ))}
        </div>
      </div>
      <ProjectCard />
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
