import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface AnimatedTorusProps {
  position: [number, number, number]
  rotationSpeed: number
  animationEnabled: boolean
  wireframe: boolean
}

const AnimatedTorus = ({ position, rotationSpeed, animationEnabled, wireframe }: AnimatedTorusProps) => {
  const meshRef = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current && animationEnabled) {
      // 多轴旋转
      meshRef.current.rotation.x += delta * rotationSpeed * 0.8
      meshRef.current.rotation.y += delta * rotationSpeed * 1.2
      meshRef.current.rotation.z += delta * rotationSpeed * 0.6
      
      // 波浪式运动
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.3
      meshRef.current.position.z = position[2] + Math.cos(state.clock.elapsedTime * 1.5) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial 
        color="#4ecdc4" 
        wireframe={wireframe}
        metalness={0.5}
        roughness={0.3}
        emissive="#4ecdc4"
        emissiveIntensity={0.05}
      />
    </mesh>
  )
}

export default AnimatedTorus 