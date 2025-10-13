import { Select} from '@react-three/postprocessing'
import { useState } from "react"

function HoverMesh({children}){
    const [hover,setHover] = useState(false)
    return(
       <Select enabled={hover}>
            <group 
                onClick={()=>alert("wow")}
                onPointerOver={() => setHover(true)} 
                onPointerOut={() => setHover(false)}
            >
                {children}
            </group>
        </Select>
    )
}
export default HoverMesh