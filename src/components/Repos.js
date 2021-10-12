import Link from 'next/link';
import React from 'react';
import Skeleton from 'react-loading-skeleton';

function Repos({ item: { name, description, stargazerCount, forkCount, url, languages, id } }) {
  if (!name) return <Skeleton height={100} />
  return (
    <Link href={url} key={id}>
      <a>
        <div className="  border-[1px] h-full border-gray-400/50 dark:bg-[#2427313d] bg-gray-100/50 rounded px-4 py-2 ">
          <div className="flex items-center ">
            <svg aria-hidden="true" height="16" fill="currentColor" viewBox="0 0 16 16" version="1.1" width="16" className="dark:text-gray-400 ">
              <path fillRule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
            </svg>
            <h1 className="text-indigo-500 dark:text-indigo-400 space-x-3 px-1 font-semibold"> {name || <Skeleton count={1} height={25} width={100} />} </h1>
          </div>
          <div className="py-3">
            <p className=" space-x-3 px-1 text-sm text-gray-600 dark:text-gray-400">{description}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              {languages.nodes.map((language, idx) => (
                <div key={idx} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: language.color }}></div>
                  <p className=" px-2 text-gray-500 text-xs"> {language.name} </p>
                </div>
              ))}
            </div>

            <div className="flex items-center  justify-between">
              {stargazerCount > 0 ? (
                <div className="flex items-center px-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  <span className="text-sm px-0.5">
                    {stargazerCount}
                  </span>
                </div>
              ) : ''}
              <div className="flex items-center px-3">
                {forkCount > 0 ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="12" cy="18" r="2" />
                      <circle cx="7" cy="6" r="2" />
                      <circle cx="17" cy="6" r="2" />
                      <path d="M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2" />
                      <line x1="12" y1="12" x2="12" y2="16" />
                    </svg>
                    <span className="text-sm px-0.5">
                      {forkCount && forkCount > 0 ? forkCount : ''}
                    </span>
                  </>
                ) : ''}
              </div>
            </div>
          </div>
        </div>

      </a>
    </Link>
  );
}
export default React.memo(Repos)