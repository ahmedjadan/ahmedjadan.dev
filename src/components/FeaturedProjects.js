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

  const featured = ProjectsData[locale]?.find(
    (project) => project.featured !== false
  );
  return (
    <div className="mx-auto px-4 py-16  max-w-7xl  ">
      <div className="py-4 ">
        <h1 className="text-lg md:text-3xl pb-2 font-bold text-gray-700 dark:text-gray-200">
          {t('common:portfolio')}{' '}
        </h1>
      </div>
      <div className=" bg-gray-200/50 dark:bg-[#242731a1] rounded-md">
        <div className="flex lg:justify-between flex-col md:flex-row  relative ">

          <div className=" relative flex-1 order-2 md:order-1 px-4 py-8">
            <div className="py-4">
              <h1 className="group-hover:text-indigo-500 text-gray-600 dark:text-gray-200 md:text-4xl text-base font-bold md:leading-9  transition duration-300 ease-in-out">
                {featured.title}
              </h1>
            </div>
            <p className=" md:text-lg text-md text-gray-600 dark:text-gray-300 py-1 ">
              {featured.description}{' '}
            </p>
            <div>
              <p className="text-gray-600 dark:text-gray-300 pt-2">
                stack:
                <span className="dark:bg-[#24273194] text-indigo-400 dark:text-gray-400 text-sm  mx-0.5 px-1 py-[2px] rounded">
                  {featured.stacks.join(', ')}{' '}
                </span>
              </p>
            </div>
            <div className=" flex items-center space-x-2 pt-4">
              <Link href={`/portfolio`}>
                <a>
                  <div className="flex items-center pt-4 dark:text-gray-200 dark:hover:text-gray-300 text-gray-500 hover:text-gray-700 transition-all ">
                    <div className={`${locale === 'ar' ? 'pl-2' : 'pr-2'}`}>
                      <h1>{t('common:seeAllProjects')}</h1>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 animate-pulse"
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
                </a>
              </Link>
            </div>
          </div>
          <div className="object-cover flex-1 order-1 md:order-2 h-full">
            <Link href={`/portfolio${featured.details}`}>
              <a>
                <Image
                  src={featured.image}
                  layout="responsive"
                  placeholder="blur"
                  blurDataURL={featured.hashBlur}
                  width={1230}
                  height={630}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  className="rounded-md object-cover opacity-90 hover:opacity-100 transition-all w-full absolute -left-12 "
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(FeaturedProjects);
