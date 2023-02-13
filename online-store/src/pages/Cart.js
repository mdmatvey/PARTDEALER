import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '..'
import CartList from '../components/CartList'
import Total from '../components/Total'
import { SHOP_ROUTE, ORDERING_ROUTE } from '../utils/routeConsts'
import { setEnding } from '../utils/functions'
import { MAINBUTTON_STYLE, PRIMARY_COLOR, SECONDARY_COLOR, TEXTBUTTON_STYLE } from '../utils/uiConsts'
import EventStyles from '../styles/EventStyles.css'

const Cart = observer(() => {
  const { product, cart } = useContext(Context)
  const navigate = useNavigate()

  const [itemsCount, setItemsCount] = useState(cart.cartItems.length)

  useEffect(() => {
    setItemsCount(cart.cartItems.length)
  }, [cart.cartItems])

  const ending = setEnding(itemsCount)

  return (
        <div className="pt-5 pb-5">
            <Container className="p-4" style={{ background: '#fff' }}>
              {
                itemsCount === 0
                  ? <div
                        className="d-flex flex-column align-items-center mt-5"
                        style={{ display: 'block', paddingTop: '5%', textAlign: 'center', paddingBottom: '10%' }}
                    >
                        <Fade top>
                          <h3 style={{ fontSize: '4rem' }}>В вашей корзине пока ничего нет</h3>
                          <span
                              className="mt-3"
                              style={{ fontSize: '1.5rem' }}
                          >
                              Посмотрите товары в нашем каталоге или воспользуйтесь поиском
                          </span>
                        </Fade>
                        <Fade bottom>
                          <div className="d-inline-flex justify-content-between align-items-baseline w-25 mt-5">
                              <Button
                                  onClick={() => {
                                    product.setCategoriesToDisplay([])
                                    navigate(SHOP_ROUTE)
                                  }}
                                  className='main-button'
                                  style={{ ...MAINBUTTON_STYLE, padding: '10px 20px', fontSize: '1.25rem' }}
                              >
                                  В каталог
                              </Button>
                              <Link to="/" style={{ ...TEXTBUTTON_STYLE, fontSize: '1.25rem', textDecoration: 'underline 2px #00CCCC' }}>На главную</Link>
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
                    <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
                        <Fade bottom>
                          <CartList cartPage={true} />
                        </Fade>
                        <Fade right>
                          <Card
                              style={{ background: SECONDARY_COLOR, height: 250, marginTop: 20, width: '100%', border: 'none', padding: 10 }}
                          >
                              <Total itemsCount={itemsCount} />
                              <Button
                                  disabled={!(cart.cartItems.length > 0)}
                                  onClick={() => navigate(ORDERING_ROUTE)}
                                  className="nav-button"
                                  style={{ ...MAINBUTTON_STYLE, color: '#fff', marginTop: 'auto', padding: 10 }}
                              >
                                  Перейти к оформлению
                              </Button>
                          </Card>
                        </Fade>
                    </div>
                </>
              }
            </Container>
        </div>
  )
})

export default Cart
