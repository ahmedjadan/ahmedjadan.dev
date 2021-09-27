This is my personal website [Ahmed Jadan](https://www.ahmedjadan.dev/)

built using: 

- [Next.js](https://nextjs.org/)
- [MDX](https://github.com/mdx-js/mdx)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com)

- i18n support for locales `ar`, `en`.

## folder structure
- `/lib/mdx.js` read `.mdx` files and parse it to an `html` that `nextjs` can understand.
- `/pages/blog/[...slug].js` render dynamic static pages for single blog posts. 
- `/pages/blog.js` blog page containing the blog posts list. 
- `/pages/portfolio/index.js` render the latest projects.
- `/locales/*` namespace translation files for both `en, ar`, renders by [next-translate](https://www.npmjs.com/package/next-translate).

**Licince**: MIT
- feel free to fork it and customize it based on your need, `appreciated if you give credit to the owner`.

