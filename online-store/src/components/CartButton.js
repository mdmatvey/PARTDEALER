import React, { useContext } from 'react'
import { Context } from '../index'
import { Button } from 'react-bootstrap'
import { MAINBUTTON_STYLE } from '../utils/uiConsts'
import { TbShoppingCartPlus } from 'react-icons/tb'
import EventStyles from '../styles/EventStyles.css'

const Product = ({ item, productPage }) => {
  const { cart } = useContext(Context)

  return (

        <Button
            onClick={() => {
              if (!cart.cartItems.map(item => item.id).includes(item.id)) {
                cart.setCartItems([...cart.cartItems, item])
              }
            }}
            className='d-flex align-items-center justify-content-center main-button'
            style={{ ...MAINBUTTON_STYLE, color: productPage ? '#fff' : '#000', height: productPage ? '100%' : null }}
        >
              В корзину&nbsp;<TbShoppingCartPlus />
        </Button>
  )
}

export default Product
