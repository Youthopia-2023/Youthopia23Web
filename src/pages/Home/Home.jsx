import "./Home.css";
import Main from "../../components/home-compo/main";
import Sponsor from "../../components/sponsors/sponsors";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
// import ComingSoon from "../../components/ComingSoon/ComingSoon";
import VideoSection from "../../components/VideoSection/VideoSection";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import MapComponent from "../../components/MapComponent/MapComponent";
function Home() {
  return (
    <div className="Home">
      <Navbar/>
      <Main />
      <Sponsor />
      <HomeCarousel/>
      <MapComponent/>
      <VideoSection />
      {/* <ComingSoon /> */}
      <Footer/>
      
    </div>
  );
}

export default Home;
