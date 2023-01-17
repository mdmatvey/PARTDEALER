import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import { MAIN_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, CART_ROUTE } from "../utils/routeConsts";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { observer } from "mobx-react-lite";
import { PRIMARY_COLOR, SECONDARY_COLOR, NAVLINK_STYLE, NAVBUTTON_STYLE } from "../utils/uiConsts";
import CartList from "./CartList";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const [cartOpen, setCartOpen] = useState(false);

    const [query, setQuery] = useState("");

    const searchAPI = searchQuery => {
        console.log(searchQuery)
    }

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
                    <Navbar.Brand onClick={() => navigate(MAIN_ROUTE)} style={{cursor: "pointer"}}>COMPANY NAME</Navbar.Brand>
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
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                type="search"
                                placeholder="Search term..."
                                className="ms-5 me-2"
                                aria-label="Search"
                        />
                            <Button 
                                onClick={() => searchAPI(query)}
                                variant="outline-secondary"
                            >
                                Search
                            </Button>
                        </Form>
                        {user.isAuth ? 
                            <Nav
                                className="ms-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px'}}
                                navbarScroll
                            >
                                <Button 
                                    className={`ms-2 me-2 ${cartOpen && 'open'}`} 
                                    style={{background: '#fff', border: 'none'}}
                                    onClick={() => setCartOpen(!cartOpen)}
                                >
                                    🛒
                                </Button>
                                {cartOpen && (
                                    <div style={{position: "absolute", top: 60, right: 0, width: "35vw", height: 400, background: PRIMARY_COLOR}} className="shop-cart">
                                        <CartList cartPage={false} />
                                        <Button 
                                        onClick={() => {
                                            setCartOpen(false);
                                            navigate(CART_ROUTE)
                                        }} 
                                        style={{display: 'block', margin: '20px auto 0 auto', border: 'none', borderRadius: 0, background: SECONDARY_COLOR}}
                                        >
                                            Перейти в корзину
                                        </Button>
                                    </div>
                                )}
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