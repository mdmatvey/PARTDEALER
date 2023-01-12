import { observer } from 'mobx-react-lite';
import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../index';
import { Row } from 'react-bootstrap';
import Product from './Product';

const ProductList = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        product.setCurrentProducts(product.products)
    }, [product.products]);

    return (
        <main style={{background: '#dedede', padding: 10}}>
            <Row style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', width: '100%'}}>
                {product.currentProducts.map(product => 
                    <Product key={product.key} item={product} />    
                )}
            </Row>
        </main>
    );
});

export default ProductList;