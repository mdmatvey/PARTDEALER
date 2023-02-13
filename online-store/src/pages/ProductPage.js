import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Col, Row, Image } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { fetchOneProduct } from '../components/http/productAPI'
import CountButton from '../components/CountButton'
import CartButton from '../components/CartButton'
import Comments from '../components/Comments'
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
  const [md3, setMd3] = useState(8)

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
      setMd3(12)
    } else if (user.userWidth >= 1077) {
      setMd1(4)
      setMd2(4)
      setMd3(8)
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
                        <Fade left>
                          {
                              isLoading
                                ? <Skeleton style={{ display: 'block', margin: '0 auto', width: 300, height: 300 }} />
                                : <Image style={{ objectFit: 'contain', display: 'block', margin: '0 auto', width: '100%' }} width={300} height={300} src={product.products.image} />
                          }
                        </Fade>
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
                                    : <div style={{ fontSize: '1.7rem' }}>
                                          <h3 style={{ textDecoration: 'underline', textDecorationColor: '#00CCCC', textDecorationThickness: 5 }}><strong>Описание товара:</strong></h3>
                                          {product.products.description}
                                      </div>
                              }
                          </Card>
                        </Fade>
                    </Col>
                    <Col md={md2} className='productpage-col'>
                        <Fade right>
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
                    </Col>
                </Row>
                <Col md={md3}>
                    <Fade bottom>
                      <Comments product={product} />
                    </Fade>
                </Col>
            </div>
        </div>
  )
})

export default ProductPage
