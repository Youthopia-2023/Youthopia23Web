import "./AboutUsImgBox.css";

function AboutUsImgBox(props) {
  return (
    <div className="convenor">
      <div className="img-box">
        <img src={props.img} alt="" />
      </div>
      <p>{props.name}</p>
      <p>{props.phone}</p>
    </div>
  );
}

export default AboutUsImgBox;

