import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../utils/uiConsts'
import { Link } from 'react-router-dom'
import BootstrapReStyles from '../styles/BootstrapReStyles.css'

const Footer = () => {
  return (
        <footer
            style={{ width: '100%', backgroundColor: SECONDARY_COLOR, color: '#fff' }}
            className="pt-4"
        >
            <div className="container-fluid text-center text-md-left">
                <Row>
                    <Col className="col-md-2 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Ассортимент</h5>
                        <ul className="list-unstyled">
                            <li><Link to="">Акции</Link></li>
                            <li><Link to="/categories">Категории</Link></li>
                            <li><Link to="/brands">Бренды</Link></li>
                        </ul>
                    </Col>
                    <Col className="col-md-2 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Сервис</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/payment">Оплата</Link></li>
                            <li><Link to="/delivery">Доставка</Link></li>
                            <li><Link to="">Возврат</Link></li>
                        </ul>
                    </Col>
                    <Col className="col-md-2 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Клиентам</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/termsofuse">Пользовательское соглашение</Link></li>
                            <li><Link to="/confidentiality">Конфиденциальность</Link></li>
                        </ul>
                    </Col>
                    <Col className="col-md-6 mt-md-0 mt-3">
                       <Row>
                            <h5 className="text-uppercase">Company name</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                       </Row>
                       <Row className="d-flex justify-content-center">
                            <img style={{ width: 300 }} src="https://snipboard.io/loJ7yk.jpg" alt="Платежные системы" />
                       </Row>
                    </Col>
                </Row>
            </div>
            <div className="footer-copyright text-center py-3">&copy; {new Date().getFullYear()} Copyright:
                <Link to="https://mdbootstrap.com/" style={{ color: PRIMARY_COLOR, textDecoration: 'none' }}> mockdomen.com</Link>
            </div>
        </footer>
  )
}

export default Footer
