import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '../index';
import { ListGroup } from 'react-bootstrap';

const TypeBar = observer(() => {
    const {product} = useContext(Context);

    return (
        <ListGroup>
            {product.categories.map(category => 
                <ListGroup.Item 
                    style={{cursor: "pointer"}}
                    active={category.id === product.selectedType.id}
                    onClick={() => product.setSelectedType(category)}
                    key={category.id}
                >
                    {category.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
});

export default TypeBar