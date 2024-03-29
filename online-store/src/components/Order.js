import React, { useContext, useEffect, useState } from 'react'
import { Accordion, Dropdown, Row } from 'react-bootstrap'
import { Context } from '../index'
import { changeStatus } from './http/ordersAPI'
import OrderItem from './OrderItem'
import BootstrapReStyles from '../styles/BootstrapReStyles.css'
import EventStyles from '../styles/EventStyles.css'
import ResponsiveStyles from '../styles/ResponsiveStyles.css'

const Order = ({ userTemp }) => {
  const { user, cart } = useContext(Context)

  const [orderStatus, setOrderStatus] = useState('Платёж обрабатывается')

  const changeOrderStatus = () => {
    changeStatus({ status: orderStatus })
      .then(data => setOrderStatus(orderStatus))
  }

  const [flexDirection, setFlexDirection] = useState('flex-row')

  if (userTemp.role === 'admin') {
    useEffect(() => {
      if (user.userWidth < 517) {
        setFlexDirection('flex-column')
      } else if (user.userWidth >= 517) {
        setFlexDirection('flex-row')
      }
    }, [user.userWidth])
  }

  return (
        <Accordion className="pb-3">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Заказ №1634</Accordion.Header>
                <Accordion.Body>
                    <div style={{ padding: 20, height: 220, overflowX: 'hidden' }}>
                        {cart.cartItems.map(item =>
                            <Row key={item.key} style={{ width: '100%', margin: 0 }}>
                                <OrderItem item={item} />
                            </Row>
                        )}
                    </div>
                    <h3>Итого: 1420Р</h3>
                    <h3>Дата: 20.04.2420</h3>
                    <h3 className={`d-flex ${flexDirection}`}>Статус: {
                            userTemp.role === 'admin'
                              ? <Dropdown className='dropdown-button' id='adminpage-dropdown'>
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        {orderStatus}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={(e) => changeOrderStatus(e.target.textContent)} >Платёж обрабатывается</Dropdown.Item>
                                        <Dropdown.Item onClick={(e) => changeOrderStatus(e.target.textContent)} >Платёж подтвержден</Dropdown.Item>
                                        <Dropdown.Item onClick={(e) => changeOrderStatus(e.target.textContent)} >Передано в доставку</Dropdown.Item>
                                        <Dropdown.Item onClick={(e) => changeOrderStatus(e.target.textContent)} >Доставлено</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                              : 'оплачено'
                        }
                    </h3>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
  )
}

export default Order
