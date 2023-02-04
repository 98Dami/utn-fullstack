import React from "react";
import { Link } from "react-router-dom";
import "../styles/suscribete.css";

const Suscribete = () => {
  return (
    <section className="fondo-suscribete">
      <div className="title">
        <h1>SUBSCRIBE TO OUR SERVICES</h1>
      </div>
      <div className="boxes">
          <div className="col borde-columna-suscribete">
              <h4 className="color-ofertas">Free</h4>
              <p className="color-precio">A$R 0,00</p>
              <ul className="color-precio">
                <li>Permanent access to our programmed</li>
                <li>Registration without cost and without card</li>
              </ul>
            <Link to='/contact'><button type="button" class="btn btn-outline-secondary">
              Start NOW!
            </button></Link>
          </div>
          <div className="col borde-columna-suscribete">
            <h4 className="color-ofertas">Monthly</h4>
              <p className="color-precio">A$R 3999,99</p>
              <ul className="color-precio">
                <li>Everything included in the Free service</li>
                <li>Enjoy our variety of Activities</li>
                <li>Cancel whenever you want</li>
              </ul>
            <Link to='/contact'><button type="button" class="btn btn-outline-secondary">
              Start NOW!
            </button></Link>
          </div>
          <div className="col borde-columna-suscribete">
            <h4 className="color-ofertas">Yearly</h4>
              <p className="color-precio">A$R 27999,99</p>
              <ul className="color-precio">
                <li>Everything included in the Free and Monthly Service</li>
                <li>Save up to A$R 20,000</li>
                <li>Cancel whenever you want</li>
              </ul>
            <Link to='/contact'><button type="button" class="btn btn-outline-secondary">
              Start NOW!
            </button></Link>
          </div>
        </div>
    </section>
  );
};

export default Suscribete;
