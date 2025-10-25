import { Container, Nav, Navbar, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
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
                            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/Categoria"}>Categoria</Nav.Link>
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