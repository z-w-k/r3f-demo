import { ReactNode, useEffect } from 'react'
import { useAppStore } from '@/stores/useAppStore'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const { theme, sidebarOpen } = useAppStore()

  useEffect(() => {
    document.body.className = `theme-${theme}`
  }, [theme])

  return (
    <div className={`layout ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <Header />
      <div className="layout-content">
        <Sidebar />
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout 