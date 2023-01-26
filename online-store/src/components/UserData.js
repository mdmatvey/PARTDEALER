import React from "react";
import { Form } from "react-bootstrap";

const UserData = () => {
    
    return (
        <Form className="p-4">
            <h3>Контакты</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Телефон</Form.Label>
                <Form.Control type="email" placeholder="Введите ваш телефон" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Адрес</Form.Label>
                <Form.Control type="email" placeholder="Введите ваш адрес" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Почта</Form.Label>
                <Form.Control type="email" placeholder="Введите ваш email" />
                <Form.Text className="text-muted">
                    Мы не разглашаем данные наших клиентов.
                </Form.Text>
            </Form.Group>
            <h3>Пароль</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Введите пароль" />
                <Form.Text className="text-muted">
                    Сложный пароль значительно снижает вероятность взлома аккаунта.
                </Form.Text>
            </Form.Group>
        </Form>
    );
};

export default UserData;