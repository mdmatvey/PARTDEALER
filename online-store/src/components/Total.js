import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { Context } from "..";
import { setEnding } from "../utils/functions"

const Total = observer(({itemsCount}) => {
    const {cart} = useContext(Context);

    const ending = setEnding(itemsCount)

    return (
        <Card>
            Итого: 
            {
                cart.cartItems.length !== 0 
                ? 
                cart.cartItems.map(item => item.price * item.count).reduce((accumulator, currentValue) => accumulator + currentValue).toFixed(2) + '₽' 
                : 
                '.........................................................................' + 0 + '₽'
            }
            <br/>Всего: {itemsCount} товар{ending} - 0.2кг.............................1390₽
            <br/>Скидки:..............................................................-139₽
        </Card>
    );
});

export default Total;