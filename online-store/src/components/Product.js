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

  const [title, setTitle] = useState(item.description)

  useEffect(() => {
    if (user.userWidth < 537) {
      setTitle(item.description.substring(0, 30) + '...')
    } else if (user.userWidth >= 537) {
      setTitle(item.description)
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
                      navigate(PRODUCT_ROUTE + '/' + item.guid)
                    }}
                >
                    {
                      item.images.length !== 0
                        ? <Image style={{ objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto' }} width={150} height={150} src={item.images[0].imageName} />
                        : <Image style={{ objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto' }} width={150} height={150} src={'https://media.istockphoto.com/id/1147544807/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BD%D0%B5%D1%82-thumbnail-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9.jpg?s=612x612&w=0&k=20&c=qA0VzNlwzqnnha_m2cHIws9MJ6vRGsZmys335A0GJW4='} />
                    }
                    <div style={{ fontSize: '1.7rem', display: 'block', marginLeft: 'auto' }}><strong>{item.price}₽</strong></div>
                    <div>
                        <div style={{ fontSize: '1rem' }}><strong>{item.brand} </strong>{item.description.length > 50 ? item.description.substring(0, 50) + '...' : item.description}</div>
                        <div style={{ color: '#808080', marginTop: '5px' }}>4UP03831</div>
                    </div>
                </Card>
                <div className="d-flex" style={{ position: 'absolute', bottom: 0, right: 0 }}>
                    <CartButton item={item} productPage={false} />
                </div>
            </div>
        </Col>
      : <>
          <div className='product-card list' style={{ height: '100%', position: 'relative' }}>
            <Card
                className='pt-2 pb-2'
                style={{ display: 'grid', alignItems: 'center', gridTemplateColumns: '3fr 7fr 4fr', gridTemplateRows: 170, width: '100%', marginBottom: 20, cursor: 'pointer', border: 'none' }}
                onClick={() => {
                  window.scrollTo(0, 0)
                  navigate(PRODUCT_ROUTE + '/' + item.guid)
                }}
            >
              {
                item.images.length !== 0
                  ? <Card.Img style={{ height: '80%', width: '80%', objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto' }} src={item.images[0].imageName} />
                  : <Image style={{ objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto' }} width={150} height={150} src={'https://media.istockphoto.com/id/1147544807/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BD%D0%B5%D1%82-thumbnail-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9.jpg?s=612x612&w=0&k=20&c=qA0VzNlwzqnnha_m2cHIws9MJ6vRGsZmys335A0GJW4='} />
              }
                <Card.Body>
                    <Card.Title style={{ fontSize: '1.1rem' }}><strong>{item.brand} </strong>{title}</Card.Title>
                    <Card.Subtitle>{item.category}</Card.Subtitle>
                    <Card.Text><h2>{item.price}₽</h2></Card.Text>
                </Card.Body>
            </Card>
            <div id='cartbutton-list' style={{ position: 'absolute', top: '35%', right: '5%' }}>
                <CartButton item={item} productPage={false} />
            </div>
          </div>
        </>
  )
}

export default Product
