import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Container, Row, Image } from "react-bootstrap";
import { fetchOneProduct } from "../components/http/productAPI";
import CountButton from '../components/CountButton';
import CartButton from '../components/CartButton'
import Comments from "../components/Comments";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const ProductPage = observer(() => {
    const {product} = useContext(Context);
    const {id} = useParams();

    useEffect(() => {
        fetchOneProduct(id)
            .then(data=>product.setProducts(data))
    }, []);

    return (
        <Container>
            <Row className="mt-5 mb-4">
                <h1 
                    className="d-flex align-items-center"
                >
                    {product.products.title}
                </h1>
            </Row>
            <Row>
                <Col md={4}>
                    <Image style={{objectFit: 'contain', display: 'block', margin: '0 auto'}} width={300} height={300} src={product.products.image} />
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column"
                        style={{width: "100%", height: "100%", fontSize: 24, border: "none"}}
                    >
                        <h3>Описание товара:</h3>
                        {product.products.description}
                    </Card>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column"
                        style={{width: "100%", height: "100%", fontSize: 30, border: "none", borderRadius: 0, background: "#ededed", padding: 10}}
                    >
                        <h3 style={{marginBottom: 0}}>Цена</h3>
                        <span>{(product.products.price * product.products.count).toFixed(2)}₽</span>
                        <CountButton item={product.products} count={product.products.count} />
                        Срок: 1 д.<br/>
                        Наличие: 1 шт.
                        <CartButton item={product.products} />
                        Картой онлайн, наличными
                    </Card>
                </Col>
            </Row>
            <Col md={8}>
                <Comments product={product} />
            </Col>
        </Container>
    );
});

export default ProductPage;