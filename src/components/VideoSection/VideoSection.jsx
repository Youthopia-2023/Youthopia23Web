import './VideoSection.css';
import playicon from "../../assets/PlayIcon.svg";

function VideoSection() {
  return (
    <div className="main-container">
      <p className="map-heading">EXPERIENCE MORE</p>
      <div className="container">
        <div className="video-container">
          <img src={playicon} alt="playicon"></img>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
