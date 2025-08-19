import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { useState } from 'react'
import './Gallery.scss'

const Gallery = () => {
  const [selectedDemo, setSelectedDemo] = useState(0)

  const demos = [
    {
      title: '基础几何体',
      description: '展示各种基础几何形状',
      component: <BasicGeometry />
    },
    {
      title: '材质效果',
      description: '不同材质的光照效果',
      component: <MaterialEffects />
    },
    {
      title: '动画示例',
      description: '各种动画效果组合',
      component: <AnimationExamples />
    }
  ]

  return (
    <div className="gallery">
      <div className="gallery-header">
        <h1>3D 组件画廊</h1>
        <p>探索各种 3D 组件和效果</p>
      </div>

      <div className="gallery-nav">
        {demos.map((demo, index) => (
          <button
            key={index}
            className={`demo-tab ${selectedDemo === index ? 'active' : ''}`}
            onClick={() => setSelectedDemo(index)}
          >
            <div className="tab-title">{demo.title}</div>
            <div className="tab-description">{demo.description}</div>
          </button>
        ))}
      </div>

      <div className="gallery-content">
        <div className="demo-info">
          <h3>{demos[selectedDemo].title}</h3>
          <p>{demos[selectedDemo].description}</p>
        </div>
        
        <div className="demo-canvas">
          <Canvas shadows camera={{ position: [0, 0, 8] }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
            {demos[selectedDemo].component}
            <Environment preset="warehouse" />
            <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          </Canvas>
        </div>
      </div>
    </div>
  )
}

// 基础几何体组件
const BasicGeometry = () => {
  return (
    <group>
      <mesh position={[-3, 0, 0]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff6b6b" />
      </mesh>
      
      <mesh position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#4ecdc4" />
      </mesh>
      
      <mesh position={[3, 0, 0]} castShadow>
        <cylinderGeometry args={[0.5, 0.8, 1.5, 32]} />
        <meshStandardMaterial color="#ffe66d" />
      </mesh>
      
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
    </group>
  )
}

// 材质效果组件
const MaterialEffects = () => {
  return (
    <group>
      <mesh position={[-2, 0, 0]} castShadow>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#646cff" metalness={0.8} roughness={0.2} />
      </mesh>
      
      <mesh position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial color="#ff6b6b" metalness={0.2} roughness={0.8} />
      </mesh>
      
      <mesh position={[2, 0, 0]} castShadow>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#4ecdc4" 
          emissive="#4ecdc4"
          emissiveIntensity={0.3}
        />
      </mesh>
      
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
    </group>
  )
}

// 动画示例组件
const AnimationExamples = () => {
  return (
    <group>
      <mesh position={[-2, 1, 0]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#ff6b6b" />
      </mesh>
      
      <mesh position={[0, 0, 0]} castShadow>
        <torusGeometry args={[1, 0.3, 16, 100]} />
        <meshStandardMaterial color="#4ecdc4" />
      </mesh>
      
      <mesh position={[2, -1, 0]} castShadow>
        <octahedronGeometry args={[1]} />
        <meshStandardMaterial color="#ffe66d" />
      </mesh>
      
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>
    </group>
  )
}

export default Gallery 