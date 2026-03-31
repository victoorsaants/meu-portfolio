import { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, Center, Float, Stars } from '@react-three/drei'
import * as THREE from 'three'

function DevSymbol() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (!groupRef.current) return
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.3) * 0.3
    groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.08
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.08} floatIntensity={0.5}>
        <Center>
          <Text3D
            font="/meu-portfolio/fonts/helvetiker_bold.typeface.json"
            size={1.8}
            height={0.45}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.04}
            bevelSize={0.025}
            bevelSegments={6}
          >
            {'</>'}
            <meshStandardMaterial
              color="#1a6cff"
              metalness={0.85}
              roughness={0.1}
              emissive="#003399"
              emissiveIntensity={0.5}
            />
          </Text3D>
        </Center>
      </Float>
    </group>
  )
}

function Scene() {
  return (
    <>
      <color attach="background" args={['#0a0a0f']} />

      <ambientLight intensity={0.25} />
      <pointLight position={[5, 5, 5]}   intensity={4}   color="#4d9fff" />
      <pointLight position={[-5, -3, 3]} intensity={2.5} color="#ffffff" />
      <pointLight position={[0, -5, -3]} intensity={2}   color="#001a66" />

      <Stars
        radius={90}
        depth={50}
        count={900}
        factor={2.5}
        saturation={0.2}
        fade
        speed={0.4}
      />

      <Suspense fallback={null}>
        <DevSymbol />
      </Suspense>
    </>
  )
}

export default function Background3D() {
  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 0,
      pointerEvents: 'none',
    }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        gl={{ antialias: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
