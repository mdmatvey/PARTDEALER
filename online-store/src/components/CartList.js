import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '../index'
import { Row } from 'react-bootstrap'
import CartItem from './CartItem'
import { PRIMARY_COLOR } from '../utils/uiConsts'

import { TbListDetails } from 'react-icons/tb'

const CartList = observer(({ cartPage }) => {
  const { cart } = useContext(Context)

  return (
        <div style={{ padding: 20, height: '80%', overflowX: cartPage ? 'visible' : 'hidden' }}>
                {
                  cart.cartItems.length !== 0
                    ? cart.cartItems.map(item =>
                    <Row key={item.key} style={{ width: '100%', margin: 0 }}>
                        <CartItem item={item} cartPage={cartPage} />
                    </Row>
                    )
                    : <div className='d-flex flex-column align-items-center justify-content-center' style={{ height: '100%' }}>
                        <TbListDetails style={{ color: PRIMARY_COLOR, fontSize: '10rem' }} />
                        <br/>
                        <span style={{ color: '#fff', fontSize: '1.5rem' }}>В вашей корзине пока ничего нет</span>
                    </div>
                }
        </div>
  )
})

export default CartList
