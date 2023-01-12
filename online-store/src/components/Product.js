import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Card, Col, Image, Form } from 'react-bootstrap';
import { ITEM_ROUTE } from '../utils/routeConsts';

const Product = ({item}) => {
    const navigate = useNavigate();

    const [count, setCount] = useState(1);

    const changeCount = (num) => {
        if (Number(count) + num > 0) {
            setCount(() => Number(count) + num)
        }
    }

    return (
        <Col className='m-3'>
            <div style={{background: '#a8a8a8', height: '100%', position: 'relative'}}>
                <Card 
                    className='pb-5'
                    style={{cursor: 'pointer', border: 'none', borderRadius: 0, background: '#a8a8a8'}}
                    onClick={() => navigate(ITEM_ROUTE + '/' + item.id)}
                >
                    <Image style={{objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto'}} width={150} height={150} src={item.image} />
                    <div>
                        <div><strong>Brand </strong>{item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}</div>
                        <div style={{marginTop: '5px'}}>4UP03831</div>
                    </div>
                </Card>
                <div className="d-flex" style={{position: 'absolute', bottom: 0}}>
                    <div className="d-flex col-md-6">
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
                    <Button style={{display: 'block', marginLeft: 'auto', background: '#fff', color: '#000', border: 'none', borderRadius: 0}}>🛒{(item.price * count).toFixed(2)}₽</Button>
                </div>
            </div>
        </Col>
    );
};

export default Product;