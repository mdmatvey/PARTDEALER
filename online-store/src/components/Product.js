import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, Col, Image } from 'react-bootstrap';
import { ITEM_ROUTE } from '../utils/routeConsts';

const Product = ({item}) => {
    const navigate = useNavigate();

    return (
        <Col 
            md={3}
            className={"mt-3"}
        >
            <Card 
                style={{width: 150, cursor: 'pointer'}}
                border={"light"}
                onClick={() => navigate(ITEM_ROUTE + '/' + item.id)}
            >
                <Image width={150} height={150} src={item.image} />
                <div className="mt-1 d-flex justify-content-between">
                    <div className="text-black-50">{item.category}</div>
                    <div className="d-flex align-items-center">
                        <div>5</div>
                        <div>⭐</div>
                    </div>
                </div>
                <div>{item.title}</div>
            </Card>
        </Col>
    );
};

export default Product;