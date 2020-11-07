import { Carousel } from 'react-bootstrap';

const CarouselHome: React.FC = () => {
  return (
    <Carousel>
      <Carousel.Item interval={100000}>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/portafolio-c8c78.appspot.com/o/WhatsApp%20Image%202020-02-28%20at%2011.37.41%20AM%20(2).jpeg?alt=media&token=efa2443b-bd3f-45fd-b4e2-887addda81f3"
          alt="First slide"
          height="500px"
        />
        <Carousel.Caption>
          <h3>Imagen 1</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/portafolio-c8c78.appspot.com/o/DSC_3209.JPG?alt=media&token=a4d962e2-b6fd-455a-81d9-fce7eebbb083"
          alt="Third slide"
          height="500px"
        />
        <Carousel.Caption>
          <h3>Imagen 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/portafolio-c8c78.appspot.com/o/DSC_4244.JPG?alt=media&token=8e43554d-2ea8-4312-95ce-4cb3da5af340"
          alt="Third slide"
          height="500px"
        />
        <Carousel.Caption>
          <h3>Imagen 3</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselHome;
