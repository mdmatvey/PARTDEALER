import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { Context } from "..";
import CartList from "../components/CartList";

const Cart = observer(() => {
    const {cart} = useContext(Context);

    const [itemsCount, setItemsCount] = useState(cart.cartItems.length);

    useEffect(() => {
        setItemsCount(cart.cartItems.length);
    }, [cart.cartItems]);

    const setEnding = () => {
        const lastNumber = String(itemsCount).length === 1 ? Number(String(itemsCount)[0]) : Number(String(itemsCount)[1])
        let ending = ''

        if ((itemsCount > 10 && itemsCount < 15) || (lastNumber === 0 || (lastNumber > 4 && lastNumber < 10))) {
            ending = 'ов'
        } else if (lastNumber > 1 && lastNumber < 5) {
            ending = 'а'
        }

        return ending
    }

    const ending = setEnding()

    return (
        <Container className="mt-3">
            <Row>
                <div className="d-flex flex-direction-row align-items-end">
                    <h1 style={{margin: 0}}>Корзина</h1>
                    <span style={{fontSize: 24, marginLeft: 20}}>{itemsCount} товар{ending}</span>
                </div>
                <span>
                    <Button 
                        onClick={() => {
                            if (cart.selectedItems.length === cart.cartItems.length) {
                                cart.setSelectedItems([]);
                                for (let i = 0; i < cart.cartItems.length; i++) {
                                    document.getElementsByClassName("cartChecked")[i].children[0].checked = false;
                                }
                            } else {
                                cart.setSelectedItems(cart.cartItems)
                                for (let i = 0; i < cart.cartItems.length; i++) {
                                    document.getElementsByClassName("cartChecked")[i].children[0].checked = true;
                                }
                            }
                        }}                        
                        style={{color: "#000", background: "none", border: "none", borderRadius: "0"}}
                    >
                        Выбрать все
                    </Button>
                    <Button 
                        onClick={() => {
                            const selectedItemIds = cart.selectedItems.map(selectedItem => selectedItem.id) ? cart.selectedItems.map(selectedItem => selectedItem.id) : [];
                            cart.setCartItems(cart.cartItems.filter(cartItem => !selectedItemIds.includes(cartItem.id)).map(item => item));
                            cart.setSelectedItems([]);
                            for (let i = 0; i < cart.cartItems.length; i++) {
                                document.getElementsByClassName("cartChecked")[i].children[0].checked = false;
                            }
                        }}
                        style={{color: "#000", background: "none", border: "none", borderRadius: "0"}}
                    >
                        Х Удалить ({cart.selectedItems.length})
                    </Button>
                </span>
            </Row>
            <div style={{display: 'grid', gridTemplateColumns: '3fr 1fr'}}>
                <CartList cartPage={true} />
                <Card>
                    <Button>Перейти к оформлению</Button>
                    <Card>
                        Итого: 
                        {
                            cart.cartItems.length !== 0 
                            ? 
                            cart.cartItems.map(item => item.price).reduce((accumulator, currentValue) => accumulator + currentValue).toFixed(2) + '₽' 
                            : 
                            '.........................................................................' + 0 + '₽'
                        }
                        <br/>Всего: {itemsCount} товар{ending} - 0.2кг.............................1390₽
                        <br/>Скидки:..............................................................-139₽
                    </Card>
                </Card>
            </div>
            <Row>
                <h2>Часто покупают с товарами из вашей корзины</h2>
            </Row>
        </Container>
    );
});

export default Cart;