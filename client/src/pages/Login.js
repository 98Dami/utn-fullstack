import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'
import '../styles/login.css'

export default function Login({logged, setLogged}){
    return <section id='login'>
        <LoginForm logged={logged} setLogged={setLogged}/>
        <Footer/>
    </section>
}