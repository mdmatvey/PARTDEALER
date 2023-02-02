import React, { useContext } from 'react'
import { Context } from '../index'
import { Button } from 'react-bootstrap'
import { CARTBUTTON_STYLE } from '../utils/uiConsts'
import CartButtonStyles from '../styles/CartButtonStyles.css'

const Product = ({ item }) => {
  const { cart } = useContext(Context)

  return (

        <Button
            onClick={() => {
              if (!cart.cartItems.map(item => item.id).includes(item.id)) {
                cart.setCartItems([...cart.cartItems, item])
              }
            }}
            style={CARTBUTTON_STYLE}
            id='cart-button'
        >
                🛒 В корзину
        </Button>
  )
}

export default Product
