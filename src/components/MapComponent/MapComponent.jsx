import ditumap from "../../assets/ditumap.png"
import "./MapComponent.css"

const MapComponent = () => {
  return (
    <div className="mapmain">
      <p className='map-heading'>EXPERIENCE MORE</p>
      <div className="mapdiv">
        <img src={ditumap} alt="img not available"></img>
      </div>
    </div>
  );
}

export default MapComponent
