import React, { useContext } from "react";
import { Accordion, Container, Row } from "react-bootstrap";
import { Context } from "../index";
import OrderItem from "../components/OrderItem";

const OrdersData = () => {
    const {cart} = useContext(Context);
    
    return (
        <Container className="p-4">
            {
                Array(6).fill(0).map(order => 
                    <Accordion className="pb-3">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Заказ №1634</Accordion.Header>
                            <Accordion.Body>
                                <div style={{padding: 20, height: 220, overflowX: 'hidden' }}>
                                    {cart.cartItems.map(item => 
                                        <Row style={{width: '100%', margin: 0}}>
                                            <OrderItem key={item.key} item={item} />    
                                        </Row>
                                    )}
                                </div>
                                <h3>Итого: 1420Р</h3>
                                <h3>Дата: 20.04.2420</h3>
                                <h3>Статус: оплачен</h3>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                )
            }
        </Container>
    );
};

export default OrdersData;