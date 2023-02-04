import Carousel from 'react-bootstrap/Carousel';
// import Calistenia from "../img/ImgActivities/Calistenia.jpg";
// import Crossfit from "../img/ImgActivities/CROSSFIT.jpg";
// import Funcional from "../img/ImgActivities/FUNCIONAL.jpg";
import '../styles/carousel.css'

function CarouselFadeExample() {
  return (
    <section id="activities">
        <div className='carousel-container'>
        <Carousel fade>
        <Carousel.Item>
          <img
            className="c-image"
            src="https://uswa.nl/app/uploads/calisthenics-1920x1080.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Calisthenics</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="c-image"
            src="https://www.snapfitness.com/assets/HeaderBackgroundImages/a3bfe0f965/FunctionalTrainingBlogheader.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Functional</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="c-image"
            src="https://phantom-marca.unidadeditorial.es/de052f5e16cc7ad78960e50136dd9535/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/08/16310868187831.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Crossfit</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </section>
  );
}

export default CarouselFadeExample;