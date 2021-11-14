import React, { FC } from 'react'
import Link from '~/components/Link'
import classnames from 'classnames'

import styles from './Tag.module.css'
import { Tag } from '~/types/Tag'
interface TagListProps {
  className?: string
  tags: Tag[]
}

export const TagList: FC<TagListProps> = ({ tags, className }) => {
  return (
    <div className={classnames(styles.list, className)}>
      {tags
        .sort((accumulate, current) => accumulate.name.localeCompare(current.name))
        .map(({ name, slug, code, icon, count }) => (
          <Link
            title={`Ver todos ${count} tips etiquetados en ${name}`}
            href={slug}
            className={classnames(styles.link, styles[`icon-${code}`])}
            key={name}
          >
            {icon && <img className={classnames(styles.icon)} src={icon} alt={name} />}
            {name}
            <span className={styles.count}>{count}</span>
          </Link>
        ))}
    </div>
  )
}
