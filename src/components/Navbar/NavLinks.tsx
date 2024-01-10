import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

interface Props {
    className: string;
    setlinksOnSm?: string;
}

const NavLinks = (props: Props) => {

    const { className, setlinksOnSm } = props;

    return (
        <Navbar.Collapse className={className} id="basic-navbar-nav">
            <Nav className={`nav-toggleble d-flex ${setlinksOnSm}`}>
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
            </Nav>
        </Navbar.Collapse>
    )
}

export default NavLinks