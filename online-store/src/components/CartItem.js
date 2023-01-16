import React, { useContext, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Context } from '..';
import CountButton from './CountButton';

const CartItem = ({item}) => {
    const {cart} = useContext(Context);

    const [count, setCount] = useState(1);

    return (
        <Card style={{display: 'grid', alignItems: 'center', gridTemplateColumns: '3fr 7fr 4fr 1fr', gridTemplateRows: 170, width: '100%', marginBottom: 10}}>
            <Card.Img src={item.image} />
            <Card.Body>
                <Card.Title style={{fontSize: '1.1rem'}}>{item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}</Card.Title>
                <Card.Subtitle>{item.category}</Card.Subtitle>
                <Card.Text><h2>{(item.price * count).toFixed(2)}₽</h2></Card.Text>
            </Card.Body>
            <CountButton count={count} setCount={setCount} />
            <Button 
                    onClick={() => cart.removeCartItem(item.id)} 
                    className="shadow-none"
                    style={{background: 'none', border: 'none', color: '#000', borderRadius: 0}}
                >
                    X
            </Button>
        </Card>
    );
};

export default CartItem;