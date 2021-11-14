import Link from '~/components/Link'
import { PageSEO } from '~/components/SEO'
import Tag from '~/components/Tag'
import siteMetadata from '~/data/siteMetadata'
import { getAllTags } from '~/lib/tags'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import { Tag as TagType } from '~/types/Tag'

interface TagsProps {
  tags: TagType[]
}

export const getStaticProps: GetStaticProps<TagsProps> = async () => {
  const tags = await getAllTags('blog')

  return { props: { tags } }
}

export default function Tags({ tags }: InferGetStaticPropsType<typeof getStaticProps>) {
  const sortedTags = tags.sort((a, b) => a.name.localeCompare(b.name))
  return (
    <>
      <PageSEO
        title={`Tags - ${siteMetadata.author}`}
        description="Temas sobre los que hablamos."
      />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:border-r-2 md:px-6">
            Tags
          </h1>
        </div>
        <div className="flex flex-wrap max-w-lg">
          {Object.keys(tags).length === 0 && 'Aún o hay nada que mostrar'}
          {sortedTags.map((t) => {
            return (
              <div key={t.code} className="mt-2 mb-2 mr-5">
                <Tag text={t.name} />
                <Link
                  href={t.slug}
                  className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                  title={`Ver todos los tips etiquetados en ${t.name}`}
                >
                  {` (${t.count})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
