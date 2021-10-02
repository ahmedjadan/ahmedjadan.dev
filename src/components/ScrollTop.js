import { useState, useEffect } from 'react';

export default function ScrollTop() {
  const [scrollToTop, setScrollToTop] = useState(false);
  useEffect(() => {
    const showScroll = () => {
      if (window.scrollY > 500) {
        setScrollToTop(true);
      } else {
        setScrollToTop(false);
      }
    };
    window.addEventListener('scroll', showScroll);
    return () => {
      window.removeEventListener('scroll', showScroll);
    };
  }, [scrollToTop]);
  return (
    <button
      className={`fixed bottom-4 cursor-pointer right-4 md:right-16 bg-indigo-500 outline-none p-1 rounded-md hover:bg-indigo-600  ${
        scrollToTop ? 'flex' : 'hidden'
      } `}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-white "
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M18 15l-6 -6l-6 6h12" />
      </svg>
    </button>
  );
}
