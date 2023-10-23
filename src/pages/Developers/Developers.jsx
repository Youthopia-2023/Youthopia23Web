import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import youthopia from "../../assets/youthopia.png";
import "./Developers.css";

export default function Developers() {
  const moveToVijayant = () => {
    window.open("https://www.linkedin.com/in/vijayant-singh/");
  };
  const moveToTanishq = () => {
    window.open("https://www.linkedin.com/in/tanishq-jain-9a8bb022b/");
  }
  const moveToShreyal = () => {
    window.open("https://linkedin.com/in/shreyal-jain-78b75521b/");
  }
  const moveToVaibhav = () => {
    window.open("https://www.linkedin.com/in/vaibhavaswal/");
  }
  const moveToHarsheet = () => {
    window.open("https://www.linkedin.com/in/harsheet-sharma-78a432193/");
  }
  const moveToRudra = () => {
    window.open("https://www.linkedin.com/in/rudraksh-gupta-664b591b2/");
  }

  const moveToMuskan = () =>{
    window.open("https://www.linkedin.com/in/muskan-verma-919803268/");
  }

  const moveToAshu = () =>{
    window.open("https://www.linkedin.com/in/ashu-shah-5578a3275/");
  }

  return (
    <div className="developers">
      <Navbar />

      <div className="dev-container">

        <div className="youthopia-logo">
          <img src={youthopia} alt="youthopia" />
        </div>
        <div className="dev-card-container">
          <p className="heading">DEVELOER TEAM</p>
          <div className="developersSec">
            <div className="member" onClick={moveToVijayant}>
              <img src="https://youthopiaimageblob.blob.core.windows.net/developers/_DSC0425.JPG" alt="" />
              <p className="con">Vijayant Singh</p>
            </div>
            <div className="member" onClick={moveToTanishq}>
              <img src="https://youthopiaimageblob.blob.core.windows.net/developers/_DSC0424.JPG" alt="" />
              <p className="con">Tanishq Jain</p>
            </div>
            <div className="member" onClick={moveToShreyal}>
              <img src="https://youthopiaimageblob.blob.core.windows.net/developers/_DSC0420.JPG" alt="" />
              <p className="con">Shreyal Jain</p>
            </div>
            <div className="member" onClick={moveToVaibhav}>
              <img src="https://youthopiaimageblob.blob.core.windows.net/developers/_DSC0422.JPG" alt="" />
              <p className="con">Vaibhav Aswal</p>
            </div>
            <div className="member" onClick={moveToHarsheet}>
              <img src="https://youthopiaimageblob.blob.core.windows.net/developers/_DSC0418.JPG" alt="" />
              <p className="con">Harsheet Sharma</p>
            </div>
            <div className="member" onClick={moveToRudra}>
              <img src="https://youthopiaimageblob.blob.core.windows.net/developers/DSC_0434 (1).jpg" alt="" />
              <p className="con">Rudraksh Gupta</p>
            </div>
            <div className="member" onClick={moveToAshu}>
              <img src="https://youthopiaimageblob.blob.core.windows.net/developers/Screenshot_2023-10-20-18-18-19-44_99c04817c0de5652397fc8b56c3b3817.jpg" alt="" />
              <p className="con">Ashu Shah</p>
            </div>
            <div className="member" onClick={moveToMuskan}>
              <img src="https://youthopiaimageblob.blob.core.windows.net/developers/IMG-20231023-WA0035.jpg" alt="" />
              <p className="con">Muskan Verma</p>
            </div>
          </div>
          {/* <p className="heading">DESIGN TEAM</p>
          <div className="developersSec">
            <div className="member">
              <img src="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/wamiq (1).jpg" alt="" />
              <p className="con">Member 1</p>
            </div>
            <div className="member">
              <img src="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/wamiq (1).jpg" alt="" />
              <p className="con">Member 1</p>
            </div>
            <div className="member">
              <img src="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/wamiq (1).jpg" alt="" />
              <p className="con">Member 1</p>
            </div>
            <div className="member">
              <img src="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/wamiq (1).jpg" alt="" />
              <p className="con">Member 1</p>
            </div>
            <div className="member">
              <img src="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/wamiq (1).jpg" alt="" />
              <p className="con">Member 1</p>
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
