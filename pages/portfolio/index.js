import Layout from 'src/Layout/Layout';
import Head from 'src/components/Head';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import Image from 'next/image';
import { ProjectsData } from '/data/ProjectsData';

export default function Projects() {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation();
  return (
    <Layout>
      <Head title="Portfolio" />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {ProjectsData[locale]?.map((project) => (
            <>
              <div className="flex flex-col" key={project.title}>
                <Image
                  src={project.image}
                  width={1200}
                  height={630}
                  blurDataURL={project.hashBlur}
                  placeholder="blur"
                  alt={project.description}
                  className="rounded-md object-cover"
                />
                <div className="py-4 text-gray-600 dark:text-gray-200">
                  <h1 className="text-2xl py-2 font-semibold">{project.title}</h1>
                  <p> {project.description} </p>
                  <div className="flex items-center justify-between mt-4">
                    <div className=" text-sm md:text-base dark:text-gray-200 dark:hover:text-gray-300 text-gray-500 hover:text-gray-700 transition-all">
                      <Link href={`portfolio/${project.details}`}>
                        <a className="flex items-center">
                          <h3 className="rtl:pl-2 ltr:pr-2">{t('common:moreDetails')}</h3>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
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
                        </a>
                      </Link>
                    </div>
                    <div className=" text-sm md:text-base dark:text-gray-200 dark:hover:text-gray-300 text-gray-500 hover:text-gray-700 transition-all">
                      <Link href={project.href}>
                        <a className="flex items-center">
                          <h3 className={`${locale === 'ar' ? 'pl-2' : 'pr-2'}`}> {t('common:liveDemo')}</h3>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
}
