import Image from 'next/image';
import Layout from './Layout';
import Head from 'src/components/Head';


import React from 'react'

export default function ProjectsLayout({ title, image, description, link }) {
    return (
        <Layout>
            <div className="max-w-5xl mx-auto px-2">
                <div className="py-8">
                    <h1 className="text-gray-600 dark:text-gray-200 text-center font-bold text-3xl">{title}</h1>
                </div>
                <div className="dark:border-gray-400 overflow-hidden dark:border rounded-lg shadow-indigo">
                    <Image
                        src={image}
                        className="rouneded-lg"
                        blurDataURL="VA7AsKPCwte[jgfzbpjXWGbKjUjVj^fmj=n@WIj;j;af"
                        placeholder="blur"
                        layout="responsive"
                        width={464}
                        height={230}
                        objectFit="cover"
                        objectPosition="top center"
                        className="rounded-lg   "
                        title={title}
                    />
                </div>
            </div>
        </Layout>
    )
}
