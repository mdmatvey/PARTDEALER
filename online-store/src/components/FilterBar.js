import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../index';
import { Form } from 'react-bootstrap';

const FilterBar = observer(() => {
    const {product} = useContext(Context);

    const [query, setQuery] = useState("");

    // const [brands, setBrands] = useState([]);
    // useEffect(() => {
    //     setBrands(product.brands)
    // }, [product.brands])

    const categoryToDisplay = [];

    const chooseCategory = (e, category) => {
        if (e.target.checked) {
            categoryToDisplay.push(category);
        } else {
            categoryToDisplay.splice(categoryToDisplay.indexOf(category), 1);
        }

        if (categoryToDisplay.length === 0) {
            product.setCurrentProducts(product.products);
            return
        }
        
        product.setCurrentProducts(product.products.filter(product => categoryToDisplay.includes(product.category)))
    }

    return (
        <div style={{background: "#dedede", width: "100%"}}>
            Бренды:
            <Form style={{display: "grid",  gridTemplateColumns: 'repeat(2, 1fr)', width: '100%', background: "#dedede"}}>
                {product.brands.filter(brand => {
                    if (brand.name.toLowerCase().includes(query.toLowerCase())) {
                        return true;
                    }

                    return false;
                }).map((brand => <Form.Check key={brand.id} label={brand.name} />))}
            </Form>
            <Form className="d-inline-flex">
                <Form.Control
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    type="search"
                    placeholder="Поиск по брендам"
                    className="me-2"
                    aria-label="Search"
                />
            </Form><br/>
            Категории:
            <Form style={{display: "grid",  gridTemplateColumns: 'repeat(2, 1fr)', width: '100%', background: "#dedede"}}>
                {product.categories.map(category => <Form.Check onClick={(e) => chooseCategory(e, category.name)} key={category.id} label={category.name} />)}
            </Form>
        </div>
    );
});

export default FilterBar