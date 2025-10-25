import { Container, Nav, Navbar} from "react-bootstrap";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import Navbars from "./Navbars.jsx";
import '../estilos/Header.css';


export default function Header () {


    return (
            <header className="bg-dark py-4 shadow-sm w-100 mb-4">
                <Navbars/>
            </header>

    )

}