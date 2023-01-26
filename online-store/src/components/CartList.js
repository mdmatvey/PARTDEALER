import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Row } from 'react-bootstrap';
import CartItem from './CartItem';

const CartList = observer(({cartPage}) => {
    const {cart} = useContext(Context);

    return (
        <div style={{padding: 20, height: '80%', overflowX: cartPage ? 'visible' : 'hidden' }}>
                {cart.cartItems.map(item => 
                    <Row style={{width: '100%', margin: 0}}>
                        <CartItem key={item.key} item={item} cartPage={cartPage} />    
                    </Row>
                )}
        </div>
    );
});

export default CartList;