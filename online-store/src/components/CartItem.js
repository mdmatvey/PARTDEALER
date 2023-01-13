import React, { useContext, useState } from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { Context } from '..';

const CartItem = ({item}) => {
    const {cart} = useContext(Context);

    const [count, setCount] = useState(1);

    const changeCount = (num) => {
        if (Number(count) + num > 0) {
            setCount(() => Number(count) + num)
        }
    }

    return (
        <Card style={{display: 'grid', alignItems: 'center', gridTemplateColumns: '3fr 7fr 4fr 1fr', width: '100%', marginBottom: 10}}>
            <Card.Img style={{objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto'}} src={item.image} />
            <Card.Body>
                <Card.Title style={{fontSize: '1.1rem'}}>{item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}</Card.Title>
                <Card.Subtitle>{item.category}</Card.Subtitle>
                <Card.Text><h2>{(item.price * count).toFixed(2)}₽</h2></Card.Text>
            </Card.Body>
            <div className="d-flex col-md-6" style={{width: '90%'}}>
                <Button
                    onClick={() => changeCount(-1)} 
                    className="shadow-none"
                    style={{background: '#919090', border: 'none', borderRadius: 0}}
                >
                    -
                </Button>
                <Form>
                    <Form.Control 
                        className="form-inline text-center shadow-none"
                        value={count} 
                        style={{border: 'none', borderRadius: 0}}
                        onChange={e => isNaN(Number(e.target.value)) ? NaN : setCount(e.target.value)}
                        type="text" 
                        minLength="0" 
                        maxLength="2"
                    />
                </Form>
                <Button 
                    onClick={() => changeCount(1)} 
                    className="shadow-none"
                    style={{background: '#4a4a4a', border: 'none', borderRadius: 0}}
                >
                    +
                </Button>
            </div>
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