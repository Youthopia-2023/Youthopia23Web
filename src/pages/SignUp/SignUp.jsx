import "./SignUp.css"
import { useRef, useState } from "react";
import Youthopia from "../../assets/youthopia.png";
import "./SignUp.css";
import star1 from "../../assets/Star 4.svg";
import star2 from "../../assets/Group 6647.svg";
import star3 from "../../assets/Star 4.svg";
import line from "../../assets/Line 4.svg";
import ellipse from "../../assets/Ellipse.svg";
// import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { AiOutlineCamera } from "react-icons/ai";
function SignUp() {
    const [file, setFile] = useState();
    const handlephotoOnchange = (e) => {
        setFileName(e.target.files[0].name);
        setFile(e.target.files[0]);
        console.log(file);
    };
    const [checked, setChecked] = useState(false);
    const handleCheckbox = () => {
        setChecked(!checked);
        console.log(checked)
    };
    const [college, setCollege] = useState("");
    const handleCollegeOnChange = (e) => {
        setCollege(e.target.value);
        console.log(college);
    }
    const [fileName, setFileName] = useState("Identity proof (Aadhar, DL, etc)");
    const ref = useRef(null);

    const handleCamera = () => {
        ref.current.click();
    };
    return (
        <div>
            <div className="signUp-container">
                <img className="youthopia-logo" src={Youthopia} />
                <img src={star1} alt="star-1" className="star-1Signup" />
                <img src={star2} alt="star-2" className="star-2Signup" />
                <img src={star3} alt="star-3" className="star-3Signup" />
                <img src={line} alt="star-3" className="line-4Signup" />
                <img src={ellipse} alt="star-3" className="ellipseSignup" />
                <div className="signup-form">
                    <div className="nameRow">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="email">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="checkbox-signup">
                        <input type="checkbox" onChange={handleCheckbox} />
                        <p>Are you from DIT University?</p>
                    </div>
                    {
                        !checked ? (
                            <>

                                <div className="college">
                                    <input type="text" value={college} placeholder="College Name" onChange={handleCollegeOnChange} />
                                </div>
                                <div className="identityPhoto">
                                    <input type="file" onChange={handlephotoOnchange} ref={ref} className="choosefileHidden" name="" title="ID card" />
                                    <div>{fileName}</div>
                                    <AiOutlineCamera onClick={handleCamera}/>
                                </div>
                                <div className="idNumber">
                                    <input type="text" placeholder="Identity proof Number (Aadhar, DL, etc)" />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="college">
                                    {/* <input type="text" value={"DIT University"} /> */}
                                    <div className="dittext">DIT University</div>
                                </div>
                                <div className="sapId">
                                    <input type="text" placeholder="SAP ID" />
                                </div>
                            </>
                        )
                    }
                    <div className="moreDetails">
                        <input type="text" placeholder="Branch" />
                        <input type="text" placeholder="Year" />
                    </div>
                    <div className="password">
                        <input type="password" placeholder="Password" />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignUp
