import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { Context } from '..'
import CountButton from './CountButton'
import ResposniveStyles from '../styles/ResponsiveStyles.css'

const CartItem = observer(({ item, cartPage }) => {
  const { user, cart } = useContext(Context)

  const chooseProduct = (e, item) => {
    if (e.target.checked) {
      cart.setSelectedItems([...cart.selectedItems, item])
    } else {
      cart.setSelectedItems(cart.selectedItems.filter(selectedItem => item.id !== selectedItem.id))
    }
  }

  const [title, setTitle] = useState(item.title)

  if (cartPage) {
    useEffect(() => {
      if (user.userWidth < 580) {
        setTitle(item.title)
      } else if (user.userWidth < 992) {
        setTitle(item.title.substring(0, 30) + '...')
      } else if (user.userWidth >= 992) {
        setTitle(item.title)
      }
    }, [user.userWidth])
  }

  return (
        <Card id='cartitem-card' style={{ gridTemplateColumns: cartPage ? '1fr 3fr 7fr 4fr 1fr' : '3fr 7fr 4fr 1fr' }}>
            {cartPage ? <Form.Check onClick={(e) => chooseProduct(e, item)} className="cartChecked" type='checkbox' /> : null}
            <Card.Img style={{ height: '80%', objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto' }} src={item.image} />
            <Card.Body>
                <Card.Title style={{ fontSize: '1.1rem' }}>{cartPage ? title : item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}</Card.Title>
                <Card.Subtitle>{item.category}</Card.Subtitle>
                <Card.Text><h2>{(item.price * item.count).toFixed(2)}₽</h2></Card.Text>
            </Card.Body>
            <CountButton item={item} />
            <Button
                    onClick={() => cart.setCartItems(cart.cartItems.filter(cartItem => item.id !== cartItem.id))}
                    className="shadow-none"
                    style={{ background: 'none', border: 'none', color: '#000', borderRadius: 0, fontSize: '1.75rem' }}
                >
                    x
            </Button>
        </Card>
  )
})

export default CartItem
