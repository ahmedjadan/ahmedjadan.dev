import Link from 'next/link'
import { useRouter } from 'next/router'

export default function LocaleSwitcher() {
  const router = useRouter()
  const { locales, locale: activeLocale } = router
  const otherLocales = locales.filter((locale) => locale !== activeLocale)

  return (
    <div>
      <ul>
        {otherLocales.map((locale) => {
          const { pathname, query, asPath } = router
          return (
            <li key={locale}>
              <Link href={{ pathname, query }} as={asPath} locale={locale}>
                <a className="text-gray-700 dark:text-gray-100 md:mr-0 mr-1">{locale === "ar" ? 'AR' : 'EN'} </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}