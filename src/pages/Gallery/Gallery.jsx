import "./Gallery.css"
import gimage1 from "../../assets/gridimg1.jpg";
import gimage2 from "../../assets/gridimg2.jpg";
const Gallery = () => {
	return (
		<div className="bg-[#0B0A1B] py-10 gallery">
      	<h3 className="heading">A NIGHT TO REMEBER YOUR ENTIRE LIFE </h3>
			<div className="flex flex-col md:flex-row items-center justify-center px-5 md:px-10 w-full">
				{/* First Column Images */}
				<div className="flex flex-col">
					<div className="h-96 flex flex-col">
						{" "}
					
						
					</div>
					<img className="h-96 w-auto mt-10" src={gimage1} alt="galleryImage" />
				</div>

				{/* Second Column Images */}
				<div className="flex flex-col mt-8 md:mt-0 md:ml-10">
					<img className="h-96 w-auto" src={gimage2} alt="galleryImage" />
					<img className="h-96 w-full mt-10" src={gimage1} alt="galleryImage" />
				</div>
			</div>

			<div className="flex flex-col w-full justify-center items-center">
				<div className="max-w-[1269px]">
					{/* Second Row */}
					<div className="px-5 md:px-10 py-10 ">
						<img
							className="h-auto w-full"
							src={gimage2}
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
							src={gimage2}
							alt="galleryImage"
						/>
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage1}
							alt="galleryImage"
						/>
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage2}
							alt="galleryImage"
						/>
					</div>

					<img
						className="w-full h-auto object-contain px-5 md:px-10 mt-10"
						src={gimage1}
						alt="galleryImage"
					/>

					<img
						className="w-full h-auto object-contain px-5 md:px-10 mt-10"
						src={gimage1}
						alt="galleryImage"
					/>
					<img
						className="w-full h-auto object-contain px-5 md:px-10 mt-10"
						src={gimage2}
						alt="galleryImage"
					/>

					<div className="flex flex-col md:flex-row w-full items-center">
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage1}
							alt="galleryImage"
						/>
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage1}
							alt="galleryImage"
						/>
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage1}
							alt="galleryImage"
						/>
					</div>
					<img
						className="w-full h-auto object-contain px-5 md:px-10 mt-10"
						src={gimage2}
						alt="galleryImage"
					/>

					
					<div className="flex flex-col md:flex-row w-full items-center">
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage1}
							alt="galleryImage"
						/>
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage2}
							alt="galleryImage"
						/>
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage1}
							alt="galleryImage"
						/>
					</div>
					
					

					
					<img
						className="w-full h-auto object-contain px-5 md:px-10 mt-10"
						src={gimage2}
						alt="galleryImage"
					/>
					<img
						className="w-full h-auto object-contain px-5 md:px-10 mt-10"
						src={gimage2}
						alt="galleryImage"
					/>
					<div className="flex flex-col md:flex-row w-full items-center">
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage1}
							alt="galleryImage"
						/>
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage1}
							alt="galleryImage"
						/>
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage2}
							alt="galleryImage"
						/>
					</div>
					<img
						className="w-full h-auto object-contain px-5 md:px-10 mt-10"
						src={gimage1}
						alt="galleryImage"
					/>
					<div className="flex flex-col md:flex-row w-full items-center">
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage1}
							alt="galleryImage"
						/>
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage2}
							alt="galleryImage"
						/>
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage2}
							alt="galleryImage"
						/>
					</div>
					<img
						className="w-full h-auto object-contain px-5 md:px-10 mt-10"
						src={gimage1}
						alt="galleryImage"
					/>
					<div className="flex flex-col md:flex-row w-full items-center">
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage2}
							alt="galleryImage"
						/>
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage2}
							alt="galleryImage"
						/>
						<img
							className="py-5 px-5 md:px-10 md:w-1/3 h-30"
							src={gimage1}
							alt="galleryImage"
						/>
					</div>
					
				</div>
			</div>
		</div>
	);
};
export default Gallery;