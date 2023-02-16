import React, { useContext } from 'react'
import { Context } from '../index'
import { TbShoppingCartPlus } from 'react-icons/tb'
import EventStyles from '../styles/EventStyles.css'
import { useNavigate } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/routeConsts'

const Product = ({ item, productPage }) => {
  const navigate = useNavigate()
  const { user, cart } = useContext(Context)

  return (
    user.isAuth
      ? <button
        onClick={() => {
          if (!cart.cartItems.map(item => item.id).includes(item.id)) {
            cart.setCartItems([...cart.cartItems, item])
          }
        }}
        className={`d-flex align-items-center justify-content-center main-button ${productPage ? 'inverted' : null}`}
        style={{ height: productPage ? '100%' : null }}
    >
          В корзину&nbsp;<TbShoppingCartPlus />
    </button>
      : <button
        onClick={() => {
          window.scrollTo(0, 0)
          navigate(LOGIN_ROUTE)
        }}
        className={`d-flex align-items-center justify-content-center main-button ${productPage ? 'inverted' : null} disabled`}
        style={{ height: productPage ? '100%' : null }}
        type='button'
    >
          В корзину&nbsp;<TbShoppingCartPlus />
    </button>
  )
}

export default Product
