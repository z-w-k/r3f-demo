import { Link, useLocation } from 'react-router-dom'
import { useAppStore } from '@/stores/useAppStore'
import './Header.scss'

const Header = () => {
  const location = useLocation()
  const { theme, toggleTheme, toggleSidebar, sidebarOpen } = useAppStore()

  const navItems = [
    { path: '/', label: '首页' },
    { path: '/scene', label: '3D 场景' },
    { path: '/gallery', label: '画廊' },
    { path: '/about', label: '关于' }
  ]

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button 
            className="btn sidebar-toggle"
            onClick={toggleSidebar}
            aria-label="切换侧边栏"
          >
            <span className={`hamburger ${sidebarOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <Link to="/" className="logo">
            <span className="logo-text">R3F Demo</span>
          </Link>
        </div>

        <nav className="nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-right">
          <button 
            className="btn theme-toggle"
            onClick={toggleTheme}
            aria-label="切换主题"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header 