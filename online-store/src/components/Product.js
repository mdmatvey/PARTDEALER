import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, Col, Image } from 'react-bootstrap'
import { PRODUCT_ROUTE } from '../utils/routeConsts'
import CartButton from './CartButton'
import { Context } from '..'
import EventStyles from '../styles/EventStyles.css'
import ResponsiveStyles from '../styles/ResponsiveStyles.css'

const Product = ({ item }) => {
  const navigate = useNavigate()
  const { user, product } = useContext(Context)

  const [m, setM] = useState(3)

  useEffect(() => {
    if (user.userWidth < 1200) {
      setM(3)
    } else if (user.userWidth < 1400) {
      setM(2)
    } else if (user.userWidth >= 1400) {
      setM(3)
    }
  }, [user.userWidth])

  useEffect(() => {
    if (user.userWidth < 509) {
      product.setDisplayGrid(true)
    }
  }, [user.userWidth])

  const [title, setTitle] = useState(item.title)

  useEffect(() => {
    if (user.userWidth < 537) {
      setTitle(item.title.substring(0, 30) + '...')
    } else if (user.userWidth >= 537) {
      setTitle(item.title)
    }
  }, [user.userWidth])

  return (
    product.displayGrid
      ? <Col className={`m-${m}`}>
            <div className='product-card' style={{ height: '100%', position: 'relative', borderRadius: 5 }}>
                <Card
                    className='pb-5'
                    style={{ cursor: 'pointer', border: 'none', padding: 5 }}
                    onClick={() => {
                      window.scrollTo(0, 0)
                      navigate(PRODUCT_ROUTE + '/' + item.id)
                    }}
                >
                    <Image style={{ objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto' }} width={150} height={150} src={item.image} />
                    <div style={{ fontSize: '1.7rem', display: 'block', marginLeft: 'auto' }}><strong>{item.price.toFixed(2)}₽</strong></div>
                    <div>
                        <div style={{ fontSize: '1rem' }}><strong>Brand </strong>{item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}</div>
                        <div style={{ color: '#808080', marginTop: '5px' }}>4UP03831</div>
                    </div>
                </Card>
                <div className="d-flex" style={{ position: 'absolute', bottom: 0, right: 0 }}>
                    <CartButton item={item} productPage={false} />
                </div>
            </div>
        </Col>
      : <>
            <Card
                className='pt-2 pb-2 product-card list'
                style={{ display: 'grid', alignItems: 'center', gridTemplateColumns: '3fr 7fr 4fr 1fr', gridTemplateRows: 170, width: '100%', marginBottom: 20, cursor: 'pointer', border: 'none' }}
                onClick={(e) => {
                  window.e.stopPropagation()
                  window.scrollTo(0, 0)
                  navigate(PRODUCT_ROUTE + '/' + item.id)
                }}
            >
                <Card.Img style={{ height: '80%', width: '80%', objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto' }} src={item.image} />
                <Card.Body>
                    <Card.Title style={{ fontSize: '1.1rem' }}><strong>Brand</strong>{title}</Card.Title>
                    <Card.Subtitle>{item.category}</Card.Subtitle>
                    <Card.Text><h2>{(item.price).toFixed(2)}₽</h2></Card.Text>
                </Card.Body>
                <div id='cartbutton-list'>
                    <CartButton item={item} productPage={false} />
                </div>
            </Card>
        </>
  )
}

export default Product
