import styles from "./navbar.module.scss";
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';

const NavbarComponent = () => {

    return (
        <Navbar className={`${styles.navbar} py-4 container-fluid m-0`}>
            <Container className="bg-none p-0">
                <Navbar.Brand href="#home" ><img src="/images/logo.svg" className="me-auto img-fluid" alt="Logo" /></Navbar.Brand>
                <Navbar.Toggle className="" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="nav-toggleble d-flex">
                        <Nav.Link href="#home" className="link">Home</Nav.Link>
                        <Nav.Link href="#home" className="link active">About</Nav.Link>
                        <Nav.Link href="#home" className="link">Pricing</Nav.Link>
                        <Nav.Link href="#home" className="link">About</Nav.Link>
                        <NavDropdown title="Pages" className="link" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#home" className="link">page 1</NavDropdown.Item>
                            <NavDropdown.Item href="#home" className="link">
                                page 2
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#home" className="link">page 3</NavDropdown.Item>

                        </NavDropdown>
                        <Nav.Link href="#home" className="link">Cart(0)</Nav.Link>
                        <Button className="btn btnDownload">Download app</Button>
                        <Button className="btn btnRegister">Register</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavbarComponent;
