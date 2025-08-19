import { Link, useLocation } from 'react-router-dom'
import { useAppStore } from '@/stores/useAppStore'
import './Sidebar.scss'

const Sidebar = () => {
  const location = useLocation()
  const { sidebarOpen, setSidebarOpen, scene3D, updateScene3D, resetScene3D } = useAppStore()

  const navItems = [
    { path: '/', label: '首页', icon: '🏠' },
    { path: '/scene', label: '3D 场景', icon: '🎭' },
    { path: '/gallery', label: '画廊', icon: '🖼️' },
    { path: '/about', label: '关于', icon: 'ℹ️' }
  ]

  const handleBackdropClick = () => {
    setSidebarOpen(false)
  }

  return (
    <>
      {sidebarOpen && <div className="sidebar-backdrop" onClick={handleBackdropClick} />}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <div className="sidebar-header">
            <h3>导航菜单</h3>
          </div>
          
          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-label">{item.label}</span>
              </Link>
            ))}
          </nav>

          {location.pathname === '/scene' && (
            <div className="sidebar-controls">
              <div className="controls-header">
                <h4>场景控制</h4>
                <button className="btn btn-sm" onClick={resetScene3D}>
                  重置
                </button>
              </div>
              
              <div className="control-group">
                <label>旋转速度</label>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="0.1"
                  value={scene3D.rotationSpeed}
                  onChange={(e) => updateScene3D({ rotationSpeed: parseFloat(e.target.value) })}
                  className="range-input"
                />
                <span className="control-value">{scene3D.rotationSpeed.toFixed(1)}</span>
              </div>

              <div className="control-group">
                <label>
                  <input
                    type="checkbox"
                    checked={scene3D.showWireframe}
                    onChange={(e) => updateScene3D({ showWireframe: e.target.checked })}
                  />
                  显示线框
                </label>
              </div>

              <div className="control-group">
                <label>
                  <input
                    type="checkbox"
                    checked={scene3D.animationEnabled}
                    onChange={(e) => updateScene3D({ animationEnabled: e.target.checked })}
                  />
                  启用动画
                </label>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}

export default Sidebar 