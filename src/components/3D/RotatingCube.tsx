import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

interface RotatingCubeProps {
  position: [number, number, number]
  rotationSpeed: number
  wireframe: boolean
  animationEnabled: boolean
}

const RotatingCube = ({ position, rotationSpeed, wireframe, animationEnabled }: RotatingCubeProps) => {
  const meshRef = useRef<Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current && animationEnabled) {
      meshRef.current.rotation.x += delta * rotationSpeed
      meshRef.current.rotation.y += delta * rotationSpeed * 0.5
      
      // 添加一些浮动效果
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial 
        color="#646cff" 
        wireframe={wireframe}
        metalness={0.3}
        roughness={0.4}
      />
    </mesh>
  )
}

export default RotatingCube 