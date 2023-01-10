import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
    const {product} = useContext(Context)

    return (
        <Row className="d-flex">
            {product.brands.map(brand => 
                <Card
                    style={{width: "auto", cursor: "pointer"}}
                    border={brand.id === product.selectedBrand.id ? 'danger' : 'light'}
                    onClick={() => product.setSelectedBrand(brand)}
                    key={brand.id}
                    className="p-3"
                >
                    {brand.name}
                </Card>    
            )}
        </Row>
    );
});

export default BrandBar;