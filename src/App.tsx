import { Routes, Route } from 'react-router-dom'
import { Suspense } from 'react'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Scene3D from './pages/Scene3D/Scene3D'
import Gallery from './pages/Gallery/Gallery'
import About from './pages/About/About'
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import './styles/App.scss'

function App() {
  return (
    <div className="app">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/scene" 
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Scene3D />
              </Suspense>
            } 
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App 