import "./AboutUsImgBox.css";

function AboutUsImgBox(props) {
  return (
    <div className="convenor">
      <div className="img-box">
        <img src={props.img} alt="" />
      </div>
      <p>{props.name}</p>
    </div>
  );
}

export default AboutUsImgBox;

// import React from 'react';
// import './AboutUsImgBox.css'; // Corrected the import statement

// const AboutUsImgBox = ({ imageUrl, names }) => { // Changed "Names" to "Names" for consistency
//   return (
//     <div className="convenor">
//       <div className="img-box">
//         <img src={imageUrl} alt="Images" />
//       </div>
//       <p>{names}</p>
//     </div>
//   );
// }

// export default AboutUsImgBox;
