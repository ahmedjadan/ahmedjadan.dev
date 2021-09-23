import dynamic from 'next/dynamic'
import Footer from 'src/components/Footer';
//import Navbar from 'src/components/Navbar';
import { useRouter } from 'next/router'
const Navbar = dynamic(() => import('src/components/Navbar'))


export default function Layout({ children }) {
  const router = useRouter()
  const { locale } = router
  return (
    <>
      <div
        className={`grid min-h-screen mx-auto  ${locale === 'ar' ? 'font-Almarai' : 'font-Inter'}`}
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
