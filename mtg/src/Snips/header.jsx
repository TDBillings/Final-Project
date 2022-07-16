import {Container, Button, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Logo from "../LOGO.gif"

function navbar() {
    return <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
            <Container>
                <img src= {Logo} alt="MTG Bible Logo" width="60" height="60" />
                <p>MTG</p>
            <Navbar.Brand href='/'>MTG Bible</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="./Login">
                        Login
                    </Nav.Link>
                    <Nav.Link href="./card-index">
                        Card Index
                    </Nav.Link>
                    <Nav.Link href='./builds'>
                        Deck Builds
                    </Nav.Link>
                    <NavDropdown>
                        {/* <NavDropdown.Toggle>
                            More
                        </NavDropdown.Toggle> */}
                        <NavDropdown.Item>
                            <NavDropdown.Item href="https://mtgazone.com/magic-the-gathering-2021-release-schedule/">
                                Expansions
                            </NavDropdown.Item>
                            <NavDropdown.Item href="https://magic.wizards.com/en/mtgarena?sub3=kwd-71674993725462%3Aloc-190&sub5=o&msclkid=c3df1d1ebc9716a250e37cb81061abbf">
                                Play Arena
                            </NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="source.html">Source Index</NavDropdown.Item>
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
                <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
        </Navbar>
}

export default navbar