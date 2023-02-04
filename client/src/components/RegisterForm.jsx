import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useState } from 'react'

export default function RegisterForm(){
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    let navigate = useNavigate()

    const handleFormSubmit = async (e)=>{
        e.preventDefault()
        const res = await axios.post('http://localhost:3001/register',{
            name,
            username,
            surname,
            password
        })
        if(!res.data.msg){
            navigate('/')
        }else{
            window.alert(res.data.msg)
        }
    }

    return <div className="login-form-container">
        <form onSubmit={handleFormSubmit}>
            <h2>Register Form</h2>
            <label>Name</label>
            <input type="text" value={name} onChange={(e)=>{
                setName(e.target.value)
            }}/>
            <label>Surname</label>
            <input type="text" value={surname} onChange={(e)=>{
                setSurname(e.target.value)
            }}/>
            <label>Username</label>
            <input type="text" value={username} onChange={(e)=>{
                setUsername(e.target.value)
            }}/>
            <label>Password</label>
            <input type="password" value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            <Link to="/login"><span>Already an user? Log in.</span></Link>
            <button>Register</button>
        </form>
    </div>
}
