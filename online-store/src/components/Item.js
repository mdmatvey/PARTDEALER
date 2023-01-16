import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { Card, Col, Image } from 'react-bootstrap';
import { CATEGORIES_ROUTE, BRANDS_ROUTE } from '../utils/routeConsts';
import { Context } from '..';

const Item = ({ path, purpose }) => {
    const navigate = useNavigate();
    const {product} = useContext(Context)

    let route;

    if (purpose === "categories") {
        route = CATEGORIES_ROUTE;
    } else if (purpose === "brands") {
        route = BRANDS_ROUTE;
    }

    return (
        <Col 
            md={3}
            className={"mt-3"}
        >
            <Card 
                style={{width: 150, cursor: 'pointer'}}
                border={"light"}
                onClick={() => {
                    if (!product.categoriesToDisplay.map(category => category.name).includes(path.name)) {
                        product.setCategoriesToDisplay([]);
                        product.setCategoriesToDisplay([...product.categoriesToDisplay, path])
                    }
        
                    navigate(route + '/' + path.id)
                }}
            >
                <Image width={150} height={150} src={path.image} />
                <div>{path.name}</div>
            </Card>
        </Col>
    );
};

export default Item;