import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <div
      id="arro"
      className="carousel-button-group gap-4"
      style={{ position: "relative" }}
    >
      <button
        className={`currentSlide === 0 ? "disable" : ""  btn-buu`}
        onClick={() => previous()}

      >
        <FaArrowLeft />
      </button>
      <button className="btn2 btn-buu-2"
        onClick={() => goToSlide(currentSlide + 1)}

      >
        {" "}
        <FaArrowRight />
      </button>
    </div>
  );
};
export default ButtonGroup;