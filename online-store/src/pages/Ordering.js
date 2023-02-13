import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Container, Modal, Row, Tab, Tabs, Form, Image } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { useNavigate } from 'react-router-dom'
import { Context } from '..'
import Total from '../components/Total'
import { CART_ROUTE } from '../utils/routeConsts'
import { MAINBUTTON_STYLE, SECONDARY_COLOR } from '../utils/uiConsts'
import EventStyles from '../styles/EventStyles.css'
import BootstrapReStyles from '../styles/BootstrapReStyles.css'

const Cart = observer(() => {
  const { cart, user } = useContext(Context)
  const navigate = useNavigate()

  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [itemsCount, setItemsCount] = useState(cart.cartItems.length)

  useEffect(() => {
    setItemsCount(cart.cartItems.length)
  }, [cart.cartItems])

  const [productColumns, setProductColumns] = useState(8)
  const [pageColumns, setPageColumns] = useState('3fr 1fr')

  useEffect(() => {
    if (user.userWidth < 500) {
      setProductColumns(3)
    } else if (user.userWidth < 768) {
      setProductColumns(4)
    } else if (user.userWidth < 992) {
      setProductColumns(4)
    } else if (user.userWidth < 1200) {
      setProductColumns(6)
    } else if (user.userWidth < 1400) {
      setProductColumns(7)
    } else if (user.userWidth >= 1400) {
      setProductColumns(8)
    }
  }, [user.userWidth])

  useEffect(() => {
    if (user.userWidth < 768) {
      setPageColumns('1fr')
    } else if (user.userWidth >= 768) {
      setPageColumns('3fr 1fr')
    }
  }, [user.userWidth])

  return (
        <Container className="pt-5 pb-5">
            <Fade top>
                <Row className="mt-4 mb-4">
                    <div className="d-flex flex-direction-row align-items-end">
                        <h1 style={{ margin: 0 }}>Оформление</h1>
                        <span onClick={() => navigate(CART_ROUTE)} style={{ fontSize: 24, marginLeft: 20, cursor: 'pointer' }}>Вернуться в корзину</span>
                    </div>
                </Row>
            </Fade>
            <div style={{ display: 'grid', gridTemplateColumns: `${pageColumns}` }}>
                <Container>
                    <Fade bottom>
                        <Card className="p-3 mb-3" style={{ }}>
                            <h2>Товары к оплате</h2>
                            <Container style={{ display: 'grid', gridTemplateColumns: `repeat(${productColumns}, 1fr)`, gap: 30 }}>
                                {
                                    cart.cartItems.map(cartItem =>
                                        <div style={{ position: 'relative' }}>
                                            <Image style={{ objectFit: 'contain' }} width={75} height={75} src={cartItem.image} />
                                            <div style={{ position: 'absolute', zIndex: 2, top: 0, right: 0, borderRadius: 5, backdropFilter: 'blur(10px)', background: 'rgba(0, 0, 0, 0.5)', color: '#fff', padding: '2px 8px' }}>{cartItem.count}</div>
                                        </div>
                                    )
                                }
                            </Container>
                        </Card>
                    </Fade>
                    <Fade bottom>
                        <Card className='   p-3 mb-3'>
                            <h2>Адрес </h2>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Введите адрес</Form.Label>
                                    <Form.Control type="text" placeholder="Город, улица, дом, квартира..." />
                                    <Form.Text className="text-muted">
                                        Мы не разглашаем данные наших клиентов.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Согласен с условиями доставки" />
                                </Form.Group>
                            </Form>
                        </Card>
                    </Fade>
                    <Fade bottom>
                        <div className="d-flex">
                            <Card className="p-3 me-2" style={{ width: '50%' }}>
                                <h2>Получатель</h2>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Введите имя</Form.Label>
                                        <Form.Control type="email" placeholder="Имя" />
                                        <Form.Text className="text-muted">
                                            Мы не разглашаем данные наших клиентов.
                                        </Form.Text>
                                    </Form.Group>
                                </Form>
                            </Card>
                            <Card className="p-3 ms-2" style={{ width: '50%' }}>
                                <h2>Способ оплаты</h2>
                                <Tabs
                                    defaultActiveKey="profile"
                                    className="mb-3"
                                >
                                    <Tab eventKey="home" title="Переводом">
                                        <p>1234 5678 1234 5678 - Сбербанк</p>
                                        <p>8 910 123 456 78 91 - Сбербанк</p>
                                    </Tab>
                                    <Tab eventKey="profile" title="СБП">
                                        <Button onClick={handleShow} className='main-button' style={MAINBUTTON_STYLE}>
                                            Нажмите для получения QR для оплаты
                                        </Button>
                                        <Modal show={show} onHide={handleClose} centered>
                                            <Modal.Header closeButton>
                                                <Modal.Title>QR код СБП</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Image src="https://sbp.nspk.ru/api/img/QR_with_logo.png" style={{ display: 'block', margin: '0 auto' }}></Image>
                                            </Modal.Body>
                                        </Modal>
                                    </Tab>
                                    <Tab eventKey="contact" title="При получении">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" label="Оплатить при получении" />
                                            </Form.Group>
                                        </Form>
                                    </Tab>
                                </Tabs>
                            </Card>
                        </div>
                    </Fade>
                </Container>
                <Fade right>
                    <div>
                        <Card style={{ position: 'relative', border: 'none', width: '100%', height: '100%', background: SECONDARY_COLOR }}>
                            <Total itemsCount={itemsCount} />
                            <Button
                                onClick={() => navigate()}
                                className="mt-4 nav-button"
                                style={{ ...MAINBUTTON_STYLE, color: '#fff', position: 'absolute', width: '90%', top: 'auto', bottom: 10, left: '5%', display: 'block', margin: '0 auto', fontSize: '1.2rem', padding: 20 }}
                            >
                                Оформить заказ
                            </Button>
                        </Card>
                    </div>
                </Fade>
            </div>
        </Container>
  )
})

export default Cart
