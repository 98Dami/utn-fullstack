import {Link} from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export default function LoginForm({logged, setLogged}){
    const [username, setUsername] = useState('') 
    const [password, setPassword] = useState('') 
    let navigate = useNavigate()

    const handleFormSubmit = async (e)=>{
        e.preventDefault()
        const res = await axios.post('http://localhost:3001/login',{
            username,
            password
        })
        console.log(res)
        if(!res.data.msg){
            localStorage.setItem('auth-token', res.data.token)
            setLogged(username)
            navigate('/')
        }else{
            window.alert(res.data.msg)
        }
    }
    
    return <div className="login-form-container">
        <form onSubmit={handleFormSubmit}>
            <h2>Login Form</h2>
            <label>Username</label>
            <input value={username} onChange={(e)=>{
                setUsername(e.target.value)
            }} type="text"/>
            <label>Password</label>
            <input value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }} type="password"/>
            <Link to="/register"><span>Not an user? Create account.</span></Link>
            <button>Login</button>
        </form>
    </div>
}