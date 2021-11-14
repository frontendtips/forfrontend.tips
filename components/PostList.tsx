import React, { FC } from 'react'

import Link from '~/components/Link'
import { PostFrontMatter } from '~/types/PostFrontMatter'

const MAX_DISPLAY = 2

interface IPostListProps {
  posts: PostFrontMatter[]
  max?: number
}

export const PostList: FC<IPostListProps> = ({ posts, max = MAX_DISPLAY }) => {
  return (
    <>
      <h3 className="text-3xl md:text-4xl  mt-20 font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100  sm:leading-10  md:leading-14">
        Últimos tips
      </h3>
      <ul className="">
        {posts.map((frontMatter) => {
          const { slug, title, summary } = frontMatter
          return (
            <li
              className="mb-4 border rounded  hover:bg-gray-100 dark:hover:bg-gray-900 false"
              key={slug}
            >
              <Link href={`/${slug}`} className="p-4 block">
                <h4 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
                  {title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-2">{summary}</p>
              </Link>
            </li>
          )
        })}
      </ul>
      {posts.length > max && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="Últimos tips"
          >
            Últimos tips &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
