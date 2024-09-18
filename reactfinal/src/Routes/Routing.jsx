import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from '../Pages/Login'
import Registro from '../Pages/Registro'
import Home from '../Pages/Home'
import Productos from '../Pages/Productos'



const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} /> 
                <Route path="/Login" element={<Login/>} />
                <Route path="/Registro" element={<Registro/>} />
                <Route path="/Productos" element={<Productos/>} />
            </Routes>
        </Router>
    )
}

export default Routing;