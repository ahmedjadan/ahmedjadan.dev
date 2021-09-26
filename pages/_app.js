import { motion } from 'framer-motion';
import '../styles/globals.css';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locale } = router
  useEffect(() => {
    let dir = locale == "ar" ? "rtl" : "ltr";
    let lang = locale == "ar" ? "ar" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [locale]);

  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </motion.div>
  );
}

export default MyApp;
