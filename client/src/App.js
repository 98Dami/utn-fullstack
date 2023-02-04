import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {Route, Routes} from 'react-router-dom'
import Us from "./pages/Us";
import Contact from "./pages/Contact";
import axios from 'axios'
import { useEffect, useState } from "react";


function App() {

  const [logged, setLogged] = useState(false)

  useEffect(()=>{
    axios.post('http://localhost:3001/verifytoken',{token:localStorage.getItem('auth-token')})
      .then(res=>{
        if(res.data.username){
          setLogged(res.data.username)
        }
      })
  },[logged])

  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
      </head>
      <NavBar logged={logged} setLogged={setLogged} />
      <div className="">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login logged={logged} setLogged={setLogged}/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/us' element={<Us/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
