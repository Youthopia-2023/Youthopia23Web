import "./About.css";
import youthopia from "../../assets/Youthopia.svg";
import AboutUsImgBox from "../../components/AboutUsImgBox/AboutUsImgBox";
import varchas from "../../assets/aboutImg/Vachaspati.jpg"

function About() {
  return (
    <>
      <div className="about-container-1">
        <div className="youthopia-logo">
          <img src={youthopia} alt="youthopia"></img>
        </div>
        <div className="heading">
          <p>MEET OUR TEAM</p>
        </div>
        <div className="box-1">
          <div className="sub-hd">
            <p>Convenor</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox img={varchas} name={"Vachaspati"}/>
          </div>
          <div className="sub-hd">
            <p>Co-Convenor</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
        </div>
      </div>

      <div className="about-container-2">
        <div className="box-2">
          <div className="sub-hd">
            <p>Organising</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
          <div className="sub-hd">
            <p>Event Management</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
          <div className="sub-hd">
            <p>Cultural</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
        </div>
      </div>

      <div className="about-container-3">
        <div className="box-3">
          <div className="sub-hd">
            <p>Singing</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
          <div className="sub-hd">
            <p>Dancing</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
          <div className="sub-hd">
            <p>Fashionista</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
        </div>
      </div>

      <div className="about-container-4">
        <div className="box-4">
          <div className="sub-hd">
            <p>PR/Publicity</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
          <div className="sub-hd">
            <p>Sound & Lightning</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
        </div>
      </div>

      <div className="about-container-5">
        <div className="box-5">
          <div className="sub-hd">
            <p>Photography & Videography</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
          <div className="sub-hd">
            <p>Literary & Theater</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
          <div className="sub-hd">
            <p>Informal</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
        </div>
      </div>

      <div className="about-container-6">
        <div className="box-6">
          <div className="sub-hd">
            <p>Fine Arts</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
          <div className="sub-hd">
            <p>Design</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
          <div className="sub-hd">
            <p>Sponsor</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
        </div>
      </div>

      <div className="about-container-7">
        <div className="box-7">
        <div className="sub-hd">
            <p>Content & Creative Writing</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
          <div className="sub-hd">
            <p>Anchoring</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
          <div className="sub-hd">
            <p>Technical</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
        </div>
      </div>

      <div className="about-container-8">
        <div className="box-8">
        <div className="sub-hd">
            <p>Lan Gaming</p>
          </div>
          <div className="convenors-cnt">
            <AboutUsImgBox />
            <AboutUsImgBox />
            <AboutUsImgBox />
            <AboutUsImgBox />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
