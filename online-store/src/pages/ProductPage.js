import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Accordion, Card, Col, Container, Row, Image, Button } from "react-bootstrap";
import { fetchOneProduct } from "../components/http/productAPI";

const ProductPage = () => {
    const [product, setProduct] = useState({info: []});
    const {id} = useParams();

    useEffect(() => {
        fetchOneProduct(id)
            .then(data=>setProduct(data))
    }, []);

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={product.image} />
                </Col>
                <Col md={4}>
                    <Row>
                        <h2 
                            className="d-flex align-items-center justify-content-center"
                        >
                            {product.title}
                        </h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ fontSize: 24}}
                        >
                            5⭐
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: "5 px solid lightgray"}}
                    >
                        <h3>От {product.price}$</h3>
                        <Button>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-5">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            <h1 className="mb-4">Характеристики</h1>
                        </Accordion.Header>
                        <Accordion.Body>
                            {/* {product.description.map((info, index) => 
                                <Row 
                                    key={info.id}
                                    style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
                                >
                                    {info.title}: {info.description}
                                </Row>    
                            )} */}
                            {product.description}
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Row>
        </Container>
    );
};

export default ProductPage;