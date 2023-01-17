import React, { useContext } from 'react';
import { Context } from '../index';
import { Button } from 'react-bootstrap';

const Product = ({item}) => {
    const {cart} = useContext(Context)

    return (
        <Button 
            onClick={() => {
                if (!cart.cartItems.map(item => item.id).includes(item.id)) {
                    cart.setCartItems([...cart.cartItems, item])
                }
            }}
            style={{background: '#fff', color: '#000', border: 'none', borderRadius: 0}}
        >
                🛒 В корзину
        </Button>
    );
};

export default Product;