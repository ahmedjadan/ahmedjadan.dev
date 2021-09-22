export default function Tags({ tag1, tag2 }) {
  // const tags = {
  //   html: "bg-green-300 ",

  // }
  
  return (
    <ul className="m-0">
      <li className="flex-none m-0  md:mr-1">
        <span
          style={{
            padding: '0 10px',
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
              ? 'bg-yellow-400  '
              : tag1 == 'Strapi'
              ? 'bg-indigo-600 text-gray-100'
              : tag1 == 'HTML'
              ? 'bg-green-200 text-gray-600'
              : ''
          }
        >
          {tag1}
        </span>
        <span
          style={{
            padding: '0 10px',
            display: 'inline-block',
            borderRadius: '2px',
            marginRight: '3px',
            fontSize: '14px',
          }}
          className={
            tag2 == 'React'
              ? 'bg-gray-700 text-[#61dafb]  '
              : tag2 == 'Nextjs'
              ? 'bg-gray-900 text-gray-100  '
              : tag2 == 'JavaScript'
              ? 'bg-yellow-400  '
              : tag2 == 'Strapi'
              ? 'bg-indigo-600 text-gray-100'
              : tag2 == 'HTML'
              ? 'bg-green-200 text-gray-600'
              : tag2 == 'Sanity.io'
              ? 'bg-red-400 text-gray-100'
              : tag2 == 'CSS'
              ? 'bg-blue-200 text-gray-900'
              : ''
          }
        >
          {tag2}
        </span>
      </li>
    </ul>
  );
}
