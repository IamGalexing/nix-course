import { ReactNode } from 'react'

type PageLayoutProps = {
  children: ReactNode
}

export const PageLayout = ({ children }: PageLayoutProps) => {
  return <div className="content">{children}</div>
}
