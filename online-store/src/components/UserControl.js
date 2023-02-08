import React from 'react'
import { Form } from 'react-bootstrap'

const UserControl = ({ user }) => {
  return (
        <Form className="p-4">
            <h3>Контакты</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Телефон</Form.Label>
                <Form.Control type="email" placeholder="Введите ваш телефон" style={{ color: '#000' }} value={user.phone || null} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Адрес</Form.Label>
                <Form.Control type="email" placeholder="Введите ваш адрес" style={{ color: '#000' }} value={user.address || null} />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Label>Почта</Form.Label>
                <Form.Control type="email" placeholder="Введите ваш email" style={{ color: '#000' }} value={user.email || null} />
                <Form.Text className="text-muted">
                    Мы не разглашаем данные наших клиентов.
                </Form.Text>
            </Form.Group>
            <h3>Пароль</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Введите пароль" style={{ color: '#000' }} value={Array(user.password.length).fill('*').join('') || null} />
                <Form.Text className="text-muted">
                    Сложный пароль значительно снижает вероятность взлома аккаунта.
                </Form.Text>
            </Form.Group>
        </Form>
  )
}

export default UserControl
