import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei'
import { useAppStore } from '@/stores/useAppStore'
import RotatingCube from '@/components/3D/RotatingCube'
import FloatingSphere from '@/components/3D/FloatingSphere'
import AnimatedTorus from '@/components/3D/AnimatedTorus'
import './Scene3D.scss'

const Scene3D = () => {
  const { scene3D } = useAppStore()

  return (
    <div className="scene-3d">
      <div className="scene-info">
        <h1>3D 场景演示</h1>
        <p>使用侧边栏控制面板来调整场景参数</p>
      </div>
      
      <div className="canvas-container">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={scene3D.cameraPosition} />
          
          {/* 环境光 */}
          <ambientLight intensity={0.4} />
          
          {/* 方向光 */}
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
          />
          
          {/* 点光源 */}
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
          <pointLight position={[10, -10, 10]} intensity={0.5} color="#4ecdc4" />
          
          {/* 3D 对象 */}
          <RotatingCube 
            position={[-3, 0, 0]} 
            rotationSpeed={scene3D.rotationSpeed}
            wireframe={scene3D.showWireframe}
            animationEnabled={scene3D.animationEnabled}
          />
          
          <FloatingSphere 
            position={[0, 2, 0]} 
            animationEnabled={scene3D.animationEnabled}
            wireframe={scene3D.showWireframe}
          />
          
          <AnimatedTorus 
            position={[3, -1, 0]} 
            rotationSpeed={scene3D.rotationSpeed * 0.5}
            animationEnabled={scene3D.animationEnabled}
            wireframe={scene3D.showWireframe}
          />
          
          {/* 地面阴影 */}
          <ContactShadows
            rotation-x={Math.PI / 2}
            position={[0, -3, 0]}
            opacity={0.4}
            width={20}
            height={20}
            blur={2}
            far={4}
          />
          
          {/* 环境映射 */}
          <Environment preset="city" />
          
          {/* 轨道控制器 */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={3}
            maxDistance={20}
          />
        </Canvas>
      </div>
      
      <div className="scene-stats">
        <div className="stat-item">
          <span className="stat-label">旋转速度:</span>
          <span className="stat-value">{scene3D.rotationSpeed.toFixed(1)}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">线框模式:</span>
          <span className="stat-value">{scene3D.showWireframe ? '开启' : '关闭'}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">动画:</span>
          <span className="stat-value">{scene3D.animationEnabled ? '启用' : '禁用'}</span>
        </div>
      </div>
    </div>
  )
}

export default Scene3D 