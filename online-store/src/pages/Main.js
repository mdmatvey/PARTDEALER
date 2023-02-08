import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { Button, Carousel, Col, Container, Row, Image, Card } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { useNavigate } from 'react-router-dom'
import { CATEGORIES_ROUTE, BRANDS_ROUTE, SHOP_ROUTE } from '../utils/routeConsts'
import { MAINBUTTON_STYLE, PRIMARY_COLOR } from '../utils/uiConsts'
import { BsGearWideConnected } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Logo from '../logo.svg'
import EventStyles from '../styles/EventStyles.css'
import MainStyles from '../styles/MainStyles.css'

const Shop = observer(() => {
  const carouselInterval = 3000
  const navigate = useNavigate()
  const { user } = useContext(Context)

  const [flexDirection, setFlexDirection] = useState('flex-row')
  const [width, setWidth] = useState('')

  useEffect(() => {
    if (user.userWidth < 992) {
      setFlexDirection('flex-column')
      setWidth('w-100')
    } else if (user.userWidth >= 992) {
      setFlexDirection('flex-row')
      setWidth('')
    }
  }, [user.userWidth])

  const [partsAmmount, setPartsAmmount] = useState(0)

  setTimeout(() => {
    setPartsAmmount(prevState => {
      if (prevState < 150) {
        return prevState + 1
      } else {
        return 150
      }
    })
  }, '15')

  return (
        <>
            <div id='topping' style={{ height: 'calc(100vh - 60px)', color: '#fff' }}>
                    <div style={{ height: '100%', paddingLeft: '10%', background: 'rgba(0, 0, 0, 0.6)' }}>
                        <Fade top>
                            <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <Image src={Logo} style={{ width: '100%', height: '100%', padding: 30, margin: '0' }} />
                                    </div>
                                    <div className="flip-card-back">
                                        <h1>Пурт дулер</h1>
                                        <p>Сосируй нашу бипку</p>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                        <Fade left cascade>
                            <div>
                                <span className='d-flex align-items-baseline'><BsGearWideConnected style={{ fontSize: '2rem', marginRight: '10px', color: PRIMARY_COLOR }} /><h1 style={{ marginBottom: 30 }}>{partsAmmount} тысяч товаров в наличии</h1></span>
                                <span className='d-flex align-items-baseline'><FaMapMarkerAlt style={{ fontSize: '2rem', marginRight: '10px', color: PRIMARY_COLOR }} /><h1 style={{ marginBottom: 30 }}>Бесплатная доставка Рязани</h1></span>
                                <span className='d-flex align-items-baseline'><TbTruckDelivery style={{ fontSize: '2rem', marginRight: '10px', color: PRIMARY_COLOR }} /><h1>Отправление СДЕК'ом по всей России</h1></span>
                            </div>
                        </Fade>
                        <Fade bottom>
                            <Button onClick={() => navigate(SHOP_ROUTE)} style={{ ...MAINBUTTON_STYLE, background: PRIMARY_COLOR, borderWidth: '4px', fontSize: '1.75rem', marginLeft: 45, marginTop: '4%' }} id='major-button'>Перейти в каталог</Button>
                        </Fade>
                    </div>
            </div>
            <Container className='pb-5'>
                <Row className={`d-flex ${flexDirection} pt-5`}>
                    <Col className={width} md={5}>
                        <Fade bottom cascade>
                            <h1>About</h1>
                        </Fade>
                        <Fade bottom cascade>
                            <h2>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </h2>
                        </Fade>
                    </Col>
                    <Col className={width} md={7}>
                        <Fade bottom>
                            <Carousel>
                                <Carousel.Item interval={carouselInterval}>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.bmw-egypt.com/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-03.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={carouselInterval}>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.bmw.ru/content/dam/bmw/common/all-models/m-series/m2-coupe/2022/Highlights/bmw-m-series-m2-coupe-gallery-image-impressions-01_890.jpg"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={carouselInterval}>
                                    <img
                                        className="d-block w-100"
                                        src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-automobile/m2coupe/bmw-m2-coupe-mg-01.png"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Fade>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row
                    style={{ textAlign: 'center' }}
                    className="mt-5 pb-5"
                >
                    <Col>
                        <Fade left>
                            <Card
                                className="border-0"
                                style={{ cursor: 'pointer' }}
                                onClick={() => navigate(CATEGORIES_ROUTE)}
                            >
                                <Image
                                    style={{ width: '100%' }}
                                    src="https://snipboard.io/YiIAy9.jpg"
                                />
                                <div className="image-overlay">
                                    <div className="image-title" unselectable="on">К каталогам категорий</div>
                                </div>
                            </Card>
                        </Fade>
                    </Col>
                    <Col>
                        <Fade right>
                            <Card
                                className="border-0"
                                style={{ cursor: 'pointer' }}
                                onClick={() => navigate(BRANDS_ROUTE)}
                            >
                                <Image
                                    style={{ width: '100%' }}
                                    src="https://snipboard.io/YiIAy9.jpg"
                                />
                                <div className="image-overlay">
                                    <div className="image-title" unselectable="on">К каталогам брендов</div>
                                </div>
                            </Card>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </>
  )
})

export default Shop
