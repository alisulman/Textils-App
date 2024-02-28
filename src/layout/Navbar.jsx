import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import IconBright from '../brightness-and-contrast.png'
import IconDark from '../night-mode.png'

function NavBar({mode, handleMode}) {
    return (
        <Navbar expand="lg" className={`bg-${mode} fw-bold px-5`} data-bs-theme={mode === 'colorOne' ? 'light' : 'dark'}>
            <Container fluid>
                <Navbar.Brand href="#home">TexTils</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="offset-4">
                        <Nav.Link href="#home" className='active mx-2'>Home</Nav.Link>
                        <Nav.Link href="#link" className='mx-2'>Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown" className='mx-2'>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <img src={IconBright} alt="" width={'20x'} id='bright' className="position-absolute end-5 top-35" onClick={handleMode} style={{display: mode === 'colorOne' ? 'none' : 'block'}} />
                    <img src={IconDark} alt="" width={'18x'} id='dark' className="position-absolute end-5 top-35" onClick={handleMode} style={{display: mode === 'colorOne' ? 'block' : 'none'}} />
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

export default NavBar;