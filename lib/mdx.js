const fs = require('fs');
const path = require('path');
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import renderToString from 'next-mdx-remote/render-to-string';
import readingTime from 'reading-time';
import MDXComponents from 'src/components/MDXComponents';
import getAllFilesRecursively from './file';
const root = process.cwd();

export function getFiles(type, otherLocale = '') {
  const prefixPaths = path.join(root, 'data', type);
  const files =
    otherLocale === ''
      ? getAllFilesRecursively(prefixPaths).filter(
          (path) => (path.match(/\./g) || []).length === 1
        )
      : getAllFilesRecursively(prefixPaths).filter((path) =>
          path.includes(`.${otherLocale}.mdx`)
        );
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files?.map((file) =>
    file?.slice(prefixPaths.length + 1).replace(/\\/g, '/')
  );
}

// return slug.replace(/\.(mdx|md)/, '')
export function formatSlug(slug) {
  return slug.split('.')[0];
}

export function dateSortDesc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}

export async function getFileBySlug(type, slug, otherLocale = '') {
  const [mdxPath, mdPath] =
    otherLocale === ''
      ? [
          path.join(root, 'data', type, `${slug}.mdx`),
          path.join(root, 'data', type, `${slug}.md`),
        ]
      : [
          path.join(root, 'data', type, `${slug}.${otherLocale}.mdx`),
          path.join(root, 'data', type, `${slug}.${otherLocale}.md`),
        ];

  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8');

  const { data, content } = matter(source);
  const mdxContent = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles'),
      ],
      rehypePlugins: [mdxPrism],
    },
  });
  //console.log('data', data);
  return {
    mdxContent,
    frontMatter: {
      wordCount: content.split(/\s+/gu).length,
      readingTime: readingTime(content),
      slug: slug || null,
      ...data,
    },
  };
}

export async function getAllFilesFrontMatter(folder, otherLocale) {
  const prefixPaths = path.join(root, 'data', folder);

  //const allFiles = getAllFilesRecursively(prefixPaths)
  const files =
    otherLocale === ''
      ? getAllFilesRecursively(prefixPaths).filter(
          (path) => (path.match(/\./g) || []).length === 1
        )
      : getAllFilesRecursively(prefixPaths).filter((path) =>
          path.includes(`.${otherLocale}.mdx`)
        );

  const allFrontMatter = [];

  files.forEach((file) => {
    // Replace is needed to work on Windows
    const fileName = file?.slice(prefixPaths.length + 1).replace(/\\/g, '/');
    // Remove Unexpected File
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return;
    }

    const source = fs.readFileSync(file, 'utf8');
    const { data: frontmatter, content } = matter(source);
    const mdxData = renderToString(content);

    if (frontmatter) {
      allFrontMatter.push({
        ...frontmatter,
        //mdxData,
        slug: formatSlug(fileName),
        frontData: {
          wordCount: content.split(/\s+/gu).length,
          readingTime: readingTime(content),
        },
        date: frontmatter.date
          ? new Date(frontmatter.date).toISOString()
          : null,
      });
    }
  });
  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date));
}
