import { useSelector } from "react-redux";
import { selectCurrentLocation, selectShelfIndex } from "../../features/vector/vectorSlice";
import HobbyData from "../../data/interest.json"

function HobbySection(){
    const isShelf = useSelector(selectCurrentLocation) === "SHELF";
    const isInterestIndex = useSelector(selectShelfIndex) === 1;
    const isVisible = isShelf && isInterestIndex;

    if(isVisible){
        return(
            <div className="hobby-section">
                <div className="hobby-container">
                    {HobbyData.map((hobby)=>{
                        return(
                            <div className="hobby-desc">
                                {hobby.message}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    return null;
}
export default HobbySection