import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ScrollTop() {


    const router = useRouter()
    const { locale } = router
    const [scrollToTop, setScrollToTop] = useState(false);
    useEffect(() => {
        const showScroll = () => {
            if (window.scrollY > 500) {
                setScrollToTop(true)
            } else {
                setScrollToTop(false)
            }
        }
        window.addEventListener("scroll", showScroll)
        return () => {
            window.removeEventListener('scroll', showScroll);
        };
    }, [scrollToTop])
    return (
        <button
            className={`fixed bottom-4 cursor-pointer right-4 md:right-16 bg-gray-600 outline-none dark:bg-[#242731] px-1 py-2 rounded-md  ${scrollToTop ? 'flex' : 'hidden'} `}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
            <svg xmlns="http://www.w3.org/2000/svg"
                className={`h-6 w-6 text-gray-200 hover:text-gray-50 `}
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
        </button>
    )
}
