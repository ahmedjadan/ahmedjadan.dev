import hydrate from 'next-mdx-remote/hydrate';
import { formatSlug, getAllFilesFrontMatter, getFileBySlug, getFiles } from '/lib/mdx';
import MDXComponents from 'src/components/MDXComponents';
import BlogLayout from 'src/Layout/BlogLayout';

export default function Blog({ post, allPosts: frontMatter }) {

  const { mdxContent } = post
  const contents = hydrate(mdxContent, {
    components: MDXComponents,
  });

  return <BlogLayout frontMatter={frontMatter}>{contents}</BlogLayout>;
}


export async function getStaticPaths({ locales, defaultLocale, availableLocales }) {
  const localesPost = locales
    .map((locale) => {
      const otherLocale = locale !== defaultLocale ? locale : 'en'
      const posts = getFiles('blog', otherLocale)
      return posts.map((post) => [post, locale])
    })
    .flat()

  return {
    paths: localesPost.map(([p, l]) => ({
      params: {
        slug: formatSlug(p).split('/'),
      },
      locale: l,
    })),
    fallback: false,
  }
}


export async function getStaticProps({ defaultLocale, locales, locale, params }) {
  const otherLocale = locale !== defaultLocale ? locale : 'en'
  const allPosts = await getAllFilesFrontMatter('blog', otherLocale)
  const post = await getFileBySlug('blog', params.slug, otherLocale)
  //console.log("getStaticProps ~ post", post)


  return { props: { allPosts, post } }
}












// export async function getStaticProps({ params, locale }) {
//   const post = await getFileBySlug(locale, params.slug);
//   //console.log(post, 'post');
//   return { props: post };
// }

