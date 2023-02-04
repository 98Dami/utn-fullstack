import React from "react";
import "../styles/footer.css";
import '../img/logosrrss/logos/fonts.css';
import logo from "../img/logo.png";
import {Link} from 'react-router-dom'
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="pie-pagina" id="FOOTER">
        <div className="grupo-1">
            <div className="box">
              <figure>
                <img className="logoFooter" src={logo} alt="Logo" />
              </figure>
            </div>
            
            <div className="box">
              <h2>CONTACT</h2>
              <ContactForm/>
            </div>
            
            <div className="box">
              <h2>FOLLOW US</h2>
              <div className="red-social espacio">
                <a href="https://www.facebook.com/" rel="noreferrer" target={"_blank"} class="icon icon-facebook">
                </a>
                <a href="https://www.instagram.com/" rel="noreferrer" target={"_blank"} class="icon icon-instagram">
                </a>
                <a href="https://twitter.com/" rel="noreferrer" target={"_blank"} class="icon icon-twitter">
                </a>
                <a href="https://www.youtube.com/" rel="noreferrer" target={"_blank"} class="icon icon-youtube">
                </a>
              </div>
              <div className="miniNav">
                <h2>BROWSE</h2>
                <Link to="/contact">Contact</Link>
                <Link to="/us">About Us</Link>
              </div>
            </div>
        </div>

      <div className="grupo-2">
        <small>&copy; 2023 - Todos los Derechos Reservados.</small>
      </div>
    </footer>
  );
};

export default Footer;
