import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import { Context } from '..'
import ResponsiveStyles from '../styles/ResponsiveStyles.css'

const OrdersData = observer(({ item }) => {
  const { user } = useContext(Context)

  const [title, setTitle] = useState(item.title)

  useEffect(() => {
    if (user.userWidth < 768) {
      setTitle(item.title.substring(0, 30) + '...')
    } else if (user.userWidth >= 768) {
      setTitle(item.title)
    }
  }, [user.userWidth])

  return (
        <Card className='orderspage-card'>
            <Card.Img style={{ height: '80%', objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto' }} src={item.image} />
            <Card.Body>
                <Card.Title style={{ fontSize: '1.1rem' }}><strong>Brand </strong>{title}</Card.Title>
                <Card.Subtitle>{item.category}</Card.Subtitle>
                <Card.Text><h2>{(item.price * item.count).toFixed(2)}₽</h2></Card.Text>
            </Card.Body>
            <div className='orders-counter' style={{ display: 'block', margin: '0 auto', width: 35, background: 'rgba(0, 0, 0, 0.6)', color: '#fff', textAlign: 'center', padding: '2px 8px', borderRadius: 7 }}>
                {item.count}
            </div>
            {user.userWidth < 533 ? <br/> : null}
        </Card>
  )
})

export default OrdersData
