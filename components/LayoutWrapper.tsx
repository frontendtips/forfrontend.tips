import { ReactNode } from 'react'

import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { Header } from './Header'

interface Props {
  children: ReactNode
  isHomePage?: boolean
}

const LayoutWrapper = ({ children, isHomePage = false }: Props) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <Header isHomePage={isHomePage} />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
