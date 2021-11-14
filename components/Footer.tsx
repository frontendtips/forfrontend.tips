import Link from './Link'
import siteMetadata from '~/data/siteMetadata'
import SocialIcon from '~/components/social-icons'

export default function Footer() {
  return (
    <footer className="flex flex-col items-center mt-16">
      <div className="flex mb-3 space-x-4">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={8} />
        <SocialIcon kind="github" href={siteMetadata.github} size={8} />
        <SocialIcon kind="facebook" href={siteMetadata.facebook} size={8} />
        <SocialIcon kind="twitter" href={siteMetadata.twitter} size={8} />
      </div>
      <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
        <div>{`© ${new Date().getFullYear()}`}</div>
        <div>{` • `}</div>
        <Link href="/">{siteMetadata.title}</Link>
      </div>
    </footer>
  )
}
