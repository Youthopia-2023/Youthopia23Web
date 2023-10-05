import "./About.css";
import youthopia from "../../assets/Youthopia.svg";
import AboutUsImgBox from "../../components/AboutUsImgBox/AboutUsImgBox";
import varchas from "../../assets/aboutImg/Vachaspati.jpg"
import shashank from "../../assets/aboutImg/Shashank.jpg"
import sanskar from "../../assets/aboutImg/Sanskar.png"
import soumya from "../../assets/aboutImg/Soumya.jpg"
import aryan from "../../assets/aboutImg/Aryan_Rastogi.jpg"
import sourab from "../../assets/aboutImg/sourabh singh.jpeg"
import priyanshi from "../../assets/aboutImg/Priyanshi.jpg"
import jatin from "../../assets/aboutImg/Jatin Sharma.jpg"
import vipul from "../../assets/aboutImg/Vipul.png"
import akshat from "../../assets/aboutImg/akshat dabral.jpg"
import anubhav from "../../assets/aboutImg/Anubhav Kashyap.jpg"
import nehal from "../../assets/aboutImg/nehal.jpg"
import gladson from "../../assets/aboutImg/Gladson.jpg"
import kushagra from "../../assets/aboutImg/kushagra.jpg"
import andrew from "../../assets/aboutImg/andrew.jpg"
import bist from "../../assets/aboutImg/Manasvi Bisht.jpg"
import wamiq from "../../assets/aboutImg/wamiq.jpg"
import divyanshi from "../../assets/aboutImg/divyanshi.jpg"
import armaan from "../../assets/aboutImg/Armaan.jpg"
import vaishnavi from "../../assets/aboutImg/vaishnavi.jpg"
import shrishti from "../../assets/aboutImg/Srishti. Jpg.jpg"
import danish from "../../assets/aboutImg/Danish Siddiqui .jpg"
import sameer from "../../assets/aboutImg/sameer.jpg"
import aman from "../../assets/aboutImg/Aman_Casual_Photograph.jpg"
import avantika from "../../assets/aboutImg/avantika.jpg"
import devishree from "../../assets/aboutImg/devishree.jpg";
import maanav from "../../assets/aboutImg/Maanav_Aryan.jpg"
import medha from "../../assets/aboutImg/medha.jpg"
import som from "../../assets/aboutImg/som kartikey.jpg"
import anesha from "../../assets/aboutImg/anesha.jpg"
import amit from "../../assets/aboutImg/amit.jpg"
import vidit from "../../assets/aboutImg/vidit.jpg"
import pradhyum from "../../assets/aboutImg/pradhyum.jpg"
import rudrika from "../../assets/aboutImg/rudrika.jpg"
import mallika from "../../assets/aboutImg/Mallika-Agarwal .jpg"
import rahul from "../../assets/aboutImg/rahul.jpg"
import shriya from "../../assets/aboutImg/shriya.jpg"
import aamir from "../../assets/aboutImg/aamir.jpg"
import prashant from "../../assets/aboutImg/prashant ranjan.jpg"
import shubhangi from "../../assets/aboutImg/Shubhangi.jpg"
import ekta from "../../assets/aboutImg/ekta.jpg"
import tashu from "../../assets/aboutImg/tashu.jpg"
import harshit from "../../assets/aboutImg/Harshit Gupta.jpg"
import harshitm from "../../assets/aboutImg/harshit munjal.jpg"
import aayushi from "../../assets/aboutImg/aayushi.jpg"
import tanul from "../../assets/aboutImg/Tanul Khare.jpg"
import shoib from "../../assets/aboutImg/shoaib_ali_1302-20211120-0001.jpg"
import prashantm from "../../assets/aboutImg/Prashant_Mishra.jpg"
import shreya from "../../assets/aboutImg/Shreyaa.jpg"
import manish from "../../assets/aboutImg/Manish Adhikari.jpg"
import adit from "../../assets/aboutImg/Adit.jpg"
import ayushi from "../../assets/aboutImg/ayushi kumar.jpg"
import tanishq from "../../assets/aboutImg/Tanishq .jpg"


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
            <AboutUsImgBox img={wamiq} name={'Wamiq Khan'} />
            <AboutUsImgBox img={varchas} name={'Vachaspati Kumar Mishra'}/>
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

      <div className="about-container-2">
        <div className="box-2">
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

      <div className="about-container-3">
        <div className="box-3">
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

      <div className="about-container-4">
        <div className="box-4">
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

      <div className="about-container-6">
        <div className="box-6">
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

      <div className="about-container-7">
        <div className="box-7">
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
            <AboutUsImgBox img={sanskar} name={"Sanskar Saxena"}/>
            <AboutUsImgBox img={shashank} name={"Shashank Rawat"}/>
            <AboutUsImgBox img={manish} name={'Manish Adhikari'} />
          </div>
        </div>
      </div>

      <div className="about-container-8">
        <div className="box-8">
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
    </>
  );
}

export default About;
