import { useState } from 'react';
import { useRouter } from 'next/router'
import Router from 'next/router';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation'

import Nprogress from 'nprogress';
import Link from 'next/link';
import Theme from './Theme';
import { navigation } from '/data/navigation';
import Ahmed from '../../public/ahmed.png';


Router.onRouteChangeStart = () => Nprogress.start();
Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();

export default function Navbar() {
  const { t } = useTranslation();
  const router = useRouter()
  const { locale: activeLocale } = router

  const [active, setActive] = useState(false);
  const closeMenuItem = () => setActive(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <header className="py-8 z-50">
      <nav className="md:flex items-center px-2  md:flex-row md:justify-between md:mx-auto mb-5 max-w-6xl w-full  flex-wrap bg-gray-50 dark:bg-[#1E2028] ">
        <div className="flex items-center justify-between relative">
          <div className="flex items-center mr-4 md:mr-0 ml-4 justify-center">
            <Link href="/" prefetch={false} >
              <a
                className="ml-0 md:ml-0 flex items-center text-center justify-center w-12 h-12  rounded-full  "
              >
                {/* <div className="rounded-lg w-[38px] h-[38px]  ring-1 ring-indigo-300">
                  <Image
                    alt="Ahmed jadan"
                    height={38}
                    layout="responsive"
                    objectFit="cover"
                    width={38}
                    src={Ahmed}
                    priority
                    className="rounded-lg z-50"
                  />
                </div> */}
                <span className={`font-bold group text-4xl font-Roboto relative  text-indigo-600 dark:text-indigo-400`}>
                  {/* {t('common:name')} */}
                  AJ.

                </span>

              </a>
            </Link>
          </div>


          <div
            onClick={handleClick}
            className={`flex pointer-events-auto absolute ${activeLocale === 'ar' ? 'left-1' : 'right-0 ml-6'} rounded md:hidden ml-auto outline-none`}
          >
            {active ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-2xl pointer-events-auto dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-2xl pointer-events-auto dark:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            )}
          </div>
          <div className={`md:hidden  flex items-center bg-gray-100 dark:bg-[#242731] rounded-md ${activeLocale === 'ar' ? 'ml-10' : ' mr-8'}`}>
            <Theme onclick={closeMenuItem} />
          </div>
        </div>

        <div

          className={`${active ? 'active ' : 'hidden'} w-full md:inline-flex md:flex-grow md:w-auto`}
        >
          <div className="md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center justify-between flex flex-col items-start  py-6 md:py-0">
            {navigation.map((nav) => (
              <Link href={nav.href} key={nav.title}>
                <a
                  onClick={closeMenuItem}
                  className="rounded focus:text-indigo-600 md:ml-4 px-2 py-2 md:px-3 hover:text-indigo-700  text-gray-900 dark:text-gray-100"
                >

                  {t(`navigation:${nav.title.toLowerCase()}`)}
                </a>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex  bg-gray-100 rounded-md dark:bg-[#242731]">
            <Theme />
          </div>
        </div>

      </nav>
    </header>
  );
}
