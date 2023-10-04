import './VideoSection.css';
// import playicon from "../../assets/PlayIcon.svg";
import testVideo from "../../assets/test.mp4"

function VideoSection() {
  return (
    <div className="main-container">
      <div className="map-heading">EXPERIENCE MORE</div>
      {/* <div className="container"> */}
      <div className="video-container">
        {/* <img src={playicon} alt="playicon"></img> */}
        <video width="100%" height="100" controls>
          <source src={testVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* </div> */}
    </div>
  );
}

export default VideoSection;
