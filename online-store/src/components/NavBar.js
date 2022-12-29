import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../index";
import { ADMIN_ROUTE } from "../utils/consts";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { observer } from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="/">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex">
                <Form.Control
                type="search"
                placeholder="Search"
                className="ms-5 me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            {user.isAuth ? 
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                <Button onClick={() => navigate(ADMIN_ROUTE)}>Админ-панель</Button>
                <Button onClick={() => user.setIsAuth(false)} className="ms-2">Выйти</Button>
                </Nav>
                :
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                <Button onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                </Nav>
            }
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
});

export default NavBar;