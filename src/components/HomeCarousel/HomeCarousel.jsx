import CarouselCard from "../CarouselCard/CarouselCard"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import swipe from "../../assets/swipeIcon.png"

import "./HomeCarousel.css"

const HomeCarousel = () => {
    return (
        <div className="homeCarousel">
            <div className="topBar">
                <div className="topBarLeft">Top Events</div>
                <div className="topBarRight">Register Now</div>
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
                        <div className="CarouselCard"></div>
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