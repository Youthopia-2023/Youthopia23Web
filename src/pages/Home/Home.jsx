import "./Home.css";
import Main from "../../components/home-compo/main";
import Sponsor from "../../components/sponsors/sponsors";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";

function Home() {
  return (
    <div className="Home">
      <Main />
      <Sponsor />
      <HomeCarousel/>
    </div>
  );
}

export default Home;
