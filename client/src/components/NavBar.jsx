import React from 'react';
import '../styles/navbar.css';
import logo from '../img/logo.png';
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function NavBar({logged, setLogged}){
    let navigate = useNavigate()

    return (
        <header className='nav-bar-container'>
            <div class="logo">
                <Link to='/'><img src={logo} alt=""/></Link>
            </div>
            {logged? <h3>Hey! {logged}</h3>: null}
            <input type="checkbox" id="nav_check" hidden/>
            <nav>
                <div class="logo">
                    <Link to='/'><img src={logo} alt=""/></Link>
                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/us">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        {!logged ? <Link to="/login">Login</Link> : <a className='logout-btn' onClick={()=>{
                            localStorage.setItem('auth-token',"")
                            setLogged(false)
                            navigate('/')
                        }}>Log out</a>}
                    </li>
                </ul>
            </nav>
            <label for="nav_check" class="burger">
                <div></div>
                <div></div>
                <div></div>
            </label>
        </header>
        
    )

}