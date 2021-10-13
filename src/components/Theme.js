import { useState, useEffect } from 'react';
import Link from 'next/link'
import { useTheme } from 'next-themes';
import { useRouter } from 'next/router'

export default function Theme() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  const otherLocales = locales.filter((locale) => locale !== activeLocale)

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true)
    // setTheme('dark')
  }, []);

  return (
    <div className="flex items-center justify-between  px-2" >
      <button style={{ outline: 'none' }}
        aria-label="Toggle Dark Mode"
        type="button"
        className={`rounded  h-5 w-5 mx-2`}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
            className={`h-4 w-4 dark:text-yellow-400 `}
          >
            {theme === 'dark' ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            )}
          </svg>
        )}
      </button>
      <div className="px-2">
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          return (
            <Link href={{ pathname, query }} as={asPath} locale={locale} key={locale}>
              <a className={`text-gray-700 dark:text-gray-100 text-sm ${locale === 'en' ? '' : ''}`}>{locale === "ar" ? 'AR' : 'EN'} </a>
            </Link>
          )
        })}      </div>

    </div>
  );
}
