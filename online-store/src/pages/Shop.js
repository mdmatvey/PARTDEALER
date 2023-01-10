import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import BrandBar from '../components/BrandBar';
import { fetchBrands, fetchCategories, fetchProducts } from '../components/http/productAPI';
import Pages from '../components/Pages';
import ProductList from '../components/ProductList';
import TypeBar from '../components/TypeBar';

const Shop = observer(() => {
    const {product} = useContext(Context);

    useEffect(() => {
        fetchCategories()
            .then(data=>product.setCategories(data));

        fetchBrands()
            .then(data=>product.setBrands(data))

        fetchProducts(null, null, 1, product.limit)
            .then(data=>{
                product.setProducts(data);
                // product.setTotalCount(data.length)
            });
    }, [])

    useEffect(() => {
        fetchProducts(product.selectedCategory.id, product.selectedBrand.id, product.page, product.limit)
            .then(data=>{
                product.setProducts(data);
                // product.setTotalCount(data.length)
            });
    }, [product.page, product.selectedCategory, product.selectedBrand])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    {/* <TypeBar /> */}
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <ProductList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;