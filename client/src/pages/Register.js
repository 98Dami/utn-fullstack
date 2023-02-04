import Footer from '../components/Footer'
import RegisterForm from '../components/RegisterForm'
import '../styles/login.css'

export default function Register(){
    return <section id='login'>
        <RegisterForm/>
        <Footer/>
    </section>
}