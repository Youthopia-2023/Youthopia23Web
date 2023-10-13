import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./About.css";
import youthopia from "../../assets/Youthopia.svg";
import AboutUsImgBox from "../../components/AboutUsImgBox/AboutUsImgBox";
import varchas from "../../assets/aboutImg/Vachaspati.png"
import shashank from "../../assets/aboutImg/Shashank.png"
import sanskar from "../../assets/aboutImg/Sanskar.png"
import soumya from "../../assets/aboutImg/Soumya.png"
import aryan from "../../assets/aboutImg/Aryan_Rastogi.png"
import sourab from "../../assets/aboutImg/sourabh singh.png"
import priyanshi from "../../assets/aboutImg/Priyanshi.png"
import jatin from "../../assets/aboutImg/Jatin Sharma.png"
import vipul from "../../assets/aboutImg/Vipul.png"
import akshat from "../../assets/aboutImg/akshat dabral.png"
import anubhav from "../../assets/aboutImg/Anubhav Kashyap.png"
import nehal from "../../assets/aboutImg/nehal.png"
import gladson from "../../assets/aboutImg/Gladson.png"
import kushagra from "../../assets/aboutImg/kushagra.png"
import andrew from "../../assets/aboutImg/andrew.png"
import bist from "../../assets/aboutImg/Manasvi Bisht.png"
import wamiq from "../../assets/aboutImg/wamiq.png"
import divyanshi from "../../assets/aboutImg/divyanshi.png"
import armaan from "../../assets/aboutImg/Armaan.png"
import vaishnavi from "../../assets/aboutImg/vaishnavi.png"
import shrishti from "../../assets/aboutImg/Srishti. Jpg.png"
import danish from "../../assets/aboutImg/Danish Siddiqui .png"
import sameer from "../../assets/aboutImg/sameer.png"
import aman from "../../assets/aboutImg/Aman_Casual_Photograph.png"
import avantika from "../../assets/aboutImg/avantika.png"
import devishree from "../../assets/aboutImg/devishree.png";
import maanav from "../../assets/aboutImg/Maanav_Aryan.png"
import medha from "../../assets/aboutImg/medha.png"
import som from "../../assets/aboutImg/som kartikey.png"
import anesha from "../../assets/aboutImg/anesha.png"
import amit from "../../assets/aboutImg/amit.png"
import vidit from "../../assets/aboutImg/vidit.png"
import pradhyum from "../../assets/aboutImg/pradhyum.png"
import rudrika from "../../assets/aboutImg/rudrika.png"
import mallika from "../../assets/aboutImg/Mallika-Agarwal .png"
import rahul from "../../assets/aboutImg/rahul.png"
import shriya from "../../assets/aboutImg/shriya.png"
import aamir from "../../assets/aboutImg/aamir.png"
import prashant from "../../assets/aboutImg/prashant ranjan.png"
import shubhangi from "../../assets/aboutImg/Shubhangi.png"
import ekta from "../../assets/aboutImg/ekta.png"
import tashu from "../../assets/aboutImg/tashu.png"
import harshit from "../../assets/aboutImg/Harshit Gupta.png"
import harshitm from "../../assets/aboutImg/harshit munjal.png"
import aayushi from "../../assets/aboutImg/aayushi.png"
import tanul from "../../assets/aboutImg/Tanul Khare.png"
import shoib from "../../assets/aboutImg/shoaib_ali_1302-20211120-0001.png"
import prashantm from "../../assets/aboutImg/Prashant_Mishra.png"
import shreya from "../../assets/aboutImg/Shreyaa.png"
import manish from "../../assets/aboutImg/Manish Adhikari.png"
import adit from "../../assets/aboutImg/Adit.png"
import ayushi from "../../assets/aboutImg/ayushi kumar.png"
import tanishq from "../../assets/aboutImg/Tanishq .png"
import karan from "../../assets/aboutImg/karan.png"


