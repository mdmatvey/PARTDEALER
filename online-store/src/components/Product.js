import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, Col, Image } from 'react-bootstrap';
import { ITEM_ROUTE } from '../utils/routeConsts';
import CartButton from './CartButton'

const Product = ({item}) => {
    const navigate = useNavigate();

    return (
        <Col className='m-3'>
            <div style={{background: '#a8a8a8', height: '100%', position: 'relative'}}>
                <Card 
                    className='pb-5'
                    style={{cursor: 'pointer', border: 'none', borderRadius: 0, background: '#a8a8a8'}}
                    onClick={() => navigate(ITEM_ROUTE + '/' + item.id)}
                >
                    <Image style={{objectFit: 'contain', marginLeft: 'auto', marginRight: 'auto'}} width={150} height={150} src={item.image} />
                    <div style={{display: 'block', marginLeft: 'auto'}}><strong>{item.price.toFixed(2)}₽</strong></div>
                    <div>
                        <div><strong>Brand </strong>{item.title.length > 50 ? item.title.substring(0, 50) + '...' : item.title}</div>
                        <div style={{marginTop: '5px'}}>4UP03831</div>
                    </div>
                </Card>
                <div className="d-flex" style={{position: 'absolute', bottom: 0, right: 0}}>   
                    <CartButton item={item} />
                </div>
            </div>
        </Col>
    );
};

export default Product;