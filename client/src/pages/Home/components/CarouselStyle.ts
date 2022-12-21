import styled from "styled-components";

const CarouselStyle = styled.div`
  .slick-slider > button:before {
    opacity: 1;
    color: ${(props) => props.theme.color.blue};
  }

  .slick-prev {
    left: 2vw;
    z-index: 24;
  }

  .slick-next {
    right: 2vw;
    z-index: 24;
  }

  .slick-slide {
    width: 100vw;
    height: 20vw;

    img {
      width: 100%;
      height: 20vw;
      object-fit: cover;
    }
  }

  .slick-dots li button:before {
    opacity: 1;
    color: ${(props) => props.theme.color.lightblue};
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: ${(props) => props.theme.color.blue};
  }
`;

export default CarouselStyle;
