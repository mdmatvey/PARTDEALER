import React, { useContext } from 'react'
import { Button, Container, FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Context } from '..'
import { MAINBUTTON_STYLE } from '../utils/uiConsts'
import EventStyles from '../styles/EventStyles.css'

const Comments = ({ product }) => {
  const { user } = useContext(Context)

  return (
        <Container>
            {
                user.isAuth
                  ? <>
                        <h3 className="mt-4 mb-4" style={{ textDecoration: 'underline', textDecorationColor: '#00CCCC', textDecorationThickness: 5 }}><strong>Отзывы</strong></h3>
                        <div className="d-flex align-items-start">
                            <FloatingLabel label="Ваш отзыв" style={{ width: '100%' }}>
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <Button className="ms-4 main-button" style={MAINBUTTON_STYLE}>Отправить</Button>
                        </div>
                        Отправляя отзыв, вы соглашаетесь с <Link to="/confidentiality" style={{ cursor: 'pointer' }}>политикой конфиденциальности</Link>
                    </>
                  : null
            }
            { product.reviews ? <ul><li>reviews list</li></ul> : <div style={{ fontSize: '1.5rem' }}>Оставьте отзыв первым</div> }
        </Container>
  )
}

export default Comments
