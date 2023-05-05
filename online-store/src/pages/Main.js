import React, { useContext, useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { Button, Carousel, Col, Container, Row, Image, Card } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { useNavigate } from 'react-router-dom'
import { CATEGORIES_ROUTE, BRANDS_ROUTE, SHOP_ROUTE } from '../utils/routeConsts'
import { PRIMARY_COLOR } from '../utils/uiConsts'
import { BsGearWideConnected } from 'react-icons/bs'
import { TbTruckDelivery } from 'react-icons/tb'
import { FaMapMarkerAlt } from 'react-icons/fa'
import Logo from '../logo.svg'
import MainStyles from '../styles/MainStyles.css'
import EventStyles from '../styles/EventStyles.css'

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
            <div id='topping' style={{ minHeight: '100vh', color: '#fff' }}>
                <div style={{ minHeight: '100vh', paddingLeft: '10%', background: 'rgba(0, 0, 0, 0.6)' }}>
                    <Fade top>
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <Image src={Logo} style={{ width: '100%', height: '100%', margin: '0' }} />
                                </div>
                                <div className="flip-card-back">
                                    <h1>Магазин автозапчастей</h1>
                                    <h5>Телефон: 8 (999) 123 45-67</h5>
                                    <h5>Телеграм: @partdealer</h5>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Fade left cascade>
                        <div>
                            <span className='d-flex align-items-baseline advantages-span'><BsGearWideConnected style={{ marginRight: '10px', color: PRIMARY_COLOR }} /><h2 style={{ marginBottom: 30 }}>{partsAmmount} тысяч товаров в наличии</h2></span>
                            <span className='d-flex align-items-baseline advantages-span'><FaMapMarkerAlt style={{ marginRight: '10px', color: PRIMARY_COLOR }} /><h2 style={{ marginBottom: 30 }}>Бесплатная доставка Рязани</h2></span>
                            <span className='d-flex align-items-center advantages-span'><TbTruckDelivery style={{ marginRight: '10px', color: PRIMARY_COLOR }} /><h2>Отправление СДЕК'ом по всей России</h2></span>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <button
                            onClick={() => {
                              window.scrollTo(0, 0)
                              navigate(SHOP_ROUTE)
                            }}
                            style={{ background: PRIMARY_COLOR, borderWidth: '4px', padding: '3px 9px', fontWeight: 500, color: '#000', border: '3px solid #00CCCC', borderRadius: 5, fontSize: '1.75rem', margin: '4% 0 0 45px' }}
                            id='major-button'
                            type='button'
                        >
                            Перейти в каталог
                        </button>
                        <br/>
                    </Fade>
                </div>
            </div>
            <Container>
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
            <Container
                style={{ textAlign: 'center' }}
                className="cataloge-container mt-5 pb-5"
            >
                <Col style={{ display: 'block', margin: '0 auto', maxWidth: 600 }}>
                    {
                        user.userWidth < 768
                          ? <Fade bottom>
                            <Card
                                className="border-0"
                                style={{ cursor: 'pointer', width: '100%' }}
                                onClick={() => {
                                  window.scrollTo(0, 0)
                                  navigate(CATEGORIES_ROUTE)
                                }}
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
                          : <Fade left>
                            <Card
                                className="border-0"
                                style={{ cursor: 'pointer', width: '100%' }}
                                onClick={() => {
                                  window.scrollTo(0, 0)
                                  navigate(CATEGORIES_ROUTE)
                                }}
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
                    }
                </Col>
                <Col style={{ display: 'block', margin: '0 auto', maxWidth: 600 }}>
                    {
                        user.userWidth < 768
                          ? <Fade bottom>
                            <Card
                                className="border-0"
                                style={{ cursor: 'pointer', width: '100%' }}
                                onClick={() => {
                                  window.scrollTo(0, 0)
                                  navigate(BRANDS_ROUTE)
                                }}
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
                          : <Fade right>
                            <Card
                                className="border-0"
                                style={{ cursor: 'pointer', width: '100%' }}
                                onClick={() => {
                                  window.scrollTo(0, 0)
                                  navigate(BRANDS_ROUTE)
                                }}
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
                    }
                </Col>
            </Container>
        </>
  )
})

export default Shop
