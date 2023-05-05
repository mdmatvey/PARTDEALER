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

  /* TEMPORARY CODE */
  const image404Array = [
    'https://svgshare.com/i/sqM.svg',
    'https://svgshare.com/i/srM.svg',
    'https://svgshare.com/i/sq9.svg',
    'https://svgshare.com/i/sr9.svg',
    'https://svgshare.com/i/sqz.svg',
    'https://svgshare.com/i/srA.svg',
    'https://svgshare.com/i/sqo.svg',
    'https://svgshare.com/i/srW.svg',
    'https://svgshare.com/i/spP.svg',
    'https://svgshare.com/i/srX.svg',
    'https://svgshare.com/i/sr0.svg',
    'https://svgshare.com/i/sqb.svg',
    'https://svgshare.com/i/sqV.svg',
    'https://svgshare.com/i/sqA.svg',
    'https://svgshare.com/i/sqc.svg',
    'https://svgshare.com/i/srN.svg',
    'https://svgshare.com/i/srY.svg',
    'https://svgshare.com/i/spQ.svg',
    'https://svgshare.com/i/srZ.svg',
    'https://svgshare.com/i/srB.svg'
  ]

  const getImage404Url = () => image404Array[Math.floor(Math.random() * 20)]
  /* TEMPORARY CODE */

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
                        : <Image style={{ objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto', padding: 25 }} width={150} height={150} src={getImage404Url()} />
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
                  ? <Image style={{ height: '80%', width: '80%', objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto' }} src={item.images[0].imageName} />
                  : <Image style={{ objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto' }} width={150} height={150} src={getImage404Url()} />
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
