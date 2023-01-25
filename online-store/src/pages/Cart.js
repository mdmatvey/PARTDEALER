import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "..";
import CartList from "../components/CartList";
import Total from "../components/Total";
import { SHOP_ROUTE, ORDERING_ROUTE } from "../utils/routeConsts";
import { setEnding } from "../utils/functions"
import { PRIMARY_COLOR } from "../utils/uiConsts";

const Cart = observer(() => {
    const {product, cart} = useContext(Context);
    const navigate = useNavigate();

    const [itemsCount, setItemsCount] = useState(cart.cartItems.length);

    useEffect(() => {
        setItemsCount(cart.cartItems.length);
    }, [cart.cartItems]);

    const ending = setEnding(itemsCount)

    return (
        <Container className="mt-3">
            <Row>
                <div className="d-flex flex-direction-row align-items-end">
                    <h1 style={{margin: 0}}>Корзина</h1>
                    <span style={{fontSize: 24, marginLeft: 20}}>{itemsCount} товар{ending}</span>
                </div>
            </Row>
                {
                    itemsCount === 0 
                    ?
                        <div 
                            className="d-flex flex-column align-items-center mt-5" 
                            style={{display: "block", paddingTop: "5%", textAlign: "center"}}
                        >
                            <h3 style={{fontSize: "4rem"}}>В вашей корзине пока ничего нет</h3>
                            <span 
                                className="mt-3" 
                                style={{fontSize: "1.5rem"}}
                            >
                                Посмотрите товары в нашем каталоге или воспользуйтесь поиском
                            </span>
                            <div className="d-inline-flex justify-content-between align-items-baseline w-25 mt-5">
                                <Button 
                                    onClick={() => {
                                        product.setCategoriesToDisplay([]);
                                        navigate(SHOP_ROUTE);
                                    }}
                                    style={{border: "none", borderRadius: 0, background: PRIMARY_COLOR, padding: "10px 20px", fontSize: "1.25rem", fontWeight: "bold"}}
                                >
                                    В каталог
                                </Button>
                                <Link to="/" style={{fontSize: "1.25rem", fontWeight: "bold", textDecoration: "none"}}>На главную</Link>
                            </div>
                        </div>
                    :
                    <>
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
                        <div style={{display: 'grid', gridTemplateColumns: '3fr 1fr'}}>
                            <CartList cartPage={true} />
                            <Card
                                style={{width: "100%", border: "none", borderRadius: 0, padding: 10}}
                            >
                                <Button 
                                    disabled={cart.cartItems.length > 0 ? false : true} 
                                    onClick={() => navigate(ORDERING_ROUTE)} 
                                    className="mb-4"
                                    style={{fontWeight: "bold", fontSize: "1.2rem", padding: 20, border: "none", borderRadius: 0, background: PRIMARY_COLOR}}
                                >
                                    Перейти к оформлению
                                </Button>
                                <Total itemsCount={itemsCount} />
                            </Card>
                        </div>
                    </>
                }
        </Container>
    );
});

export default Cart;