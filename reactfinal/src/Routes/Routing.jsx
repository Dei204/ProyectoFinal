import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Registro from '../Pages/Registro'
import Home from '../Pages/Home'
import Productos from '../Pages/Productos'
import Nosotros from '../Pages/Nosotros'
import Contacto from '../Pages/Contacto'

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home/>}/> 
                <Route path="/Login" element={<Login/>}/>
                <Route path="/Registro" element={<Registro/>}/>
                <Route path="/Productos" element={<Productos/>}/>
                <Route path="/Nosotros" element={<Nosotros/>}/>
                <Route path='/Contacto' element={<Contacto/>}/>
            </Routes>
        </Router>
    )
}

export default Routing;