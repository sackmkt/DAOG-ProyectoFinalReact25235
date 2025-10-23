import { Container, Nav, Navbar } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import '../estilos/Header.css';


export default function Header () {


    return (
            <header className="bg-dark py-4 shadow-sm w-100">
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
                            style={{backgroundColor:"white", borderRadius:"20px", color:"black", padding:"5px", fontWeight:"bold", border: '2px solid grey', marginLeft:"10px"}}>
                            Iniciar sesion
                            </Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

    )

}