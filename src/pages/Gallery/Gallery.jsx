import "./Gallery.css"
import logo from "../../assets/Youthopia.svg"
import GH1 from "../../assets/Gallery/GH1.png"
import GH2 from "../../assets/Gallery/GH2.png"
import GH3 from "../../assets/Gallery/GH3.png"
import GH4 from "../../assets/Gallery/GH4.png"
import GH5 from "../../assets/Gallery/GH5.png"
import GS1 from "../../assets/Gallery/GS1.png"
import GS2 from "../../assets/Gallery/GS2.png"
import GS3 from "../../assets/Gallery/GS3.png"
import GS4 from "../../assets/Gallery/GS4.png"
import GV1 from "../../assets/Gallery/GV1.png"

const Gallery = () => {
	return (
		<div className="bg-[#0B0A1B] py-10 gallery">
			      <div className="logo-wrapper">
        <img className='logo' src={logo}></img>
      </div>

      	<h3 className="heading">A NIGHT TO REMEBER YOUR ENTIRE LIFE </h3>
			<div className="flex flex-col md:flex-row items-center justify-center px-5 md:px-10 w-full">
				{/* First Column Images */}
				<div className="flex flex-col">
					<img className=" w-auto h-3/5 mt-10 rounded-2xl m-10" src={GH1} alt="galleryImage" />
				</div>

				

				{/* Second Column Images */}
				
			</div>
			<div className="flex mt-8 md:mt-0 md:ml-10 h-96 justify-center">
						<img className="h-96 mr-10" src={GS1} alt="" />
						<img className="h-96 ml-10" src={GS2} alt="" />
						<img className="h-96 ml-10" src={GS2} alt="" />

				</div>

			<div className="flex flex-col w-full justify-center ">
				<div className="max-w-[1269px]">
					{/* Second Row */}
					<div className="px-5 md:px-10 py-10 ">
						<img
							className="h-auto w-full"
							src={GH2}
							alt="galleryImage"
						/>
					</div>

					{/* Third Row */}
					<h2 className="px-10 pb-10 text-white text-6xl font-bold text-5xl md:text-7xl text-center">
						DO JOIN US FOR THE GRAND EVENT
					</h2>

					<div className="flex flex-col md:flex-row w-full items-center">
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={GH3}
							alt="galleryImage"
						/>
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={GH4}
							alt="galleryImage"
						/>
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={GH5}
							alt="galleryImage"
						/>
					</div>

					<img
						className="w-full h-auto object-contain px-5 md:px-10 mt-10"
						src={GH3}
						alt="galleryImage"
					/>

					<img
						className="w-full h-auto object-contain px-5 md:px-10 mt-10"
						src={GH4}
						alt="galleryImage"
					/>
					<img
						className="w-full h-auto object-contain px-5 md:px-10 mt-10"
						src={GH5}
						alt="galleryImage"
					/>

					
					
				</div>
			</div>
		</div>
	);
};
export default Gallery;