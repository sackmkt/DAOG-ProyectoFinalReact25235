import { Container, Nav, Navbar, Button} from "react-bootstrap";
import { Navigate, BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import '../estilos/Header.css';

export default function Navbars (){

return (
    <Navbar className="navbar-custom" bg="transparent" variant="dark" expand="lg" color="white" >
                    <Container>
                        <Navbar.Brand href="./" style={{fontSize:"30px", color:"white", fontWeight:"bold"}}>
                        Pre-entrega
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav"> 
                        <Nav className="me-auto">
                            <Nav.Link href="./">Inicio</Nav.Link>
                            <Nav.Link href="./">Productos</Nav.Link>
                            <Nav.Link href="./">Novedades</Nav.Link>
                            <Nav.Link href="./">Contacto</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="./">Carrito</Nav.Link>
                            <Nav.Link href="./"
                            className="login-btn"
                            style={{backgroundColor:"white", borderRadius:"6px", color:"black", padding:"6px 10px 6px 10px", fontWeight:"bold", border: '1px solid grey', marginLeft:"10px", marginRight:"10px", textAlign:"center"}}>
                            Iniciar sesion
                            </Nav.Link>
                            <Button variant="outline-light">Cerrar sesion</Button>
                        </Nav>  
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
    )
}