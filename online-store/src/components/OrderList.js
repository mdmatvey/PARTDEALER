import React, { useContext, useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import Order from './Order'
import { fetchOrders } from './http/ordersAPI'
import ResponsiveStyles from '../styles/ResponsiveStyles.css'
import { Context } from '..'

const OrderList = ({ userTemp }) => {
  const { user } = useContext(Context)

  const [orders, setOrders] = useState([])

  useEffect(() => {
    fetchOrders({ userID: user.id })
      .then(data => setOrders(data))
  }, [])

  return (
        <Container className="orderspage-container">
            {
                orders.map(order =>
                    <Order userTemp={userTemp} />
                )
            }
        </Container>
  )
}

export default OrderList
