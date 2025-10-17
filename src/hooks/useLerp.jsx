import { useDispatch, useSelector } from "react-redux";
import {
  lerpTo,
  selectAnimatingStatus,
  selectCurrentLocation,
} from "../features/vector/vectorSlice";

function useLerp() {
  const location = useSelector(selectCurrentLocation);
  const isAnimating = useSelector(selectAnimatingStatus);
  const dispatch = useDispatch();

  function lerpMove(locationName, position, rotation,shelfIndex=0) {
    if(isAnimating) return;
    if (location !== "SHELF" && location === locationName) return;
    dispatch(lerpTo({ position, rotation, location: locationName,shelfIndex }));
  }

  return { lerpMove };
}

export default useLerp;
