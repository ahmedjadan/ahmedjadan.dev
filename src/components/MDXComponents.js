import { useMemo } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Tags from './Tags';
import Theme from './Theme'
import CodeSnippet from './CodeSnippet'

const CustomLink = ({ href, ...rest }) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...rest} />
      </Link>
    )
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />
}

const MDXComponents = {
  Image,
  Tags,
  a: CustomLink,
  Theme,
  CodeSnippet,
};

export default MDXComponents;
