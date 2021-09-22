import Link from 'next/link';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { GrGraphQl } from 'react-icons/gr';
import { DiJavascript } from 'react-icons/di';
import { SiTailwindcss, SiNextDotJs } from 'react-icons/si';

export default function InfoCard() {
  return (
    <div className=" mx-auto max-w-5xl w-full ">
      <div className=" py-2  px-2 bg-gray-200/25 grid md:grid-cols-3 grid-cols-1 md:px-4  bg-opacity-75 dark:bg-[#1E2028] rounded-md ">
        <div className="md:col-span-3 py-1 px-2  ">
          <h1 className=" dark:text-gray-100 text-right text-3xl md:text-4xl font-bold text-gray-800 leading-10 ">
            مرحبا✋. انا احمد جعدان
          </h1>
          <p className=" dark:text-gray-100 text-xl text-justify  mt-4 leading-relaxed tracking-wide ">
            أقوم بإنشاء مواقع ويب باستخدام Javascript وعادةً ما أعمل مع React.js
            و Next.js و Tailwind CSS، بدءاً من صفحات الهبوط البسيطة الى تطبيقات الويب الكاملة.

          </p>
          {/* <div className="flex flex-col sm:flex-row items-center  mt-2 ">
            <div className="mb-5 sm:mb-0 sm:ml-5 w-[200px] text-center md:ml-12 bg-indigo-500 text-gray-100 text-xl font-semibold py-3 px-5 hover:bg-indigo-600 transition ease-linear rounded border-2 border-indigo-500 hover:border-indigo-600">
              <Link href="/contact" className="">
                <a> تواصل معي الآن </a>
              </Link>
            </div>
            <div className="bg-gray-100 w-[200px] text-center dark:bg-[#242731]  text-gray-600 dark:text-gray-200 py-3 text-xl font-semibold px-5 border-2 border-gray-400 rounded hover:text-indigo-500 hover:border-gray-500 dark:hover:border-gray-600 transition ease-linear">
              <Link href="/projects">
                <a> تصفح أعمالي </a>
              </Link>
            </div>
          </div> */}
        </div>
        {/* <div className="flex items-center flex-col justify-around py-3">
          <div className="flex ">
            <div className="p-2  mr-2 bg-gray-100 rounded dark:bg-[#262a319f]">
              <FaReact className="text-[#61dafb] text-4xl " />
            </div>
            <div className="p-2  mr-2 bg-gray-100 rounded dark:bg-[#262a319f]">
              <SiNextDotJs className="text-gray-900 dark:text-gray-300 text-4xl" />
            </div>
            <div className="p-2  mr-2 bg-gray-100 rounded dark:bg-[#262a319f]">
              <FaNodeJs className="text-[#90C640] text-4xl" />
            </div>
          </div>
          <div className="flex  md:mt-0">
            <div className="p-2 mr-2 bg-gray-100 rounded dark:bg-[#262a319f]">
              <DiJavascript className="text-yellow-400 text-4xl" />
            </div>
            <div className="p-2  mr-2 bg-gray-100 rounded dark:bg-[#262a319f]">
              <GrGraphQl className="text-pink-600 text-4xl" />
            </div>
            <div className="p-2  mr-2 bg-gray-100 rounded dark:bg-[#262a319f]">
              <SiTailwindcss className="text-[#06B6D4] text-4xl" />
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
