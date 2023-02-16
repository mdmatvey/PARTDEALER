import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '..'
import CartList from '../components/CartList'
import Total from '../components/Total'
import { SHOP_ROUTE, ORDERING_ROUTE } from '../utils/routeConsts'
import { setEnding } from '../utils/functions'
import { SECONDARY_COLOR, TEXTBUTTON_STYLE } from '../utils/uiConsts'
import EventStyles from '../styles/EventStyles.css'
import ResponsiveStyles from '../styles/ResponsiveStyles.css'

const Cart = observer(() => {
  const { user, product, cart } = useContext(Context)
  const navigate = useNavigate()

  const [itemsCount, setItemsCount] = useState(cart.cartItems.length)

  useEffect(() => {
    setItemsCount(cart.cartItems.length)
  }, [cart.cartItems])

  const [md1, setMd1] = useState(8)
  const [md2, setMd2] = useState(4)

  useEffect(() => {
    if (user.userWidth < 992) {
      setMd1(12)
      setMd2(12)
    } else if (user.userWidth >= 992) {
      setMd1(8)
      setMd2(4)
    }
  }, [user.userWidth])

  const ending = setEnding(itemsCount)

  return (
        <div className="pt-5 pb-5">
            <Container className="p-4" style={{ background: '#fff' }}>
              {
                itemsCount === 0
                  ? <div
                        className="d-flex flex-column align-items-center mt-5"
                        id='emptycart-message'
                    >
                        <Fade top>
                          <h3>В вашей корзине пока ничего нет</h3>
                          <span
                              className="mt-3"
                          >
                              Посмотрите товары в нашем каталоге или воспользуйтесь поиском
                          </span>
                        </Fade>
                        <Fade bottom>
                          <div
                            className="d-inline-flex justify-content-between align-items-baseline mt-5"
                            id='emptycart-buttons'
                          >
                              <button
                                  onClick={() => {
                                    product.setCategoriesToDisplay([])
                                    navigate(SHOP_ROUTE)
                                  }}
                                  className='main-button'
                                  style={{ padding: '10px 20px' }}
                              >
                                  В каталог
                              </button>
                              <Link to="/" id='tomain-button' style={{ ...TEXTBUTTON_STYLE }}>На главную</Link>
                          </div>
                        </Fade>
                    </div>
                  : <>
                    <Fade top>
                      <div>
                        <Row>
                            <div className="d-flex flex-direction-row align-items-end">
                                <h1 style={{ margin: 0 }}>Корзина</h1>
                                <span style={{ fontSize: 24, marginLeft: 20 }}>{itemsCount} товар{ending}</span>
                            </div>
                        </Row>
                        <span>
                            <Button
                                onClick={() => {
                                  if (cart.selectedItems.length === cart.cartItems.length) {
                                    cart.setSelectedItems([])
                                    for (let i = 0; i < cart.cartItems.length; i++) {
                                      document.getElementsByClassName('cartChecked')[i].children[0].checked = false
                                    }
                                  } else {
                                    cart.setSelectedItems(cart.cartItems)
                                    for (let i = 0; i < cart.cartItems.length; i++) {
                                      document.getElementsByClassName('cartChecked')[i].children[0].checked = true
                                    }
                                  }
                                }}
                                style={{ ...TEXTBUTTON_STYLE, fontSize: '1rem' }}
                            >
                                Выбрать все
                            </Button>
                            <Button
                                onClick={() => {
                                  const selectedItemIds = cart.selectedItems.map(selectedItem => selectedItem.id) ? cart.selectedItems.map(selectedItem => selectedItem.id) : []
                                  cart.setCartItems(cart.cartItems.filter(cartItem => !selectedItemIds.includes(cartItem.id)).map(item => item))
                                  cart.setSelectedItems([])
                                  for (let i = 0; i < cart.cartItems.length; i++) {
                                    document.getElementsByClassName('cartChecked')[i].children[0].checked = false
                                  }
                                }}
                                style={{ color: '#000', background: 'none', border: 'none', borderRadius: '0' }}
                            >
                                Х Удалить ({cart.selectedItems.length})
                            </Button>
                        </span>
                      </div>
                    </Fade>
                    <Row>
                      <Col md={md1}>
                        <Fade bottom>
                          <CartList cartPage={true} />
                        </Fade>
                      </Col>
                      <Col md={md2}>
                        {
                          user.userWidth < 768
                            ? <Fade bottom>
                            <Card
                                style={{ background: SECONDARY_COLOR, height: 250, marginTop: 20, width: '100%', border: 'none', padding: 10 }}
                            >
                                <Total itemsCount={itemsCount} />
                                <button
                                    disabled={!(cart.cartItems.length > 0)}
                                    onClick={() => {
                                      window.scrollTo(0, 0)
                                      navigate(ORDERING_ROUTE)
                                    }}
                                    className="main-button inverted cartpage-button"
                                    style={{ marginTop: 'auto', padding: 10 }}
                                >
                                    Перейти к оформлению
                                </button>
                            </Card>
                          </Fade>
                            : <Fade right>
                            <Card
                                style={{ background: SECONDARY_COLOR, height: 250, marginTop: 20, width: '100%', border: 'none', padding: 10 }}
                            >
                                <Total itemsCount={itemsCount} />
                                <button
                                    disabled={!(cart.cartItems.length > 0)}
                                    onClick={() => {
                                      window.scrollTo(0, 0)
                                      navigate(ORDERING_ROUTE)
                                    }}
                                    className="main-button inverted cartpage-button"
                                    style={{ marginTop: 'auto', padding: 10 }}
                                >
                                    Перейти к оформлению
                                </button>
                            </Card>
                          </Fade>
                        }
                      </Col>
                    </Row>
                </>
              }
            </Container>
        </div>
  )
})

export default Cart
