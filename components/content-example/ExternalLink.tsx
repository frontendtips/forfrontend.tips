import React, { FC, HTMLAttributes } from 'react'

interface ExternalLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  text: string
}

export const ExternalLink: FC<ExternalLinkProps> = ({ style, text, ...props }) => {
  return (
    <a className="external-link" {...props} rel="noopener noreferrer" style={style}>
      {text}
    </a>
  )
}
