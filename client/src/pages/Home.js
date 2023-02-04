import AboutUs from "../components/AboutUs";
import ActivitiesSlider from "../components/ActivitiesSlider";
import Footer from "../components/Footer";
import Suscribete from "../components/Suscribete";
import '../styles.css'
import './../styles/header.css'

export default function Home(){
    return <main id="home">
        <div className="header">
            <div className=""><h1 className="titulo">FULL STACK GYM</h1></div>
            <div className="">
                <h3 className="text">
                "You dream. You plan. You achieve. There will be obstacles. There will be
                skeptics. There will be mistakes. But with hard work, with
                conviction and confidence in yourself and those around you, no
                there are limits." 
                </h3>
                <h3 className="autor">Michael Phelps</h3>
            </div>
        </div>
        <ActivitiesSlider/>
        <AboutUs/>
        <Suscribete/>
        <Footer/>
    </main>
}