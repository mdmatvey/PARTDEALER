import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Row } from 'react-bootstrap';
import Product from './Product';

const ProductList = observer(() => {
    const {product} = useContext(Context)

    return (
        <Row className="d-flex">
            {product.products.map(product => 
                <Product key={product.key} item={product} />    
            )}
        </Row>
    );
});

export default ProductList;