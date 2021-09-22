import { useEffect, useState } from 'react';

export default function ScrollBar({ bgClassNames }) {
  const [width, setWidth] = useState(1);
  const handleScroll = () => {
    let scrollTop = window.scrollY;
    let docHeight = document.body.offsetHeight;
    let winHeight = window.innerHeight;
    let scrollPercent = scrollTop / (docHeight - winHeight);
    let scrollPercentRounded = Math.round(scrollPercent * 100);
    setWidth(scrollPercentRounded);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  let classes = '';
  bgClassNames == 'indigo'
    ? (classes += 'from-indigo-100 to-indigo-200 ')
    : bgClassNames == 'blue'
    ? (classes += 'from-blue-400 to-blue-400 via-blue-300 ')
    : bgClassNames == 'yellow'
    ? (classes += ' from-yellow-50 via-yellow-50 to-yellow-50')
    : bgClassNames == 'green'
    ? (classes += ' from-green-300 via-green-300 to-green-400')
    : bgClassNames == 'gray'
    ? (classes += 'from-gray-300 via-gray-200 to-gray-300 ')
    : (classes += 'from-indigo-100 to-indigo-200 ');
  return (
    <div
      className={`sticky transition ease-in-out duration-700 top-0 z-50 bg-gradient-to-r ${classes} h-[3px] rounded-md `}
      style={{ width: `${width}%` }}
    ></div>
  );
}
