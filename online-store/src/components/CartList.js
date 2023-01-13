import { observer } from 'mobx-react-lite';
import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../index';
import { Col, Row } from 'react-bootstrap';
import CartItem from './CartItem';

const CartList = observer(() => {
    const {cart} = useContext(Context);

    return (
            <div style={{padding: 20, height: '80%', overflowY: 'scroll', overflowX: 'hidden'}}>
                <Row style={{width: '100%', margin: 0}}>
                    {cart.cartItems.map(item => 
                        <CartItem key={item.key} item={item} />    
                    )}
                </Row>
            </div>
    );
});

export default CartList;