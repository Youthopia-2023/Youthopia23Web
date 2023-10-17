import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./About.css";
import youthopia from "../../assets/Youthopia.svg";
import AboutUsImgBox from "../../components/AboutUsImgBox/AboutUsImgBox";




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
              <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Vachaspati.png"
                  name={"Vachaspati Kumar Mishra"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/wamiq (1).jpg"
                  name={"Wamiq Khan"}
                />
                
              </div>
              <div className="sub-hd">
                {/* <p>Co-Convenor</p> */}
              </div>
              {/* <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Soumya.png"
                  name={"Soumya Nilay"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Aryan_Rastogi.png"
                  name={"Aryan Rastogi"}
                />
              </div> */}
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Organising</p>
              </div>
              <div className="convenors-cnt">
                {/* <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Priyanshi.png"
                  name={"Priyanshi Kansal"}
                /> */}
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/sourabh singh.jpg"
                  name={"Saurabh Kumar Singh"}
                />
              </div>
              <div className="sub-hd">
                <p>Event Management</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox img="" name={"Jatin Sharma"} />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Vipul.jpg"
                  name={"Vipul Saxena"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/akshat dabral.png"
                  name={"Akshat Dabral"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Anubhav Kashyap.jpg"
                  name={"Anubhav Kashyap"}
                />
              </div>
              <div className="sub-hd">
                <p>Cultural</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/nehal.jpg"
                  name={"Nehal Nagarkoti"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/kushagra.jpg"
                  name={"Kushagra Nigam"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Gladson.jpg"
                  name={"Gladson Biju Thomas"}
                />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Singing</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/andrew.jpg"
                  name={"Andrew Joseph"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/divyanshi.jpg"
                  name={"Divyanshi"}
                />
              </div>
              <div className="sub-hd">
                <p>Dancing</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Armaan.jpg"
                  name={"Armaanjot Singh"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/vaishnavi (1).jpg"
                  name={"Vaishnavi"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Srishti. Jpg.jpg"
                  name={"Shrishti Panwar"}
                />
              </div>
              <div className="sub-hd">
                <p>Fashionista</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Manasvi Bisht.png"
                  name={"Manasvi Bist"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Danish Siddiqui .jpg"
                  name={"Danish Siddiqui"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/sameer.png"
                  name={"Sameer Patel"}
                />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>PR/Publicity</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Aman_Casual_Photograph.jpg"
                  name={"Aman Kumar"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/avantika.png"
                  name={"Avantika Rajput"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/devishree.png"
                  name={"Devishree Rana"}
                />
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Maanav_Aryan.png"
                  name={"Maanav Aryan"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/medha.jpg"
                  name={"Medha Tiwari"}
                />
              </div>
              <div className="sub-hd">
                <p>Sound & Lightning</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/som kartikey.png"
                  name={"S Kartikye"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/karan.jpg"
                  name={"Karan Singh"}
                />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Photography & Videography</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/amit.png"
                  name={"Amit Nautiyal"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/vidit.jpg"
                  name={"Vidit Sharma"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/pradhyum.jpg"
                  name={"Pradumn Kala"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/anesha.jpg"
                  name={"Anusha Malvyia"}
                />
              </div>
              <div className="sub-hd">
                <p>Literary & Theater</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/rudrika.jpg"
                  name={"Rudrika Singh"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Mallika-Agarwal .jpg"
                  name={"Mallika Agarwal"}
                />
              </div>
              <div className="sub-hd">
                <p>Informal</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/rahul.png"
                  name={"Rahul Adhikari"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/aamir.png"
                  name={"Aamir Qaisheer"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/shriya.png"
                  name={"Shriya Shrivastava"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/prashant ranjan.jpg"
                  name={"Prashant Rajan"}
                />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Fine Arts</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/tashu.png"
                  name={"Tashu Mittal"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Shubhangi.png"
                  name={"Shubhangi Sharma"}
                />
              </div>
              <div className="sub-hd">
                <p>Design</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Harshit Gupta.jpg"
                  name={"Harshit Gupta"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/ekta.jpg"
                  name={"Ekta Soni"}
                />
              </div>
              <div className="sub-hd">
                <p>Sponsor</p>
              </div>
              <div className="convenors-cnt">
                {/* <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/aayushi.png"
                  name={"Aayushi Kaushik"}
                /> */}
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/harshit munjal.jpg"
                  name={"Harshit Munjal"}
                />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Content & Creative Writing</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Tanul Khare.png"
                  name={"Tanul Khare"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/shoaib_ali_1302-20211120-0001.png"
                  name={"Shoib Ali"}
                />
              </div>
              <div className="sub-hd">
                <p>Anchoring</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Prashant_Mishra.png"
                  name={"Prashant Mishra"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Shreyaa.jpg"
                  name={"Shreya Malik"}
                />
              </div>
              <div className="sub-hd">
                <p>Technical</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Sanskar.png"
                  name={"Sanskar Saxena"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Shashank.jpg"
                  name={"Shashank Rawat"}
                />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Manish Adhikari.jpg"
                  name={"Manish Adhikari"}
                />
              </div>
            </div>
          </div>

          <div className="about-container">
            <div className="box">
              <div className="sub-hd">
                <p>Lan Gaming</p>
              </div>
              <div className="convenors-cnt">
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Adit.jpg"
                  name={"Adit Vaid"}
                />
                <AboutUsImgBox img="" name={"Ayushi Kumar"} />
                <AboutUsImgBox
                  img="https://youthopiaimageblob.blob.core.windows.net/youthopia-heads/Tanishq .png"
                  name={"Tanishq Singh"}
                />
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
