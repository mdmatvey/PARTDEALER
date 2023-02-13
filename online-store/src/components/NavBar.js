import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../index'
import { MAIN_ROUTE, ADMIN_ROUTE, USER_ROUTE, LOGIN_ROUTE, CART_ROUTE, SHOP_ROUTE } from '../utils/routeConsts'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { observer } from 'mobx-react-lite'
import { PRIMARY_COLOR, SECONDARY_COLOR, NAVLINK_STYLE, NAVBUTTON_STYLE } from '../utils/uiConsts'
import CartList from './CartList'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsTelephoneFill } from 'react-icons/bs'
import { FaTelegram, FaWhatsapp, FaRegUser } from 'react-icons/fa'
import { TbShoppingCart } from 'react-icons/tb'
import { GoSearch } from 'react-icons/go'
import { BiLogIn, BiLogOut } from 'react-icons/bi'
import BootstrapReStyles from '../styles/BootstrapReStyles.css'
import NavbarStyles from '../styles/NavbarStyles.css'
import EventStyles from '../styles/EventStyles.css'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  const navigate = useNavigate()

  const [cartOpen, setCartOpen] = useState(false)

  const [query, setQuery] = useState('')

  const searchAPI = searchQuery => {
    console.log(searchQuery)
    navigate(SHOP_ROUTE)
  }

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.removeItem('token') // temporarily
  }

  const navbarCollapses = document.querySelectorAll('.navbar-collapse')

  useEffect(() => {
    if (user.userWidth < 992) {
      setCartOpen(false)
      navbarCollapses.forEach(element => { element.style.height = '250px' })
    } else {
      navbarCollapses.forEach(element => { element.style.height = '0' })
    }
  }, [user.userWidth])

  return (
        <>
            <Navbar
                bg="light"
                expand="lg"
                className="d-flex flex-column"
                style={{ padding: 0, zIndex: 11 }}
            >
                <Container
                    className='navbar-container'
                    style={{ background: PRIMARY_COLOR, height: 30 }}
                    id='navbar-top-container'
                    fluid
                >
                    <Navbar.Brand
                        onClick={() => navigate(MAIN_ROUTE)}
                        id='nav-logo'
                        style={{ cursor: 'pointer', fontFamily: 'Amaranth', fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '.05rem', padding: 0 }}
                    >
                        PART DEALER
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="ms-auto">
                            <Button
                                style={NAVLINK_STYLE}
                            >
                                <span className='d-flex align-items-center navbar-contact'><FaTelegram />&nbsp;dubstepchik</span>
                            </Button>
                            <Button
                                style={NAVLINK_STYLE}
                            >
                                <span className='d-flex align-items-center navbar-contact'><FaWhatsapp />&nbsp;dubstepchik</span>
                            </Button>
                            <Button
                                style={NAVLINK_STYLE}
                            >
                                <span className='d-flex align-items-center navbar-contact'><BsTelephoneFill />&nbsp;dubstepchik</span>
                            </Button>
                            <Button
                                style={NAVLINK_STYLE}
                            >
                                <span className='d-flex align-items-center navbar-contact'><MdOutlineMailOutline />&nbsp;dubstepchik</span>
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
                style={{ top: -1, padding: 0, margin: 0, zIndex: 10 }}
            >
                <Container
                    className='navbar-container'
                    style={{ background: SECONDARY_COLOR, height: 60 }}
                    fluid
                >
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex align-items-center">
                            <Form.Control
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                style={{ border: '3px solid #fff' }}
                                type="search"
                                placeholder="Артикул"
                                className="me-2 search-bar"
                                id='nav-search-bar'
                                aria-label="Search"
                        />
                            <button
                                onClick={() => searchAPI(query)}
                                className='main-button inverted'
                                type='button'
                            >
                                <span className='d-flex align-items-center'><GoSearch />&nbsp;Искать</span>
                            </button>
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
                                      user.userWidth < 992 ? (window.scrollTo(0, 0), navigate(CART_ROUTE)) : setCartOpen(!cartOpen)
                                    }}
                                >
                                    <TbShoppingCart style={{ fontSize: '1.5rem' }} />&nbsp;Корзина
                                </Button>
                                <div style={{ position: 'absolute', top: cartOpen ? 58 : -430, transition: '1s', right: 0, width: 600, height: 400, borderRadius: '0 0 5px 5px', background: SECONDARY_COLOR, zIndex: -1, boxShadow: cartOpen ? 'rgba(0, 0, 0, 0.35) 0px 5px 15px' : 'none' }}>
                                    <CartList cartPage={false} />
                                    <button
                                        onClick={() => {
                                          setCartOpen(false)
                                          window.scrollTo(0, 0)
                                          navigate(CART_ROUTE)
                                        }}
                                        style={{ display: 'block', margin: '20px auto 0 auto' }}
                                        className='main-button inverted'
                                    >
                                        Перейти в корзину
                                    </button>
                                </div>
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
                                    onClick={() => {
                                      window.scrollTo(0, 0)
                                      navigate(USER_ROUTE)
                                    }}
                                >
                                    <FaRegUser />&nbsp;Личный кабинет
                                </Button>
                                <Button
                                    style={NAVBUTTON_STYLE}
                                    className='nav-button'
                                    onClick={() => logOut()}
                                >
                                    <span className='d-flex align-items-center'><BiLogOut style={{ fontSize: '1.5rem' }} />&nbsp;Выйти</span>
                                </Button>
                            </Nav>
                          : <Nav
                                className="ms-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Button
                                    style={NAVBUTTON_STYLE}
                                    className='nav-button'
                                    onClick={() => {
                                      window.scrollTo(0, 0)
                                      navigate(LOGIN_ROUTE)
                                    }}
                                >
                                    <span className='d-flex align-items-center'><BiLogIn style={{ fontSize: '1.5rem' }} />&nbsp;Войти</span>
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
