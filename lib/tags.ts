import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

import { PostFrontMatter } from '~/types/PostFrontMatter'
import { getFiles } from './mdx'
import kebabCase from './utils/kebabCase'
import { Tag } from '~/types/Tag'
import { tagsData } from '~/data/tagData'

const root = path.join(process.cwd())

const getTagsCount = (tag: string, type: 'blog' | 'authors' = 'blog'): number => {
  const files = getFiles('blog')
  let tagCount = 0
  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, 'data', type, file), 'utf8')
    const matterFile = matter(source)
    const data = matterFile.data as PostFrontMatter

    if (data.tags && data.draft !== true) {
      if (data.tags.includes(tag)) {
        tagCount += 1
      }
    }
  })

  return tagCount
}

export async function getAllTags(type: 'blog' | 'authors'): Promise<Tag[]> {
  const files = getFiles(type)
  const tags: Tag[] = []

  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, 'data', type, file), 'utf8')
    const matterFile = matter(source)
    const data = matterFile.data as PostFrontMatter

    if (data.tags && data.draft !== true) {
      data.tags.forEach((tag) => {
        const formattedTag = kebabCase(tag)
        const gatData = tagsData.find((t) => t.code === formattedTag)

        if (!tags.some((t) => t.code === formattedTag)) {
          tags.push({
            ...gatData,
            count: getTagsCount(tag, 'blog'),
          })
        }
      })
    }
  })

  return [...tags]
}
