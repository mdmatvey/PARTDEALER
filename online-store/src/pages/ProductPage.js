import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, Col, Container, Row, Image } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { fetchOneProduct } from '../components/http/productAPI'
import CountButton from '../components/CountButton'
import CartButton from '../components/CartButton'
import Comments from '../components/Comments'
import { PRIMARY_COLOR } from '../utils/uiConsts'
import { observer } from 'mobx-react-lite'
import { Context } from '..'

const ProductPage = observer(() => {
  const { product, user } = useContext(Context)
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [md1, setMd1] = useState(4)
  const [md2, setMd2] = useState(8)

  useEffect(() => {
    fetchOneProduct(id)
      .then(data => {
        product.setProducts(data)
        setIsLoading(false)
      })
  }, [])

  useEffect(() => {
    if (user.userWidth < 992) {
      setMd1(12)
      setMd2(12)
    } else if (user.userWidth >= 992) {
      setMd1(4)
      setMd2(8)
    }
  }, [user.userWidth])

  return (
        <div className="mt-3 mb-3">
            <Container className="p-4" style={{ background: '#fff' }}>
                <Row>
                    {
                        isLoading
                          ? <h1><Skeleton style={{ width: '50%' }} /></h1>
                          : <h1 className="d-flex align-items-center">{product.products.title}</h1>
                    }
                </Row>
                <Row className='mt-5' style={{ background: '#fff' }}>
                    <Col md={md1}>
                        {
                            isLoading
                              ? <Skeleton style={{ display: 'block', margin: '0 auto', width: 300, height: 300 }} />
                              : <Image style={{ objectFit: 'contain', display: 'block', margin: '0 auto' }} width={300} height={300} src={product.products.image} />
                        }
                    </Col>
                    <Col md={md1}>
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
                                        <h3>Описание товара:</h3>
                                        {product.products.description}
                                    </>
                            }
                        </Card>
                    </Col>
                    <Col md={md1}>
                        <Card
                            className="d-flex flex-column"
                            style={{ width: '100%', height: '100%', fontSize: 30, border: 'none', color: '#fff', background: '#171717', padding: 10 }}
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
                                        <span className='d-flex align-items-center justify-content-between' style={{ marginTop: 'auto' }}>
                                          <CountButton item={product.products} count={product.products.count} />
                                          <CartButton item={product.products} productPage={true} />
                                        </span>
                                        <span style={{ fontSize: '1rem' }}>Картой онлайн, наличными</span>
                                    </>
                            }

                        </Card>
                    </Col>
                </Row>
                <Col md={md2}>
                    <Comments product={product} />
                </Col>
            </Container>
        </div>
  )
})

export default ProductPage
