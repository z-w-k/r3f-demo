import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface FloatingSphereProps {
  position: [number, number, number]
  animationEnabled: boolean
  wireframe: boolean
}

const FloatingSphere = ({ position, animationEnabled, wireframe }: FloatingSphereProps) => {
  const meshRef = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current && animationEnabled) {
      // 旋转动画
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.8
      
      // 浮动动画
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.5
      meshRef.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * 0.8) * 0.3
      
      // 缩放动画
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial 
        color="#ff6b6b" 
        wireframe={wireframe}
        metalness={0.1}
        roughness={0.2}
        emissive="#ff6b6b"
        emissiveIntensity={0.1}
      />
    </mesh>
  )
}

export default FloatingSphere 