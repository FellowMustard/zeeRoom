import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  animateDone, checkIsHome, lerpTo, selectAnimatingStatus, selectVectorPosition, selectVectorRotation } from "../../features/vector/vectorSlice";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useThree } from "@react-three/fiber";

function CameraAnimation({controlRef}){
    const { camera } = useThree();
    const dispatch = useDispatch()
    const isAnimating = useSelector(selectAnimatingStatus)
    const isHome = useSelector(checkIsHome)
    const position = useSelector(selectVectorPosition);
    const rotation = useSelector(selectVectorRotation);

    useEffect(() => {
        function handleScroll() {
            if (isAnimating) return;
            if(!isHome){
                dispatch(
                    lerpTo({
                        position: [5, 3, 5],
                        rotation: [0, 0, 0],
                        isHome:true,
                    })
                );
            }
        }

        window.addEventListener("wheel", handleScroll);
        window.addEventListener("touchstart", handleScroll);

        return () => {
            window.removeEventListener("wheel", handleScroll);
            window.removeEventListener("touchstart", handleScroll);
        };
    }, [isAnimating,isHome, dispatch]);

    useGSAP(() => {
        if (!controlRef.current) return;
        

        const controls = controlRef.current;
        gsap.to(camera.position, {
        x: position[0],
        y: position[1],
        z: position[2],
        duration: 3,
        ease: "power3.inOut",
        });

        gsap.to(controls.target, {
        x: rotation[0],
        y: rotation[1],
        z: rotation[2],
        duration: 3,
        ease: "power3.inOut",
        onUpdate: () =>{ 
            controls.update()
        },
        onComplete:()=>{ 
            dispatch(animateDone())
        }
        });
  }, [position, rotation]);

    return null;
}
export default CameraAnimation