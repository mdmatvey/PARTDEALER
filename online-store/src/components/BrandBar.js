import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { Card, Row } from 'react-bootstrap';

const BrandBar = observer(() => {
    const {item} = useContext(Context)

    return (
        <Row className="d-flex">
            {item.brands.map(brand => 
                <Card
                    style={{width: "auto", cursor: "pointer"}}
                    border={brand.id === item.selectedBrand.id ? 'danger' : 'light'}
                    onClick={() => item.setSelectedBrand(brand)}
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