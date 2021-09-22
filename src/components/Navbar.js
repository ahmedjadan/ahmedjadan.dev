import Router from 'next/router';
import Image from 'next/image';
import Ahmed from '../../public/ahmed.png';
import useTranslation from 'next-translate/useTranslation'
//import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'

import Nprogress from 'nprogress';
import { HiMenu } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import Theme from './Theme';
import LocaleSwitcher from './LocaleSwicher'
import { navigation } from '/data/navigation';
Router.onRouteChangeStart = () => Nprogress.start();
Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();

export default function Navbar() {
  const { t } = useTranslation();
  const router = useRouter()
  const { locales, locale: activeLocale } = router

  const [active, setActive] = useState(false);
  const closeMenuItem = () => setActive(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className="py-8 z-50">
      <nav className="md:flex items-center px-2  md:flex-row md:justify-between md:mx-auto mb-5 max-w-5xl w-full  flex-wrap bg-gray-50 dark:bg-[#1E2028] ">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center mr-4 md:mr-0 ml-4 justify-center">
            <Link href="/">
              <a
                className="ml-0 md:ml-0 flex items-center justify-center"
              >
                <div className="rounded-lg w-[38px] h-[38px]  ring-1 ring-indigo-300">
                  <Image
                    alt="Ahmed jadan"
                    height={38}
                    layout="responsive"
                    objectFit="cover"
                    width={38}
                    src={Ahmed}
                    placeholder="blur"
                    className="rounded-lg z-50"
                  />
                </div>
                <span className={`font-semibold md:text-xl sm:text-sm text-indigo-600 dark:text-gray-200 ${activeLocale === 'ar' ? 'mr-3' : 'ml-3'}`}>
                  {t('common:name')}
                </span>
              </a>
            </Link>
          </div>


          <div
            onClick={handleClick}
            className={`flex pointer-events-auto absolute ${activeLocale === 'ar' ? 'left-1' : 'right-0 ml-6'} rounded md:hidden ml-auto outline-none`}
          >
            {active ? (
              <IoMdClose className="text-2xl pointer-events-auto dark:text-gray-400" />
            ) : (
              <HiMenu className="text-2xl pointer-events-auto dark:text-gray-400" />
            )}
          </div>
          <div className={`md:hidden  flex items-center bg-gray-100 dark:bg-[#242731] rounded-md ${activeLocale === 'ar' ? 'ml-10' : ' mr-8'}`}>
            <Theme onclick={closeMenuItem} />
          </div>
        </div>

        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
              duration: 1,
            },
          }}
          className={`${active ? 'active ' : 'hidden'} w-full md:inline-flex md:flex-grow md:w-auto`}
        >
          <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center justify-between flex flex-col items-start  py-6 md:py-0">
            {navigation.map((nav) => (
              <Link href={nav.href} key={nav.title}>
                <a
                  onClick={closeMenuItem}
                  className="rounded focus:text-indigo-600 md:ml-4 px-2 py-2 md:px-3 hover:text-indigo-700  text-gray-900 dark:text-gray-100"
                >
                  <span className="text-sm text-indigo-400  px-2">
                    {' '}
                    {nav.idx}{' '}
                  </span>
                  {t(`navigation:${nav.title.toLowerCase()}`)}
                </a>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex  bg-gray-100 rounded-md dark:bg-[#242731]">
            <Theme />
          </div>
        </motion.div>

      </nav>
    </header>
  );
}
