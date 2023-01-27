import React from 'react'
import { Container } from 'react-bootstrap'
import Order from './Order'

const OrderList = ({ user }) => {
  return (
        <Container className="p-4">
            {
                Array(6).fill(0).map(order =>
                    <Order user={user} />
                )
            }
        </Container>
  )
}

export default OrderList
