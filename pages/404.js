import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation'

export default function ErrorPage() {
  const { t } = useTranslation()

  return (
    <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-screen w-full">
      {/* <p className="text-2xl"> عفوا... الصفحة المطلوبة غير متاحة !!</p> */}
      {t('404:bigText')}
      <Link href="/">
        <a className="text-gray-700 mt-4 text-xl bg-gray-50 px-4 py-2 rounded-lg">
          عودة الى الرئيسية
        </a>
      </Link>
    </div>
  );
}
