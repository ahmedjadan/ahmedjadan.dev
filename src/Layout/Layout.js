import dynamic from 'next/dynamic'
import Footer from 'src/components/Footer';
import { useRouter } from 'next/router'
import React from 'react';
const Navbar = dynamic(() => import('src/components/Navbar'))


function Layout({ children }) {
  const router = useRouter()
  const { locale } = router
  return (
    <>
      <div
        className={`grid min-h-screen mx-auto  ${locale === 'ar' ? 'font-cairo' : 'font-Roboto'}`}
        style={{
          gridTemplateRows: 'auto 1fr auto',
        }}
      >
        <Navbar />
        <main className={` `}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
export default React.memo(Layout)