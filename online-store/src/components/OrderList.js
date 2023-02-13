import React from 'react'
import { Container } from 'react-bootstrap'
import Order from './Order'

const OrderList = ({ userTemp }) => {
  return (
        <Container className="p-4">
            {
                Array(6).fill(0).map(order =>
                    <Order userTemp={userTemp} />
                )
            }
        </Container>
  )
}

export default OrderList
