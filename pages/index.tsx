import { ComponentProps } from 'react'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'

import { PageSEO } from '~/components/SEO'
import { getAllFilesFrontMatter } from '~/lib/mdx'
import { PostFrontMatter } from '~/types/PostFrontMatter'
import NewsletterForm from '~/components/NewsletterForm'
import siteMetadata from '~/data/siteMetadata'
import { TagList } from '~/components/tag/TagList'
import ListLayout from '~/layouts/ListLayout'
import Pagination from '~/components/Pagination'
import PageTitle from '~/components/PageTitle'
import { getAllTags } from '~/lib/tags'
import { Tag } from '~/types/Tag'

interface HomeProps {
  posts: PostFrontMatter[]
  initialDisplayPosts: PostFrontMatter[]
  isHomePage: boolean
  pagination?: ComponentProps<typeof Pagination>
  tags: Tag[]
}

const POSTS_PER_PAGE = 50

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = await getAllFilesFrontMatter('blog')
  const tags = await getAllTags('blog')

  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: { initialDisplayPosts, posts, pagination, isHomePage: true, tags },
  }
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
  initialDisplayPosts,
  pagination,
  tags,
}) => {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <TagList tags={tags} />
      <PageTitle tag="h4">Últimos tips</PageTitle>
      <ListLayout posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} />
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}

export default Home
