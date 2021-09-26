import useTranslation from 'next-translate/useTranslation'


export default function InfoCard() {
  const { t } = useTranslation()
  return (
    <div className=" py-6 md:py-12 xs:px-8 max-w-4xl mx-auto mb-10 ">
      <div className=" py-1 px-2 max-w-3xl mx-auto  flex items-center justify-center flex-col">
        <h1 className=" dark:text-gray-100 text-2xl md:text-4xl font-bold text-gray-800 leading-10 text-center ">
          {t('common:greeting')}
        </h1>
        <p className=" dark:text-gray-100 text-center text-xl mt-4 leading-relaxed tracking-wide ">
          {t('common:bio')}
        </p>
      </div>
    </div>
  );
}
