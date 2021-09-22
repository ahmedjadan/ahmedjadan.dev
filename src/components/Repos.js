import Link from 'next/link';
import { VscRepo, } from 'react-icons/vsc'
import { GoRepoForked } from 'react-icons/go'

export default function Repos({ item: { name, description, primaryLanguage, stargazerCount, forkCount, url, languages } }) {

  return (
    <Link href={url}>
      <a>
        <div className="  border-[1px] border-gray-400 rounded px-2 py-2 ">
          <div className="flex items-center ">
            <VscRepo className="dark:text-gray-200" />
            <h1 className="text-indigo-500 dark:text-indigo-400 space-x-3 px-1 font-semibold"> {name} </h1>
          </div>
          <div className="py-3">
            <p className=" space-x-3 px-1 text-sm text-gray-500">{description}</p>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center">
              {languages.nodes.map((language) => (
                <>
                  <div className={`w-3 h-3 rounded-full`} style={{ backgroundColor: language.color }}></div>
                  <p className=" px-2 text-gray-500 text-xs"> {language.name} </p>
                </>
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
                    <GoRepoForked />
                    <span className="text-sm px-0.5">
                      {forkCount && forkCount > 0 ? forkCount : '-'}
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
