import React from "react";
import ContentLoader from "react-content-loader";

export const ArticleItemPlaceholder = () => (
    <div className="">
        <ContentLoader viewBox="0 0 500 280" height={380} width={500} speed={3}>
            <rect x="3" y="3" rx="10" ry="10" width="450" height="200" />
            <rect x="6" y="190" rx="0" ry="0" width="140" height="20" />
            <rect x="4" y="215" rx="0" ry="0" width="139" height="20" />
            <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
        </ContentLoader>
    </div>
);

export const ListArticles = () => {
    return (
        <ContentLoader viewBox="0 0 578 106" width={578} height={100} >
            <rect x="37" y="34" rx="0" ry="0" width="0" height="0" />
            <rect x="28" y="29" rx="0" ry="0" width="208" height="32" />
            <rect x="28" y="71" rx="0" ry="0" width="265" height="32" />
            <rect x="134" y="94" rx="0" ry="0" width="0" height="20" />
            <rect x="29" y="60" rx="0" ry="0" width="449" height="32" />
        </ContentLoader>
    )
}

export const ReposPlaceholder = props => {
    return (
        <ContentLoader
            rtl
            speed={2}
            width={400}
            height={150}
            viewBox="0 0 400 150"
            backgroundColor="#f2f2f2"
            foregroundColor="#e3e3e3"
            {...props}
        >
            <rect x="105" y="5" rx="1" ry="5" width="260" height="100" />
        </ContentLoader>
    )
}