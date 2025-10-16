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

  function lerpMove(locationName, position, rotation) {
    if ((location === locationName) | isAnimating) return;
    dispatch(lerpTo({ position, rotation, location: locationName }));
  }

  return { lerpMove };
}

export default useLerp;
