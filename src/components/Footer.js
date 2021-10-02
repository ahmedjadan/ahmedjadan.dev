import Link from 'next/link';
import { useMemo } from 'react';
import ScrollTop from './ScrollTop';

export default function Footer() {
  const year = useMemo(() => {
    const now = new Date();
    return now.getFullYear();
  }, []);
  return (
    <footer>
      <div className="mt-10  ">
        <div className="flex items-center justify-center ">
          <Link
            href="https://twitter.com/a7medjadan"
            rel="noopener noreferrer"
            target="_blank"
            prefetch={false}
          >
            <a>

              <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 dark:text-gray-400 mx-2" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
              </svg>
            </a>

          </Link>
          <Link
            href="https://github.com/ahmedjadan"
            rel="noopener noreferrer"
            target="_blank"
            prefetch={false}
          >
            <a className="">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 dark:text-gray-400" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </a>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ahmedjadan/"
            rel="noopener noreferrer"
            target="_blank"
            prefetch={false}
          >
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 dark:text-gray-400 mx-2" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="8" y1="11" x2="8" y2="16" />
                <line x1="8" y1="8" x2="8" y2="8.01" />
                <line x1="12" y1="16" x2="12" y2="11" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
            </a>
          </Link>
          <Link
            href={`mailto:hello@ahmedjadan.dev`}
            rel="noopener noreferrer"
            target="_blank"
            title="Email"
            as="mailto:hello@ahmedjadan.dev"
          >
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 dark:text-gray-400" width="25" height="25" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </a>
          </Link>
        </div>
        <div className="  py-2  w-full flex  items-center justify-center">
          <p className="text-gray-600 dark:text-gray-400  text-center px-4 text-xs">
            Made by:{' '}
            <Link href="https://twitter.com/a7medjadan" prefetch={false}>
              <a className="hover:underline text-indigo-400">Ahmed</a>
            </Link>{' '}
            using Nextjs, MDX and Tailwindcss
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
