import CarouselCard from "../CarouselCard/CarouselCard"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import swipe from "../../assets/swipeIcon.png"

import "./HomeCarousel.css"
import { baseUrl } from "../../url";
import { useEffect, useState } from "react";
import axios from "axios";
const HomeCarousel = () => {
     const [imgUrls, setImgUrls] = useState([]);

     const fetchdata = async () => {
       axios.get(`${baseUrl}/sponsor/getlandingpagedetails`).then((res) => {
         setImgUrls(res.data?.details[0].carousel_img);
         console.log(imgUrls);
       });
     };

     useEffect(() => {
       fetchdata();
     }, []);
    return (
        <div className="homeCarousel">
            <div className="topBar">
                <div className="topBarLeft">Top Events</div>
                <div className="topBarRight">Registration Opening Soon</div>
            </div>
            <div className="carousel">

                <OwlCarousel  loop margin={30} nav autoplay center>
                        {/* <CarouselCard/>
                        <CarouselCard/>
                        <CarouselCard/>
                        <CarouselCard/>
                        <CarouselCard/>
                        <CarouselCard/>
                        <CarouselCard/> */}
                        <div className="CarouselCard">{
                            imgUrls?.map((url, index) => (
                                <img src={url} alt="logo-1" className="sponsor-logo" key={index}/>
                            ))
                        }
                        </div>
                        <div className="CarouselCard"></div>
                        <div className="CarouselCard"></div>
                        <div className="CarouselCard"></div>
                        <div className="CarouselCard"></div>
                        <div className="CarouselCard"></div>
                        <div className="CarouselCard"></div>
                </OwlCarousel>
            </div>
            <div className="swipe">
                <p>Swipe</p>
                <img src={swipe} alt="" />
            </div>
        </div>
    )
}

export default HomeCarousel