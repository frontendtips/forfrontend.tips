import React, { FC } from 'react'
import headerNavLinks from '~/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

export const HeaderLinks: FC = () => {
  return (
    <aside>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-medium text-gray-900 sm:p-4 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        {headerNavLinks.length > 0 && <MobileNav />}
      </div>
    </aside>
  )
}
