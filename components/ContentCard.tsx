import React, { FC } from 'react'
import classNames from 'classnames'

interface IContentCardProps {
  children: React.ReactNode
  className?: string
}

export const ContentCard: FC<IContentCardProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'py-4 px-5 bg-gray-50 border dark:bg-gray-800 dark:border-gray-700 border-gray-100 rounded-lg',
        className
      )}
    >
      {children}
    </div>
  )
}
