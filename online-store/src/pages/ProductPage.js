import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import { fetchOneProduct } from "../components/http/productAPI";
import CountButton from '../components/CountButton';
import CartButton from '../components/CartButton'
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
        <Container className="mt-3">
            <Row>
                <h2 
                    className="d-flex align-items-center"
                >
                    {product.products.title}
                </h2>
            </Row>
            <Row>
                <Col md={4}>
                    <Image style={{objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto'}} width={300} height={300} src={product.products.image} />
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column"
                        style={{width: "100%", height: "100%", fontSize: 24, border: "5 px solid lightgray"}}
                    >
                        <h3>Описание товара:</h3>
                        {product.products.description}
                    </Card>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column"
                        style={{width: 300, height: 300, fontSize: 30, border: "5 px solid lightgray"}}
                    >
                        <h3>{(product.products.price * product.products.count).toFixed(2)}₽</h3>
                        <CountButton item={product.products} count={product.products.count} />
                        Срок: 1 д.<br/>
                        Наличие: 1 шт.
                        <CartButton item={product.products} />
                        Картой онлайн, наличными
                    </Card>
                </Col>
            </Row>
            
        </Container>
    );
});

export default ProductPage;