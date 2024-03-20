import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const Cube = ({ size, transform, color }) => {
    const meshRef = useRef();

    useFrame(() => {
        if (meshRef.current && transform) {
            meshRef.current.rotation.x += 0.01
            meshRef.current.rotation.y += 0.01
        } else {
            meshRef.current.rotation.x = 0
            meshRef.current.rotation.y = 0
        }
    })

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={size} />
            <meshBasicMaterial color={color} />
        </mesh>
    )
}

export default Cube