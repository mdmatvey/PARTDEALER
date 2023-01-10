import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/routeConsts";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { observer } from "mobx-react-lite";
import { PRIMARY_COLOR, SECONDARY_COLOR, NAVLINK_STYLE, NAVBUTTON_STYLE } from "../utils/uiConsts";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token'); // temporarily
    }

    return (
        <>
            <Navbar 
                bg="light" 
                expand="lg" 
                className="d-flex flex-column" 
                style={{padding: 0}}
            >
                <Container 
                    className="pt-2 pb-2"
                    style={{background: PRIMARY_COLOR}} 
                    fluid
                >
                    <Navbar.Brand href="/">COMPANY NAME</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto">
                            <Button 
                                className="ms-2 me-2" 
                                style={NAVLINK_STYLE}
                            >
                                Адрес
                            </Button>
                            <Button 
                                style={NAVLINK_STYLE}
                                lassName="ms-2 me-2" 
                            >
                                Контакты
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar 
                sticky="top" 
                bg="light" 
                expand="lg" 
                className="d-flex flex-column" 
                style={{top: -0.1, padding: 0, margin: 0}}
            >
                <Container 
                    className="pt-2 pb-2"
                    style={{background: SECONDARY_COLOR}} 
                    fluid
                >
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search term..."
                            className="ms-5 me-2"
                            aria-label="Search"
                        />
                            <Button variant="outline-secondary">Search</Button>
                        </Form>
                        {user.isAuth ? 
                            <Nav
                                className="ms-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Button 
                                    style={NAVBUTTON_STYLE}
                                    onClick={() => navigate(ADMIN_ROUTE)}
                                >
                                    Админ-панель
                                </Button>
                                <Button 
                                    style={NAVBUTTON_STYLE}
                                    onClick={() => logOut()} 
                                    className="ms-2"
                                >
                                    Выйти
                                </Button>
                            </Nav>
                            :
                            <Nav
                                className="ms-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Button 
                                    style={NAVBUTTON_STYLE}
                                    onClick={() => navigate(LOGIN_ROUTE)}
                                >
                                    Авторизация
                                </Button>
                            </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
});

export default NavBar;