import { useState } from "react";
import NavLinks from "./NavLinks";
import styles from "./navbar.module.scss";
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import useWindowSize from "../../hooks/useWindowSize";
import { mediaDevices } from "../../utils/constants";

const NavbarComponent = () => {
    const [showLinks, setShowLinks] = useState(false);
    const { width } = useWindowSize();

    const handleToggleLinks = () => {
        setShowLinks(!showLinks);
    }

    return (
        <Navbar expand="lg" className={`${styles.navbar}  py-4 container-fluid m-0`}>
            <Container className="bg-none p-5 p-lg-0">
                <Navbar.Brand href="#home" ><img src="/images/logo.svg" className="me-auto img-fluid brand" alt="Logo" /></Navbar.Brand>
                <NavLinks className="justify-content-end d-none d-lg-flex" />
                <div className="d-flex ms-auto align-items-center end-box">
                    <Nav.Link href="#home" className="link ms-0 ms-lg-2">Cart(0)</Nav.Link>
                    <Button className="btn btnDownload">Download app</Button>
                    <Button className="btn btnRegister">Register</Button>
                    <Navbar.Toggle className="text-primary toggler" aria-controls="basic-navbar-nav" onClick={handleToggleLinks} />
                </div>
                {showLinks && width <= mediaDevices.lg && <NavLinks className="d-flex d-lg-none p-0" setlinksOnSm="setlinksOnSm" />}
            </Container>
        </Navbar>
    )
}
export default NavbarComponent;
