import { ContentCard } from '~/components/ContentCard'
import CustomLink from '~/components/Link'
import { PageSEO } from '~/components/SEO'
import siteMetadata from '~/data/siteMetadata'

export default function About() {
  return (
    <article>
      <PageSEO
        title={`About - ${siteMetadata.title}`}
        description="A few words about the project and its objective"
      />
      <header className="mb-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          About
        </h1>
        <p>A few words about the project and its objective</p>
      </header>

      <ContentCard className="mb-6">
        <h3 className="text-xl mb-3 font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
          About the project
        </h3>
        <p className="mb-2">
          We want to make <strong>Frontend tips</strong> a collection of high-level knowledge for
          frontend developers of all levels. Our goal is to help make learning more accessible and
          of quality.
        </p>
        <p>
          Cada uno de los tips publicado son revisado y adaptado cuando sea necesario para mantener
          un nivel de calidad y funcionalidad.
        </p>
      </ContentCard>

      <ContentCard className="mb-6">
        <h3 className="text-xl mb-3 font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
          Collaborate
        </h3>
        <p>
          You have several ways to collaborate, either by writing your own tips or code snippets.{' '}
          <CustomLink href="https://github.com/frontendtips/forfrontend.tips/blob/main/CONTRIBUTING.md">
            Read the guide
          </CustomLink>
          to collaborate and start sharing your knowledge
        </p>
      </ContentCard>

      <ContentCard>
        <h3 className="text-xl mb-3 font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
          License
        </h3>
        <p className="mb-3">
          So that we can all take advantage of shared code, we follow the license{' '}
          <CustomLink href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</CustomLink>{' '}
          This means they are free to use in any project you want, as long as you give it the proper
          credit to this website.
        </p>
        <p>
          This is especially important for content shared on the Internet or as part of any
          educational material to ensure readers can always track it content back to its original
          source and find updated versions that might have has been published.
        </p>
      </ContentCard>
    </article>
  )
}
