import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../index'
import { MAIN_ROUTE, ADMIN_ROUTE, USER_ROUTE, LOGIN_ROUTE, CART_ROUTE } from '../utils/routeConsts'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { PRIMARY_COLOR, SECONDARY_COLOR, NAVLINK_STYLE, NAVBUTTON_STYLE } from '../utils/uiConsts'
import CartList from './CartList'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaTelegram, FaWhatsapp, FaRegUser } from 'react-icons/fa'
import { TbShoppingCart } from 'react-icons/tb'
import ButtonHoverStyles from '../styles/ButtonHoverStyles.css'
import WebFont from 'webfontloader'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  const navigate = useNavigate()

  const [cartOpen, setCartOpen] = useState(false)

  const [query, setQuery] = useState('')

  const searchAPI = searchQuery => {
    console.log(searchQuery)
  }

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token') // temporarily
  }

  useEffect(() => {
    if (user.userWidth < 992) {
      setCartOpen(false)
    }
  }, [user.userWidth])

  const WebFont = require('webfontloader')

  WebFont.load({
    google: {
      families: ['Amaranth']
    }
  })

  return (
        <>
            <Navbar
                bg="light"
                expand="lg"
                className="d-flex flex-column"
                style={{ padding: 0 }}
            >
                <Container
                    className="pt-2 pb-2"
                    style={{ background: PRIMARY_COLOR, height: 30, padding: '0 110px' }}
                    fluid
                >
                    <Navbar.Brand
                        onClick={() => navigate(MAIN_ROUTE)}
                        style={{ cursor: 'pointer', fontFamily: 'Amaranth', fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '.05rem' }}
                    >
                        PART DEALER
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto">
                            <Button
                                style={NAVLINK_STYLE}
                                lassName="ms-2 me-2"
                            >
                                <span className='d-flex align-items-center'><FaTelegram />&nbsp;dubstepchik</span>
                            </Button>
                            <Button
                                style={NAVLINK_STYLE}
                                lassName="ms-2 me-2"
                            >
                                <span className='d-flex align-items-center'><FaWhatsapp />&nbsp;dubstepchik</span>
                            </Button>
                            <Button
                                style={NAVLINK_STYLE}
                                lassName="ms-2 me-2"
                            >
                                <span className='d-flex align-items-center'><BsTelephoneFill />&nbsp;dubstepchik</span>
                            </Button>
                            <Button
                                style={NAVLINK_STYLE}
                                lassName="ms-2 me-2"
                            >
                                <span className='d-flex align-items-center'><MdOutlineMailOutline />&nbsp;dubstepchik</span>
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
                style={{ top: -0.1, padding: 0, margin: 0 }}
            >
                <Container
                    className="pt-2 pb-2"
                    style={{ background: SECONDARY_COLOR, padding: '0 110px' }}
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
                                className="me-2"
                                aria-label="Search"
                        />
                            <Button
                                onClick={() => searchAPI(query)}
                                variant="outline-secondary"
                            >
                                Search
                            </Button>
                        </Form>
                        {user.isAuth
                          ? <Nav
                                className="ms-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Button
                                    className={`d-flex align-items-center ms-2 me-2 ${cartOpen && 'open'} nav-button`}
                                    style={NAVBUTTON_STYLE}
                                    onClick={() => {
                                      user.userWidth < 992 ? navigate(CART_ROUTE) : setCartOpen(!cartOpen)
                                    }}
                                >
                                    <TbShoppingCart style={{ fontSize: '1.5rem' }} />&nbsp;Корзина
                                </Button>
                                {cartOpen && (
                                    <div style={{ position: 'absolute', top: 58, right: 0, width: '35vw', height: 400, borderRadius: '0 0 5px 5px', background: SECONDARY_COLOR, zIndex: -1, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                                        <CartList cartPage={false} />
                                        <Button
                                        onClick={() => {
                                          setCartOpen(false)
                                          navigate(CART_ROUTE)
                                        }}
                                        style={{ display: 'block', margin: '20px auto 0 auto', border: 'none', borderRadius: 0, background: PRIMARY_COLOR }}
                                        >
                                            Перейти в корзину
                                        </Button>
                                    </div>
                                )}
                                <Button
                                    style={NAVBUTTON_STYLE}
                                    className='d-flex align-items-center nav-button'
                                    onClick={() => navigate(ADMIN_ROUTE)}
                                >
                                    <FaRegUser />&nbsp;Админ-панель
                                </Button>
                                <Button
                                    style={NAVBUTTON_STYLE}
                                    className='d-flex align-items-center nav-button'
                                    onClick={() => navigate(USER_ROUTE)}
                                >
                                    <FaRegUser />&nbsp;Личный кабинет
                                </Button>
                                <Button
                                    style={NAVBUTTON_STYLE}
                                    className='nav-button'
                                    onClick={() => logOut()}
                                >
                                    Выйти
                                </Button>
                            </Nav>
                          : <Nav
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
  )
})

export default NavBar
