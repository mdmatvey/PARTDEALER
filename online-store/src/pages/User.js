import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import UserData from "../components/UserData";
import OrdersData from "../components/OrdersData";
import { NAVLINK_STYLE } from "../utils/uiConsts";

const User = () => {
    const [userDataDisplay, setUserDataDisplay] = useState(true);
    const [ordersDataDisplay, setOrdersDataDisplay] = useState(false)
    
    return (
        <Container className="d-flex">
            <Container className="mt-5 mb-5 p-4" style={{background: "#fff", display: "grid", gridTemplateColumns: "2fr 1fr"}}>
                {userDataDisplay ? <UserData /> : null}
                {ordersDataDisplay ? <OrdersData /> : null}
                <Container className="d-flex align-items-start flex-column p-4">
                    <Button 
                        onClick={(e) => {
                            setUserDataDisplay(true);
                            setOrdersDataDisplay(false);
                            document.getElementById("OrdersButton").style.fontWeight = "normal";
                            e.target.style.fontWeight = "bold";
                        }} 
                        style={{...NAVLINK_STYLE, fontSize: "2.5rem", fontWeight: "bold"}}
                        id="DataButton"
                    >
                        Данные
                    </Button>
                    <Button 
                        onClick={(e) => {
                            setUserDataDisplay(false);
                            setOrdersDataDisplay(true);
                            document.getElementById("DataButton").style.fontWeight = "normal";
                            e.target.style.fontWeight = "bold";
                        }} 
                        style={{...NAVLINK_STYLE, fontSize: "2.5rem"}}
                        id="OrdersButton"
                    >
                        Заказы
                    </Button>
                </Container>
            </Container>
        </Container>
    );
    
};

export default User;