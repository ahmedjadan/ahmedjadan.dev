import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation'
import Layout from '@/src/Layout/Layout'
export default function ErrorPage() {
  const { t } = useTranslation()

  return (
    <Layout>
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-full w-full">
        <span className="text-[10em] font-bold rotate-6 dark:text-gray-300 "> 404 </span>
        <h1 className="text-2xl dark:text-gray-300 ">
          {t('common:404bigText')}

        </h1>
        <Link href="/">
          <a className="text-indigo-700 dark:text-indigo-400  mt-4 text-xl ">
            {t('common:404backButton')}
          </a>
        </Link>
      </div>
    </Layout>
  );
}



