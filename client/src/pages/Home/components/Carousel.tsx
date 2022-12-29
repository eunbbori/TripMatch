import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselStyle from "./CarouselStyle";
import { Link } from "react-router-dom";

const slide = [
  "https://res.cloudinary.com/dk9scwone/image/upload/v1671965858/001_oh2732.png",
  "https://res.cloudinary.com/dk9scwone/image/upload/v1671965859/002_p0rf6a.png",
  "https://res.cloudinary.com/dk9scwone/image/upload/v1671965858/003_sxjpc3.png",
];

const Carousel = () => {
  const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <CarouselStyle className="carousel">
      <Slider {...setting}>
        {slide.map((item, idx) => {
          return (
            <div key={idx}>
              <Link to={idx === 0 ? "/match" : idx === 1 ? "/notice" : "/free"}>
                <img src={item} />
              </Link>
            </div>
          );
        })}
      </Slider>
    </CarouselStyle>
  );
};

export default Carousel;
