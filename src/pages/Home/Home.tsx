import { Link } from 'react-router-dom'
// import { useAppStore } from '@/stores/useAppStore'
import './Home.scss'

const Home = () => {
  // const { theme } = useAppStore()

  const features = [
    {
      title: '3D 场景',
      description: '体验 React Three Fiber 的强大 3D 渲染能力',
      icon: '🎭',
      link: '/scene',
      color: '#646cff'
    },
    {
      title: '组件画廊',
      description: '浏览各种 3D 组件和效果展示',
      icon: '🖼️',
      link: '/gallery',
      color: '#535bf2'
    },
    {
      title: '项目信息',
      description: '了解更多关于 R3F 和项目架构',
      icon: 'ℹ️',
      link: '/about',
      color: '#42d392'
    }
  ]

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            欢迎来到 <span className="gradient-text">R3F Demo</span>
          </h1>
          <p className="hero-description">
            一个基于 React Three Fiber 的现代 3D Web 应用演示项目
          </p>
          <div className="hero-actions">
            <Link to="/scene" className="btn btn-primary">
              开始体验 3D 场景
            </Link>
            <Link to="/gallery" className="btn">
              浏览组件画廊
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="section-header">
          <h2>功能特性</h2>
          <p>探索 React Three Fiber 的各种能力</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <Link 
              key={index} 
              to={feature.link} 
              className="feature-card"
              style={{ '--feature-color': feature.color } as React.CSSProperties}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-arrow">→</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="tech-stack">
        <div className="section-header">
          <h2>技术栈</h2>
          <p>现代化的前端技术组合</p>
        </div>
        <div className="tech-grid">
          <div className="tech-item">
            <span className="tech-icon">⚛️</span>
            <span className="tech-name">React 18</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🔷</span>
            <span className="tech-name">TypeScript</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">⚡</span>
            <span className="tech-name">Vite</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🎨</span>
            <span className="tech-name">SCSS</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🎭</span>
            <span className="tech-name">React Three Fiber</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🐻</span>
            <span className="tech-name">Zustand</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">🧭</span>
            <span className="tech-name">React Router</span>
          </div>
          <div className="tech-item">
            <span className="tech-icon">📦</span>
            <span className="tech-name">Three.js</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 