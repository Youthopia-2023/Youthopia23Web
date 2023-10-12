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
                <AboutUsImgBox img={wamiq} name={'Wamiq Khan'} />
                <AboutUsImgBox img={varchas} name={'Vachaspati Kumar Mishra'} />
              </div>
              <div className="sub-hd">
                <p>Co-Convenor</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={soumya} name={'Soumya Nilay'} />
                <AboutUsImgBox img={aryan} name={'Aryan Rastogi'} />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Organising</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={priyanshi} name={'Priyanshi Kansal'} />
                <AboutUsImgBox img={sourab} name={'Saurabh Kumar Singh'} />
              </div>
              <div className="sub-hd">
                <p>Event Management</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={jatin} name={'Jatin Sharma'} />
                <AboutUsImgBox img={vipul} name={'Vipul Saxena'} />
                <AboutUsImgBox img={akshat} name={'Akshat Dabral'} />
                <AboutUsImgBox img={anubhav} name={'Anubhav Kashyap'} />
              </div>
              <div className="sub-hd">
                <p>Cultural</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={nehal} name={'Nehal Nagarkoti'} />
                <AboutUsImgBox img={kushagra} name={'Kushagra Nigam'} />
                <AboutUsImgBox img={gladson} name={'Gladson Biju Thomas'} />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Singing</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={andrew} name={'Andrew Joseph'} />
                <AboutUsImgBox img={divyanshi} name={'Divyanshi'} />
              </div>
              <div className="sub-hd">
                <p>Dancing</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={armaan} name={'Armaanjot Singh'} />
                <AboutUsImgBox img={vaishnavi} name={'Vaishnavi'} />
                <AboutUsImgBox img={shrishti} name={'Shrishti Panwar'} />
              </div>
              <div className="sub-hd">
                <p>Fashionista</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={bist} name={'Manasvi Bist'} />
                <AboutUsImgBox img={danish} name={'Danish Siddiqui'} />
                <AboutUsImgBox img={sameer} name={'Sameer Patel'} />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>PR/Publicity</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={aman} name={'Aman Kumar'} />
                <AboutUsImgBox img={avantika} name={'Avantika Rajput'} />
                <AboutUsImgBox img={devishree} name={'Devishree Rana'} />
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={maanav} name={'Maanav Aryan'} />
                <AboutUsImgBox img={medha} name={'Medha Tiwari'} />
              </div>
              <div className="sub-hd">
                <p>Sound & Lightning</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={som} name={'S Kartikye'} />
                <AboutUsImgBox img={karan} name={"Karan Singh"} />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Photography & Videography</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={amit} name={'Amit Nautiyal'} />
                <AboutUsImgBox img={vidit} name={'Vidit Sharma'} />
                <AboutUsImgBox img={pradhyum} name={'Pradumn Kala'} />
                <AboutUsImgBox img={anesha} name={'Anusha Malvyia'} />
              </div>
              <div className="sub-hd">
                <p>Literary & Theater</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={rudrika} name={'Rudrika Singh'} />
                <AboutUsImgBox img={mallika} name={'Mallika Agarwal'} />
              </div>
              <div className="sub-hd">
                <p>Informal</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={rahul} name={'Rahul Adhikari'} />
                <AboutUsImgBox img={aamir} name={'Aamir Qaisheer'} />
                <AboutUsImgBox img={shriya} name={'Shriya Shrivastava'} />
                <AboutUsImgBox img={prashant} name={'Prashant Rajan'} />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Fine Arts</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={tashu} name={'Tashu Mittal'} />
                <AboutUsImgBox img={shubhangi} name={'Shubhangi Sharma'} />
              </div>
              <div className="sub-hd">
                <p>Design</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={harshit} name={'Harshit Gupta'} />
                <AboutUsImgBox img={ekta} name={'Ekta Soni'} />
              </div>
              <div className="sub-hd">
                <p>Sponsor</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={aayushi} name={'Aayushi Kaushik'} />
                <AboutUsImgBox img={harshitm} name={'Harshit Munjal'} />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Content & Creative Writing</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={tanul} name={'Tanul Khare'} />
                <AboutUsImgBox img={shoib} name={'Shoib Ali'} />
              </div>
              <div className="sub-hd">
                <p>Anchoring</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={prashantm} name={'Prashant Mishra'} />
                <AboutUsImgBox img={shreya} name={'Shreya Malik'} />
              </div>
              <div className="sub-hd">
                <p>Technical</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={sanskar} name={"Sanskar Saxena"} />
                <AboutUsImgBox img={shashank} name={"Shashank Rawat"} />
                <AboutUsImgBox img={manish} name={'Manish Adhikari'} />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Lan Gaming</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img={adit} name={'Adit Vaid'} />
                <AboutUsImgBox img={ayushi} name={'Ayushi Kumar'} />
                <AboutUsImgBox img={tanishq} name={'Tanishq Singh'} />
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
