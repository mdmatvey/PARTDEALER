import React from "react";
import { Card, Col, Container, Row, Image, Button } from "react-bootstrap";

const ItemPage = () => {
    const item = {id: 1, name: 'iPhone 12 PRO', price: 25000, rating: 5, img: 'https://ipixel.ru/upload/iblock/06c/oan8l5hmnd66klj7g3v8qnmc2zorbw9r.jpg'}
    const description = [
        {id: 1, title: 'Оперативная память', description: '4 гб'},
        {id: 2, title: 'Камера', description: '228 мп'},
        {id: 3, title: 'Процесор', description: 'Зеон'},
        {id: 4, title: 'Кол-во ядер', description: '2'},
        {id: 5, title: 'Аккумулятор', description: '1 мАч'}
    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={item.img} />
                </Col>
                <Col md={4}>
                    <Row>
                        <h2 
                            className="d-flex align-items-center justify-content-center"
                        >
                            {item.name}
                        </h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ fontSize: 24}}
                        >
                            {item.rating}⭐
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: "5 px solid lightgray"}}
                    >
                        <h3>От {item.price} руб.</h3>
                        <Button>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-5">
                <h1 className="mb-4">Характеристики</h1>
                {description.map((info, index) => 
                    <Row 
                        key={info.id}
                        style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}
                    >
                        {info.title}: {info.description}
                    </Row>    
                )}
            </Row>
        </Container>
    );
};

export default ItemPage;