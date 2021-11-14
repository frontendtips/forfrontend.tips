import React, { FC } from 'react'
import Link from '~/components/Link'
import siteMetadata from '~/data/siteMetadata'
import styles from './Logo.module.css'

export const Logo: FC = () => {
  return (
    <Link
      className={styles.wrapper}
      href="/"
      title={siteMetadata.description}
      aria-label={siteMetadata.description}
    >
      <strong className={styles.text}>Front End</strong>{' '}
      <span className={styles.tips}>tips {'</>'}</span>
    </Link>
  )
}
