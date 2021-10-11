import React from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ProjectsData } from '/data/ProjectsData';

function ProjectCard() {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  return (
    <div className="mx-auto px-2 py-16  max-w-5xl ">
      <div className="py-2 ">
        <h1 className="text-lg font-bold text-indigo-600 dark:text-gray-200">
          {' '}
          {t('common:portfolio')}{' '}
        </h1>
        <p className="dark:text-gray-200">{t('common:portfolio_sub')} </p>
      </div>
      <h2 className="sr-only">projects</h2>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-1 ">
        {ProjectsData[locale]?.map((project) => (
          <Link href={`/portfolio${project.details}`} key={project.title}>
            <a className=" relative p-2 group" key={project.title}>
              <div className="grid grid-cols-4 p-1  group-hover:shadow-xl dark:bg-[#2427313d] rounded-md   transition duration-200 ease-in-out">
                <div className="col-span-1 h-full w-full ">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={190}
                    height={170}
                    objectFit="contain"
                    objectPosition="bottom center"
                    layout="responsive"
                    className="rounded-md min-h-full w-full "
                  />
                </div>

                <div className="col-span-3 px-4 relative ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 absolute ${locale === 'ar' ? 'left-2' : 'right-2'
                      } top-2 hidden group-hover:block transition-all text-gray-600`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  <h1 className="group-hover:text-indigo-500 text-gray-600 dark:text-gray-200 md:text-lg text-base font-bold md:leading-9  transition duration-300 ease-in-out">
                    {' '}
                    {project.title}
                  </h1>
                  <p className=" md:text-base text-sm text-gray-600 dark:text-gray-300 py-1 ">
                    {' '}
                    {project.description}{' '}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {' '}
                    stack:
                    <span className="dark:bg-[#24273194] text-indigo-400 dark:text-gray-400 text-sm  mx-0.5 px-1 py-[2px] rounded">
                      {' '}
                      {project.stacks.join(', ')}{' '}
                    </span>
                  </p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}


export default React.memo(ProjectCard)