import axios from 'axios'
import { useState } from 'react'
import '../styles/contact.css'

export default function ContactForm(){
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage ] = useState('')

    const handleFormSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/contact',{
            name,
            surname,
            email,
            message
        }).then(res=>{
            window.alert(res.data)
        })
    }


    return <div className="form">
            <form onSubmit={handleFormSubmit}>
                <input type="text" value={name} onChange={(e)=>{
                    setName(e.target.value)
                }} name="Name" placeholder="Name" />
                <input type="text" value={surname} onChange={(e)=>{
                    setSurname(e.target.value)
                }} name="Surname" placeholder="Surname" />
                <input type="text" value={email} onChange={(e)=>{
                    setEmail(e.target.value)
                }} name="E-mail" placeholder="E-mail" />
                <textarea value={message} onChange={(e)=>{
                    setMessage(e.target.value)
                }} name="Message" placeholder="Message"></textarea>
                <button>Send</button>
            </form>
        </div>
}