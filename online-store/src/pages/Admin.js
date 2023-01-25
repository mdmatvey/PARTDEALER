import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateProduct from "../components/modals/CreateProduct";
import CreateCategory from "../components/modals/CreateCategory";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false);
    const [typeVisible, setTypeVisible] = useState(false);
    const [itemVisible, setItemVisible] = useState(false);
    
    return (
        <Container className="d-flex flex-column">
            <Button
                onClick={() => setBrandVisible(true)} 
                variant={"outline-dark"} 
                className="mt-3 p-2"
            >
                Добавить бренд
            </Button>
            <Button
                onClick={() => setTypeVisible(true)} 
                variant={"outline-dark"} 
                className="mt-3 p-2"
            >
                Добавить категорию
            </Button>
            <Button
                onClick={() => setItemVisible(true)} 
                variant={"outline-dark"} 
                className="mt-3 p-2"
            >
                Добавить товар
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateProduct show={itemVisible} onHide={() => setItemVisible(false)} />
            <CreateCategory show={typeVisible} onHide={() => setTypeVisible(false)} />
        </Container>
    );
    
};

export default Admin;