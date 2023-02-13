import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { Context } from '..'

const OrdersData = observer(({ item }) => {
  const { cart } = useContext(Context)

  return (
        <Card style={{ display: 'grid', alignItems: 'center', gridTemplateColumns: '2fr 6fr 1fr', gridTemplateRows: 170, width: '100%', marginBottom: 10 }}>
            <Card.Img style={{ height: '80%', objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto' }} src={item.image} />
            <Card.Body>
                <Card.Title style={{ fontSize: '1.1rem' }}><strong>Brand </strong>{item.title}</Card.Title>
                <Card.Subtitle>{item.category}</Card.Subtitle>
                <Card.Text><h2>{(item.price * item.count).toFixed(2)}₽</h2></Card.Text>
            </Card.Body>
            <div style={{ width: 35, background: 'rgba(0, 0, 0, 0.6)', color: '#fff', textAlign: 'center', padding: '2px 8px', borderRadius: 7 }}>
                {item.count}
            </div>
        </Card>
  )
})

export default OrdersData
