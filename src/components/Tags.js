export default function Tags({ tag1, tag2 }) {
  // const tags = {
  //   html: "bg-green-300 ",

  // }

  return (
    <ul className="m-0">
      <li className="flex-none m-0 space-x-2">
        <span
          style={{
            padding: '2px 10px',
            display: 'inline-block',
            borderRadius: '2px',
            fontSize: '14px',
          }}
          className={
            tag1 == 'React'
              ? 'bg-gray-700 text-[#61dafb]  '
              : tag1 == 'Nextjs'
                ? 'bg-gray-800 dark:bg-black text-gray-100  '
                : tag1 == 'JavaScript'
                  ? 'text-xs px-2 font-medium bg-yellow-500 bg-opacity-10 text-yellow-800 rounded py-0.5 '
                  : tag1 == 'strapi'
                    ? 'text-xs px-2 font-medium bg-purple-500/10 dark:bg-purple-500/20 text-indigo-500 rounded py-0.5'
                    : tag1 == 'HTML'
                      ? 'text-xs px-2 font-medium bg-green-500/10 text-green-600 rounded '
                      : tag1 == 'markdown' ? 'text-xs px-2 font-medium bg-gray-500 bg-opacity-10 text-gray-800 rounded ':''
          }
        >
          {tag1}
        </span>
        <span
          style={{
            padding: '2px 10px',
            display: 'inline-block',
            borderRadius: '2px',
            marginRight: '3px',
            fontSize: '14px',
          }}
          className={
            tag2 == 'react'
              ? 'bg-gray-700 text-[#61dafb]  '
              : tag2 == 'nextjs'
                ? 'bg-gray-900 text-gray-100  '
                : tag2 == 'javascript'
                  ? 'bg-yellow-400  '
                  : tag2 == 'strapi'
                    ? 'bg-indigo-600 text-gray-100'
                    : tag2 == 'HTML'
                      ? 'text-xs px-2 font-medium bg-green-500/10 text-green-700 rounded '
                      : tag2 == 'sanity.io'
                        ? 'text-xs px-2 font-medium bg-red-500/10  text-red-800 dark:bg-[#e718181f] rounded '
                        : tag2 == 'CSS'
                          ? 'text-xs px-2 font-medium bg-blue-500/10 text-blue-600 rounded '
                          : ''
          }
        >
          {tag2}
        </span>
      </li>
    </ul>
  );
}
