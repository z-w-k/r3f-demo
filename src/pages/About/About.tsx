import './About.scss'

const About = () => {
  const features = [
    {
      title: '现代技术栈',
      description: 'React 18, TypeScript, Vite 等现代前端技术',
      icon: '⚡'
    },
    {
      title: '3D 渲染',
      description: 'React Three Fiber 提供强大的 3D 渲染能力',
      icon: '🎭'
    },
    {
      title: '状态管理',
      description: 'Zustand 轻量级且易用的状态管理方案',
      icon: '🐻'
    },
    {
      title: '响应式设计',
      description: '适配各种设备尺寸的响应式布局',
      icon: '📱'
    }
  ]

  const architecture = [
    {
      layer: '表现层',
      components: ['React Components', 'SCSS Styles', 'Responsive Design'],
      color: '#646cff'
    },
    {
      layer: '逻辑层',
      components: ['Zustand Store', 'React Hooks', 'Event Handlers'],
      color: '#535bf2'
    },
    {
      layer: '3D 渲染层',
      components: ['React Three Fiber', 'Three.js', '3D Components'],
      color: '#ff6b6b'
    },
    {
      layer: '工具层',
      components: ['TypeScript', 'Vite', 'React Router'],
      color: '#4ecdc4'
    }
  ]

  return (
    <div className="about">
      <div className="about-header">
        <h1>关于 R3F Demo</h1>
        <p>一个展示 React Three Fiber 能力的现代 3D Web 应用</p>
      </div>

      <div className="project-overview">
        <div className="overview-content">
          <h2>项目概述</h2>
          <p>
            这个项目是一个基于 React Three Fiber 的 3D Web 应用演示，
            展示了如何使用现代前端技术栈构建交互式 3D 体验。
            项目采用了组件化的架构设计，具有良好的可维护性和扩展性。
          </p>
          
          <h3>主要功能</h3>
          <ul>
            <li>交互式 3D 场景渲染</li>
            <li>实时参数调整和控制</li>
            <li>响应式设计适配多端</li>
            <li>主题切换和状态持久化</li>
            <li>模块化的组件架构</li>
          </ul>
        </div>
      </div>

      <div className="features-section">
        <h2>技术特性</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="architecture-section">
        <h2>架构设计</h2>
        <p className="architecture-description">
          项目采用分层架构设计，各层职责清晰，便于维护和扩展：
        </p>
        <div className="architecture-diagram">
          {architecture.map((layer, index) => (
            <div 
              key={index} 
              className="architecture-layer"
              style={{ '--layer-color': layer.color } as React.CSSProperties}
            >
              <div className="layer-header">
                <h4>{layer.layer}</h4>
              </div>
              <div className="layer-components">
                {layer.components.map((component, compIndex) => (
                  <span key={compIndex} className="component-tag">
                    {component}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tech-stack-section">
        <h2>完整技术栈</h2>
        <div className="tech-categories">
          <div className="tech-category">
            <h4>前端框架</h4>
            <div className="tech-list">
              <span>React 18</span>
              <span>TypeScript</span>
              <span>Vite</span>
            </div>
          </div>
          
          <div className="tech-category">
            <h4>3D 渲染</h4>
            <div className="tech-list">
              <span>React Three Fiber</span>
              <span>Three.js</span>
              <span>@react-three/drei</span>
            </div>
          </div>
          
          <div className="tech-category">
            <h4>状态管理</h4>
            <div className="tech-list">
              <span>Zustand</span>
              <span>React Hooks</span>
              <span>Local Storage</span>
            </div>
          </div>
          
          <div className="tech-category">
            <h4>样式和路由</h4>
            <div className="tech-list">
              <span>SCSS</span>
              <span>CSS Variables</span>
              <span>React Router</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-section">
        <p>
          这个项目展示了现代前端技术在 3D Web 应用中的应用，
          为开发者提供了一个学习和参考的完整示例。
        </p>
      </div>
    </div>
  )
}

export default About 