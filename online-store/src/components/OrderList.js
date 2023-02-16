import React from 'react'
import { Container } from 'react-bootstrap'
import Order from './Order'
import ResponsiveStyles from '../styles/ResponsiveStyles.css'

const OrderList = ({ userTemp }) => {
  return (
        <Container className="orderspage-container">
            {
                Array(6).fill(0).map(order =>
                    <Order userTemp={userTemp} />
                )
            }
        </Container>
  )
}

export default OrderList
