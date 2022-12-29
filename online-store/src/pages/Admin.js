import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateItem from "../components/modals/CreateItem";
import CreateType from "../components/modals/CreateType";

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
                Добавить тип
            </Button>
            <Button
                onClick={() => setItemVisible(true)} 
                variant={"outline-dark"} 
                className="mt-3 p-2"
            >
                Добавить товар
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateItem show={itemVisible} onHide={() => setItemVisible(false)} />
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
        </Container>
    );
};

export default Admin;