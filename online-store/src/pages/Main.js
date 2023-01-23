import React from 'react';
import { Carousel, Col, Container, Row, Image, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES_ROUTE, BRANDS_ROUTE } from "../utils/routeConsts";
import MainStyles from '../styles/MainStyles.css';

const Shop = () => {
    const carouselInterval = 3000;
    const navigate = useNavigate();
    
    return (
        <Container>
            <Row className="d-flex mt-2">
                <Col md={5}>
                    <h1>About</h1>
                    <h2>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. 
                    </h2>
                </Col>
                <Col md={7}>
                    <Carousel>
                        <Carousel.Item interval={carouselInterval}>
                            <img
                                className="d-block w-100"
                                src="https://www.bmw-egypt.com/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-03.jpg"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={carouselInterval}>
                            <img
                                className="d-block w-100"
                                src="https://www.bmw.ru/content/dam/bmw/common/all-models/m-series/m2-coupe/2022/Highlights/bmw-m-series-m2-coupe-gallery-image-impressions-01_890.jpg"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={carouselInterval}>
                            <img
                                className="d-block w-100"
                                src="https://www.bmw-m.com/content/dam/bmw/marketBMW_M/common/all-models/m-automobile/m2coupe/bmw-m2-coupe-mg-01.png"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row 
                style={{textAlign: "center"}}
                className="mt-5 mb-5"
            >
                <Col>
                    <Card 
                        className="border-0"
                        style={{cursor: "pointer"}}                 
                        onClick={() => navigate(CATEGORIES_ROUTE)}
                    > 
                        <Image
                            style={{width: "100%"}}
                            src="https://snipboard.io/YiIAy9.jpg"
                        />
                        <div class="image-overlay">
                            <div class="image-title" unselectable="on">К каталогам категорий</div> 
                        </div>
                    </Card>
                </Col>
                <Col>
                    <Card 
                        className="border-0"
                        style={{cursor: "pointer"}}
                        onClick={() => navigate(BRANDS_ROUTE)}
                    >
                        <Image 
                            style={{width: "100%"}}
                            src="https://snipboard.io/YiIAy9.jpg"
                        />
                        <div class="image-overlay">
                            <div class="image-title" unselectable="on">К каталогам брендов</div> 
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;