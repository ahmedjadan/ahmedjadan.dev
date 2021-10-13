import React from 'react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ProjectsData } from '/data/ProjectsData';

function FeaturedProjects() {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;
  return (
    <div className="mx-auto  px-4 py-16  max-w-7xl  ">
      <div className="py-6 px-4">
        <h1 className="text-lg md:text-3xl pb-2 font-bold text-indigo-600 dark:text-gray-200">
          {t('common:portfolio')}{' '}
        </h1>
        {/* <p className="dark:text-gray-200 md:text-lg text-base">{t('common:portfolio_sub')} </p> */}
      </div>

      <div className=" bg-gray-200/50 dark:bg-[#242731a1] rounded-md h-full">
        {ProjectsData[locale]?.slice(0, 1).map((project) => (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-1" key={project.title} >
            <div className="flex flex-col items-start justify-center relative md:p-8 p-4  ">
              <div className="py-6">
                <h1 className="group-hover:text-indigo-500 text-gray-600 dark:text-gray-200 md:text-4xl text-base font-bold md:leading-9  transition duration-300 ease-in-out">
                  {project.title}
                </h1>
              </div>
              <p className=" md:text-lg text-md text-gray-600 dark:text-gray-300 py-1 ">
                {project.description}{' '}
              </p>
              <div>
                <p className="text-gray-600 dark:text-gray-300">
                  stack:
                  <span className="dark:bg-[#24273194] text-indigo-400 dark:text-gray-400 text-sm  mx-0.5 px-1 py-[2px] rounded">
                    {project.stacks.join(', ')}{' '}
                  </span>
                </p>
              </div>
              <div className=" flex items-center space-x-2 pt-4">
                <div >
                  <h1>
                    See All Projects
                  </h1>
                </div>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {locale === 'en' ? (
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    ) : (
                      <path
                        fillRule="evenodd"
                        d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    )}
                  </svg>
                </div>
              </div>
            </div>
            <div className="object-cover relative aspect-w-2 aspect-h-1 ">
              <Link href={`/portfolio${project.details}`}>
                <a>
                  <Image
                    src={project.image}
                    // layout='fill'
                    width={640}
                    height={320}
                    objectFit="cover"
                    className="rounded-md object-cover opacity-90 hover:opacity-100 transition-all w-full"
                  />
                </a>
              </Link>
            </div>
            {/* <div className="object-cover bg-white aspect-h-1 aspect-w-1 ">
              helo
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default React.memo(FeaturedProjects);
