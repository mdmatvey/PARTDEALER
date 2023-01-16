import { observer } from 'mobx-react-lite';
import React, { useEffect, useContext } from 'react';
import { Context } from '../index';
import { Button, Row, Form } from 'react-bootstrap';
import Item from './Item';
import { fetchBrands, fetchCategories } from './http/productAPI';

const Categories = observer(({ purpose }) => {
    const {product} = useContext(Context);

    let purp = "";
    let path;

    if (purpose === "categories") {
        purp = "категориям";
        path = product.categories;
        useEffect(() => {
            fetchCategories()
                .then(data=>product.setCategories(data));
        }, [])
    } else if (purpose === "brands") {
        purp = "брендам";
        path = product.brands;
        useEffect(() => {
            fetchBrands()
                .then(data=>product.setBrands(data));
        }, [])
    }

    return (
        <>
            <h2>
                По {purp}:
            </h2>
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder={"Поиск по " + purp}
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Поиск</Button>
          </Form>
            <Row className="d-flex">
                {
                    path.map(item => 
                        <Item key={item.key} path={item} purpose={purpose} />
                    )
                }
            </Row>
        </>
    );
});

export default Categories;