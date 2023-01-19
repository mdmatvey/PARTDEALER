import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Container, Row, Form, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import Total from "../components/Total";
import { CART_ROUTE } from "../utils/routeConsts";

const Cart = observer(() => {
    const {cart} = useContext(Context);
    const navigate = useNavigate(); 

    const [itemsCount, setItemsCount] = useState(cart.cartItems.length);

    useEffect(() => {
        setItemsCount(cart.cartItems.length);
    }, [cart.cartItems]);

    return (
        <Container className="mt-3">
            <Row>
                <div className="d-flex flex-direction-row align-items-end">
                    <h1 style={{margin: 0}}>Оформление</h1>
                    <span onClick={() => navigate(CART_ROUTE)} style={{fontSize: 24, marginLeft: 20, cursor: "pointer"}}>Вернуться в корзину</span>
                </div>
            </Row>
            <div style={{display: 'grid', gridTemplateColumns: '3fr 1fr'}}>
                <Container>
                    <Card>
                        <h2>Товары к оплате</h2>
                        <Container className="d-flex">
                            {cart.cartItems.map(cartItem => <><Image style={{objectFit: 'contain'}} width={50} height={50} src={cartItem.image} /> x {cartItem.count}</>)}
                        </Container>
                    </Card>
                    <Card>
                        <h2>Способ получения заказа</h2>
                        <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
    
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form>
                    </Card>
                    <div className="d-flex">
                        <Card style={{width: "50%"}}>
                            <h2>Получатель</h2>
                            Вася пупкин
                        </Card>
                        <Card style={{width: "50%"}}>
                            <h2>Способ оплаты</h2>
                            Карта
                        </Card>   
                    </div>
                </Container>
                <Card>
                    <Total itemsCount={itemsCount} />
                    <Button onClick={() => navigate()}>Оформить заказ</Button>
                </Card>
            </div>
        </Container>
    );
});

export default Cart;