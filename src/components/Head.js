import NextHead from 'next/head';
import { useRouter } from 'next/router';


const Head = ({ children, title, description, keywords, url, link, date, image }) => {
  const router = useRouter();

  return (
    <NextHead>
      <meta key="charSet" charSet="UTF-8" />
      <meta name="robots" content="follow, index" />
      <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
      <meta key="httpEquiv" httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta key="title" name="title" content={title} />
     
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <meta key="description" name="description" content={description} />
      {keywords && <meta key="keywords" name="keywords" content={keywords} />}
      <meta key="author" name="author" content="Ahmed Jadan" />
      {date && <meta key="article:published_time" property="article:published_time" content={new Date(date).toISOString()} />}
      <meta key="og:title" property="og:title" content={title || "Ahmed Ja'dan"} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:type" property="og:type" content="website" />
      {/* facebook */}
      <meta property="og:url" content={`https://www.ahmedjadan.dev/${router.asPath}`} />
      <link rel="canonical" href={`https://www.ahmedjadan.dev/${router.asPath}`} />
      <meta key="og:image" property="og:image" content={image} />
      <meta key="image" property="image" content={image} />
      <meta key="og:image:width" property="og:image:width" content="1200" />
      <meta key="og:image:height" property="og:image:height" content="630" />
      {/* twitter */}
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:creator" name="twitter:creator" content="@a7medjadan" />
      <meta key="twitter:title" name="twitter:title" content={title ? `${title} | Ahmed Ja'dan` : "Ahmed Ja'dan"} />
      <meta key="twitter:description" name="twitter:description" content={description} />
      <meta key="twitter:image" name="twitter:image" content={image} />
      <meta property="twitter:image" content={image} />
      <link key="icon32" rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <meta key="msapplication-TileColor" name="msapplication-TileColor" content="#A5B4FC" />
      <meta key="theme-color" name="theme-color" content="#A5B4FC" />
      <title key="pageTitle">{title ? `${title} | Ahmed Ja'dan` : "Ahmed Ja'dan"} </title>
      {children}
    </NextHead>
  );
};

export default Head;
