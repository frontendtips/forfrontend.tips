import React, { FC } from 'react'
import siteMetadata from '~/data/siteMetadata'

import ThemeSwitch from './ThemeSwitch'
import { Logo } from '~/components/logo'
import { HeaderLinks } from '~/components/HeaderLinks'

interface HeaderProps {
  isHomePage?: boolean
}

export const Header: FC<HeaderProps> = ({ isHomePage = false }) => {
  return (
    <header className="py-5 md:py-10">
      {isHomePage ? (
        <div className="md:pt-6 pb-8 space-y-2 md:space-y-5 text-center">
          <h1 className="inline-block text-4xl  font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {siteMetadata.headerTitle}
          </h1>
          <ThemeSwitch />
          <h2
            title={siteMetadata.description}
            aria-label={siteMetadata.description}
            className="text-xl md:text-2xl leading-7 text-gray-500 dark:text-gray-400"
          >
            {siteMetadata.description}
          </h2>
        </div>
      ) : (
        <div className="flex justify-between">
          <Logo />
          <HeaderLinks />
        </div>
      )}
    </header>
  )
}
