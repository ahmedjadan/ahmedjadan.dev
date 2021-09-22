import Link from 'next/link';
import { useMemo } from 'react';
import { FaGithub, FaTwitter, FaAngleUp } from 'react-icons/fa';
import ScrollTop from './ScrollTop';

export default function Footer() {
  const year = useMemo(() => {
    const now = new Date();
    return now.getFullYear();
  }, []);
  return (
    <footer className=" relative">
      <div className="mt-10  ">
        <div className="flex items-center py-2 w-16 mx-auto justify-between">
          <Link
            href="https://twitter.com/a7medjadan"
            rel="noopener noreferrer"
            target="_blank"
          >
            <a>
              <FaTwitter
                size="23px"
                className="text-gray-600 dark:text-gray-400"
              />
            </a>

            {/* <img width="166" className="" src="https://img.shields.io/twitter/follow/a7medjadan?logo=twitter&style=for-the-badge&logo=appveyor&color=blue&logoWidth=100 " alt="a7medjadan" /> */}


          </Link>
          <Link
            href="https://github.com/ahmedjadan"
            rel="noopener noreferrer"
            target="_blank"
            className="mr-6"
          >
            <a>
              <FaGithub
                size="23px"
                className="text-gray-600 dark:text-gray-400"
              />
            </a>
          </Link>
        </div>
        <div className="  py-2  w-full flex  items-center justify-center">
          <p className="text-gray-600 dark:text-gray-400  text-center px-4 text-xs">
            Made by:{' '}
            <Link href="https://twitter.com/a7medjadan">
              <a className="hover:underline text-indigo-400">Ahmed</a>
            </Link>{' '}
            using Nextjs, MDX and tailwindcss. hosted on ▲Vercel{' '}
          </p>
        </div>
        <div className="  p-2  w-full flex  items-center justify-center">
          <p className="text-gray-600 dark:text-gray-400 mx-4 text-sm">
            Ahmed Ja'dan - {year} &copy;
          </p>
        </div>
      </div>
      <ScrollTop />

    </footer>
  );
}