function About() {
  return (
    <div className="about">
      <Navbar />
      <div className="mainBody">
        <div className="innerDiv">
          <div className="about-container">
            <div className="youthopia-logo">
              <img src={youthopia} alt="youthopia"></img>
            </div>
            <div className="heading">
              <p>MEET OUR TEAM</p>
            </div>
            <div className="box">
              <div className="sub-hd">
                <p>Convenor</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={wamiq} name={'Wamiq Khan'} role={'(Convenor)'} />
                <AboutUsImgBox img={varchas} name={'Vachaspati Kumar Mishra'} role={'(Convenor)'} />
              </div>
              <div className="sub-hd">
                <p>Co-Convenor</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={soumya} name={'Soumya Nilay'} role={'(Co-Convenor)'} />
                <AboutUsImgBox img={aryan} name={'Aryan Rastogi'} role={'(Co-Convenor)'} />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Organising</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={priyanshi} name={'Priyanshi Kansal'} role={'(Scheduling & Registration)'} />
                <AboutUsImgBox img={sourab} name={'Saurabh Kumar Singh'} role={'(Battle Of Bands)'}/>
              </div>
              <div className="sub-hd">
                <p>Event Management</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={jatin} name={'Jatin Sharma'} role={'(Event Management Head)'} />
                <AboutUsImgBox img={vipul} name={'Vipul Saxena'} role={'(Event Management Head)'} />
                <AboutUsImgBox img={akshat} name={'Akshat Dabral'} role={'(Stage Management Head)'} />
                <AboutUsImgBox img={anubhav} name={'Anubhav Kashyap'} role={'(Stage Management Head)'} />
              </div>
              <div className="sub-hd">
                <p>Cultural</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={nehal} name={'Nehal Nagarkoti'} role={'(Cultural Head)'} />
                <AboutUsImgBox img={kushagra} name={'Kushagra Nigam'} role={'(Cultural Head)'} />
                <AboutUsImgBox img={gladson} name={'Gladson Biju Thomas'} role={'(Cultural Head)'} />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Singing</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={andrew} name={'Andrew Joseph'} role={'(Singing Head)'}/>
                <AboutUsImgBox img={divyanshi} name={'Divyanshi'} role={'(Singing Head)'}/>
              </div>
              <div className="sub-hd">
                <p>Dancing</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={armaan} name={'Armaanjot Singh'} role={'(Dancing Head)'} />
                <AboutUsImgBox img={vaishnavi} name={'Vaishnavi'} role={'(Dancing Head)'} />
                <AboutUsImgBox img={shrishti} name={'Shrishti Panwar'} role={'(Dancing Head)'} />
              </div>
              <div className="sub-hd">
                <p>Fashionista</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={bist} name={'Manasvi Bist'} role={'(Fashionista Head)'} />
                <AboutUsImgBox img={danish} name={'Danish Siddiqui'} role={'(Fashionista Head)'} />
                <AboutUsImgBox img={sameer} name={'Sameer Patel'} role={'(Fashionista Head)'} />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>PR/Publicity</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={aman} name={'Aman Kumar'} role={'(External PR Head)'} />
                <AboutUsImgBox img={avantika} name={'Avantika Rajput'} role={'(External PR Head)'} />
                <AboutUsImgBox img={devishree} name={'Devishree Rana'} role={'(External PR Head)'} />
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={maanav} name={'Maanav Aryan'} role={'(Internal PR Head)'} />
                <AboutUsImgBox img={medha} name={'Medha Tiwari'} role={'(Internal PR Head)'} />
              </div>
              <div className="sub-hd">
                <p>Sound & Lightning</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={som} name={'S Kartikye'} role={'(Sound & Lightning Head)'} />
                <AboutUsImgBox img={karan} name={"Karan Singh"} role={'(Sound & Lightning Head)'} />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Photography & Videography</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={amit} name={'Amit Nautiyal'} role={'(Photography & Videography Head)'} />
                <AboutUsImgBox img={vidit} name={'Vidit Sharma'} role={'(Photography & Videography Head)'} />
                <AboutUsImgBox img={pradhyum} name={'Pradumn Kala'} role={'(Photography & Videography Head)'} />
                <AboutUsImgBox img={anesha} name={'Anusha Malvyia'} role={'(Photography & Videography Head)'} />
              </div>
              <div className="sub-hd">
                <p>Literary & Theater</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={rudrika} name={'Rudrika Singh'} role={'(Literary & Theater Head)'}/>
                <AboutUsImgBox img={mallika} name={'Mallika Agarwal'} role={'(Literary & Theater Head)'}/>
              </div>
              <div className="sub-hd">
                <p>Informal</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={rahul} name={'Rahul Adhikari'} role={'(Informal Head)'}/>
                <AboutUsImgBox img={aamir} name={'Aamir Qaisheer'} role={'(Informal Head)'}/>
                <AboutUsImgBox img={shriya} name={'Shriya Shrivastava'} role={'(Informal Head)'}/>
                <AboutUsImgBox img={prashant} name={'Prashant Rajan'} role={'(Informal Head)'}/>
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Fine Arts</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={tashu} name={'Tashu Mittal'} role={'(Fine Arts Head)'} />
                <AboutUsImgBox img={shubhangi} name={'Shubhangi Sharma'} role={'(Fine Arts Head)'} />
              </div>
              <div className="sub-hd">
                <p>Design</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={harshit} name={'Harshit Gupta'} role={'(Design Head)'} />
                <AboutUsImgBox img={ekta} name={'Ekta Soni'} role={'(Design Head)'} />
              </div>
              <div className="sub-hd">
                <p>Sponsor</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={aayushi} name={'Aayushi Kaushik'} role={'(Sponsorship Head)'} />
                <AboutUsImgBox img={harshitm} name={'Harshit Munjal'} role={'(Sponsorship Head)'} />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Content & Creative Writing</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={tanul} name={'Tanul Khare'} role={'(Content & Creative Writing Head)'} />
                <AboutUsImgBox img={shoib} name={'Shoib Ali'} role={'(Content & Creative Writing Head)'} />
              </div>
              <div className="sub-hd">
                <p>Anchoring</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={prashantm} name={'Prashant Mishra'} role={'(Anchoring Head)'} />
                <AboutUsImgBox img={shreya} name={'Shreya Malik'} role={'(Anchoring Head)'} />
              </div>
              <div className="sub-hd">
                <p>Technical</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={sanskar} name={"Sanskar Saxena"} role={'(Technical Head)'} />
                <AboutUsImgBox img={shashank} name={"Shashank Rawat"} role={'(Technical Head)'} />
                <AboutUsImgBox img={manish} name={'Manish Adhikari'} role={'(Technical Head)'} />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Lan Gaming</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={adit} name={'Adit Vaid'} role={'(Lan Gaming Head)'} />
                <AboutUsImgBox img={ayushi} name={'Ayushi Kumar'} role={'(Lan Gaming Head)'} />
                <AboutUsImgBox img={tanishq} name={'Tanishq Singh'} role={'(Lan Gaming Head)'} />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
