import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, Col, Image } from 'react-bootstrap';
import { ITEM_ROUTE } from '../utils/consts';

const Item = ({item}) => {
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
                <Image width={150} height={150} src={item.img} />
                <div className="mt-1 d-flex justify-content-between">
                    <div className="text-black-50">Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div>{item.rating}</div>
                        <div>⭐</div>
                    </div>
                </div>
                <div>{item.name}</div>
            </Card>
        </Col>
    );
};

export default Item;