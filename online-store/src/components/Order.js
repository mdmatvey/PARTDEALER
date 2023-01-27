import React, { useContext, useState } from 'react'
import { Accordion, Container, Dropdown, Row } from 'react-bootstrap'
import { Context } from '../index'
import OrderItem from './OrderItem'

const Order = ({ user }) => {
  const { cart } = useContext(Context)
  const [orderStatus, setOrderStatus] = useState('Платёж обрабатывается')

  return (
        <Accordion className="pb-3">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Заказ №1634</Accordion.Header>
                <Accordion.Body>
                    <div style={{ padding: 20, height: 220, overflowX: 'hidden' }}>
                        {cart.cartItems.map(item =>
                            <Row style={{ width: '100%', margin: 0 }}>
                                <OrderItem key={item.key} item={item} />
                            </Row>
                        )}
                    </div>
                    <h3>Итого: 1420Р</h3>
                    <h3>Дата: 20.04.2420</h3>
                    <h3 className="d-flex">Статус: {
                            user.role === 'admin'
                              ? <Dropdown className="ms-3">
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                        {orderStatus}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={(e) => setOrderStatus(e.target.textContent)} >Платёж обрабатывается</Dropdown.Item>
                                        <Dropdown.Item onClick={(e) => setOrderStatus(e.target.textContent)} >Платёж подтвержден</Dropdown.Item>
                                        <Dropdown.Item onClick={(e) => setOrderStatus(e.target.textContent)} >Передано в доставку</Dropdown.Item>
                                        <Dropdown.Item onClick={(e) => setOrderStatus(e.target.textContent)} >Доставлено</Dropdown.Item>
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
