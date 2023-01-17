import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Context } from '..';
import CountButton from './CountButton';

const CartItem = ({item, cartPage}) => {
    const {cart} = useContext(Context);

    const [count, setCount] = useState(1);

    const chooseProduct = (e, item) => {
        if (e.target.checked) {
            cart.setSelectedItems([...cart.selectedItems, item]);
        } else {
            cart.setSelectedItems(cart.selectedItems.filter(selectedItem => item.id !== selectedItem.id))
        }
    }

    return (
        <Card style={{display: 'grid', alignItems: 'center', gridTemplateColumns: cartPage ? '1fr 3fr 7fr 4fr 1fr' : '3fr 7fr 4fr 1fr', gridTemplateRows: 170, width: '100%', marginBottom: 10}}>
            {cartPage ? <Form.Check onClick={(e) => chooseProduct(e, item)} className="cartChecked" type='checkbox' /> : null}
            <Card.Img style={{height: '100%', objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto', }} src={item.image} />
            <Card.Body>
                <Card.Title style={{fontSize: '1.1rem'}}>{cartPage ? item.title : item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}</Card.Title>
                <Card.Subtitle>{item.category}</Card.Subtitle>
                <Card.Text><h2>{(item.price * count).toFixed(2)}₽</h2></Card.Text>
            </Card.Body>
            <CountButton count={count} setCount={setCount} />
            <Button 
                    onClick={() => cart.setCartItems(cart.cartItems.filter(cartItem => item.id !== cartItem.id))} 
                    className="shadow-none"
                    style={{background: 'none', border: 'none', color: '#000', borderRadius: 0}}
                >
                    X
            </Button>
        </Card>
    );
};

export default CartItem;