import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Col, Row, Image } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { fetchOneProduct } from '../components/http/productAPI'
import CountButton from '../components/CountButton'
import CartButton from '../components/CartButton'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../utils/uiConsts'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import ResponsiveStyles from '../styles/ResponsiveStyles.css'

const ProductPage = observer(() => {
  const { product, user } = useContext(Context)
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [md1, setMd1] = useState(4)
  const [md2, setMd2] = useState(4)

  useEffect(() => {
    fetchOneProduct(id)
      .then(data => {
        product.setProducts(data)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    if (user.userWidth < 1077) {
      setMd1(12)
      setMd2(6)
    } else if (user.userWidth >= 1077) {
      setMd1(4)
      setMd2(4)
    }
  }, [user.userWidth])

  return (
        <div className="mt-3 mb-3">
            <div className="p-4" style={{ background: '#fff' }} id='productpage-container'>
                <Fade top>
                  <Row>
                      {
                          isLoading
                            ? <h1><Skeleton style={{ width: '50%' }} /></h1>
                            : <h1 className="d-flex align-items-center">{product.products.title}</h1>
                      }
                  </Row>
                </Fade>
                <Row className='mt-5' style={{ background: '#fff' }}>
                    <Col md={md1} className='productpage-col'>
                        {
                          user.userWidth < 768
                            ? <Fade bottom>
                              {
                                  isLoading
                                    ? <Skeleton style={{ display: 'block', margin: '0 auto', width: 300, height: 300 }} />
                                    : product.products.images.length !== 0
                                      ? <Image style={{ objectFit: 'contain', display: 'block', margin: '0 auto', width: '100%' }} width={300} height={300} src={product.products.images[0].imageName} />
                                      : <Image style={{ objectFit: 'contain', display: 'block', margin: '0 auto', width: '100%' }} width={300} height={300} src={'https://media.istockphoto.com/id/1147544807/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BD%D0%B5%D1%82-thumbnail-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9.jpg?s=612x612&w=0&k=20&c=qA0VzNlwzqnnha_m2cHIws9MJ6vRGsZmys335A0GJW4='} />
                              }
                            </Fade>
                            : <Fade left>
                            {
                                isLoading
                                  ? <Skeleton style={{ display: 'block', margin: '0 auto', width: 300, height: 300 }} />
                                  : product.products.images.length !== 0
                                    ? <Image style={{ objectFit: 'contain', display: 'block', margin: '0 auto', width: '100%' }} width={300} height={300} src={product.products.images[0].imageName} />
                                    : <Image style={{ objectFit: 'contain', display: 'block', margin: '0 auto', width: '100%' }} width={300} height={300} src={'https://media.istockphoto.com/id/1147544807/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BD%D0%B5%D1%82-thumbnail-%D0%B8%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9.jpg?s=612x612&w=0&k=20&c=qA0VzNlwzqnnha_m2cHIws9MJ6vRGsZmys335A0GJW4='} />
                            }
                          </Fade>
                        }
                    </Col>
                    <Col md={md2} className='productpage-col'>
                        <Fade>
                          <Card
                              className="d-flex flex-column"
                              style={{ width: '100%', height: '100%', fontSize: 24, border: 'none' }}
                          >
                              {
                                  isLoading
                                    ? <>
                                          <h3><Skeleton style={{ width: '55%' }} /></h3>
                                          <Skeleton />
                                          <Skeleton style={{ width: '90%' }} />
                                          <Skeleton style={{ width: '95%' }} />
                                          <Skeleton style={{ width: '40%' }} />
                                      </>
                                    : <>
                                          <div style={{ fontSize: '1.7rem' }}>
                                              <h3 style={{ fontSize: '2.4rem', textDecoration: 'underline', textDecorationColor: '#00CCCC', textDecorationThickness: 5 }}><strong>Описание товара:</strong></h3>
                                              <strong>Название: </strong> {product.products.description}
                                          </div>
                                          <div style={{ fontSize: '1.7rem' }}>
                                            <strong>Бренд: </strong>{product.products.brand}
                                          </div>
                                          <div style={{ fontSize: '1.7rem' }}>
                                            <strong>Артикул: </strong>{product.products.article}
                                          </div>
                                          <div style={{ fontSize: '1.7rem' }}>
                                            <strong>Номенклатура: </strong>{product.products.guid}
                                          </div>
                                      </>
                              }
                          </Card>
                        </Fade>
                    </Col>
                    <Col md={md2} className='productpage-col'>
                        {
                          user.userWidth < 768
                            ? <Fade bottom>
                            <Card
                                className="d-flex flex-column"
                                style={{ width: '100%', height: '100%', fontSize: 30, border: 'none', color: '#fff', background: SECONDARY_COLOR, padding: 20 }}
                            >
                                {
                                    isLoading
                                      ? <>
                                            <h3 style={{ marginBottom: 0 }}><Skeleton style={{ width: '15%' }} /></h3>
                                            <span><Skeleton style={{ width: '30%' }} /></span>
                                            <Skeleton style={{ width: '30%' }} />
                                            <Skeleton style={{ width: '30%' }} />
                                            <Skeleton style={{ width: '50%' }} />
                                            <Skeleton />
                                            <Skeleton style={{ width: '80%' }} />
                                        </>
                                      : <>
                                            <span style={{ color: PRIMARY_COLOR, fontWeight: 'bold', fontSize: '3rem' }}>{(product.products.price * product.products.count).toFixed(2)}₽</span>
                                            Срок: 1 д.<br/>
                                            Наличие: 1 шт.
                                            <span className='mb-1' id='productpage-total'>
                                              <CountButton item={product.products} count={product.products.count} productPage={true} />
                                              <CartButton item={product.products} productPage={true} />
                                            </span>
                                            <span style={{ fontSize: '1rem' }}>Картой онлайн, наличными</span>
                                        </>
                                }

                            </Card>
                          </Fade>
                            : <Fade right>
                            <Card
                                className="d-flex flex-column"
                                style={{ width: '100%', height: '100%', fontSize: 30, border: 'none', color: '#fff', background: SECONDARY_COLOR, padding: 20 }}
                            >
                                {
                                    isLoading
                                      ? <>
                                            <h3 style={{ marginBottom: 0 }}><Skeleton style={{ width: '15%' }} /></h3>
                                            <span><Skeleton style={{ width: '30%' }} /></span>
                                            <Skeleton style={{ width: '30%' }} />
                                            <Skeleton style={{ width: '30%' }} />
                                            <Skeleton style={{ width: '50%' }} />
                                            <Skeleton />
                                            <Skeleton style={{ width: '80%' }} />
                                        </>
                                      : <>
                                            <span style={{ color: PRIMARY_COLOR, fontWeight: 'bold', fontSize: '3rem' }}>{(product.products.price * product.products.count).toFixed(2)}₽</span>
                                            Срок: 1 д.<br/>
                                            Наличие: 1 шт.
                                            <span className='mb-1' id='productpage-total'>
                                              <CountButton item={product.products} count={product.products.count} productPage={true} />
                                              <CartButton item={product.products} productPage={true} />
                                            </span>
                                            <span style={{ fontSize: '1rem' }}>Картой онлайн, наличными</span>
                                        </>
                                }

                            </Card>
                          </Fade>
                        }
                    </Col>
                </Row>
            </div>
        </div>
  )
})

export default ProductPage
