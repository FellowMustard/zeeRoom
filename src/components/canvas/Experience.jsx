import { Canvas } from "@react-three/fiber"
import Light from "./Light"
import { OrbitControls } from "@react-three/drei"
import { Room } from "./Room"
import * as THREE from "three"

function Experience(){
    return(
        <Canvas
            gl={{ antialias: true}}
        >
            <Light/>
            <Room/>
            <OrbitControls
                // Horizontal (azimuth)
                minAzimuthAngle={0}             
                maxAzimuthAngle={Math.PI / 2} 

                // Vertical (polar)
                minPolarAngle={Math.PI / 6} 
                maxPolarAngle={Math.PI / 2}    

                enableZoom={true}
                enablePan={false}
                />
        </Canvas>
    )
}

export default Experience