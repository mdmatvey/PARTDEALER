import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import SortBar from '../components/SortBar';
import { fetchBrands, fetchCategories, fetchProducts } from '../components/http/productAPI';
import Pages from '../components/Pages';
import ProductList from '../components/ProductList';
import FilterBar from '../components/FilterBar';

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
    }, [product.page, product.limit, product.selectedCategory, product.selectedBrand])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <FilterBar />
                </Col>
                <Col md={9}>
                    <SortBar />
                    <ProductList />
                    <Pages />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;