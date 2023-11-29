import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
    <>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="/contacto">Contacto</Nav.Link>
            <Nav.Link href="/ayuda">Ayuda</Nav.Link>
            <Nav.Link href="/api">Api</Nav.Link>
            </Nav>
        </Container>
        </Navbar>
    </>
    );
}


{/*const Nav= (props) =>{
    return (
        <nav>
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/">Nosotros</Link></li>
                <li> <Link to="/">Contacto</Link></li>
                <li> <Link to="/">Ayuda</Link></li>
            
            </ul>        
        </nav>
    );
}*/}
export default ColorSchemesExample;