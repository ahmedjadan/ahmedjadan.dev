import useTranslation from 'next-translate/useTranslation'


export default function InfoCard() {
  const { t } = useTranslation()
  return (
    <div className=" py-6 md:py-12 max-w-5xl mx-auto ">
      <div className="  px-2 py-8 mx-2 md:mx-auto dark:bg-[#24273194] bg-gray-100">
        <h1 className=" dark:text-gray-100 px-8 text-2xl md:text-4xl font-bold text-gray-800 leading-10 text-center ">
          {t('common:greeting')}
        </h1>
        <p className=" dark:text-gray-100 md:px-20 text-center text-xl mt-4 leading-relaxed tracking-wide ">
          {t('common:bio')}
        </p>
      </div>
    </div>
  );
}
