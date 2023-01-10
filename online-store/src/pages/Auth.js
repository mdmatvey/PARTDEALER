import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Container, Form, Card, Button, Row } from 'react-bootstrap';
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../utils/routeConsts';
import { login, registration } from '../components/http/userAPI';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
        
            if (isLogin) {
                data = await login(email, password);

            } else {
                data = await registration(email, password);
            }

            user.setUser(data);
            user.setIsAuth(true);
            navigate(MAIN_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }
    }  

    return (
        <Container 
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 56}}
        >
            <Card style={{width:600}} className="p-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control  
                        className="mt-3"
                        placeholder="Введите Ваш email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите Ваш пароль"
                        value={password}
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ? 
                            <div style={{width: "auto"}}>
                                Еще нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            </div>
                            :
                            <div style={{width: "auto"}}>
                                Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Авторизируйтесь!</NavLink>
                            </div>
                        }
                        <Button
                            style={{width: "auto"}}
                            variant={"outline-success"}
                            onClick={click}
                        >
                            {isLogin ? "Войти" : "Зарегистрироваться"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;