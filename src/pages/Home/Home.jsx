import "./Home.css";
import Main from "../../components/home-compo/main";
import Sponsor from "../../components/sponsors/sponsors";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import ComingSoon from "../../components/ComingSoon/ComingSoon";
import VideoSection from "../../components/VideoSection/VideoSection";
// import MapComponent from "../../components/MapComponent/MapComponent";
function Home() {
  return (
    <div className="Home">
      <Main />
      <Sponsor />
      <HomeCarousel/>
      {/* <MapComponent/> */}
      <VideoSection />
      <ComingSoon />
      
    </div>
  );
}

export default Home;
