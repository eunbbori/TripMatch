import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselStyle from "./CarouselStyle";

const slide = [
  "https://picsum.photos/3000/500",
  "https://res.cloudinary.com/dk9scwone/image/upload/v1671095095/temporaryLogo_l9x22i.png",
  "https://picsum.photos/3000/600",
];

const Carousel = () => {
  const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <CarouselStyle className="carousel">
      <Slider {...setting}>
        {slide.map((item, idx) => {
          return (
            <div key={idx}>
              <img src={item} />
            </div>
          );
        })}
      </Slider>
    </CarouselStyle>
  );
};

export default Carousel;
