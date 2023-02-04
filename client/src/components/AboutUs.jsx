import React from "react";
import "../styles/aboutus.css";
import Damian from "../img/fotosnuestras/Damian.jpg";
import Gonzalo from "../img/fotosnuestras/Gonzalo.jpeg";
import Leonel from "../img/fotosnuestras/Leonel.jpeg";

const AboutUs = () => {
  return (
    
    <section className="aboutuscolor aboutus-container" id="ABOUTUS">
      <h2>Coaches</h2>

      <div className="boxes-container">
        <div className="person">
          <h2>Gonzalo Quiroga</h2>
          <img
            src={Gonzalo}
            alt="..."
          />
          <p>
            A paragraph of placeholder text. We're using it here to show the use
            of the clearfix className. We're adding quite a few meaningless
            phrases here to demonstrate how the columns interact here with the
            floated image.
          </p>

          <p>
            As you can see the paragraphs gracefully wrap around the floated
            image. Now imagine how this would look with some actual content in
            here, rather than just this boring placeholder text that goes on and
            on, but actually conveys no tangible information at. It simply takes
            up space and should not really be read.
          </p>
        </div>
        <div className="person">
          <h2>Damian Gomez</h2>
          <img
            src={Damian}
            alt="..."
          />

          <p>
            A paragraph of placeholder text. We're using it here to show the use
            of the clearfix className. We're adding quite a few meaningless
            phrases here to demonstrate how the columns interact here with the
            floated image.
          </p>

          <p>
            As you can see the paragraphs gracefully wrap around the floated
            image. Now imagine how this would look with some actual content in
            here, rather than just this boring placeholder text that goes on and
            on, but actually conveys no tangible information at. It simply takes
            up space and should not really be read.
          </p>
        </div>
        <div className="person">
          <h2>Leonel Ros</h2>
          <img
            src={Leonel}
            alt="..."
          />
          <p>
            A paragraph of placeholder text. We're using it here to show the use
            of the clearfix className. We're adding quite a few meaningless
            phrases here to demonstrate how the columns interact here with the
            floated image.
          </p>
          <p>
            As you can see the paragraphs gracefully wrap around the floated
            image. Now imagine how this would look with some actual content in
            here, rather than just this boring placeholder text that goes on and
            on, but actually conveys no tangible information at. It simply takes
            up space and should not really be read.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
