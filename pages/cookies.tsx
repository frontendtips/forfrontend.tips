import { ContentCard } from '~/components/ContentCard'
import CustomLink from '~/components/Link'
import { PageSEO } from '~/components/SEO'
import siteMetadata from '~/data/siteMetadata'

export default function Cookies() {
  return (
    <article>
      <PageSEO
        title={`Cookie policy - ${siteMetadata.title}`}
        description="Understand how we use cookies."
      />
      <header className="mb-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
          Cookie policy
        </h1>
        <p>Understand how we use cookies.</p>
      </header>

      <ContentCard className="mb-6">
        <h3 className="text-xl mb-3 font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
          What are cookies
        </h3>
        <p className="mb-2 dark:text-gray-400 text-gray-600">
          As is common practice with almost all professional websites this site uses cookies, which
          are tiny files that are downloaded to your computer, to improve your experience. This page
          describes what information they gather, how we use it and why we sometimes need to store
          these cookies. We will also share how you can prevent these cookies from being stored
          however this may downgrade or "break" certain elements of the sites functionality.
        </p>
      </ContentCard>

      <ContentCard className="mb-6">
        <h3 className="text-xl mb-3 font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
          How we use cookies
        </h3>
        <p className="dark:text-gray-400 text-gray-600">
          We use cookies for a variety of reasons detailed below. Unfortunately in most cases there
          are no industry standard options for disabling cookies without completely disabling the
          functionality and features they add to this site. It is recommended that you leave on all
          cookies if you are not sure whether you need them or not in case they are used to provide
          a service that you use.
        </p>
      </ContentCard>

      <ContentCard className="mb-6">
        <h3 className="text-xl mb-3 font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
          Disabling cookies
        </h3>
        <p className="mb-3 text-gray-600 dark:text-gray-400">
          You can prevent the setting of cookies by adjusting the settings on your browser (see your
          browser Help for how to do this). Be aware that disabling cookies will affect the
          functionality of this and many other websites that you visit. Disabling cookies will
          usually result in also disabling certain functionality and features of the this site.
          Therefore it is recommended that you do not disable cookies.
        </p>
      </ContentCard>

      <ContentCard>
        <h3 className="text-xl mb-3 font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100">
          The cookies we set
        </h3>
        <p className=" mb-1 font-bold">Site preference cookies</p>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          In order to provide you with a great experience on this site we provide the functionality
          to set your preferences for how this site runs when you use it. In order to remember your
          preferences we need to set cookies so that this information can be called whenever you
          interact with a page is affected by your preferences.
        </p>
        <p className=" mb-1 font-bold">Third party cookies</p>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          In some special cases we also use cookies provided by trusted third parties. The following
          section details which third party cookies you might encounter through this site.
        </p>
        <p className=" mb-1 font-bold">Google Analytics cookies</p>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          This site uses Google Analytics which is one of the most widespread and trusted analytics
          solutions on the web in order to help us understand how you use the site and ways that we
          can improve your experience. These cookies may track things such as how long you spend on
          the site and the pages that you visit so we can continue to produce engaging content.
        </p>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          For more information on Google Analytics cookies, see the official
          <CustomLink href="https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage">
            Google Analytics page.
          </CustomLink>
        </p>
        <CustomLink href="#" id="open_preferences_center">
          Change your preferences
        </CustomLink>
      </ContentCard>
    </article>
  )
}
