import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { PRIMARY_COLOR } from '../utils/uiConsts'
import { TempStyles } from '../styles/TempStyles.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
        <footer
            style={{ width: '100%', backgroundColor: PRIMARY_COLOR }}
            className="pt-4"
        >
            <div className="container-fluid text-center text-md-left">
                <Row>
                    <hr className="clearfix w-100 d-md-none pb-0"/>
                    <Col className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Ассортимент</h5>
                        <ul className="list-unstyled">
                            <li><Link to="">Акции</Link></li>
                            <li><Link to="/categories">Категории</Link></li>
                            <li><Link to="/brands">Бренды</Link></li>
                        </ul>
                    </Col>
                    <Col className="col-md-3 mb-md-0 mb-3">
                        <h5 className="text-uppercase">Клиентам</h5>
                        <ul className="list-unstyled">
                            <li><Link to="">Оплата</Link></li>
                            <li><Link to="">Доставка</Link></li>
                            <li><Link to="">Возврат</Link></li>
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
                <Link to="https://mdbootstrap.com/"> mockdomen.com</Link>
            </div>
        </footer>
  )
}

export default Footer
