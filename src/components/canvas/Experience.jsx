import { Canvas } from "@react-three/fiber"
import Light from "./Light"
import { OrbitControls } from "@react-three/drei"
import { Room } from "./Room"

function Experience(){
    return(
        <Canvas>
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